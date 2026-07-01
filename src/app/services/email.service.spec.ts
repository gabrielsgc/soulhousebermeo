import { TestBed } from '@angular/core/testing';
import { EmailService, ContactFormData } from './email.service';
import { environment } from '../../environments/environment';

const VALID_DATA: ContactFormData = {
  nombre: 'Ane Zubikarai',
  email: 'ane@example.com',
  telefono: '+34 600 123 456',
  personas: '2',
  fecha_llegada: '2027-07-10',
  fecha_salida: '2027-07-15',
  mensaje: 'Buenos días, quería consultar disponibilidad.',
};

function mockFetch(response: Partial<Response> & { jsonBody?: unknown }): jasmine.Spy {
  const fetchResponse = {
    ok: response.ok ?? true,
    json: async () => response.jsonBody ?? {},
  } as unknown as Response;
  return spyOn(window, 'fetch').and.resolveTo(fetchResponse);
}

describe('EmailService', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [EmailService] });
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('init', () => {
    it('should not throw', () => {
      expect(() => service.init()).not.toThrow();
    });
  });

  describe('validateAndSend', () => {
    it('should reject when nombre contains script injection', async () => {
      const malicious: ContactFormData = { ...VALID_DATA, nombre: '<script>alert(1)</script>' };
      await expectAsync(service.validateAndSend(malicious))
        .toBeRejectedWithError('Contenido no permitido detectado.');
    });

    it('should reject when mensaje contains javascript: URI', async () => {
      const malicious: ContactFormData = { ...VALID_DATA, mensaje: 'javascript:alert(1)' };
      await expectAsync(service.validateAndSend(malicious))
        .toBeRejectedWithError('Contenido no permitido detectado.');
    });

    it('should not call the API when validation fails', async () => {
      const fetchSpy = mockFetch({ ok: true });
      const malicious: ContactFormData = { ...VALID_DATA, nombre: '<script>x</script>' };
      await expectAsync(service.validateAndSend(malicious)).toBeRejected();
      expect(fetchSpy).not.toHaveBeenCalled();
    });

    it('should POST valid data as JSON to the contact API', async () => {
      const fetchSpy = mockFetch({ ok: true });
      await expectAsync(service.validateAndSend(VALID_DATA)).toBeResolved();

      expect(fetchSpy).toHaveBeenCalledTimes(1);
      const [url, options] = fetchSpy.calls.mostRecent().args as [string, RequestInit];
      expect(url).toBe(environment.contactApiUrl);
      expect(options.method).toBe('POST');
      expect((options.headers as Record<string, string>)['Content-Type']).toBe('application/json');
      expect(JSON.parse(options.body as string)).toEqual(jasmine.objectContaining(VALID_DATA));
    });

    it('should reject with the server error message on a non-ok response', async () => {
      mockFetch({ ok: false, jsonBody: { error: 'Datos inválidos' } });
      await expectAsync(service.validateAndSend(VALID_DATA))
        .toBeRejectedWithError('Datos inválidos');
    });

    it('should reject with a fallback message when the error body has no message', async () => {
      mockFetch({ ok: false, jsonBody: {} });
      await expectAsync(service.validateAndSend(VALID_DATA))
        .toBeRejectedWithError('Error al enviar el mensaje');
    });
  });
});

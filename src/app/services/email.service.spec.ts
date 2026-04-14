import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { EmailService, ContactFormData } from './email.service';

const VALID_DATA: ContactFormData = {
  nombre: 'Ane Zubikarai',
  email: 'ane@example.com',
  telefono: '+34 600 123 456',
  personas: '2',
  fecha_llegada: '2027-07-10',
  fecha_salida: '2027-07-15',
  mensaje: 'Buenos días, quería consultar disponibilidad.',
};

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
    it('should not throw when emailjs is not loaded', () => {
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

    it('should resolve in dev mode (no real emailjs key)', fakeAsync(() => {
      let resolved = false;
      service.validateAndSend(VALID_DATA).then(() => { resolved = true; });
      tick(1200);
      expect(resolved).toBeTrue();
    }));
  });
});

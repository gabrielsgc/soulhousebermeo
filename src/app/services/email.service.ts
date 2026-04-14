import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

export interface ContactFormData {
  nombre: string;
  email: string;
  telefono?: string;
  personas: string;
  fecha_llegada: string;
  fecha_salida: string;
  mensaje?: string;
}

declare const emailjs: {
  init: (publicKey: string) => void;
  send: (serviceId: string, templateId: string, params: Record<string, string>) => Promise<{ status: number; text: string }>;
};

@Injectable({ providedIn: 'root' })
export class EmailService {

  private initialized = false;

  init(): void {
    if (this.initialized || typeof emailjs === 'undefined') return;
    emailjs.init(environment.emailjsPublicKey);
    this.initialized = true;
  }

  private sanitize(str: string): string {
    return str.replace(/[<>"']/g, (c) => ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] ?? c));
  }

  private hasScript(str: string): boolean {
    return /<[^>]*script|javascript:/i.test(str);
  }

  validateAndSend(data: ContactFormData): Promise<void> {
    for (const [, val] of Object.entries(data)) {
      if (typeof val === 'string' && this.hasScript(val)) {
        return Promise.reject(new Error('Contenido no permitido detectado.'));
      }
    }

    if (typeof emailjs === 'undefined' || !environment.emailjsPublicKey || environment.emailjsPublicKey === 'TU_PUBLIC_KEY') {
      // Dev mode simulation
      return new Promise((resolve) => setTimeout(resolve, 1200));
    }

    return emailjs.send(
      environment.emailjsServiceId,
      environment.emailjsTemplateId,
      {
        nombre:        this.sanitize(data.nombre),
        email:         this.sanitize(data.email),
        telefono:      this.sanitize(data.telefono ?? '') || 'No indicado',
        personas:      data.personas,
        fecha_llegada: data.fecha_llegada,
        fecha_salida:  data.fecha_salida,
        mensaje:       this.sanitize(data.mensaje ?? '') || 'Sin mensaje adicional',
      }
    ).then(() => undefined);
  }
}

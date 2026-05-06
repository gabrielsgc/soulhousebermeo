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

@Injectable({ providedIn: 'root' })
export class EmailService {

  init(): void {
    // No client-side initialization needed — emails are sent server-side
  }

  private hasScript(str: string): boolean {
    return /<[^>]*script|javascript:/i.test(str);
  }

  async validateAndSend(data: ContactFormData): Promise<void> {
    for (const [, val] of Object.entries(data)) {
      if (typeof val === 'string' && this.hasScript(val)) {
        throw new Error('Contenido no permitido detectado.');
      }
    }

    const response = await fetch(environment.contactApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error((errorData as { error?: string }).error || 'Error al enviar el mensaje');
    }
  }
}

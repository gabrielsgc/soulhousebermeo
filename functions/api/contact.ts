interface Env {
  RESEND_API_KEY: string;
  CONTACT_EMAIL?: string;
}

interface ContactPayload {
  nombre: string;
  email: string;
  telefono?: string;
  personas: string;
  fecha_llegada: string;
  fecha_salida: string;
  mensaje?: string;
}

function sanitize(str: string): string {
  return str.replace(/[<>"']/g, (c) =>
    ({ '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] ?? c)
  );
}

function hasScript(str: string): boolean {
  return /<[^>]*script|javascript:/i.test(str);
}

function validatePayload(data: unknown): ContactPayload | null {
  if (!data || typeof data !== 'object') return null;
  const d = data as Record<string, unknown>;

  const required = ['nombre', 'email', 'personas', 'fecha_llegada', 'fecha_salida'];
  for (const field of required) {
    if (!d[field] || typeof d[field] !== 'string' || (d[field] as string).trim() === '') {
      return null;
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(d.email as string)) return null;

  // Check for XSS in all string fields
  for (const [, val] of Object.entries(d)) {
    if (typeof val === 'string' && hasScript(val)) return null;
  }

  return {
    nombre: (d.nombre as string).trim(),
    email: (d.email as string).trim(),
    telefono: d.telefono ? (d.telefono as string).trim() : undefined,
    personas: (d.personas as string).trim(),
    fecha_llegada: (d.fecha_llegada as string).trim(),
    fecha_salida: (d.fecha_salida as string).trim(),
    mensaje: d.mensaje ? (d.mensaje as string).trim() : undefined,
  };
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://www.soulhousebermeo.com',
  };

  try {
    const body = await context.request.json();
    const data = validatePayload(body);

    if (!data) {
      return new Response(JSON.stringify({ error: 'Datos inválidos' }), {
        status: 400,
        headers,
      });
    }

    const toEmail = context.env.CONTACT_EMAIL || 'info@soulhousebermeo.com';
    const apiKey = context.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY not configured');
      return new Response(JSON.stringify({ error: 'Error de configuración del servidor' }), {
        status: 500,
        headers,
      });
    }

    const htmlBody = `
      <h2>Nueva consulta de reserva - Soul House Bermeo</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px;">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nombre</td><td style="padding:8px;border:1px solid #ddd;">${sanitize(data.nombre)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${sanitize(data.email)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Teléfono</td><td style="padding:8px;border:1px solid #ddd;">${sanitize(data.telefono || 'No indicado')}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Personas</td><td style="padding:8px;border:1px solid #ddd;">${sanitize(data.personas)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Llegada</td><td style="padding:8px;border:1px solid #ddd;">${sanitize(data.fecha_llegada)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Salida</td><td style="padding:8px;border:1px solid #ddd;">${sanitize(data.fecha_salida)}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Mensaje</td><td style="padding:8px;border:1px solid #ddd;">${sanitize(data.mensaje || 'Sin mensaje adicional')}</td></tr>
      </table>
      <p style="margin-top:16px;color:#666;font-size:12px;">Enviado desde el formulario de contacto de soulhousebermeo.com</p>
    `;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Soul House Bermeo <noreply@soulhousebermeo.com>',
        to: [toEmail],
        reply_to: data.email,
        subject: `Nueva reserva: ${data.nombre} (${data.fecha_llegada} → ${data.fecha_salida})`,
        html: htmlBody,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      return new Response(JSON.stringify({ error: 'Error al enviar el mensaje' }), {
        status: 502,
        headers,
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers,
    });
  } catch (err) {
    console.error('Contact function error:', err);
    return new Response(JSON.stringify({ error: 'Error interno del servidor' }), {
      status: 500,
      headers,
    });
  }
};

// Handle CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://www.soulhousebermeo.com',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
};

/**
 * GET /api/availability
 *
 * Fetches the Booking.com iCal feed (BOOKING_ICAL_URL env var),
 * parses blocked date ranges, and returns JSON.
 * Responses are cached at the Cloudflare edge for 1 hour (Cache API).
 *
 * Response shape:
 *   { blocked: Array<{ start: string; end: string }> }
 *   start/end are ISO date strings "YYYY-MM-DD" (inclusive start, exclusive end — iCal convention).
 */

interface Env {
  BOOKING_ICAL_URL: string;
}

interface BlockedRange {
  start: string; // YYYY-MM-DD
  end: string;   // YYYY-MM-DD (exclusive — checkout day)
}

const CACHE_TTL_SECONDS = 3600; // 1 hour

function parseICalDate(raw: string): string | null {
  // Handles: 20260617 or 20260617T160000Z
  const cleaned = raw.split('T')[0].replace(/\D/g, '');
  if (cleaned.length !== 8) return null;
  return `${cleaned.slice(0, 4)}-${cleaned.slice(4, 6)}-${cleaned.slice(6, 8)}`;
}

function parseICalBlocked(ical: string): BlockedRange[] {
  const blocked: BlockedRange[] = [];
  const events = ical.split('BEGIN:VEVENT');

  for (let i = 1; i < events.length; i++) {
    const event = events[i];
    const startMatch = event.match(/DTSTART(?:;[^:]*)?:([^\r\n]+)/);
    const endMatch = event.match(/DTEND(?:;[^:]*)?:([^\r\n]+)/);
    if (!startMatch || !endMatch) continue;

    const start = parseICalDate(startMatch[1].trim());
    const end = parseICalDate(endMatch[1].trim());
    if (start && end && end > start) {
      blocked.push({ start, end });
    }
  }

  return blocked;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };

  const icalUrl = context.env.BOOKING_ICAL_URL;
  if (!icalUrl) {
    return new Response(JSON.stringify({ blocked: [] }), {
      status: 200,
      headers: { ...corsHeaders, 'X-Cache': 'MISS', 'X-Note': 'BOOKING_ICAL_URL not configured' },
    });
  }

  // Try Cloudflare Cache API first
  const cache = caches.default;
  const cacheKey = new Request(`https://soulhousebermeo.com/__cache/availability`);
  const cached = await cache.match(cacheKey);
  if (cached) {
    const body = await cached.text();
    return new Response(body, {
      status: 200,
      headers: { ...corsHeaders, 'X-Cache': 'HIT' },
    });
  }

  // Fetch iCal from Booking.com
  let icalText: string;
  try {
    const response = await fetch(icalUrl, {
      headers: { 'User-Agent': 'SoulHouseBermeo/1.0' },
      // Cloudflare Workers fetch timeout ~30s by default
    });
    if (!response.ok) {
      throw new Error(`iCal fetch failed: ${response.status}`);
    }
    icalText = await response.text();
  } catch (err) {
    console.error('Availability fetch error:', err);
    return new Response(JSON.stringify({ blocked: [], error: 'No se pudo obtener el calendario' }), {
      status: 502,
      headers: corsHeaders,
    });
  }

  const blocked = parseICalBlocked(icalText);
  const payload = JSON.stringify({ blocked });

  // Store in cache with TTL
  const responseToCache = new Response(payload, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': `public, max-age=${CACHE_TTL_SECONDS}`,
    },
  });
  context.waitUntil(cache.put(cacheKey, responseToCache));

  return new Response(payload, {
    status: 200,
    headers: { ...corsHeaders, 'X-Cache': 'MISS' },
  });
};

// CORS preflight
export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Max-Age': '86400',
    },
  });
};

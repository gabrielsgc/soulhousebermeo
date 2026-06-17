import { Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

interface BlockedRange {
  start: string; // YYYY-MM-DD
  end: string;   // YYYY-MM-DD (exclusive)
}

interface AvailabilityResponse {
  blocked: BlockedRange[];
}

@Injectable({ providedIn: 'root' })
export class AvailabilityService {
  private readonly _blocked = signal<BlockedRange[]>([]);
  readonly blocked = this._blocked.asReadonly();

  /** Set of blocked date strings "YYYY-MM-DD" for O(1) lookup */
  readonly blockedDates = computed(() => {
    const set = new Set<string>();
    for (const range of this._blocked()) {
      const current = new Date(range.start + 'T00:00:00');
      const end = new Date(range.end + 'T00:00:00');
      while (current < end) {
        set.add(current.toISOString().split('T')[0]);
        current.setDate(current.getDate() + 1);
      }
    }
    return set;
  });

  constructor(private http: HttpClient) {
    this.load();
  }

  load(): void {
    this.http
      .get<AvailabilityResponse>('/api/availability')
      .pipe(catchError(() => of({ blocked: [] })))
      .subscribe(res => this._blocked.set(res.blocked ?? []));
  }

  /** Returns true if ANY day in [checkin, checkout) is blocked */
  isRangeBlocked(checkin: string, checkout: string): boolean {
    if (!checkin || !checkout) return false;
    const dates = this.blockedDates();
    const current = new Date(checkin + 'T00:00:00');
    const end = new Date(checkout + 'T00:00:00');
    while (current < end) {
      if (dates.has(current.toISOString().split('T')[0])) return true;
      current.setDate(current.getDate() + 1);
    }
    return false;
  }

  /** Returns the min checkout date after a given checkin (skipping blocked nights) */
  minCheckout(checkin: string): string {
    if (!checkin) return checkin;
    const next = new Date(checkin + 'T00:00:00');
    next.setDate(next.getDate() + 1);
    return next.toISOString().split('T')[0];
  }
}

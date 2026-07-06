import { TestBed } from '@angular/core/testing';
import { AnalyticsService } from './analytics.service';
import { CookieConsentService } from './cookie-consent.service';
import { environment } from '../../environments/environment';

describe('AnalyticsService', () => {
  beforeEach(() => {
    Object.assign(environment, {
      googleAnalyticsMeasurementId: 'G-TEST-1234',
      gtmContainerId: '',
    });

    const gtagSpy = jasmine.createSpy('gtag');
    Object.defineProperty(window, 'gtag', {
      value: gtagSpy,
      writable: true,
      configurable: true,
    });

    TestBed.configureTestingModule({});
  });

  it('should send a page_view after analytics consent is granted', () => {
    const cookieConsent = TestBed.inject(CookieConsentService);
    cookieConsent.acceptAll();

    TestBed.inject(AnalyticsService);

    const gtagSpy = window.gtag as jasmine.Spy;
    const pageViewCalls = gtagSpy.calls.allArgs().filter(
      ([method, eventName]) => method === 'event' && eventName === 'page_view'
    );

    expect(pageViewCalls.length).toBeGreaterThan(0);
  });
});

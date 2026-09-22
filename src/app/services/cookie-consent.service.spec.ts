import { TestBed } from '@angular/core/testing';
import { CookieConsentService } from './cookie-consent.service';

describe('CookieConsentService', () => {
  let service: CookieConsentService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieConsentService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should reset the panel state when consent is cleared', () => {
    service.showPanel.set(true);
    service.resetConsent();

    expect(service.showPanel()).toBeFalse();
    expect(service.showBanner()).toBeTrue();
    expect(service.consent()).toBeNull();
  });

  it('should close the panel when consent is accepted', () => {
    service.showPanel.set(true);
    service.acceptAll();

    expect(service.showPanel()).toBeFalse();
    expect(service.consent()?.preferences).toBeTrue();
    expect(service.showBanner()).toBeFalse();
  });
});

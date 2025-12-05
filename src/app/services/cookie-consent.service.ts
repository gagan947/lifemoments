import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {

  private consentKey = 'cookie_consent';

  hasUserResponded(): boolean {
    return !!localStorage.getItem(this.consentKey);
  }

  accept() {
    localStorage.setItem(this.consentKey, 'accepted');
  }

  reject() {
    localStorage.setItem(this.consentKey, 'rejected');
  }

  getConsentStatus(): 'accepted' | 'rejected' | null {
    return localStorage.getItem(this.consentKey) as any;
  }
}

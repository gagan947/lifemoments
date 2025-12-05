import { Component } from '@angular/core';
import { CookieConsentService } from '../services/cookie-consent.service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.css']
})
export class CookieConsentComponent {

  showBanner = false;

  constructor(private cookieService: CookieConsentService) { }

  ngOnInit() {
    if (!this.cookieService.hasUserResponded()) {
      this.showBanner = true;
    }
  }

  accept() {
    this.cookieService.accept();
    this.showBanner = false;
    this.loadAnalytics();
  }

  reject() {
    this.cookieService.reject();
    this.showBanner = false;
  }

  // Load scripts only if user accepts
  loadAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_ID';
    script.async = true;
    document.body.appendChild(script);
  }
}

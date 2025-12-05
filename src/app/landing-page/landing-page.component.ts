import { Component } from '@angular/core';
import { CookieConsentService } from '../services/cookie-consent.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  constructor(private cookieService: CookieConsentService) { }

  ngOnInit() {
    if (this.cookieService.getConsentStatus() === 'accepted') {
      this.loadAnalytics();
    }
  }

  loadAnalytics() {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_ID';
    script.async = true;
    document.body.appendChild(script);
  }
}

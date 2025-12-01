import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyTreeComponent } from './family-tree/family-tree.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { UrlLinkComponent } from './url-link/url-link.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnapshotComponent } from './snapshot/snapshot.component';
import { GuestUserComponent } from './guest-user/guest-user.component';
import { ReverseSnapshotComponent } from './reverse-snapshot/reverse-snapshot.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { FormsModule } from '@angular/forms';
import { DeeplinkComponent } from './deeplink/deeplink.component';
import { NoRedirectComponent } from './no-redirect/no-redirect.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
@NgModule({
  declarations: [
    AppComponent,
    FamilyTreeComponent,
    UrlLinkComponent,
    SnapshotComponent,
    GuestUserComponent,
    ReverseSnapshotComponent,
    DeleteAccountComponent,
    DeeplinkComponent,
    NoRedirectComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

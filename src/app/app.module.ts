
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { IonicStorageModule } from '@ionic/storage';
import {  IonicRouteStrategy } from '@ionic/angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';
import { TimeOutInterceptor } from './interceptors/timeout';
import { RedirectInterceptor } from './interceptors/redirect';
import { JWTInterceptor } from './interceptors/jwt';
import { CredentialsInterceptor } from './interceptors/credentials';

export const httpTimeOutInterceptorProviders = {
	provide: HTTP_INTERCEPTORS,
	useClass: TimeOutInterceptor,
	multi: true
};

export const httpCredentialsInterceptorProviders = {
	provide: HTTP_INTERCEPTORS,
	useClass: CredentialsInterceptor,
	multi: true
};

export const httpRedirectInterceptorProviders = {
	provide: HTTP_INTERCEPTORS,
	useClass: RedirectInterceptor,
	multi: true
};
export const httpAuthInterceptorProviders = { provide: HTTP_INTERCEPTORS, useClass: JWTInterceptor, multi: true };

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
		httpCredentialsInterceptorProviders,
		httpAuthInterceptorProviders,
		httpRedirectInterceptorProviders,],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GoogleLoginProvider } from 'angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { modules } from './modules';
import { MapComponent } from './modules/pharmacies/components/map/map.component';

const googleLoginOptions = {
  scope: 'profile email'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...modules,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: NG_APP_ENVS.gaMapsApiKey,
      libraries: ['places']
    }),
    SocialLoginModule
  ],
  providers: [
    HttpClient,
    MapComponent,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [{
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(NG_APP_ENVS.googleIdKey, googleLoginOptions)
        }]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [MapComponent]
})
export class AppModule { }

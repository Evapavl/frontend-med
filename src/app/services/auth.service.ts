import { Injectable } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private authService: SocialAuthService) { }

  async googlesignOut(): Promise<void> {
    await this.authService.signOut(true);
    return;
  }

  signInWithGoogle(): Promise<SocialUser> {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  getUser(): void {
    this.authService.authState.subscribe((user) => user);
  }

}

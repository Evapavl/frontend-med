import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  public user?: SocialUser;

  constructor(private authService: SocialAuthService,
              private authOauthService: AuthService) { }

  async signInWithGoogle(): Promise<void> {
    await this.authOauthService.signInWithGoogle()
      .then((user) => {
        this.user = user;
        console.log(this.user);
      });
  }

  async signOut(): Promise<void> {
    this.authService.authState.subscribe((user) => {
      this.user =  user;
    });
    if (this.user) {
      await this.authOauthService.googlesignOut();
    }
  }
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';

import { Clinic } from 'src/app/models/clinic.model';
import { Lab } from 'src/app/models/lab.model';
import { Pharmacy } from 'src/app/models/pharmacy.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() data!: Pharmacy | Lab | Clinic;
  @Input() routeData!: string;
  @Output() clickedCloseBtn = new EventEmitter<boolean>();
  user?: SocialUser;
  id?: number;

  constructor(private authOauthService: AuthService,
              private authService: SocialAuthService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  closeDetails(): void {
    this.clickedCloseBtn.emit(true);
  }

  public getIdStar(newId: number): void {
    this.id = newId;
  }

  getUser(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
    });
  }

}


import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Pharmacy } from 'src/app/models/pharmacy.model';
import { Clinic } from '../../models/clinic.model';
import { Lab } from '../../models/lab.model';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.css']
})
export class PharmacyDetailsComponent implements OnInit {

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

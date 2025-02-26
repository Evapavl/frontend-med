import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { ClinicsService } from '../../services/clinics.service';
import { Clinic } from '../../models/clinic.model';

@Component({
  selector: 'app-clinic-more-info',
  templateUrl: './clinic-more-info.component.html',
  styleUrls: ['./clinic-more-info.component.css']
})
export class ClinicMoreInfoComponent implements OnInit, OnDestroy {

  clinic!: Clinic;

  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private clinicsService: ClinicsService
  ) {}

  ngOnInit(): void {
    this.getClinicByParams(this.route.snapshot.params.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getClinicByParams(id: string): void {
    this.subscription = this.clinicsService.getClinicsById(id).subscribe((data: Clinic) => {
      this.clinic = data;
    });
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Pharmacy } from 'src/app/models/pharmacy.model';
import { PharmacyService } from '../../services/pharmacies.service';

@Component({
  selector: 'app-pharmacy-more-info',
  templateUrl: './pharmacy-more-info.component.html',
  styleUrls: ['./pharmacy-more-info.component.css']
})
export class PharmacyMoreInfoComponent implements OnInit, OnDestroy {

  pharmacy!: Pharmacy;

  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private pharmacyService: PharmacyService
  ) {}

  ngOnInit(): void {
    this.getPharmacyByParams(this.route.snapshot.params.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getPharmacyByParams(pharmacyId: string): void {
    this.subscription = this.pharmacyService.getPharmacyById(pharmacyId).subscribe((data: Pharmacy) => {
      this.pharmacy = data;
    });
  }
}

import { Component } from '@angular/core';
import { Pharmacy } from 'src/app/models/pharmacy.model';
import { PharmacyService } from 'src/app/services/pharmacies.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  public chosenPharmacy!: Pharmacy;

  public pharmaciesData?: Pharmacy[];

  public isDisplay = false;

  constructor(private pharmacyService: PharmacyService) {
    this.pharmaciesData = this.getPharmacies();
  }

  markerClicked(pharmacy: Pharmacy): void {
    this.isDisplay = (this.isDisplay === false) ? true : false;
    this.chosenPharmacy = pharmacy;
  }

  public getPharmacies(): Pharmacy[] {
    return this.pharmacyService.getPharmacies();
  }
}

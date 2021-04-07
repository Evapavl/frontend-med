import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/models/pharmacy.model';
import { PharmacyService } from 'src/app/services/pharmacies.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public chosenPharmacy!: Pharmacy;

  public pharmaciesData?: Pharmacy[];

  public isDisplay = false;

  constructor(private pharmacyService: PharmacyService) {}

  ngOnInit(): void {
    this.getPharmacies();
  }

  public getPharmacies(): void {
    this.pharmacyService.getPharmacies().subscribe((data: Pharmacy[]) => {
      this.pharmaciesData = data;
    });
  }

  markerClicked(pharmacy: Pharmacy): void {
    this.isDisplay = (this.isDisplay === false) ? true : false;
    this.chosenPharmacy = pharmacy;
  }
}

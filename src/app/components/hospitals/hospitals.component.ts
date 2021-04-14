import { Component } from '@angular/core';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { Hospital } from '../../models/hospitals.model';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent {

  public hospitalsData!: Hospital[];

  public chosenHospital!: Hospital;

  public isDisplayDetails = false;

  constructor(
    private hospitalsService: HospitalsService
  ) {
    this.getHospitals();
  }

  public getHospitals(): void {
    this.hospitalsService.getHospitals().subscribe((data: Hospital[]) => {
      this.hospitalsData = data;
    });
  }

  markerClicked(hospital: Hospital): void {
    this.isDisplayDetails = true;
    this.chosenHospital = hospital;
  }

  onClickCloseBtn(): void {
    this.isDisplayDetails = false;
  }
}

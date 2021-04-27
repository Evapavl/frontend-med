import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { Hospital } from '../../models/hospitals.model';
import { ModalFilterHospitalsComponent } from '../modal-filter-hospitals/modal-filter-hospitals.component';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent {

  public hospitalsData!: Hospital[];

  public chosenHospital!: Hospital;

  public isDisplayDetails = false;

  dialogValue!: Hospital[];

  constructor(
    private hospitalsService: HospitalsService,
    private dialog: MatDialog
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

  open(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    const dialogRef = this.dialog.open(ModalFilterHospitalsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.hospitalsData = result.data;
      console.log(result.data);
    });
  }
}

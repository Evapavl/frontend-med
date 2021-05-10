import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Hospital } from 'src/app/models/hospitals.model';
import { HospitalsService } from 'src/app/services/hospitals.service';
import { ModalFilterHospitalsComponent } from '../modal-filter-hospitals/modal-filter-hospitals.component';

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.css']
})
export class HospitalsComponent {

  public hospitalsData!: Hospital[];

  public hospitals!: Hospital[];

  public chosenHospital!: Hospital;

  public isDisplayDetails = false;

  public zoom = 14;

  dialogValue!: Hospital[];

  constructor(
    private hospitalsService: HospitalsService,
    private dialog: MatDialog
  ) {
    this.getHospitals();
  }

  public onZoomChange(newZoomValue: number): void {
    this.zoom = newZoomValue;
  }

  public getHospitals(): void {
    this.hospitalsService.getHospitals().subscribe((data: Hospital[]) => {
      this.hospitalsData = data;
      this.hospitals = data;
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
    dialogConfig.data = this.hospitals;
    const dialogRef = this.dialog.open(ModalFilterHospitalsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: { data: Hospital[] }) => {
      this.hospitalsData = result.data;
    });
  }
}

import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PrivateDoctor } from 'src/app/models/private-doctors.model';
import { PrivateDoctorsService } from 'src/app/services/private-doctors-service';
import { ModalFilterPrivateDoctorsComponent } from '../modal-filter-private-doctors/modal-filter-private-doctors.component';

@Component({
  selector: 'app-private-doctors',
  templateUrl: './private-doctors.component.html',
  styleUrls: ['./private-doctors.component.css']
})
export class PrivateDoctorsComponent {

  public privateDoctorsData!: PrivateDoctor[];

  public chosenDoctor!: PrivateDoctor;

  public isDisplayDetails = false;

  constructor(
    private privateDoctorsService: PrivateDoctorsService,
    private dialog: MatDialog
  ) {
    this.getPrivateDoctors();
  }

  public getPrivateDoctors(): void {
    this.privateDoctorsService.getPrivateDoctors().subscribe((data: PrivateDoctor[]) => {
      this.privateDoctorsData = data;
    });
  }

  markerClicked(doctor: PrivateDoctor): void {
    this.isDisplayDetails = true;
    this.chosenDoctor = doctor;
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
    const dialogRef = this.dialog.open(ModalFilterPrivateDoctorsComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      this.privateDoctorsData = result.data;
      console.log(result.data);
    });
  }
}

import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Pharmacy } from 'src/app/models/pharmacy.model';
import { PharmacyService } from 'src/app/services/pharmacies.service';
import { ModalFilterComponent } from '../modal-filter/modal-filter.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  public chosenPharmacy!: Pharmacy;

  public pharmaciesData!: Pharmacy[];

  public pharmacies!: Pharmacy[];

  public isDisplayDetails = false;

  public zoom = 14;

  constructor(
    private pharmacyService: PharmacyService,
    private dialog: MatDialog
  ) {
    this.getPharmacies();
  }

  public onZoomChange(newZoomValue: number): void {
    this.zoom = newZoomValue;
  }

  public getPharmacies(): void {
    this.pharmacyService.getPharmacies().subscribe((data: Pharmacy[]) => {
      this.pharmaciesData = data;
      this.pharmacies = data;
    });
  }

  markerClicked(pharmacy: Pharmacy): void {
    this.isDisplayDetails = true;
    this.chosenPharmacy = pharmacy;
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
    dialogConfig.data = this.pharmacies;
    const dialogRef = this.dialog.open(ModalFilterComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res: { data: Pharmacy[] }) => {
      if (res) {
        this.pharmaciesData = res.data;
      }
    });
  }
}

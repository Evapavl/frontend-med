import { Component } from '@angular/core';
import { Pharmacy } from 'src/app/models/pharmacy.model';
import { PharmacyService } from 'src/app/services/pharmacies.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalFilterComponent } from '../modal-filter/modal-filter.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  public chosenPharmacy!: Pharmacy;

  public pharmaciesData!: Pharmacy[];

  public isDisplay = false;

  constructor(
    private pharmacyService: PharmacyService,
    private dialog: MatDialog
  ) {
    this.getPharmacies();
  }

  public getPharmacies(): void {
    this.pharmacyService.getPharmacies().subscribe((data: Pharmacy[]) => {
      this.pharmaciesData = data;
    });
  }

  markerClicked(pharmacy: Pharmacy): void {
    this.isDisplay = true;
    this.chosenPharmacy = pharmacy;
  }

  onClickCloseBtn(): void {
    this.isDisplay = false;
  }

  open(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    this.dialog.open(ModalFilterComponent, dialogConfig);
  }
}

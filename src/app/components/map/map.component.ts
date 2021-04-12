import { Component, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/models/pharmacy.model';
import { PharmacyService } from 'src/app/services/pharmacies.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalFilterComponent } from '../modal-filter/modal-filter.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public chosenPharmacy!: Pharmacy;

  public pharmaciesData?: Pharmacy[];

  public isDisplay = false;

  constructor(private pharmacyService: PharmacyService,
              private dialog: MatDialog) {
    this.pharmaciesData = this.getPharmacies();
  }

  markerClicked(pharmacy: Pharmacy): void {
    this.isDisplay = (this.isDisplay === false) ? true : false;
    this.chosenPharmacy = pharmacy;
  }

  public getPharmacies(): void {
    this.pharmacyService.getPharmacies().subscribe((data: Pharmacy[]) => {
      this.pharmaciesData = data;
    });
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

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { PharmacyService } from '../../services/pharmacies.service';
import { Pharmacy } from '../../models/pharmacy.model';
import { ModalFilterService } from '../../services/modal-filter.service';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css']
})
export class ModalFilterComponent {

  public pharmaciesData?: Pharmacy[];

  constructor(public dialogRef: MatDialogRef<ModalFilterComponent>,
              private pharmacyService: PharmacyService,
              public modalService: ModalFilterService)
  {
    this.pharmaciesData = this.getPharmacies();
  }

  onClose(): void {
    this.modalService.initializeFormGroup();
    this.dialogRef.close();
  }

  saveData(): void {
    console.log(this.modalService.pharmForm.value);
    this.modalService.updateValue(this.modalService.pharmForm.value);
    this.dialogRef.close();
  }

  public getPharmacies(): Pharmacy[] {
    return this.pharmacyService.getPharmacies();
  }

}

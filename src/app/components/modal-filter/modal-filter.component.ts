import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { PharmacyService } from '../../services/pharmacies.service';
import { Pharmacy } from '../../models/pharmacy.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PharmFormValueModel } from '../../models/pharm-form-value.model';

@Component({
  selector: 'app-modal-filter',
  templateUrl: './modal-filter.component.html',
  styleUrls: ['./modal-filter.component.css']
})
export class ModalFilterComponent {

  pharmForm!: FormGroup;
  public id!: number;

  constructor(
    public dialogRef: MatDialogRef<ModalFilterComponent>,
    private pharmacyService: PharmacyService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public pharmaciesData?: Pharmacy[],
  ) {
    this.pharmForm = formBuilder.group({
      namesPharm: [[]],
      isWork: [false]
    });
  }

  public getIdStar(newId: number): void {
    this.id = newId;
    console.log(this.id);
  }

  initializeFormGroup(): void {
    this.pharmForm.setValue({
      namesPharm: [],
      isWork: false
    });
  }

  updateValue(value: PharmFormValueModel): void {
    this.pharmForm.setValue({
      namesPharm: value.namesPharm,
      isWork: value.isWork
    });
  }

  onClose(): void {
    this.initializeFormGroup();
    this.dialogRef.close({data: this.pharmaciesData});
  }

  saveData(): void {
    this.updateValue(this.pharmForm.value);

    const pharmForm = this.pharmForm.value as PharmFormValueModel;

    const params = this.pharmacyService.getRequestParams(pharmForm.namesPharm, pharmForm.isWork, this.id);
    this.pharmacyService.getFilterPharmacy(params).subscribe((data) => {
      this.dialogRef.close({data});
    });
  }
}

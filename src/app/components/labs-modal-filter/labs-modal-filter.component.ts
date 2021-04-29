import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Lab } from '../../models/lab.model';
import { LabsService } from '../../services/labs.service';
import { LabFormValueModel } from '../../models/lab-form-value.model';

@Component({
  selector: 'app-labs-modal-filter',
  templateUrl: './labs-modal-filter.component.html',
  styleUrls: ['./labs-modal-filter.component.css']
})
export class LabsModalFilterComponent {

  labForm!: FormGroup;
  public id!: number;
  public allTests!: string[];

  constructor(
    public dialogRef: MatDialogRef<LabsModalFilterComponent>,
    private labsService: LabsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public labsData?: Lab[],
  ) {
    this.labForm = formBuilder.group({
      nameLab: [''],
      tests: [[]]
    });
    this.getAllTests();
  }

  public getIdStar(newId: number): void {
    this.id = newId;
  }

  initializeFormGroup(): void {
    this.labForm.setValue({
      nameLab: '',
      tests: []
    });
  }

  updateValue(value: LabFormValueModel): void {
    this.labForm.setValue({
      nameLab: value.nameLab,
      tests: value.tests
    });
  }

  onClose(): void {
    this.initializeFormGroup();
    this.dialogRef.close({data: this.labsData});
  }

  saveData(): void {
    this.updateValue(this.labForm.value);

    const labForm = this.labForm.value as LabFormValueModel;

    const params = this.labsService.getRequestParams(labForm.nameLab, labForm.tests, this.id);
    this.labsService.getFilterLabs(params).subscribe(
      (data) => {
        this.dialogRef.close({data});
      });
  }

  public getAllTests(): void {
    this.labsService.getAllTests().subscribe((data: string[]) => {
      this.allTests = data;
    });
  }

}

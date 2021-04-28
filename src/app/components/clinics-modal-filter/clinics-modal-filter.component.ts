import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ClinicsService } from '../../services/clinics.service';
import { Clinic } from '../../models/clinic.model';
import { ClinicFormValueModel } from '../../models/сlinic-form-value.model';

@Component({
  selector: 'app-clinics-modal-filter',
  templateUrl: './clinics-modal-filter.component.html',
  styleUrls: ['./clinics-modal-filter.component.css']
})
export class ClinicsModalFilterComponent {

  id!: number;
  public allDoctors!: string[];
  clinicForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ClinicsModalFilterComponent>,
    private clinicsService: ClinicsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public clinicsData?: Clinic[]
  ) {
    this.clinicForm = formBuilder.group({
      namesClinic: [''],
      doctors: [[]]
    });
    this.getAllDoctors();
  }

  public getIdStar(newId: number): void {
    this.id = newId;
    console.log(this.id);

  }

  public getAllDoctors(): void {
    this.clinicsService.getAllDoctors().subscribe((data: string[]) => {
      this.allDoctors = data;
    });
  }

  initializeFormGroup(): void {
    this.clinicForm.setValue({
      namesClinic: '',
      doctors: []
    });
  }

  updateValue(value: ClinicFormValueModel): void {
    this.clinicForm.setValue({
      namesClinic: value.namesClinic,
      doctors: value.doctors
    });

  }

  onClose(): void {
    this.initializeFormGroup();
    this.dialogRef.close({data: this.clinicsData});
  }

  saveData(): void {
    this.updateValue(this.clinicForm.value);

    const clinicForm = this.clinicForm.value as ClinicFormValueModel;

    const params = this.clinicsService.getRequestParams(clinicForm.doctors, clinicForm.namesClinic, this.id);
    this.clinicsService.getFilterClinic(params).subscribe(
      (data) => {
        this.dialogRef.close({data});
      });
  }

}

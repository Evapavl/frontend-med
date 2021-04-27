import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { HospitalFormValueModel } from 'src/app/models/hospital-form-value.model';
import { HospitalParamsModel } from 'src/app/models/hospital-param.model';
import { Hospital } from 'src/app/models/hospitals.model';
import { HospitalsService } from 'src/app/services/hospitals.service';

@Component({
  selector: 'app-modal-filter-hospitals',
  templateUrl: './modal-filter-hospitals.component.html',
  styleUrls: ['./modal-filter-hospitals.component.css']
})
export class ModalFilterHospitalsComponent {

  hospitalForm: FormGroup;

  namesHospital!: string;
  namesData!: string[];
  hospitalsFilterData!: Hospital[];

  hospitalsData!: Hospital[];

  constructor(
    public dialogRef: MatDialogRef<ModalFilterHospitalsComponent>,
    private hospitalsService: HospitalsService,
    private formBuilder: FormBuilder
  ) {
    this.hospitalForm = this.formBuilder.group({
      nameHospital: ['', Validators.required],
      typeOfProperty: ['', Validators.required],
      nameOfDepartments: ['', Validators.required]
    });
    this.getHospitals();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  saveData(): void {
    const params = this.getRequestParams();
    this.hospitalsService.getFilteredHospital(params).subscribe((data: Hospital[]) => {
      this.dialogRef.close({event: 'close', data});
      console.log(data);
    });
  }

  public getHospitals(): void {
    this.hospitalsService.getHospitals().subscribe((data: Hospital[]) => {
      this.hospitalsData = data;
      console.log(this.hospitalsData);
    });
  }

  getRequestParams(): Partial<HospitalParamsModel> {
    const formData = this.hospitalForm.value as HospitalFormValueModel;
    const params: Partial<HospitalParamsModel> = {};

    console.log(formData.nameOfDepartments);

    if (formData.nameHospital) { params.name = formData.nameHospital; }

    if (formData.typeOfProperty) {
      params.typeOfProperty = formData.typeOfProperty;
    }

    if (formData.nameOfDepartments) {
      params.departments_like = formData.nameOfDepartments;
    }
    return params;
  }
}

import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PrivateDoctorParamsModel } from 'src/app/models/private-doctor-param.model';
import { PrivateDoctorFormValue } from 'src/app/models/private-doctors-form-value.model';
import { PrivateDoctor } from 'src/app/models/private-doctors.model';
import { PrivateDoctorsService } from 'src/app/services/private-doctors-service';

@Component({
  selector: 'app-modal-filter-private-doctors',
  templateUrl: './modal-filter-private-doctors.component.html',
  styleUrls: ['./modal-filter-private-doctors.component.css']
})
export class ModalFilterPrivateDoctorsComponent {

  privateDoctorForm: FormGroup;

  privateDoctorsData!: PrivateDoctor[];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalFilterPrivateDoctorsComponent>,
    private privateDoctorsService: PrivateDoctorsService,
  ) {
    this.privateDoctorForm = this.formBuilder.group({
      namePrivateDoctor: ['', Validators.required],
      specializationOfDoctor: ['', Validators.required]
    });
    this.getPrivateDoctors();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  saveData(): void {
    // const params = this.getRequestParams();

  }

  public getPrivateDoctors(): void {
    this.privateDoctorsService.getPrivateDoctors().subscribe((data: PrivateDoctor[]) => {
      this.privateDoctorsData = data;
    });
  }

  getRequestParams(): Partial<PrivateDoctorParamsModel> {
    const formData = this.privateDoctorForm.value as PrivateDoctorFormValue;
    const params: Partial<PrivateDoctorParamsModel> = {};

    console.log(formData.namePrivateDoctor);

    if (formData.namePrivateDoctor) { params.namePrivateDoctor = formData.namePrivateDoctor; }

    if (formData.specializationOfDoctor) {
      params.specializationOfDoctor = formData.specializationOfDoctor;
    }
    return params;
  }
}

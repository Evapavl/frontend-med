import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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

  allSpecializations: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ModalFilterPrivateDoctorsComponent>,
    private privateDoctorsService: PrivateDoctorsService,
  ) {
    this.privateDoctorForm = this.formBuilder.group({
      namePrivateDoctor: [''],
      specializationOfDoctor: ['']
    });
    this.getPrivateDoctors();
    this.getAllSpecialization();
  }

  onClose(): void {
    this.dialogRef.close({data: this.privateDoctorsData});
  }

  saveData(): void {
    const formData = this.privateDoctorForm.value as PrivateDoctorFormValue;
    this.privateDoctorsService.getRequestParams(formData.namePrivateDoctor, formData.specializationOfDoctor);
    this.privateDoctorsService.getFilteredPrivateDoctors().subscribe((data: PrivateDoctor[]) => {
      this.dialogRef.close({event: 'close', data});
    });
  }

  public getPrivateDoctors(): void {
    this.privateDoctorsService.getPrivateDoctors().subscribe((data: PrivateDoctor[]) => {
      this.privateDoctorsData = data;
    });
  }

  public getAllSpecialization(): void {
    this.privateDoctorsService.getAllSpecialization().subscribe((data: string[]) => {
      this.allSpecializations = data;
    });
  }
}

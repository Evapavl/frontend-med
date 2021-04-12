import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PharmFormValueModel } from '../models/pharmFormValue.model';

@Injectable({
  providedIn: 'root'
})

export class ModalFilterService {

  pharmForm: FormGroup = new FormGroup({
    namesPharm: new FormControl([]),
    isWork: new FormControl(false)
  });

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
}


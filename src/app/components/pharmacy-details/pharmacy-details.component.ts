import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Pharmacy } from 'src/app/models/pharmacy.model';
import { Clinic } from '../../models/clinic.model';
import { Lab } from '../../models/lab.model';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.css']
})
export class PharmacyDetailsComponent {

  @Input() data!: Pharmacy | Lab | Clinic;
  @Input() routeData!: string;

  @Output() clickedCloseBtn = new EventEmitter<boolean>();

  closeDetails(): void {
    this.clickedCloseBtn.emit(true);
  }
}

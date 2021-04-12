import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pharmacy } from 'src/app/models/pharmacy.model';

@Component({
  selector: 'app-pharmacy-details',
  templateUrl: './pharmacy-details.component.html',
  styleUrls: ['./pharmacy-details.component.css']
})
export class PharmacyDetailsComponent {

  @Input() pharmacy!: Pharmacy;

  @Output() clickedCloseBtn = new EventEmitter<boolean>();

  closeDetails(): void {
    this.clickedCloseBtn.emit(true);
  }
}

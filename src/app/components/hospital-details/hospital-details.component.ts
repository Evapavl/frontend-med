import { EventEmitter, Input, Output } from '@angular/core';
import { Component } from '@angular/core';
import { Hospital } from 'src/app/models/hospitals.model';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent {

  @Input() hospital!: Hospital;

  @Output() clickedCloseBtn = new EventEmitter<boolean>();

  closeDetails(): void {
    this.clickedCloseBtn.emit(true);
  }
}

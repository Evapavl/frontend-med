import { Input, EventEmitter, Output } from '@angular/core';
import { Component} from '@angular/core';
import { PrivateDoctor } from 'src/app/models/private-doctors.model';

@Component({
  selector: 'app-private-doctor-details',
  templateUrl: './private-doctor-details.component.html',
  styleUrls: ['./private-doctor-details.component.css']
})
export class PrivateDoctorDetailsComponent {

  @Input() privateDoctor!: PrivateDoctor;

  @Output() clickedCloseBtn = new EventEmitter<boolean>();

  closeDetails(): void {
    this.clickedCloseBtn.emit(true);
  }
}

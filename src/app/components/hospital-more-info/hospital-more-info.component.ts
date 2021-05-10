import { Component, OnDestroy, OnInit } from '@angular/core';
import { Hospital } from 'src/app/models/hospitals.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HospitalsService } from '../../services/hospitals.service';

@Component({
  selector: 'app-hospital-more-info',
  templateUrl: './hospital-more-info.component.html',
  styleUrls: ['./hospital-more-info.component.css']
})
export class HospitalMoreInfoComponent implements OnInit, OnDestroy {

  hospital!: Hospital;

  subscription!: Subscription;

  url = 'hospitals';

  constructor(
    private route: ActivatedRoute,
    private hospitalService: HospitalsService
  ) {}

  ngOnInit(): void {
    this.getHospitalByParams(this.route.snapshot.params.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getHospitalByParams(hospitalId: string): void {
    this.subscription = this.hospitalService.getHospitalById(hospitalId).subscribe((data: Hospital) => {
      this.hospital = data;
    });
  }
}

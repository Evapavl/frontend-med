import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { Lab } from 'src/app/models/lab.model';
import { LabsService } from 'src/app/services/labs.service';

@Component({
  selector: 'app-lab-more-info',
  templateUrl: './lab-more-info.component.html',
  styleUrls: ['./lab-more-info.component.css']
})
export class LabMoreInfoComponent implements OnInit, OnDestroy {
  lab!: Lab;

  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private labsService: LabsService
  ) { }

  ngOnInit(): void {
    this.getLabByParams(this.route.snapshot.params.id);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getLabByParams(id: string): void {
    this.subscription = this.labsService.getLabsById(id).subscribe((data: Lab) => {
      this.lab = data;
    });
  }

}

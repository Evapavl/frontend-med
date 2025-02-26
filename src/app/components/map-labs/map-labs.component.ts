import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { LabsService } from '../../services/labs.service';
import { Lab } from '../../models/lab.model';
import { LabsModalFilterComponent } from '../labs-modal-filter/labs-modal-filter.component';

@Component({
  selector: 'app-map-labs',
  templateUrl: './map-labs.component.html',
  styleUrls: ['./map-labs.component.css']
})
export class MapLabsComponent {

  public chosenLab!: Lab;

  public labsData!: Lab[];

  public labs!: Lab[];

  public isDisplayDetails = false;

  constructor(
    private labsService: LabsService,
    private dialog: MatDialog,
  ) {
    this.getLabs();
  }

  public getLabs(): void {
    this.labsService.getLabs().subscribe((data: Lab[]) => {
      this.labsData = data;
      this.labs = data;
    });
  }

  markerClicked(lab: Lab): void {
    this.isDisplayDetails = true;
    this.chosenLab = lab;
  }

  onClickCloseBtn(): void {
    this.isDisplayDetails = false;
  }

  open(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '100%';
    dialogConfig.height = '90%';
    dialogConfig.data = this.labs;
    const dialogRef = this.dialog.open(LabsModalFilterComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((res: { data: Lab[] }) => {
      this.labsData = res.data;
    });
  }

}

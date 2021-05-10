import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ModalFilterComponent } from 'src/app/modules/pharmacies/components/modal-filter/modal-filter.component';

@Component({
  selector: 'app-modal-message',
  templateUrl: './modal-message.component.html',
  styleUrls: ['./modal-message.component.css']
})
export class ModalMessageComponent {

  isClosed: boolean = false;

  constructor(public dialogRefMessage: MatDialogRef<ModalMessageComponent>,
    public dialogRefFilter: MatDialogRef<ModalFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {isNoCameData: boolean; isNoEnterData: boolean;} ) { }

  close() {
    this.dialogRefMessage.close();
  }

  closeAllModal(){
    this.isClosed = true;
    this.dialogRefMessage.close({data: this.isClosed});
  }

}

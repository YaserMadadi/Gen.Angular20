

import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../components/delete/delete-buttons/delete-buttons';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';


@Component({
    selector: 'app-gender-delete',
    templateUrl: './gender.delete.html',
    styleUrls: ['./gender.delete.scss'],
    imports: [
        AppModalComponent,
        FormsModule,
        DeleteButtons,
        DatePipe
    ]
})
export class GenderDeleteUI extends DeleteUI<Gender> implements IDeleteUI<Gender> {

  @ViewChild('deleteModal', { static: true }) deleteModal!: AppModalComponent;

  constructor(){
    super(inject(GenderService));
  }

  ngOnInit(): void {
    this.initModal(this.deleteModal);
  }

}



import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../../core/ui/components/delete-buttons/delete-buttons';
import { Presenter } from '../../../../../core/ui/components/presenter/presenter';
import { Gender } from '../gender';
import { GenderService } from '../gender.service';


@Component({
  selector: 'app-gender-delete',
  templateUrl: './gender.delete.html',
  styleUrls: ['./gender.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class GenderDeleteUI extends DeleteUI<Gender> implements IDeleteUI<Gender> {

  constructor() {
    super(inject(GenderService));
  }

}

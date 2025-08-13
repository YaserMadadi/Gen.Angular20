

import { CommonModule, DatePipe  } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
          
import { IndexButton } from '../../../../components/index/index-buttons/index-button';
import { SeekBar } from '../../../../components/index/seekBar/seek-bar';
import { RowButtons } from '../../../../components/index/row-buttons/row-buttons';
          
import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { Gender } from '../gender';
import { GenderService } from '../gender.service';
import { GenderDeleteUI } from '../delete/gender.delete';
import { GenderEditUI } from '../edit/gender.edit';



@Component({
  selector: 'app-gender-index',
  templateUrl: './gender.index.html',
  styleUrls: ['./gender.index.scss'],
  providers: [GenderService],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DatePipe,
    IndexButton,
    SeekBar,
    RowButtons,
    GenderEditUI,
    GenderDeleteUI,
  ]
})
export class GenderIndexUI extends IndexUI<Gender> implements IIndexUI<Gender> {

  constructor() {
    super(inject(GenderService));
  }


}

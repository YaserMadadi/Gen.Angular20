

import { CommonModule, DatePipe  } from '@angular/common';
import { Component, HostListener, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { IndexButton } from '../../../../../core/ui/components/index-buttons/index-button';
import { SeekBar } from '../../../../../core/ui/components/index-seekBar/seek-bar';
import { RowButtons } from '../../../../../core/ui/components/row-buttons/row-buttons';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';

import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
          
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
    FormsModule,
    RouterModule,
    ButtonModule,
    DatePipe,
    IndexButton,
    LookupComponent,
    SeekBar,
    RowButtons,
    GenderEditUI,
    GenderDeleteUI,
  ]
})
export class GenderIndexUI extends IndexUI<Gender> implements IIndexUI<Gender> {

  constructor(public override service: GenderService = inject(GenderService)) {
    super(service);
    
  }

  
}

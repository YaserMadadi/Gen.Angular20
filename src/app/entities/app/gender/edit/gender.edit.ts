

import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';
import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
import { EditButtons } from '../../../../../core/ui/components/edit-buttons/edit-buttons';
import { EditUI } from '../../../../../core/ui/baseUI/editUI';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';



@Component({
  selector: 'app-gender-edit',
  templateUrl: './gender.edit.html',
  styleUrls: ['./gender.edit.scss'],
  imports: [
    FormsModule,
    CommonModule,
    AppModalComponent,
    
    EditButtons,
  ]
})
export class GenderEditUI extends EditUI<Gender> {
    
  constructor(public override service: GenderService = inject(GenderService )) {
    super(service); 
    
  }

  

  

}

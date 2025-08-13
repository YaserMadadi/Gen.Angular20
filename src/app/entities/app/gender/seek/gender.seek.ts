

import { CommonModule } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
          
import { DropdownMenuItem } from '../../../../../core/ui/components/dropdown-menu/dropdown-menu-item.model';
import { IndexButton } from '../../../../../core/ui/components/index-buttons/index-button';
import { RowButtons } from '../../../../../core/ui/components/row-buttons/row-buttons';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';

import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
          
import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { Gender } from '../gender';
import { GenderService } from '../gender.service';
import { GenderDeleteUI } from '../delete/gender.delete';
import { GenderEditUI } from '../edit/gender.edit';
import { Student } from '../../student/student';
import { StudentEditUI } from '../../student/edit/student.edit';



@Component({
  selector: 'app-gender-seek',
  templateUrl: './gender.seek.html',
  styleUrls: ['./gender.seek.scss'],
  providers: [GenderService],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    RowButtons,
    GenderEditUI,
    GenderDeleteUI,
    StudentEditUI,
  ]
})
export class GenderIndexUI extends IndexUI<Gender> implements IIndexUI<Gender> {

  constructor(public override service: GenderService = inject(GenderService)) {
    super(service);
    

    this.quickAddItems = [new DropdownMenuItem('Add  دانشجو', () => this.onAddStudent()),];

    this.linkedEntityItems = [];
  }

  

  
  @ViewChild('studentEditUI')
  public studentEditUI!: StudentEditUI;

  onAddStudent() {
    let student = new Student();
    student.gender = this.currentInstance;
    this.studentEditUI.Show(student);
  }


}

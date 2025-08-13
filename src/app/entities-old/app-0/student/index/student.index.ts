

import { CommonModule, DatePipe } from '@angular/common';
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
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentDeleteUI } from '../delete/student.delete';
import { StudentEditUI } from '../edit/student.edit';
import { Gender } from '../../gender/gender';



@Component({
  selector: 'app-student-index',
  templateUrl: './student.index.html',
  styleUrls: ['./student.index.scss'],
  providers: [StudentService],
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
    StudentEditUI,
    StudentDeleteUI,
  ]
})
export class StudentIndexUI extends IndexUI<Student> implements IIndexUI<Student> {

  constructor(public override service: StudentService = inject(StudentService)) {
    super(service);
    this.genderLinker = new ForeignkeyLinker<Gender>(this.service.genderService, false);
  }

  public genderLinker: ForeignkeyLinker<Gender>;
}



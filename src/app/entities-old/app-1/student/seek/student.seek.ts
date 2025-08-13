

import { CommonModule, DatePipe  } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
          
import { IndexButton } from '../../../../components/index/index-buttons/index-button';
import { SeekBar } from '../../../../components/index/seekBar/seek-bar';
import { RowButtons } from '../../../../components/index/row-buttons/row-buttons';
          
import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentDeleteUI } from '../delete/student.delete';
import { StudentEditUI } from '../edit/student.edit';



@Component({
  selector: 'app-student-seek',
  templateUrl: './student.seek.html',
  styleUrls: ['./student.seek.scss'],
  providers: [StudentService],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DatePipe,
    IndexButton,
    SeekBar,
    RowButtons,
    StudentEditUI,
    StudentDeleteUI,
  ]
})
export class StudentIndexUI extends IndexUI<Student> implements IIndexUI<Student> {

  constructor() {
    super(inject(StudentService));
  }


}



import { CommonModule, DatePipe  } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
          
import { IndexButton } from '../../../../components/index/index-buttons/index-button';
import { SeekBar } from '../../../../components/index/seekBar/seek-bar';
import { RowButtons } from '../../../../components/index/row-buttons/row-buttons';
          
import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { StudentCourse } from '../studentCourse';
import { StudentCourseService } from '../studentCourse.service';
import { StudentCourseDeleteUI } from '../delete/studentCourse.delete';
import { StudentCourseEditUI } from '../edit/studentCourse.edit';



@Component({
  selector: 'app-studentCourse-seek',
  templateUrl: './studentCourse.seek.html',
  styleUrls: ['./studentCourse.seek.scss'],
  providers: [StudentCourseService],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DatePipe,
    IndexButton,
    SeekBar,
    RowButtons,
    StudentCourseEditUI,
    StudentCourseDeleteUI,
  ]
})
export class StudentCourseIndexUI extends IndexUI<StudentCourse> implements IIndexUI<StudentCourse> {

  constructor() {
    super(inject(StudentCourseService));
  }


}

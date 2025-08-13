

import { CommonModule, DatePipe  } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
          
import { IndexButton } from '../../../../components/index/index-buttons/index-button';
import { SeekBar } from '../../../../components/index/seekBar/seek-bar';
import { RowButtons } from '../../../../components/index/row-buttons/row-buttons';
          
import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseDeleteUI } from '../delete/course.delete';
import { CourseEditUI } from '../edit/course.edit';



@Component({
  selector: 'app-course-seek',
  templateUrl: './course.seek.html',
  styleUrls: ['./course.seek.scss'],
  providers: [CourseService],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DatePipe,
    IndexButton,
    SeekBar,
    RowButtons,
    CourseEditUI,
    CourseDeleteUI,
  ]
})
export class CourseIndexUI extends IndexUI<Course> implements IIndexUI<Course> {

  constructor() {
    super(inject(CourseService));
  }


}

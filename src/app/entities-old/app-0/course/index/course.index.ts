

import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { IndexButton } from '../../../../../core/ui/components/index-buttons/index-button';
import { SeekBar } from '../../../../../core/ui/components/index-seekBar/seek-bar';
import { RowButtons } from '../../../../../core/ui/components/row-buttons/row-buttons';

import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseDeleteUI } from '../delete/course.delete';
import { CourseEditUI } from '../edit/course.edit';



@Component({
  selector: 'app-course-index',
  templateUrl: './course.index.html',
  styleUrls: ['./course.index.scss'],
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

  override service: CourseService = new CourseService();

  constructor(service: CourseService = inject(CourseService)) {
    super(service);
  }


}

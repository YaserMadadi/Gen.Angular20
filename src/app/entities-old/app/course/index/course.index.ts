

import { CommonModule, DatePipe } from '@angular/common';
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
import { HttpClient, provideHttpClient } from '@angular/common/http';



@Component({
  selector: 'app-course-index',
  templateUrl: './course.index.html',
  styleUrls: ['./course.index.scss'],
  providers: [CourseService, HttpClient],
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

  constructor(private http: HttpClient) {
    super(inject(CourseService));
  }

  // refresh() {
  //   console.log("Refresh...")
  //   // //             http://localhost:5214/api/App/Course/RetrieveAll/1
  //   // this.http.get('http://localhost:5214/api/App/Course/RetrieveAll/3')
  //   // this.service.RetrieveById(1);
  //   this.onRefresh();
  // }

  // override afterClosed(): void {
  //   console.log('testtttttttttt')
  // }

  // override done() {
  //   console.log('onDone!');
  //   super.done();
  // }


}

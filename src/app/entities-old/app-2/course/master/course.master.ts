import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { MasterUI } from '../../../../../core/ui/baseUI/masterUI';
import { IMasterUI } from '../../../../../core/ui/baseUI/masterUI.interface';
import { MasterTrackerService } from '../../../../../core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../../core/ui/components/presenter-textbox/presenter-textbox';

import { Course } from '../course';
import { CourseService } from '../course.service';
import { CourseEditUI } from '../edit/course.edit';
import { CourseDeleteUI } from '../delete/course.delete';
import { Course_StudentCourse_DetailUI } from '../detail/course-studentCourse.detail';


@Component({
  selector: 'app-course-master',
  templateUrl: './course.master.html',
  styleUrls: ['./course.master.scss'],
  providers: [
    CourseService,
    MasterTrackerService
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    PresenterTextBox,
    CourseEditUI,
    CourseDeleteUI,
    Course_StudentCourse_DetailUI
  ]
})
export class CourseMasterUI extends MasterUI<Course> implements IMasterUI<Course> {

  constructor() {
    super(inject(CourseService), inject(MasterTrackerService))
  }


}

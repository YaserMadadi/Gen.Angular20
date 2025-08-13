import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { MasterUI } from '../../../../../core/ui/baseUI/MasterUI';
import { IMasterUI } from '../../../../../core/ui/baseUI/masterUI.interface';
import { MasterTrackerService } from '../../../../../core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../components/master/presenter-textbox/presenter-textbox';

import { Course } from '../course';
import { CourseService } from '../course.service';
// import { CourseEditUI } from '../edit/course.edit';
import { CourseDeleteUI } from '../delete/course.delete';
import { isActivePipe } from '../../../../../core/ui/pipes/isActive.pipe';


@Component({
  selector: 'app-course-master',
  templateUrl: './course.master.html',
  styleUrls: ['./course.master.scss'],
  providers: [
    MasterTrackerService,
    CourseService
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    isActivePipe,
    PresenterTextBox,
    // CourseEditUI,
    CourseDeleteUI,
  ]
})
export class CourseMasterUI extends MasterUI<Course> implements IMasterUI<Course> {

  constructor() {
    super(inject(CourseService), inject(MasterTrackerService))
  }


}

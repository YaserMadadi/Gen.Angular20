import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { MasterUI } from '../../../../../core/ui/baseUI/masterUI';
import { IMasterUI } from '../../../../../core/ui/baseUI/masterUI.interface';
import { MasterButtons } from '../../../../../core/ui/components/master-buttons/master-buttons';
import { MasterTrackerService } from '../../../../../core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../../core/ui/components/presenter-textbox/presenter-textbox';

import { StudentCourse } from '../studentCourse';
import { StudentCourseService } from '../studentCourse.service';
import { StudentCourseEditUI } from '../edit/studentCourse.edit';
import { StudentCourseDeleteUI } from '../delete/studentCourse.delete';



@Component({
  selector: 'app-studentCourse-master',
  templateUrl: './studentCourse.master.html',
  styleUrls: ['./studentCourse.master.scss'],
  providers: [
    StudentCourseService,
    MasterTrackerService
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    PresenterTextBox,
    //StudentCourseEditUI,        
    //StudentCourseDeleteUI,
    // No Item...
  ]
})
export class StudentCourseMasterUI extends MasterUI<StudentCourse> implements IMasterUI<StudentCourse> {

  constructor() {
    super(inject(StudentCourseService))
  }


}

import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { MasterUI } from '../../../../../core/ui/baseUI/masterUI';
import { IMasterUI } from '../../../../../core/ui/baseUI/masterUI.interface';
import { MasterTrackerService } from '../../../../../core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../../core/ui/components/presenter-textbox/presenter-textbox';

import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentEditUI } from '../edit/student.edit';
import { StudentDeleteUI } from '../delete/student.delete';
import { Student_StudentCourse_DetailUI } from '../detail/student-studentCourse.detail';


@Component({
  selector: 'app-student-master',
  templateUrl: './student.master.html',
  styleUrls: ['./student.master.scss'],
  providers: [
    StudentService,
    MasterTrackerService
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    PresenterTextBox,
    StudentEditUI,
    StudentDeleteUI,
    Student_StudentCourse_DetailUI
  ]
})
export class StudentMasterUI extends MasterUI<Student> implements IMasterUI<Student> {

  constructor() {
    super(inject(StudentService), inject(MasterTrackerService))
  }


}

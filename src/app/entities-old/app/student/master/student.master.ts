import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { MasterUI } from '../../../../../core/ui/baseUI/MasterUI';
import { IMasterUI } from '../../../../../core/ui/baseUI/masterUI.interface';
import { MasterTrackerService } from '../../../../../core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../components/master/presenter-textbox/presenter-textbox';

import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentEditUI } from '../edit/student.edit';
import { StudentDeleteUI } from '../delete/student.delete';


@Component({
  selector: 'app-student-master',
  templateUrl: './student.master.html',
  styleUrls: ['./student.master.scss'],
  providers: [
    MasterTrackerService
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    PresenterTextBox,
    StudentEditUI,
    StudentDeleteUI,
  ]
})
export class StudentMasterUI extends MasterUI<Student> implements IMasterUI<Student> {

  constructor() {
    super(inject(StudentService), inject(MasterTrackerService))
  }


}

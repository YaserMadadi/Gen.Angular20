

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../../core/ui/components/delete-buttons/delete-buttons';
import { Presenter } from '../../../../../core/ui/components/presenter/presenter';
import { StudentCourse } from '../studentCourse';
import { StudentCourseService } from '../studentCourse.service';


@Component({
  selector: 'app-studentCourse-delete',
  templateUrl: './studentCourse.delete.html',
  styleUrls: ['./studentCourse.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class StudentCourseDeleteUI extends DeleteUI<StudentCourse> implements IDeleteUI<StudentCourse> {

  constructor() {
    super(inject(StudentCourseService));
  }

}

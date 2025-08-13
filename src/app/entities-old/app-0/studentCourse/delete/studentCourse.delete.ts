

import { Component, inject, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../../core/ui/components/delete-buttons/delete-buttons';

import { StudentCourse } from '../studentCourse';
import { StudentCourseService } from '../studentCourse.service';


@Component({
  selector: 'app-studentCourse-delete',
  templateUrl: './studentCourse.delete.html',
  styleUrls: ['./studentCourse.delete.scss'],
  imports: [
    AppModalComponent,
    FormsModule,
    DeleteButtons,
    DatePipe
  ]
})
export class StudentCourseDeleteUI extends DeleteUI<StudentCourse> implements IDeleteUI<StudentCourse> {



  constructor() {
    super(inject(StudentCourseService));
  }



}

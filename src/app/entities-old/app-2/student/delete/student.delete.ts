

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../../core/ui/components/delete-buttons/delete-buttons';
import { Presenter } from '../../../../../core/ui/components/presenter/presenter';
import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student-delete',
  templateUrl: './student.delete.html',
  styleUrls: ['./student.delete.scss'],
  imports: [
    AppModalComponent,
    CommonModule,
    DeleteButtons,
    SHARED_PIPES,
    FormsModule,
    Presenter,
  ]
})
export class StudentDeleteUI extends DeleteUI<Student> implements IDeleteUI<Student> {

  constructor() {
    super(inject(StudentService));
  }

}



import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../components/delete/delete-buttons/delete-buttons';

import { Student } from '../student';
import { StudentService } from '../student.service';


@Component({
    selector: 'app-student-delete',
    templateUrl: './student.delete.html',
    styleUrls: ['./student.delete.scss'],
    imports: [
        AppModalComponent,
        FormsModule,
        DeleteButtons,
        DatePipe
    ]
})
export class StudentDeleteUI extends DeleteUI<Student> implements IDeleteUI<Student> {

  @ViewChild('deleteModal', { static: true }) deleteModal!: AppModalComponent;

  constructor(){
    super(inject(StudentService));
  }

  ngOnInit(): void {
    this.initModal(this.deleteModal);
  }

}

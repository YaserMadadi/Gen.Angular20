

import { Component, inject, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppModalComponent } from '../../../../../core/ui/modal/modal.component';
import { DeleteUI } from '../../../../../core/ui/baseUI/deleteUI';
import { IDeleteUI } from '../../../../../core/ui/baseUI/deleteUI.interface';
import { DeleteButtons } from '../../../../../core/ui/components/delete-buttons/delete-buttons';

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
export class StudentDeleteUI extends DeleteUI<Student> implements IDeleteUI<Student>, OnInit {

  @ViewChild('deleteModal', { static: true }) deleteModal!: AppModalComponent;

  @Output() public override onClosed: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
    super(inject(StudentService));
  }

  ngOnInit(): void {
    this.initModal(this.deleteModal);
  }

}

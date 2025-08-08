

import { CommonModule, DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';

import { IndexButton } from '../../../../../core/ui/components/index-buttons/index-button';
import { SeekBar } from '../../../../../core/ui/components/index-seekBar/seek-bar';
import { RowButtons } from '../../../../../core/ui/components/row-buttons/row-buttons';

import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { StudentDeleteUI } from '../delete/student.delete';
import { StudentEditUI } from '../edit/student.edit';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';



@Component({
  selector: 'app-student-index',
  templateUrl: './student.index.html',
  styleUrls: ['./student.index.scss'],
  providers: [StudentService],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    DatePipe,
    IndexButton,
    SeekBar,
    RowButtons,
    StudentEditUI,
    StudentDeleteUI,
    LookupComponent
  ]
})
export class StudentIndexUI extends IndexUI<Student> implements IIndexUI<Student> {

  constructor() {
    super(inject(StudentService));
  }

  filteredUsers: any[] = [];
  items: any[] = [];

  onUserSelected(id: number) {
    console.log("Id Selected : ", id);
  }

  onFilterChanged2(filter: string) {
    console.log("Filter Changed: ", filter);
    // Implement filtering logic here
    //this.filteredUsers = this.items.filter(user => user.fullName.toLowerCase().includes(filter.toLowerCase()));
  }

}

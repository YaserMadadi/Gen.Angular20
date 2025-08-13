
import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { DetailUI } from '../../../../../core/ui/baseUI/detailUI';
import { DetailButton } from '../../../../../core/ui/components/detail-buttons/detail-button';
import { ForeignkeyLinker } from '../../../../../core/ui/helper/foreignkey-linker';
import { LookupComponent } from '../../../../../core/ui/components/lookup/lookup';
import { RowButtons } from '../../../../../core/ui/components/row-buttons/row-buttons';


import { Gender } from '../gender';
import { Student } from '../../student/student';
import { StudentService } from '../../student/student.service';
import { GenderServiceCollection } from '../../gender/gender.service.collection';

import { StudentEditUI } from '../../student/edit/student.edit';
import { StudentDeleteUI } from '../../student/delete/student.delete';
import { StudentBuilder } from '../../student/student.builder';



@Component({
  selector: 'app-gender-student-detail',
  templateUrl: './gender-student.detail.html',
  styleUrls: ['./gender-student.detail.scss'],
  imports: [
    FormsModule,
    CommonModule,
    DetailButton,
    RowButtons,

    StudentEditUI,
    StudentDeleteUI,
  ]
})
export class Gender_Student_DetailUI extends DetailUI<Gender, Student> {

  constructor(private serviceCollection: GenderServiceCollection = inject(GenderServiceCollection)) {
    super(serviceCollection.CollectionOfStudent.bind(serviceCollection), inject(StudentBuilder));
    this.currentInstance = new Student();
  }

  @Input()
  public set gender(value: Gender) {
    this.masterInstance = { ...value };
    //this.currentInstance.gender = { ...value };
    this.sourceInstance.gender = { ...value };
  }



}



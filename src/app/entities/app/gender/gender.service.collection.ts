
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';
import { IServiceCollection } from '../../../../core/service/service.collection.interface';

import { Gender } from './gender';

import { Student } from '../student/student';
import { StudentBuilder } from '../student/student.builder';


@Injectable({ providedIn: 'root' })
export class GenderServiceCollection extends ServiceCollection<Gender> implements IServiceCollection<Gender> {

  constructor() {
    super(inject(API_Operation<Gender>));
  }

  //#region CollectionMethods

  CollectionOfStudent(gender_id: number, student: Student = StudentBuilder.BuildSeekInstance()): Observable<Student[]> {
    return super.CollectionOf<Student>(new Gender(gender_id), student);
  }

	//#endregion
}

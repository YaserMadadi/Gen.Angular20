
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';
import { IServiceCollection } from '../../../../core/service/service.collection.interface';

import { Gender } from './gender';
import { GenderService } from './gender.service';

import { Student } from '../student/student';


@Injectable({ providedIn: 'root' })
export class GenderServiceCollection extends ServiceCollection<Gender> implements IServiceCollection<Gender> {

  constructor() {
    super(inject(GenderService));
  }

  //#region CollectionMethods

  CollectionOfStudent(gender_id: number, student: Student = Student.SeekInstance()): Observable<Student[]> {
    return super.CollectionOf<Student>(new Gender(gender_id), student);
  }

	//#endregion
}

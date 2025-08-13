
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';
import { IServiceCollection } from '../../../../core/service/service.collection.interface';

import { StudentCourse } from './studentCourse';



@Injectable({ providedIn: 'root' })
export class StudentCourseServiceCollection extends ServiceCollection<StudentCourse> implements IServiceCollection<StudentCourse> {

  constructor() {
    super(inject(API_Operation<StudentCourse>));
  }

  //#region CollectionMethods

	//#endregion
}

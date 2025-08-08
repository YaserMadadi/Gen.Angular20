
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';
import { IServiceCollection } from '../../../../core/service/service.collection.interface';

import { StudentCourse } from './studentCourse';
import { StudentCourseService } from './studentCourse.service';



@Injectable({ providedIn: 'root' })
export class StudentCourseServiceCollection extends ServiceCollection<StudentCourse> implements IServiceCollection<StudentCourse> {

  constructor() {
    super(inject(StudentCourseService));
  }

  //#region CollectionMethods

	//#endregion
}

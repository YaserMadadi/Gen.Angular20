
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';
import { IServiceCollection } from '../../../../core/service/service.collection.interface';

import { Course } from './course';
import { CourseService } from './course.service';

import { StudentCourse } from '../studentCourse/studentCourse';


@Injectable({ providedIn: 'root' })
export class CourseServiceCollection extends ServiceCollection<Course> implements IServiceCollection<Course> {

  constructor() {
    super(inject(CourseService));
  }

  //#region CollectionMethods

  CollectionOfStudentCourse(course_id: number, studentCourse: StudentCourse = StudentCourse.SeekInstance()): Observable<StudentCourse[]> {
    return super.CollectionOf<StudentCourse>(new Course(course_id), studentCourse);
  }

  //#endregion
}

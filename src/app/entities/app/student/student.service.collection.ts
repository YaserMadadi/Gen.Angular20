
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';
import { IServiceCollection } from '../../../../core/service/service.collection.interface';

import { Student } from './student';

import { StudentCourse } from '../studentCourse/studentCourse';
import { StudentCourseBuilder } from '../studentCourse/studentCourse.builder';


@Injectable({ providedIn: 'root' })
export class StudentServiceCollection extends ServiceCollection<Student> implements IServiceCollection<Student> {

  constructor() {
    super(inject(API_Operation<Student>));
  }

  //#region CollectionMethods

  CollectionOfStudentCourse(student_id: number, studentCourse: StudentCourse = StudentCourseBuilder.BuildSeekInstance()): Observable<StudentCourse[]> {
    return super.CollectionOf<StudentCourse>(new Student(student_id), studentCourse);
  }

	//#endregion
}

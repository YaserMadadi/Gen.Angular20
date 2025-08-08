
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';
import { IServiceCollection } from '../../../../core/service/service.collection.interface';

import { Student } from './student';
import { StudentService } from './student.service';

import { StudentCourse } from '../studentCourse/studentCourse';


@Injectable({ providedIn: 'root' })
export class StudentServiceCollection extends ServiceCollection<Student> implements IServiceCollection<Student> {

  constructor() {
    super(inject(StudentService));
  }

  //#region CollectionMethods

  CollectionOfStudentCourse(student_id: number, studentCourse: StudentCourse = StudentCourse.SeekInstance()): Observable<StudentCourse[]> {
    return super.CollectionOf<StudentCourse>(new Student(student_id), studentCourse);
  }

	//#endregion
}



import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '../../../../core/service/service.interface';
import { Service } from '../../../../core/service/service';

import { Info } from '../../../../core/info';
import { Result } from '../../../../core/tools/Result';
import { MessageController } from '../../../../core/tools/controller.message';
import { MessageType } from '../../../../core/tools/enum';

import { StudentCourse } from './studentCourse';
import { StudentCourseBuilder } from './studentCourse.builder';


import { CourseService } from '../course/course.service';
import { StudentService } from '../student/student.service';

@Injectable({ providedIn: 'root' })
export class StudentCourseService extends Service<StudentCourse> implements IService<StudentCourse> {

  constructor(){
    super(StudentCourse.Info, inject(StudentCourseBuilder));
  }

  public courseService: CourseService = inject(CourseService);

	public studentService: StudentService = inject(StudentService);

  //#region     Abstract Members - Start.

  //#region Methods

  override RetrieveById(id: number): Observable<StudentCourse> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<StudentCourse[]> {
    return super.RetrieveAll();
  }

  override Save(studentCourse: StudentCourse): Observable<StudentCourse> {
    if (!StudentCourse.Validate(studentCourse)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(studentCourse);
    }
    return super.Save(studentCourse);
  }

  override SaveAttached(studentCourse: StudentCourse): Observable<StudentCourse> {
    if (!StudentCourse.Validate(studentCourse)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(studentCourse);
    }
    return super.SaveAttached(studentCourse);
  }

  override SaveCollection(studentCourseList: StudentCourse[]): Observable<Result> {
    return super.SaveCollection(studentCourseList);
  }

  override Delete(studentCourse: StudentCourse): Observable<boolean> {
    return super.Delete(studentCourse);
  }

  override Seek(studentCourse: StudentCourse = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<StudentCourse[]> {
    return super.Seek(studentCourse); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(studentCourse: StudentCourse): Observable<StudentCourse> {
    return super.SeekLast(studentCourse);
  }

  override SeekByValue(value: string = ''): Observable<StudentCourse[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  ////TODO: Load current factory Child based on id !

  // Laod Enums ... 
}

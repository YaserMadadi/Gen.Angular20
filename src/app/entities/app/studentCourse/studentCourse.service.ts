

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '../../../../core/service/service.interface';
import { Service } from '../../../../core/service/service';

import { Info } from '../../../../core/info';
import { Result } from '../../../../core/tools/Result';
import { MessageController } from '../../../../core/tools/controller.message';
import { MessageType } from '../../../../core/tools/enum';

import { StudentCourse } from './studentCourse';
import { StudentCourseServiceCollection } from './studentCourse.service.collection';



@Injectable({ providedIn: 'root' })
export class StudentCourseService extends Service<StudentCourse> implements IService<StudentCourse> {

  constructor() {
    super(StudentCourse.Info);
  }

  //#region     Abstract Members - Start.
  override CreateInstance(id: number = 0): StudentCourse {
    return new StudentCourse();
  }

  static CreateSeekInstance(): StudentCourse {
    return StudentCourse.SeekInstance();
  }

  override CreateSeekInstance(): StudentCourse {
    return StudentCourse.SeekInstance();
  }




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

  override Seek(studentCourse: StudentCourse = StudentCourse.SeekInstance(), pageNumber: number = 1): Observable<StudentCourse[]> {
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

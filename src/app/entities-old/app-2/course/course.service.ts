

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '../../../../core/service/service.interface';
import { Service } from '../../../../core/service/service';

import { Info } from '../../../../core/info';
import { Result } from '../../../../core/tools/Result';
import { MessageController } from '../../../../core/tools/controller.message';
import { MessageType } from '../../../../core/tools/enum';

import { Course } from './course';
import { CourseServiceCollection } from './course.service.collection';



@Injectable({ providedIn: 'root' })
export class CourseService extends Service<Course> implements IService<Course> {

  constructor(){
    super(Course.Info);
  }

  

  //#region     Abstract Members - Start.
  override CreateInstance(id: number = 0): Course {
      return new Course();
  }

    static CreateSeekInstance(): Course {
    return Course.SeekInstance();
  }
  
  override CreateSeekInstance(): Course {
     return Course.SeekInstance();
  }




  //#region Methods

  override RetrieveById(id: number): Observable<Course> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Course[]> {
    return super.RetrieveAll();
  }

  override Save(course: Course): Observable<Course> {
    if (!Course.Validate(course)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(course);
    }
    return super.Save(course);
  }

  override SaveAttached(course: Course): Observable<Course> {
    if (!Course.Validate(course)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(course);
    }
    return super.SaveAttached(course);
  }

  override SaveCollection(courseList: Course[]): Observable<Result> {
    return super.SaveCollection(courseList);
  }

  override Delete(course: Course): Observable<boolean> {
    return super.Delete(course);
  }

  override Seek(course: Course = Course.SeekInstance(), pageNumber: number = 1): Observable<Course[]> {
    return super.Seek(course); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(course: Course): Observable<Course> {
    return super.SeekLast(course);
  }

  override SeekByValue(value: string = ''): Observable<Course[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  ////TODO: Load current factory Child based on id !

  // Laod Enums ... 
}

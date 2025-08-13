

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '../../../../core/service/service.interface';
import { Service } from '../../../../core/service/service';

import { Info } from '../../../../core/info';
import { Result } from '../../../../core/tools/Result';
import { MessageController } from '../../../../core/tools/controller.message';
import { MessageType } from '../../../../core/tools/enum';

import { Student } from './student';
import { StudentServiceCollection } from './student.service.collection';
import { GenderService } from '../gender/gender.service';



@Injectable()
export class StudentService extends Service<Student> implements IService<Student> {

  constructor() {
    super(Student.Info);
  }

  public genderService: GenderService = inject(GenderService);

  //#region     Abstract Members - Start.
  override CreateInstance(id: number = 0): Student {
    return new Student();
  }

  static CreateSeekInstance(): Student {
    return Student.SeekInstance();
  }

  override CreateSeekInstance(): Student {
    return Student.SeekInstance();
  }




  //#region Methods

  override RetrieveById(id: number): Observable<Student> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Student[]> {
    return super.RetrieveAll();
  }

  override Save(student: Student): Observable<Student> {
    if (!Student.Validate(student)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(student);
    }
    return super.Save(student);
  }

  override SaveAttached(student: Student): Observable<Student> {
    if (!Student.Validate(student)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(student);
    }
    return super.SaveAttached(student);
  }

  override SaveCollection(studentList: Student[]): Observable<Result> {
    return super.SaveCollection(studentList);
  }

  override Delete(student: Student): Observable<boolean> {
    return super.Delete(student);
  }

  override Seek(student: Student = Student.SeekInstance(), pageNumber: number = 1): Observable<Student[]> {
    return super.Seek(student); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(student: Student): Observable<Student> {
    return super.SeekLast(student);
  }

  override SeekByValue(value: string = ''): Observable<Student[]> {
    console.log('Fire');
    return super.SeekByValue(value);
  }

  //#endregion

  ////TODO: Load current factory Child based on id !

  // Laod Enums ... 
}

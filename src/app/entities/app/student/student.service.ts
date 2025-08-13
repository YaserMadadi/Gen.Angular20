

import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '../../../../core/service/service.interface';
import { Service } from '../../../../core/service/service';

import { Info } from '../../../../core/info';
import { Result } from '../../../../core/tools/Result';
import { MessageController } from '../../../../core/tools/controller.message';
import { MessageType } from '../../../../core/tools/enum';

import { Student } from './student';
import { StudentBuilder } from './student.builder';


import { GenderService } from '../gender/gender.service';

@Injectable({ providedIn: 'root' })
export class StudentService extends Service<Student> implements IService<Student> {

  constructor(){
    super(Student.Info, inject(StudentBuilder));
  }

  public genderService: GenderService = inject(GenderService);

  //#region     Abstract Members - Start.

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

  override Seek(student: Student = this.builder.BuildSeekInstance(), pageNumber: number = 1): Observable<Student[]> {
    return super.Seek(student); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(student: Student): Observable<Student> {
    return super.SeekLast(student);
  }

  override SeekByValue(value: string = ''): Observable<Student[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  ////TODO: Load current factory Child based on id !

  // Laod Enums ... 
}



import { Injectable, inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '../../../../core/service/service.interface';
import { Service } from '../../../../core/service/service';

import { Info } from '../../../../core/info';
import { Result } from '../../../../core/tools/Result';
import { MessageController } from '../../../../core/tools/controller.message';
import { MessageType } from '../../../../core/tools/enum';

import { Gender } from './gender';
import { GenderServiceCollection } from './gender.service.collection';



@Injectable({ providedIn: 'root' })
export class GenderService extends Service<Gender> implements IService<Gender> {

  constructor() {
    super(Gender.Info);
  }

  //#region     Abstract Members - Start.
  override CreateInstance(id: number = 0): Gender {
    return new Gender();
  }

  static CreateSeekInstance(): Gender {
    return Gender.SeekInstance();
  }

  override CreateSeekInstance(): Gender {
    return Gender.SeekInstance();
  }




  //#region Methods

  override RetrieveById(id: number): Observable<Gender> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Gender[]> {
    return super.RetrieveAll();
  }

  override Save(gender: Gender): Observable<Gender> {
    if (!Gender.Validate(gender)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(gender);
    }
    return super.Save(gender);
  }

  override SaveAttached(gender: Gender): Observable<Gender> {
    if (!Gender.Validate(gender)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return of(gender);
    }
    return super.SaveAttached(gender);
  }

  override SaveCollection(genderList: Gender[]): Observable<Result> {
    return super.SaveCollection(genderList);
  }

  override Delete(gender: Gender): Observable<boolean> {
    return super.Delete(gender);
  }

  override Seek(gender: Gender = Gender.SeekInstance(), pageNumber: number = 1): Observable<Gender[]> {
    return super.Seek(gender); // TODO: find an integrated solution for pageNumber
  }

  override SeekLast(gender: Gender): Observable<Gender> {
    return super.SeekLast(gender);
  }

  override SeekByValue(value: string = ''): Observable<Gender[]> {
    return super.SeekByValue(value);
  }

  //#endregion

  ////TODO: Load current factory Child based on id !

  // Laod Enums ... 
}

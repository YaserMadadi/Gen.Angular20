

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '@core/service/service.interface';
import { Service } from '@core/service/service';

import { Info } from '@core/Info';
import { Result } from '@core/tools/Result';
import { MessageController } from '@core/tools/controller.message';
import { PermissionController } from '@core/tools/controller.permission';
import { PermissionType, MessageType, PermissionResult } from '@core/tools/enum';

import { MessageType } from './messageType';
import { MessageTypeServiceCollection } from './messageType.service.collection';



@Injectable({ providedIn: 'root' })
export class MessageTypeService extends Service<MessageType> implements IService<MessageType> {

  constructor(public ServiceCollection: MessageTypeServiceCollection) {
    super(ServiceCollection.api_operation, MessageType.Info);
  }

  //#region     Abstract Members - Start.
  override CreateInstance() {
      return new MessageType();
  }

  override CreateSeekInstance() {
     return MessageType.SeekInstance();
  }

  override CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //#region Methods

  override RetrieveById(id: number): Observable<MessageType> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<MessageType[]> {
    return super.RetrieveAll();
  }

  override Save(messageType: MessageType): Promise<MessageType> {
    if (!MessageType.Validate(messageType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(messageType);
    }
    return super.Save(messageType);
  }

  override SaveAttached(messageType: MessageType): Promise<MessageType> {
    if (!MessageType.Validate(messageType)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(messageType);
    }
    return super.SaveAttached(messageType);
  }

  override SaveCollection(messageTypeList: MessageType[]): Promise<Result> {
    return super.SaveCollection(messageTypeList);
  }

  override Delete(messageType: MessageType): Promise<boolean> {
    return super.Delete(messageType);
  }

  override Seek(messageType: MessageType = MessageType.SeekInstance(), pageNumber: number = 1): Observable<MessageType[]> {
    return super.Seek(messageType, pageNumber);
  }

  override SeekLast(messageType: MessageType): Promise<MessageType> {
    return super.SeekLast(messageType);
  }

  override SeekByValue(value: string = ''): Observable<MessageType[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  //# this section was Moved to ServiceCollection classes!
}

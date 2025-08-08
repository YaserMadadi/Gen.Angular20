

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IService } from '@core/service/service.interface';
import { Service } from '@core/service/service';

import { Info } from '@core/Info';
import { Result } from '@core/tools/Result';
import { MessageController } from '@core/tools/controller.message';
import { PermissionController } from '@core/tools/controller.permission';
import { PermissionType, MessageType, PermissionResult } from '@core/tools/enum';

import { Message } from './message';
import { MessageServiceCollection } from './message.service.collection';



@Injectable({ providedIn: 'root' })
export class MessageService extends Service<Message> implements IService<Message> {

  constructor(public ServiceCollection: MessageServiceCollection) {
    super(ServiceCollection.api_operation, Message.Info);
  }

  //#region     Abstract Members - Start.
  override CreateInstance() {
      return new Message();
  }

  override CreateSeekInstance() {
     return Message.SeekInstance();
  }

  override CheckPermission(permissionType: PermissionType): PermissionResult {
    return PermissionController.Check(this.info, permissionType);
  }

  //#region Methods

  override RetrieveById(id: number): Observable<Message> {
    return super.RetrieveById(id);
  }

  override RetrieveAll(): Observable<Message[]> {
    return super.RetrieveAll();
  }

  override Save(message: Message): Promise<Message> {
    if (!Message.Validate(message)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(message);
    }
    return super.Save(message);
  }

  override SaveAttached(message: Message): Promise<Message> {
    if (!Message.Validate(message)) {
      MessageController.ShowMessage(MessageType.NoValidEntity);
      return Promise.resolve(message);
    }
    return super.SaveAttached(message);
  }

  override SaveCollection(messageList: Message[]): Promise<Result> {
    return super.SaveCollection(messageList);
  }

  override Delete(message: Message): Promise<boolean> {
    return super.Delete(message);
  }

  override Seek(message: Message = Message.SeekInstance(), pageNumber: number = 1): Observable<Message[]> {
    return super.Seek(message, pageNumber);
  }

  override SeekLast(message: Message): Promise<Message> {
    return super.SeekLast(message);
  }

  override SeekByValue(value: string = ''): Observable<Message[]> {
    return super.SeekByValue(value);
  }

	//#endregion

  

  //# this section was Moved to ServiceCollection classes!
}

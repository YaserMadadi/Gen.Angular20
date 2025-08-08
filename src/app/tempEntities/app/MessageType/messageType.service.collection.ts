
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '@core/service/api.operation';
import { ServiceCollection } from '@core/service/service.collection';

import { MessageType } from './messageType';

import { Message } from '../Message/message';


@Injectable({ providedIn: 'root' })
export class MessageTypeServiceCollection extends ServiceCollection<MessageType> {

  constructor(api_operation: API_Operation<MessageType>) {
        super(api_operation);
    }

  //#region CollectionMethods

            CollectionOfMessage(messageType: MessageType, message: Message = Message.SeekInstance()): Observable<Message[]> {
              return super.CollectionOf<Message>(messageType, message);
            }

	//#endregion
}

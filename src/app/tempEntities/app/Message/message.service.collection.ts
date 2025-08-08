
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '@core/service/api.operation';
import { ServiceCollection } from '@core/service/service.collection';

import { Message } from './message';



@Injectable({ providedIn: 'root' })
export class MessageServiceCollection extends ServiceCollection<Message> {

  constructor(api_operation: API_Operation<Message>) {
        super(api_operation);
    }

  //#region CollectionMethods

	//#endregion
}

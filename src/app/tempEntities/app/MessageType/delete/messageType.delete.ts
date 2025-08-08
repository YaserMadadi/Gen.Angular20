

import { Component } from '@angular/core';

import { DeleteModal } from 'xcore/tools/ui/view-base/delete.modal';

import { MessageType } from '../messageType';
import { MessageTypeService } from '../messageType.service';


@Component({
  selector: 'messageType-delete',
  templateUrl: './messageType.delete.html',
  styleUrls: ['./messageType.delete.css'],
})
export class MessageTypeDeleteUI extends DeleteModal<MessageType> {

    constructor(private messageTypeService: MessageTypeService){
        super(messageTypeService);
    }

}

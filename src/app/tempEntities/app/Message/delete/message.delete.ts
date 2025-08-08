

import { Component } from '@angular/core';

import { DeleteModal } from 'xcore/tools/ui/view-base/delete.modal';

import { Message } from '../message';
import { MessageService } from '../message.service';


@Component({
  selector: 'message-delete',
  templateUrl: './message.delete.html',
  styleUrls: ['./message.delete.css'],
})
export class MessageDeleteUI extends DeleteModal<Message> {

    constructor(private messageService: MessageService){
        super(messageService);
    }

}

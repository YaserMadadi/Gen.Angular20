

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '@core/ui/modal/modal.component';
import { EditUI } from '@core/ui/baseUI/EditUI';

import { Message } from '../message';
import { MessageService } from '../message.service';
import { MessageEditUI } from './message.edit';



@Component({
    selector: 'message-edit',
    templateUrl: './message.edit.html',
    styleUrls: ['./message.edit.css'],
    imports: [
        FormsModule,
        AppModalComponent,
    ]
})
export class MessageEditUI extends EditUI<Message> implements OnInit, OnChanges {

    @ViewChild('messageEditModal', { static: true }) appModal!: AppModalComponent;

    constructor(messageService: MessageService) {
        super(messageService);
    }

    ngOnInit(): void {
        this.initModal(this.appModal);
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['currentInstance']) {
            this.currentInstance = Object.assign(new Message(), this.currentInstance);
        }
    }

    // override async onSave(form: NgForm): Promise<boolean> {
    //     return super.onSave(form);
    // }
}

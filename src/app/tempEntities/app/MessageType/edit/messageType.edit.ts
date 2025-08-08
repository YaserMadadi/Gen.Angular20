

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { AppModalComponent } from '@core/ui/modal/modal.component';
import { EditUI } from '@core/ui/baseUI/EditUI';

import { MessageType } from '../messageType';
import { MessageTypeService } from '../messageType.service';



@Component({
    selector: 'messageType-edit',
    templateUrl: './messageType.edit.html',
    styleUrls: ['./messageType.edit.css'],
    imports: [
        FormsModule,
        AppModalComponent,
    ]
})
export class MessageTypeEditUI extends EditUI<MessageType> implements OnInit, OnChanges  {
    
    @ViewChild('messageTypeEditModal', { static: true }) appModal!: AppModalComponent;

    constructor(messageTypeService: MessageTypeService) {
        super(messageTypeService); 
    }

    ngOnInit(): void {
        this.initModal(this.appModal);
    }


    ngOnChanges(changes: SimpleChanges): void {
        if (changes['currentInstance']) {
            this.currentInstance = Object.assign(new MessageType(), this.currentInstance);
        }
    }

    // override async onSave(form: NgForm): Promise<boolean> {
    //     return super.onSave(form);
    // }
}

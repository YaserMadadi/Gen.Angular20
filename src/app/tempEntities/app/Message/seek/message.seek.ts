

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
          
import { IndexButton } from '../../../../components/index/index-buttons/index-button';
import { SeekBar } from '../../../../components/index/seekBar/seek-bar';
import { RowButtons } from '../../../../components/index/row-buttons/row-buttons';
          
import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { MessageDeleteUI } from '../delete/message.delete';
import { MessageEditUI } from '../edit/message.edit';



@Component({
  selector: 'message-seek',
  templateUrl: './message.index.html',
  styleUrls: ['./message.index.css'],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    SeekBar,
    RowButtons,
    MessageEditUI,
    MessageDeleteUI,
  ]
})
export class MessageIndexUI extends IndexUI<Message> implements IIndexUI<Message> {

  constructor(service: MessageService) {
    super(service);
  }


}

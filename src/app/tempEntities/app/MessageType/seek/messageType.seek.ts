

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
          
import { IndexButton } from '../../../../components/index/index-buttons/index-button';
import { SeekBar } from '../../../../components/index/seekBar/seek-bar';
import { RowButtons } from '../../../../components/index/row-buttons/row-buttons';
          
import { IIndexUI } from '../../../../../core/ui/baseUI/indexUI.interface';
import { IndexUI } from '../../../../../core/ui/baseUI/indexUI';
import { MessageType } from '../messageType';
import { MessageTypeService } from '../messageType.service';
import { MessageTypeDeleteUI } from '../delete/messageType.delete';
import { MessageTypeEditUI } from '../edit/messageType.edit';



@Component({
  selector: 'messageType-seek',
  templateUrl: './messageType.index.html',
  styleUrls: ['./messageType.index.css'],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    IndexButton,
    SeekBar,
    RowButtons,
    MessageTypeEditUI,
    MessageTypeDeleteUI,
  ]
})
export class MessageTypeIndexUI extends IndexUI<MessageType> implements IIndexUI<MessageType> {

  constructor(service: MessageTypeService) {
    super(service);
  }


}

import { Component, inject } from '@angular/core';

import { Tabs2Module } from '@coreui/angular';

import { MasterUI } from '@core/ui/baseUI/MasterUI';
import { IMasterUI } from '@core/ui/baseUI/masterUI.interface';
import { MasterTrackerService } from '@core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../components/master/presenter-textbox';
import { MessageType } from '../messageType';
import { MessageTypeService } from '../messageType.service';
import { MessageService } from '../../Message/message.service';



@Component({
    selector: 'messageType-master',
    templateUrl: './messageType.master.master.html',
    styleUrls: ['./messageType.master.master.scss'],
    providers: [
        MasterTrackerService
    ],
    imports: [
        Tabs2Module,
        PresenterTextBox,
        MessageType_Master
    ]
})
export class MessageTypeMaster extends MasterUI<MessageType> implements IMasterUI<MessageType> {

  constructor() {
    super(inject(StaffService), inject(MasterTrackerService))
  }


}

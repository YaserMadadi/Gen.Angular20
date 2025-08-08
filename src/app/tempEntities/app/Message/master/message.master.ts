import { Component, inject } from '@angular/core';

import { Tabs2Module } from '@coreui/angular';

import { MasterUI } from '@core/ui/baseUI/MasterUI';
import { IMasterUI } from '@core/ui/baseUI/masterUI.interface';
import { MasterTrackerService } from '@core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../components/master/presenter-textbox';
import { Message } from '../message';
import { MessageService } from '../message.service';



@Component({
    selector: 'message-master',
    templateUrl: './message.master.master.html',
    styleUrls: ['./message.master.master.scss'],
    providers: [
        MasterTrackerService
    ],
    imports: [
        Tabs2Module,
        PresenterTextBox,
        Message_Master
    ]
})
export class MessageMaster extends MasterUI<Message> implements IMasterUI<Message> {

  constructor() {
    super(inject(StaffService), inject(MasterTrackerService))
  }


}

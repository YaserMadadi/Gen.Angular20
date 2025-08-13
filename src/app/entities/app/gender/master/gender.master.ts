import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tabs2Module } from '@coreui/angular';

import { SHARED_PIPES } from '../../../../../core/ui/pipes/sharedPipes';
import { MasterUI } from '../../../../../core/ui/baseUI/masterUI';
import { IMasterUI } from '../../../../../core/ui/baseUI/masterUI.interface';
import { MasterButtons } from '../../../../../core/ui/components/master-buttons/master-buttons';
import { MasterTrackerService } from '../../../../../core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../../core/ui/components/presenter-textbox/presenter-textbox';

import { Gender } from '../gender';
import { GenderService } from '../gender.service';
import { GenderEditUI } from '../edit/gender.edit';
import { GenderDeleteUI } from '../delete/gender.delete';
import { Gender_Student_DetailUI } from '../detail/gender-student.detail';


@Component({
  selector: 'app-gender-master',
  templateUrl: './gender.master.html',
  styleUrls: ['./gender.master.scss'],
  providers: [
    GenderService,
    MasterTrackerService
  ],
  imports: [
    Tabs2Module,
    CommonModule,
    SHARED_PIPES,
    MasterButtons,
    PresenterTextBox,
    //GenderEditUI,        
    //GenderDeleteUI,
    Gender_Student_DetailUI
  ]
})
export class GenderMasterUI extends MasterUI<Gender> implements IMasterUI<Gender> {

  constructor() {
    super(inject(GenderService))
  }


}

import { Component, inject } from '@angular/core';

import { Tabs2Module } from '@coreui/angular';

import { MasterUI } from '../../../../../core/ui/baseUI/masterUI';
import { IMasterUI } from '../../../../../core/ui/baseUI/masterUI.interface';
import { MasterTrackerService } from '../../../../../core/service/uiService/master-tracker-service';
import { PresenterTextBox } from '../../../../components/master/presenter-textbox/presenter-textbox'; // '../../../../components/master/presenter-textbox';

import { Staff } from '../staff';
import { StaffService } from '../staff.service';
import { Staff_StaffPermission_Detail } from '../detail/staff.staffPermission.detail';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'staff-master',
    templateUrl: './staff.master.html',
    styleUrls: ['./staff.master.scss'],
    providers: [
        MasterTrackerService
    ],
    imports: [
        Tabs2Module,
        PresenterTextBox,
        Staff_StaffPermission_Detail
    ]
})
export class StaffMaster extends MasterUI<Staff> implements IMasterUI<Staff> {


    constructor() {
        super(inject(StaffService), inject(MasterTrackerService));


    }

    handleChange($event: string | number | undefined) {
        console.log('handleChange', $event);
    }

}
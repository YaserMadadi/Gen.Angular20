import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Observable, of } from "rxjs";

import { DetailUI } from "../../../../../core/ui/baseUI/detailUI";
import { DetailButton } from "../../../../components/buttons/detail-buttons/detail-button";
import { MasterTrackerService } from "../../../../../core/service/uiService/master-tracker-service";

import { Staff } from "../staff";
import { StaffService } from "../staff.service";
import { StaffPermission } from "../../staffPermission/staffPermission";
import { StaffEdit } from "../edit/staff.edit";
import { StaffServiceCollection } from "../staff.service.collection";

@Component({
    selector: 'staff-staffPermission-detail',
    templateUrl: './staff.staffPermission.detail.html',
    styleUrls: [
        '../../../../../styles/detail.scss',
        './staff.staffPermission.detail.scss'
    ],
    imports: [
        CommonModule,
        DetailButton,
        StaffEdit,

    ]
})
export class Staff_StaffPermission_Detail extends DetailUI<Staff, StaffPermission> {

    protected serviceCollection: StaffServiceCollection;

    constructor() {
        super(inject(MasterTrackerService));
        this.serviceCollection = inject(StaffServiceCollection);
    }

    override onReload() {
        // this.currentInstance = new StaffPermission();
        // let list2: StaffPermission[] = [];
        // let sp = new StaffPermission();
        // sp.id = 1;
        // sp.staff = this.staff;
        // sp.description = "مجوزهای کاربر";
        // list2.push(sp);

        // sp = new StaffPermission();
        // sp.id = 2;
        // sp.staff = this.staff;
        // sp.description = "مجوزهای کاربر 2";
        // list2.push(sp);

        //this.service.serviceCollection.CollectionOfStaffPermission
        // this.list$ = of(list2);

        this.list$ = this.serviceCollection.CollectionOfStaffPermission(this.masterId);
    }

    // override onAddButtonClick(): void {
    //     console.log("Add button clicked");
    //     this.myModal.show();
    // }

    // override onEditButtonClick(): void {

    // }

    // override onDeleteButtonClick(): void {
    //     // Implement delete logic here
    // }

}
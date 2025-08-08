
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API_Operation } from '../../../../core/service/api.operation';
import { ServiceCollection } from '../../../../core/service/service.collection';


import { Staff } from './staff';
import { StaffPermission } from '../staffPermission/staffPermission';
import { Service } from '../../../../core/service/service';
import { StaffService } from './staff.service';

// import { StaffPermission } from '../StaffPermission/staffPermission';
// import { StaffRole } from '../StaffRole/staffRole';


@Injectable({ providedIn: 'root' })
export class StaffServiceCollection extends ServiceCollection<Staff> {

    constructor() {
        super(inject(StaffService));
    }

    //#region CollectionMethods



    CollectionOfStaffPermission(staff_id: number, staffPermission: StaffPermission = StaffPermission.SeekInstance()): Observable<StaffPermission[]> {
        return super.CollectionOf<StaffPermission>(new Staff(staff_id), staffPermission);
    }

    // CollectionOfStaffRole(staff: Staff, staffRole: StaffRole = StaffRole.SeekInstance()): Observable<StaffRole[]> {
    //     return super.CollectionOf<StaffRole>(staff, staffRole);
    // }

    //#endregion
}



import { inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import { MessageType, PermissionResult, PermissionType } from "../../../../core/tools/enum";
import { IService } from '../../../../core/service/service.interface';
import { Service } from "../../../../core/service/service";
import { PermissionController } from "../../../../core/tools/controller.permission";
import { MessageController } from "../../../../core/tools/controller.message";
import { Result } from "../../../../core/tools/Result";
import { Staff } from "./staff";
import { StaffServiceCollection } from "./staff.service.collection";


@Injectable({ providedIn: 'root' })
export class StaffService extends Service<Staff> implements IService<Staff> {

    constructor() {
        super(Staff.Info);
    }

    public ServiceCollection: StaffServiceCollection = inject(StaffServiceCollection);

    //#region     Abstract Members - Start.



    override CreateInstance(id: number = 0): Staff {
        return new Staff(id);
    }

    // override CreateInstance(): Staff {
    //     return new Staff();

    // }

    override CreateSeekInstance() {
        return Staff.SeekInstance();
    }

    //#region Methods

    override RetrieveById(id: number): Observable<Staff> {
        return super.RetrieveById(id);
    }

    override RetrieveAll(): Observable<Staff[]> {
        return super.RetrieveAll();
    }

    override Save(staff: Staff): Observable<Staff> {
        if (!Staff.Validate(staff)) {
            MessageController.ShowMessage(MessageType.NoValidEntity);
            return of(staff);
        }
        return super.Save(staff);
    }

    override SaveAttached(staff: Staff): Observable<Staff> {
        if (!Staff.Validate(staff)) {
            MessageController.ShowMessage(MessageType.NoValidEntity);
            return of(staff);
        }
        return super.SaveAttached(staff);
    }

    override SaveCollection(staffList: Staff[]): Observable<Result> {
        return super.SaveCollection(staffList);
    }

    override Delete(staff: Staff): Observable<boolean> {
        return super.Delete(staff);
    }

    override Seek(staff: Staff = Staff.SeekInstance(), pageNumber: number = 1): Observable<Staff[]> {
        return super.Seek(staff);
    }

    override SeekLast(staff: Staff): Observable<Staff> {
        return super.SeekLast(staff);
    }

    override SeekByValue(value: string = ''): Observable<Staff[]> {
        return super.SeekByValue(value);
    }

    //#endregion



    //# this section was Moved to ServiceCollection classes!
}



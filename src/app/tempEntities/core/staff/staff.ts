import { Info } from '../../../../core/info';
import { Validator } from '../../../../core/tools/validator';
import { StaffPermission } from '../staffPermission/staffPermission';//' /entities/core/staffPermission/staffPermission';
import { BaseEntity } from '../../../../core/BaseEntity';

export class Staff extends BaseEntity {

    constructor();
    constructor(id: number);
    constructor(id: number, descriptor: string);
    constructor(id: number, descriptor: string, info: Info);
    constructor(id: number = 0, descriptor: string = '', info: Info = Staff.Info) {
        super(id, descriptor, info);

    }

    //region Info

    public static override readonly Info: Info = new Info('Core', 'Staff', 'Staff');

    //endregion

    //#region Fields

    //public gender?: Gender = new Gender(); // <--------------------

    public firstName: string = '';

    public lastName: string = '';

    public email: string = '';


    //#endregion
    //#region Collection Properties

    public listOfStaffPermission: StaffPermission[] = [];

    //public: StaffPermission[] = [];

    //public: StaffRole[] = [];



    //#endregion


    // public get SeekInstance(): Staff | null {

    //     return Staff.SeekInstance();
    // }

    public static override SeekInstance(): Staff {
        let staff: Staff = new Staff();
        staff.firstName = '';
        staff.lastName = '';
        return staff;


        //let staff: Staff = new Staff();
        // No Item...
        //staff.ResetPaginate();
        //return staff;


    }

    public static Validate(staff: Staff): boolean {
        let result = Validator.Validate(staff.firstName) &&
            Validator.Validate(staff.lastName);
        if (result === false)
            console.log('Staff is unvalid : ', staff);
        return result;
    }
}

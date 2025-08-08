import { Info } from '../../../../core/info';
import { Staff } from '../staff/staff';
import { Validator } from '../../../../core/tools/validator';
import { BaseEntity } from '../../../../core/BaseEntity';
import { IBaseEntity } from '../../../../core/IBaseEntity';


export class StaffPermission extends BaseEntity implements IBaseEntity<StaffPermission> {

  constructor();
  constructor(id: number);
  constructor(id: number, descriptor: string);
  constructor(id: number, descriptor: string, info: Info);
  constructor(id: number = 0, descriptor: string = '', info: Info = StaffPermission.Info) {
    super(id, descriptor, info);

  }

  //region Info

  public static override readonly Info: Info = new Info('Core', 'StaffPermission', 'StaffPermission');

  //endregion

  //#region Fields

  public staff: Staff = new Staff();

  public add: boolean = false;
  public edit: boolean = false;
  public delete: boolean = false;
  public viewIndex: boolean = false;
  public isActive: boolean = false;
  public description: string = '';

  //#endregion
  //#region Collection Properties

  //#endregion


  public override SeekInstance(): StaffPermission {
    return StaffPermission.SeekInstance();
  }

  public static override SeekInstance(): StaffPermission {
    let staffPermission: StaffPermission = new StaffPermission();
    staffPermission.staff = Staff.SeekInstance();
    staffPermission.description = '';
    return staffPermission;
  }

  public static Validate(staffPermission: StaffPermission): boolean {
    let result = Validator.Validate<Staff>(staffPermission.staff);
    if (result === false)
      console.log('Staff is unvalid : ', staffPermission);
    return result;
  }
}
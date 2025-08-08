import { Info } from "./info";
import { IBaseEntity } from './IBaseEntity';

export class BaseEntity implements IBaseEntity<BaseEntity> {

  public static readonly Info: Info = new Info('Schema', 'Name', 'Title');
  public readonly info: Info = BaseEntity.Info;

  constructor(id: number = 0, timestamp: string = '', info: Info = new Info()) {
    this.id = id;
    this.timestamp = timestamp;
    this.info = info;
  }

  id: number;

  timestamp: string;

  descriptor: string = '';

  fullDescriptor: string = '';

  isNew: boolean = true;

  public static SeekInstance(): BaseEntity {
    return new BaseEntity();
  }

  static Confirm(entity: BaseEntity): boolean {
    return entity && entity.id !== undefined && entity.id > 0;
  }

  static NotConfirm(entity: BaseEntity): boolean {
    //return !entity || entity.id === undefined || entity.id <= 0;
    return BaseEntity.Confirm(entity) === false;
  }

  // public get SeekInstance(): BaseEntity {
  //   return this;
  // }


}
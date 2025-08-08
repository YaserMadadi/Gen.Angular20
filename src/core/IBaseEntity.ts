import { BaseEntity } from './BaseEntity';
import { Info } from './info';

export interface IBaseEntity<T extends BaseEntity> {

    id: number;

    descriptor: string;

    fullDescriptor: string;

    timestamp: string;

    info: Info;

    isNew: boolean;

    //SeekInstance(): T;

    //newInstance<T>(type: (new () => T)): T;
}
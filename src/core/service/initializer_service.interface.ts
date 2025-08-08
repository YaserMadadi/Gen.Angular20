import { BaseEntity } from '../BaseEntity';

export interface IInitializerService<T extends BaseEntity> {


    CreateInstance(id: number): T;
    CreateInstance(): T;

    CreateSeekInstance(): T;
}
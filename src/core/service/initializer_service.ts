import { BaseEntity } from "../BaseEntity";
import { IInitializerService } from "./initializer_service.interface";


export abstract class InitializerService<T extends BaseEntity> implements IInitializerService<T> {

    abstract CreateInstance(id: number): T;
    abstract CreateInstance(): T;
    abstract CreateSeekInstance(): T;

}
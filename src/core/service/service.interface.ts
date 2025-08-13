import { Observable } from "rxjs";
import { BaseEntity } from "../BaseEntity";
import { Result } from "../tools/Result";
import { PermissionType } from "../tools/enum";
import { Info } from "../info";
import { IServiceCollection } from "./service.collection.interface";
import { API_Operation } from "./api.operation";
import { ServiceCollection } from "./service.collection";


export interface IService<T extends BaseEntity> {

    api_operation: API_Operation<T>;

    Save(entity: T): Observable<T>;

    SaveCollection(listOfEntity: T[]): Observable<Result>;

    SaveAttached(entity: T): Observable<T>;

    RetrieveById(id: number): Observable<T>;

    RetrieveAll(): Observable<T[]>;

    Delete(entity: T): Observable<boolean>;

    Seek(entity: T): Observable<T[]>;

    SeekByValue(value: string): Observable<T[]>;

    Navigate(info: Info, id: number, permissionType: PermissionType): boolean;
}
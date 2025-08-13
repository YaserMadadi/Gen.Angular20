import { Observable } from "rxjs";
import { BaseEntity } from "../BaseEntity";
import { API_Operation } from "./api.operation";
import { IService } from "./service.interface";

export interface IServiceCollection<T extends BaseEntity> {

    api_operation: API_Operation<T>;

    //Service: IService<T>;

    //CollectionOf<U extends BaseEntity>(sourcEntity: T, collectionEntity: U, extendedPath?: string): Observable<U[]>;
}
//import { API_Operation } from "../api.operation";
import { HttpErrorResponse } from "@angular/common/http";
//import { MessageController, toastType } from "../../tools/controller.message";
import { BaseEntity } from "../BaseEntity";
import { API_Operation } from "./api.operation";
import { Result } from "../tools/Result";
import { MessageController, toastType } from "../tools/controller.message";
import { catchError, map, Observable, of } from "rxjs";
import { IServiceCollection } from "./service.collection.interface";
import { IService } from "./service.interface";
import { inject } from "@angular/core";

export class ServiceCollection<T extends BaseEntity> implements IServiceCollection<T> {

    public api_operation: API_Operation<T>;

    public Service: IService<T>;

    constructor(service: IService<T>) {
        this.api_operation = service.api_operation;
        this.Service = service;
    }

    protected CollectionOf<U extends BaseEntity>(sourcEntity: T, collectionEntity: U, extendedPath?: string): Observable<U[]> {

        if (!sourcEntity || sourcEntity.id <= 0) {
            //console.log(`Error in Collection Of ${targetInfo.fullName}..`, entity);
            return of([] as U[]);
        }

        return this.api_operation.CollectionOf<U>(sourcEntity, collectionEntity, extendedPath)
            .pipe(
                map(list => list),
                catchError(error => {
                    console.log(`Error in CollectionOf${collectionEntity.info.name} from ${sourcEntity.info.fullName}. Error : ${error}`);
                    this.errorHandler(error, 'بازیابی رکوردهای وابسته');
                    return of([] as U[]);
                })
            );
    }

    private errorHandler(error: any, action: string): void {
        if (error instanceof HttpErrorResponse) {

            let result: Result = <Result>error.error;
            console.log('Result in Error Handler : ', result);

            if (result && result.message && result.message.length > 0)
                MessageController.ShowMessage(result.message, toastType.error);
            else if (result && result.message && result.message.length > 0)
                MessageController.ShowMessage(result.message, toastType.error);
            else
                MessageController.ShowMessage(`خطا در ${action} اطلاعات : ${error}`, toastType.error);
        } else {
            console.log('Error : ', error);
            MessageController.ShowMessage(`خطا در ${action} اطلاعات`, toastType.error);
        }
    }
}
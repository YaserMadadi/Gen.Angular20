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
import { ResultData } from "../tools/ResultData";

export class ServiceCollection<T extends BaseEntity> implements IServiceCollection<T> {

    public api_operation: API_Operation<T> = inject(API_Operation<T>);

    constructor(_api_operation: API_Operation<T>) {
        this.api_operation = _api_operation;

    }

    protected CollectionOf<U extends BaseEntity>(sourcEntity: T, collectionEntity: U, extendedPath?: string): Observable<U[]> {

        if (!sourcEntity || sourcEntity.id <= 0) {
            //console.log(`Error in Collection Of ${targetInfo.fullName}..`, entity);
            return of([] as U[]);
        }
        console.log('Im here!', collectionEntity);
        return this.api_operation.CollectionOf<U>(sourcEntity, collectionEntity, extendedPath)
            .pipe(
                map((result: ResultData<U[]>) => {
                    console.table(result.data);
                    return result.data;
                }),
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
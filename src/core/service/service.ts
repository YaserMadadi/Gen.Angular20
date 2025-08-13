import { HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageController, toastType } from '../tools/controller.message';
//import { API_Operation } from './api.operation';
// import { IService } from './base/service.interface';
import { PermissionController } from '../tools/controller.permission';
import { BaseEntity } from '../BaseEntity';
import { Info } from '../info';
import { PermissionResult, PermissionType } from '../tools/enum';
import { API_Operation } from './api.operation';
import { Result } from '../tools/Result';
import { ResultData } from '../tools/ResultData';
import { catchError, lastValueFrom, map, Observable, of } from 'rxjs';
import { IService } from './service.interface';
import { IServiceCollection } from './service.collection.interface';
import { ServiceCollection } from './service.collection';
import { ServiceBuilder } from './service.builder';


@Injectable({ providedIn: 'root' })
export abstract class Service<T extends BaseEntity> implements IService<T> {

    public info: Info;
    public builder: ServiceBuilder<T>;
    public router: Router;
    public activatedRoute: ActivatedRoute;
    public api_operation: API_Operation<T>;

    constructor(info: Info, builder: ServiceBuilder<T>) {
        this.router = inject(Router);
        this.activatedRoute = inject(ActivatedRoute);
        this.api_operation = inject(API_Operation<T>);
        this.info = info;
        this.builder = builder;
    }

    //#region Permission
    CheckPermission(permissionType: PermissionType): PermissionResult {
        return PermissionController.Check(this.info, permissionType);
    }
    //#endregion Permission


    //#region   Commands
    public Save(entity: T): Observable<T> {
        return this.api_operation.Save(entity)
            .pipe(
                map((result: ResultData<T>) => {
                    MessageController.ShowMessage('Save Successfully done...', toastType.success);
                    return result.data;
                }),
                catchError((err: any, c: Observable<T>) => {
                    console.log('Error in Save Method!');
                    this.errorHandler(err, 'Saving Command');
                    return of(<T>new BaseEntity(-1));
                })

            )
    }

    public SaveCollection(list: T[]): Observable<Result> {
        if (list.length == 0)
            return of(new Result(0, ''));
        return this.api_operation.SaveCollection(list, this.info)
            .pipe(
                map((result: Result) => {
                    MessageController.ShowMessage('Save Collection Successfully done...', toastType.success);
                    return result;
                }),
                catchError((err: any, c: Observable<Result>) => {
                    this.errorHandler(err, 'Saving Collection Command');
                    return of(new Result(-1, err));
                })
            );
    }

    public SaveAttached(entity: T): Observable<T> {
        return this.api_operation.SaveAttached(entity)
            .pipe(
                map((entity: T) => {
                    MessageController.ShowMessage('Save Entity and All Related Successfully done...', toastType.success);
                    return entity;
                }),
                catchError((err: any, c: Observable<T>) => {
                    this.errorHandler(err, 'Saving Command');
                    return of(<T>new BaseEntity(-1));
                })
            );
    }
    //     entity => {
    //         console.log(entity);
    //         MessageController.ShowMessage('Save Entity and All Related Successfully done...', toastType.success);
    //         return entity;
    //     },
    //     error => {
    //         this.errorHandler(error, 'Saving Command');
    //         return <T>new BaseEntity(-1);
    //     });
    //}

    public RetrieveById(id: number): Observable<T> {
        console.log("Retrieve By Id ", id);
        return this.api_operation.RetrieveById(id, this.info)
            .pipe(
                map((result: ResultData<T>) => {
                    return result.data;
                }),
                catchError((err: any, c: Observable<T>) => {
                    console.log('Error');
                    this.errorHandler(err, 'RetrieveById');
                    return of(<T>new BaseEntity(-1));
                })
            );




        // .then(
        //     entity => entity,
        //     error => {
        //         this.errorHandler(error, 'RetrieveById');
        //         return Promise.resolve(null);
        //     });
    }

    public RetrieveAll(): Observable<T[]> {
        console.log("Service.Retrieve All ...");

        return this.api_operation.RetrieveAll(this.info)
            .pipe(
                map((result: ResultData<T[]>) => result.data),
                catchError((err: any, c: Observable<T[]>) => {
                    this.errorHandler(err, 'RetrieveAll');
                    return of([]);
                })
            );
        // error => {
        //     console.log(`Error : [${this.info.schema}].[${this.info.name}]`);
        //     this.errorHandler(error, 'RetrieveAll')
        //     return Promise.resolve([]);
        // });
    }

    public Seek(entity: T): Observable<T[]> {
        return this.api_operation.Seek(entity)
            .pipe(
                map((result: ResultData<T[]>) => {
                    return result.data;
                }),
                catchError((err: any, c: Observable<T[]>) => {
                    console.log(`Error in Seek : ${entity.info.fullName}. Error : ${err}`);
                    this.errorHandler(err, 'Seek');
                    return of([]);
                })
            );
        //     list => {
        //         return list;
        //     },
        //     error => {
        //         console.log(`Error in Seek : ${entity.info.fullName}. Error : ${error}`);
        //         this.errorHandler(error, 'Seek');
        //         return Promise.resolve([]);
        //     });
    }

    public SeekByValue(value: string): Observable<T[]> {
        if (typeof value === 'string' && value.trim().length < 1)
            return of([]);
        console.log('in service');
        return this.api_operation.SeekByValue(value, this.info)
            .pipe(
                map((result: ResultData<T[]>) => {
                    console.table(result.data);
                    return result.data;
                }),
                catchError((err: any, c: Observable<T[]>) => {
                    console.log(`Error in SeekByValue : ${this.info.fullName}. Error : ${err}`);
                    this.errorHandler(err, 'Seek By Value');
                    return of([]);
                })
            );
    }

    public SeekLast(entity: T): Observable<T> {
        return this.api_operation.SeekLast(entity)
            .pipe(
                map((item: T) => {
                    return item;
                }),
                catchError((err: any, c: Observable<T>) => {
                    console.log(`Error in SeekLast : ${entity.info.fullName}. Error : ${err}`);
                    this.errorHandler(err, 'Seek Last');
                    return of(<T>new BaseEntity(-1));
                })
            );
    }



    public Delete(entity: T): Observable<boolean> {
        return this.api_operation.Delete(entity)
            .pipe(
                map(result => {
                    if (result.id <= 0) {
                        MessageController.ShowMessage(result.message, toastType.error);
                        return false;
                    }
                    MessageController.ShowMessage(result.message, toastType.success);
                    return true;
                }),
                catchError((error: any, c: Observable<boolean>) => {
                    this.errorHandler(error, 'Delete');
                    console.log('Error in Delete : ', error);
                    return of(false);
                })
            );
    }

    //#endregion    Commands

    //#region CollectionOf Command
    protected CollectionOf<U extends BaseEntity>(sourcEntity: T, entity: U, extendedPath?: string): Observable<U[]> {

        if (BaseEntity.NotConfirm(sourcEntity))
            return of([]);

        return this.api_operation.CollectionOf<U>(sourcEntity, entity, extendedPath)
            .pipe(
                map((list: ResultData<U[]>) => {
                    return list.data;
                }),
                catchError((err: any, c: Observable<U[]>) => {
                    console.log(`Error in CollectionOf${entity.info.name} from ${sourcEntity.info.fullName}. Error : ${err}`);
                    this.errorHandler(err, `Retrieve CollectionOf<${entity.info.name}>`);
                    return of([]);
                })
            );
    }
    //#endregion    CollectionOf Command


    protected LoadFactory<U extends BaseEntity>(entity: T, info: Info): Observable<U> {
        return this.api_operation.LoadFactory<U>(entity, info)
            .pipe(
                map((entity: U) => {
                    return entity;
                }),
                catchError((err: any, c: Observable<U>) => {
                    console.log(`Error in LoadFactory : ${entity.info.fullName}. Error : ${err}`);
                    this.errorHandler(err, 'Load Factory');
                    return of(<U>new BaseEntity(-1));
                })
            );
    }
    //#endregion    CollectionOf Command



    private errorHandler(error: any, action: string) {

        if (error instanceof HttpErrorResponse) {
            console.log('Action : ', action, error);
            let result: Result = <Result>error.error;
            console.log('Result in Error Handler : ', result);

            if (result && result.message && result.message.length > 0)
                MessageController.ShowMessage(result.message, toastType.error);
            else if (result && result.message && result.message.length > 0)
                MessageController.ShowMessage(result.message, toastType.error);
            else
                MessageController.ShowMessage(`Error in ${action} • More Details : ${error}`, toastType.error);
        } else {
            console.log('Error : ', error);
            MessageController.ShowMessage(`Error in ${action} • More details : `, toastType.error);
        }
    }

    Navigate(info: Info, id: number = 0, permissionType: PermissionType): boolean {
        if (PermissionController.Check(info, permissionType) === PermissionResult.Denied)
            return false;
        this.router.navigate([info.schema, info.name, id]);
        return true;
    }
}
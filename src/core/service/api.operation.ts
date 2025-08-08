//import { Http, Headers, RequestOptions, Response, RequestOptionsArgs, ResponseContentType } from "@angular/http";
import { Injectable } from '@angular/core';
import { Actions } from "../tools/enum";
import { Info } from "../info";
import { BaseEntity } from "../BaseEntity";
import { ResultData } from "../tools/ResultData";
import { map, Observable } from "rxjs";
import { EndPointController } from "../tools/controller.endPoint";
import { HttpClient } from '@angular/common/http';
import { Result } from '../../core/tools/Result';


@Injectable({ providedIn: 'root' })
export class API_Operation<T extends BaseEntity> extends EndPointController {

  constructor(http: HttpClient) {
    super(http);
  }


  // private options = {
  //   withCredentials: false,
  //   headers: EndPointManager.Headers
  // };

  RetrieveAll(info: Info): Observable<ResultData<T[]>> {
    let url = this.UrlCreator(Actions.RetrieveAll, info);
    url += '/1';
    console.log('url : ', url);
    let r = this.http.get<ResultData<T[]>>(url, EndPointController.Options);
    console.log(r);
    return r;

  }

  RetrieveById(id: number, info: Info): Observable<ResultData<T>> {

    let url = this.UrlCreator(Actions.RetrieveById, info, id);
    console.log('URL : ', url);
    return this.http.get<ResultData<T>>(url, EndPointController.Options);
  }

  Save(entity: T): Observable<ResultData<T>> {
    let url = this.UrlCreator(Actions.Save, entity.info, entity.id);//super.FullUrl(`${entity.info.schema}/${entity.info.name}/${entity.id}`);
    console.log('Save Url : ', url);
    return this.http.post<ResultData<T>>(url, entity);//, EndPointController.Options);
  }

  SaveAttached(entity: T): Observable<T> {
    let url = this.UrlCreator(Actions.SaveAttached, entity.info);
    return this.http.post<T>(url, entity, EndPointController.Options);
  }

  SaveCollection(list: T[], info: Info): Observable<Result> {
    let url = this.UrlCreator(Actions.SaveCollection, info);
    return this.http.post<Result>(url, list, EndPointController.Options);
  }

  Delete(entity: T): Observable<Result> {
    let url = this.UrlCreator(Actions.Delete, entity.info, entity.id);
    return this.http.request<Result>('DELETE', url, { body: entity, headers: EndPointController.Options.headers });
  }

  Seek(entity: T): Observable<T[]> {
    let url = this.UrlCreator(Actions.Seek, entity.info);
    return this.http.post<T[]>(url, entity, EndPointController.Options);
  }

  SeekLast(entity: T): Observable<T> {
    let url = this.UrlCreator(Actions.SeekLast, entity.info);
    return this.http.post<T>(url, entity, EndPointController.Options);
  }

  SeekByValue(value: string, info: Info): Observable<ResultData<T[]>> {
    let url = this.UrlCreator(Actions.SeekByValue, info) + `/${value}`;
    console.log('Url : ', url);
    return this.http.get<ResultData<T[]>>(url, EndPointController.Options);
  }

  CollectionOf<U extends BaseEntity>(sourcEntity: T, entity: U, extendedPath: string = ''): Observable<U[]> {

    if (extendedPath === '' || extendedPath.length === 0)
      extendedPath = sourcEntity.info.name;

    let url = `${API_Operation.BaseUrl}${sourcEntity.info.schema}/${extendedPath}/${sourcEntity.id}/${entity.info.name}`;
    return this.http
      .post<U[]>(url, entity, EndPointController.Options);
  }

  LoadFactory<U extends BaseEntity>(entity: T, info: Info): Observable<U> {
    let url = `${API_Operation.BaseUrl}${entity.info.schema}/${entity.info.name}/${entity.id}/${info.name}`;
    return this.http.get<U>(url, EndPointController.Options);
  }

  // private handleError<T>(operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }




  // RetrieveReport(entity: T): Observable<T[]> {
  //   let url = this.UrlCreator(Actions.Report, entity.info);
  //   return this.http.put<T[]>(url, entity,
  //     {
  //       withCredentials: true,
  //       headers: EndPointManager.InitHeader()
  //     });
  // }

  // CallExtendedMethod<T extends BusinessObject>(url: string): Observable<T[]> {
  //   url = EndPointManager.BaseUrl + url;
  //   return this.http.get<T[]>(url, this.options);
  // }
}

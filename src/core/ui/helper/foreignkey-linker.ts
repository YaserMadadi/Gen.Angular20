import { Observable, of } from "rxjs";
import { BaseEntity } from "../../BaseEntity";
import { Info } from "../../info";
import { Service } from "../../service/service";
import { Injectable } from "@angular/core";


export class ForeignkeyLinker<T extends BaseEntity> {

    constructor(service: Service<T>, filterable: boolean = true) {
        this.service = service;
        this.filterable = filterable;
        this.info = service.info;
        this._instance = service.CreateInstance();
        if (filterable) {
            this.LoadList();
        }
    }

    private service: Service<T>;

    private info: Info;

    private _instance: T;

    public get instance(): T {
        return this._instance;
    }

    public set instance(value: T) {
        this._instance = value;
        this.list$ = of([value]);
    }

    public selectedItem!: T;

    public filterable: boolean;

    public list$: Observable<T[]> = new Observable<T[]>();

    public onSeek(value: string = '') {
        this.list$ = this.service.SeekByValue(value);
    }

    public onSelected(item: T) {
        this.selectedItem = item;
        this.instance = item;
    }

    public LoadList(): Observable<T[]> {
        this.list$ = this.service.RetrieveAll();
        return this.list$;
    }

}
import { ActivatedRoute, Router } from "@angular/router";
import { BaseEntity } from "../../BaseEntity";
import { Info } from "../../info";
import { Observable } from "rxjs";

import { IEditUI } from './editUI.interface';
import { DeleteUI } from "./deleteUI";
import { NgForm } from "@angular/forms";
import { EditUI } from "./editUI";

export interface IIndexUI<T extends BaseEntity> {
    currentInstance: T;
    filterInstance: T;

    list$: Observable<T[]>;

    router: Router;

    resetFilter(): void;

    onInit(): void;

    onSeek(value: string): void;
    onRetrieveById(): void; // to update a single record!
    onRetrieveAll(): void;
    onSelect(record: T): void; // fire when a record from list is selected

    onDoubleClick(editUI: EditUI<T>): void; // Open the masterUI

    addRecord(editUI: IEditUI<T>): void;
    editRecord(editUI: IEditUI<T>): void;
    deleteRecord(deleteUI: DeleteUI<T>): void; // <----- TODO: Should be convert to DeleteUI<T>

    onLog(): void;

    navigateToMaster(info: Info): void;
}
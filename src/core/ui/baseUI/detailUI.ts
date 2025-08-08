import { Observable, Subscription } from "rxjs";
import { BaseEntity } from "../../BaseEntity";
import { Service } from "../../service/service";
import { Injectable, Input, OnDestroy, OnInit, computed } from "@angular/core";
import { MasterTrackerService } from "../../service/uiService/master-tracker-service";

import { IEditUI } from './editUI.interface';
import { IDeleteUI } from './deleteUI.interface';
import { ServiceCollection } from "../../service/service.collection";

@Injectable()
export abstract class DetailUI<TParent extends BaseEntity, TChild extends BaseEntity> {

    constructor(private masterTrackerService: MasterTrackerService) {
        // Initialization logic can go here if needed   

    }

    details = computed(() => {
        this.masterId = this.masterTrackerService.masterId();
        this.onReload();
    });

    masterId: number = 0;

    currentInstance!: TChild;

    list$: Observable<TChild[]> = new Observable<TChild[]>();

    abstract onReload(): void;

    onAddButtonClick(modal: IEditUI<TChild>): void {
        modal.Show();
    }

    onEditButtonClick(modal: IEditUI<TChild>): void {
        if (!this.currentInstance) {
            // Message Show ( No record was selected! )
            return;
        }
        modal.Show(this.currentInstance);
    }

    onDeleteButtonClick(modal: IDeleteUI<TChild>): void {
        if (!this.currentInstance) {
            // Message Show ( No record was selected! )
            return;
        }
        modal.Show(this.currentInstance);

    }
}
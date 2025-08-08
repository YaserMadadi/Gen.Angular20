import { Component, inject, Input, Output } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { IEditUI } from "../../../../core/ui/baseUI/editUI.interface";
import { BaseEntity } from "../../../../core/BaseEntity";
import { IDeleteUI } from "../../../../core/ui/baseUI/deleteUI.interface";
import { EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'row-buttons',
    templateUrl: './row-buttons.html',
    imports: [
        RouterModule,
        CommonModule
    ]
})
export class RowButtons {

    private router: Router;

    constructor() {
        this.router = inject(Router);
    }

    @Input() editButtonEnable: boolean = true;
    @Input() deleteButtonEnable: boolean = true;
    @Input() detailButtonEnable: boolean = true;

    @Input() editButtonVisible: boolean = false;
    @Input() deleteButtonVisible: boolean = false;
    @Input() detailButtonVisible: boolean = true;

    @Input() editButtonText: string = 'ویرایش';
    @Input() deleteButtonText: string = 'حذف';
    @Input() detailButtonText: string = '...';

    @Input() route: string = '';
    @Input() id: number = 0;

    @Output() onEdit: EventEmitter<void> = new EventEmitter<void>();
    @Output() onDelete: EventEmitter<void> = new EventEmitter<void>();

    onNavigate() {
        this.router.navigateByUrl(`${this.route}/${this.id}`);
    }
}
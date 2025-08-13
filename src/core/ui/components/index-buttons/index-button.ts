import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Button } from 'primeng/button';
import { freeSet } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu';
import { DropdownMenuItem } from '../dropdown-menu/dropdown-menu-item.model';
import { VerticalSeperator } from '../vertical-seperator/vertical-seperator';
import { IconModule } from '@coreui/icons-angular';
import { BaseEntity } from '../../../BaseEntity';
import { LogViewerService } from '../log-viewer/log-viewer.service';

@Component({
    selector: 'index-button',
    templateUrl: './index-button.html',
    styleUrls: ['./index-button.scss'],
    standalone: true,
    imports: [
        CommonModule,
        VerticalSeperator,
        DropdownMenuComponent,
        IconModule
    ]
})
export class IndexButton {

    private LogViewerService!: LogViewerService;

    constructor() {
        this.LogViewerService = inject(LogViewerService);
    }

    private _linkedEntityItems: DropdownMenuItem[] = [];

    @Input()
    set linkedEntityItems(value: DropdownMenuItem[]) {
        this._linkedEntityItems = value;
        //this.quickAddMenuDisabled = value.length == 0;
    }

    @Input()
    quickAddItems: DropdownMenuItem[] = [];

    @Input()
    quickAddMenuDisabled: boolean = true;

    @Input()
    linkedEntityMenuDisabled: boolean = false;

    icons = freeSet;

    // Add component logic here
    @Output() addButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() editButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() deleteButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() refreshButtonClick: EventEmitter<void> = new EventEmitter<void>();
    @Output() logButtonClick: EventEmitter<void> = new EventEmitter<void>();

    // Allow visibility to be set from outside via @Input() attributes

    //@Input() Id: number = 0;
    private _currentInstance!: BaseEntity;

    @Input() set currentInstance(value: BaseEntity) {
        this._currentInstance = value;
        this.quickAddMenuDisabled = value.id == 0;
    }

    get currentInstance(): BaseEntity {
        return this._currentInstance;
    }

    @Input() addButtonVisibility: boolean = true;
    @Input() editButtonVisibility: boolean = true;
    @Input() deleteButtonVisibility: boolean = true;
    @Input() refreshButtonVisibility: boolean = true;
    @Input() logButtonVisibility: boolean = true;

    @Input() public addButtonEnabled: boolean = true;
    @Input() public editButtonEnabled: boolean = true;
    @Input() public deleteButtonEnabled: boolean = true;
    @Input() public refreshButtonEnabled: boolean = true;
    @Input() public logButtonEnabled: boolean = true;


    onLogButtonClicked() {
        this.LogViewerService.Open(this.currentInstance);
    }

}
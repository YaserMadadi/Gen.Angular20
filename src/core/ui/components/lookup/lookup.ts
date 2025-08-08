// Lookup Version 01
//#region Imports
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    DoCheck
} from '@angular/core';
import {
    Subject,
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    tap
} from 'rxjs';
import { BaseEntity } from '../../../BaseEntity';
//#endregion

@Component({
    selector: 'lookup',
    templateUrl: './lookup.html',
    styleUrls: ['./lookup.css'],
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class LookupComponent {
    @Input() items!: any[];
    @Input() textField: string = '';
    @Input() valueField: string = '';
    @Input() filterPlaceHolder: string = 'عبارت جستجو ...';
    @Input() notSelectedItemMessage: string = 'لطفا یک رکورد انتخاب نمایید';
    @Input() emptyListMessage: string = 'رکوردی یافت نشد';
    @Input() label: string = 'عنوان :';

    @Input() set selectedItem(value: any) {
        this._selectedItem = value;
        this.selectedItemChange.emit(value);
        this.onSelected.emit(value);
    }

    get selectedItem(): any {
        return this._selectedItem;
    }

    private _selectedItem: any;

    @Output() selectedItemChange = new EventEmitter<any>();

    @Output() onSelected = new EventEmitter<any>();
    @Output() onSeek = new EventEmitter<string>();

    @ViewChild('filterInput') set filterInputSetter(el: ElementRef<HTMLInputElement>) {
        if (el) {
            queueMicrotask(() => el.nativeElement.focus());
        }
    }

    searchTerm = '';
    //selectedItem: any = null;
    showDropdown = false;

    private filterSubject = new Subject<string>();

    get displayText(): string {
        return this.hasSelectedItem ? this.selectedItem[this.textField] : this.notSelectedItemMessage;
    }

    get hasSelectedItem(): boolean {
        return BaseEntity.Confirm(this.selectedItem);
    }

    constructor() {
        this.items = [];
        this.filterSubject.pipe(
            debounceTime(300),
            map((v) => v?.trim()),
            tap((v) => {
                //if (!v) this.items = []
            }),
            filter((v) => !!v),
            distinctUntilChanged()
        ).subscribe(term => {
            this.onSeek.emit(term);
        });
    }

    onFilterInputChanged() {
        this.filterSubject.next(this.searchTerm);
    }

    highlightedIndex = -1;

    onKeyDown(event: KeyboardEvent) {
        if (this.items != null && this.items !== undefined && this.items.length === 0) return;
        switch (event.key) {
            case 'ArrowDown':
                this.highlightedIndex = (this.highlightedIndex + 1) % this.items?.length;
                event.preventDefault();
                break;
            case 'ArrowUp':
                this.highlightedIndex =
                    (this.highlightedIndex - 1 + this.items.length) % this.items.length;
                event.preventDefault();
                break;
            case 'Enter':
                if (this.highlightedIndex >= 0 && this.items[this.highlightedIndex]) {
                    this.selectItem(this.items[this.highlightedIndex]);
                }
                break;
            // case 'Escape':
            //     this.closeDropdown();
            //     break;
        }
    }

    selectItem(item: any) {
        this.selectedItem = item;
        this.showDropdown = false;
        this.searchTerm = '';
    }

    toggleDropdown(event?: MouseEvent) {
        if (event) {
            event.stopPropagation(); // Prevent modal from closing
        }
        this.showDropdown = !this.showDropdown;
        if (this.showDropdown) {
            this.searchTerm = '';
            this.onSeek.emit('');
        }
    }

    closeDropdown() {
        this.showDropdown = false;
    }

    clearSelection() {
        console.log("Clear Selection");
        this.selectedItem = null;
        this.searchTerm = '';
    }


}
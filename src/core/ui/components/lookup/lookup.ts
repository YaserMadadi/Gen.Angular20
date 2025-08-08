import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs';

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
    @Input() items: any[] | null = [];
    @Input() textField: string = '';
    @Input() valueField: string = '';
    @Input() emptyListMessage: string = 'رکوردی یافت نشد';
    @Input() label: string = 'Gender :';

    //@Input() onSeekByValue!: (value: string) => Observable<any[]>;


    @Output() onSelected = new EventEmitter<any>();
    @Output() onSeek = new EventEmitter<string>();

    @ViewChild('filterInput') set filterInputSetter(el: ElementRef<HTMLInputElement>) {
        if (el) {
            queueMicrotask(() => el.nativeElement.focus());
        }
    }

    searchTerm = '';
    selectedItem: any = null;
    showDropdown = false;

    private filterSubject = new Subject<string>();

    get displayText(): string {
        return this.selectedItem ? this.selectedItem[this.textField] : 'Select';
    }

    constructor() {
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

    selectItem(item: any) {
        this.selectedItem = item;
        this.onSelected.emit(item);
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

    clearSelection() {
        console.log("Clear Selection");
        this.selectedItem = null;
        this.searchTerm = '';
    }


}
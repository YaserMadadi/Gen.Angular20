// Lookup Version 01
//#region Imports
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
    ElementRef,
    DoCheck,
    forwardRef,
    SimpleChanges,
    OnInit,
    AfterViewInit,
    HostListener
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
import { Base } from 'primeng/base';
//#endregion

@Component({
    selector: 'lookup',
    templateUrl: './lookup.html',
    styleUrls: ['./lookup.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => LookupComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => LookupComponent),
            multi: true
        }
    ],
    imports: [
        FormsModule,
        CommonModule
    ]
})
export class LookupComponent implements ControlValueAccessor, Validator, AfterViewInit {
    private filterSubject = new Subject<string>();

    private selectedItemSubject = new Subject<BaseEntity | undefined>();

    constructor() {
        this.items = [];
        this.filterSubject.pipe(
            debounceTime(300),
            map((v) => v?.trim()),
            tap((v) => {
                //if (!v) this.items = []
            }),
            filter((v) => v.length >= 2),
            //distinctUntilChanged()
        ).subscribe(term => {
            this.onSeek.emit(term);
        });

        this.selectedItemSubject.pipe(
            debounceTime(100),
            //filter((v) => v.),
            distinctUntilChanged()
        ).subscribe(item => {
            this.selectedItemChange.emit(item);
            // if (item instanceof BaseEntity && item.id <= 0) {
            //     this.selectedItemChange.emit(item);
            // } else {
            //     this.selectedItemChange.emit(item);
            // }
        });
    }
    ngAfterViewInit(): void {
        this.onInit.emit(true);
    }

    onFilterInputChanged() {
        this.filterSubject.next(this.searchTerm);
    }


    @Input() items: any[] | null = [];
    @Input() textField: string = '';
    @Input() valueField: string = '';
    @Input() filterPlaceHolder: string = 'عبارت جستجو ...';
    @Input() notSelectedItemMessage: string = 'لطفا یک رکورد انتخاب نمایید';
    @Input() emptyListMessage: string = 'رکوردی یافت نشد';
    @Input() label: string = '';
    @Input() required: boolean | string = false;
    @Input() filterable: boolean = false;
    @Input() locked: boolean = false;

    public hasLabel(): boolean {
        return this.label.trim().length > 0;
    }

    //#region   twoway binding for SelectedItem
    private _selectedItem: any;

    @Input() set selectedItem(value: any) {
        //this.highlightedIndex = (value === null) ? -1 : value[this.valueField];
        this._selectedItem = value;
        this.selectedItemSubject.next(value);
        if (!this.filterable) {
            return;
        }
        if (value instanceof BaseEntity && value.id <= 0) {
            this.searchTerm = '';
            //this.items = [];
        } else {
            // if (value)
            //     this.items = [value];
            // else
            //     this.items = [];
        }
    }

    get selectedItem(): any {
        return this._selectedItem;
    }

    @Output() selectedItemChange = new EventEmitter<any>();
    //#endregion    twoway binding for SelectedItem

    @Output() onSeek = new EventEmitter<string>();
    @Output() onInit = new EventEmitter<boolean>();


    @ViewChild('lookupWrapper') lookupWrapper!: ElementRef;

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
        if (!this.lookupWrapper.nativeElement.contains(event.target)) {
            this.closeDropdown(); // Clicked outside
        }
    }
    // onFocusOut(event: FocusEvent) {
    //     console.log('Focus out event:', event);
    //     setTimeout(() => {
    //         if (!this.filterable)
    //             this.closeDropdown();
    //     }, 2000);
    // }

    //#region   required and [(ngModel)] validation
    // --- ControlValueAccessor ---
    private _onChange: (v: any) => void = () => { };
    private _onTouched: () => void = () => { };

    // Validator change notifier
    private _onValidatorChange: (() => void) | null = null;

    // ngModel → component
    writeValue(value: any): void {
        this.selectedItem = value;
    }

    // component → ngModel
    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        // implement if you want to disable the component UI
    }

    // --- Validator ---
    validate(control: AbstractControl): ValidationErrors | null {
        if (this.isRequired()) {
            // decide what "empty" means for your lookup: null/''/undefined => invalid
            const empty =
                this.selectedItem === null ||
                this.selectedItem === undefined ||
                BaseEntity.Confirm(this.selectedItem) === false;
            return empty ? { required: true } : null;
        }
        return null;
    }

    registerOnValidatorChange?(fn: () => void): void {
        this._onValidatorChange = fn;
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['required'] && this._onValidatorChange) {
            // notify Angular that validation rules changed
            this._onValidatorChange();
        }
    }

    // helper for boolean coercion of required attribute (handles required="" case)
    private isRequired(): boolean {
        return (
            this.required === '' ||
            this.required === true ||
            this.required === 'true' ||
            this.required === 'required'
        );
    }

    //#endregion

    @ViewChild('filterInput', { static: true })
    filterInput!: ElementRef<HTMLInputElement>;

    focusInput() {
        if (this.filterInput) {
            this.filterInput.nativeElement.focus();
        }
    }

    searchTerm = '';
    //selectedItem: any = null;
    showDropdown = false;



    get displayText(): string {
        return this.hasSelectedItem ? this.selectedItem[this.textField] : this.notSelectedItemMessage;
    }

    get hasSelectedItem(): boolean {
        return BaseEntity.Confirm(this.selectedItem);
    }



    highlightedIndex = -1;

    onKeyDown(event: KeyboardEvent) {
        console.log('Key down event:', event);
        console.log('Highlighted index:', this.highlightedIndex);
        if (this.items == null || this.items.length === 0) return;
        switch (event.key) {
            case 'ArrowDown':
                this.highlightedIndex += 1;
                if (this.highlightedIndex >= this.items.length) {
                    this.highlightedIndex = 0;
                }
                event.preventDefault();
                break;
            case 'ArrowUp':
                this.highlightedIndex -= 1;
                if (this.highlightedIndex < 0) {
                    this.highlightedIndex = this.items.length - 1;
                }
                // this.highlightedIndex =
                //     (this.highlightedIndex - 1 + this.items.length) % this.items.length;
                event.preventDefault();
                break;
            case 'Enter':
                if (this.highlightedIndex >= 0 && this.items[this.highlightedIndex]) {
                    this.onSelectItem(this.items[this.highlightedIndex]);
                }
                break;
            case 'Escape':
                this.closeDropdown();
                break;
        }
    }

    onSelectItem(item: any) {
        this.selectedItem = item;
        this.highlightedIndex = -1;// this.items?.findIndex(it => it[this.valueField] === item[this.valueField])?.valueOf() ?? -1;
        this.showDropdown = false;
        this.searchTerm = '';
        this._onChange(this.selectedItem);
        this._onTouched();
        if (this._onValidatorChange) this._onValidatorChange();

    }

    toggleDropdown(event?: MouseEvent) {
        if (event) {
            event.stopPropagation(); // Prevent modal from closing
        }
        this.showDropdown = !this.showDropdown;
        if (this.showDropdown) {
            this.searchTerm = '';
            this.focusInput();
            //this.onInit.emit(true);
            //this.onSeek.emit('');
        }
    }

    closeDropdown() {
        this.showDropdown = false;
    }

    clearSelection() {
        if (this.filterable) {
            //this.items = [];
        }
        this.searchTerm = '';
        this.selectedItem = null;
        this.closeDropdown();
    }


}
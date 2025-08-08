
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
import { Observable } from 'rxjs';

@Component({
    selector: 'seek-bar',
    templateUrl: './seek-bar.html',
    standalone: true,
    imports: [
        FormsModule
    ]
})
export class SeekBar {
    ngAfterViewInit() {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        Array.from(popoverTriggerList).forEach(el => new bootstrap.Popover(el));
    }

    @Output() onSeeking: EventEmitter<string> = new EventEmitter<string>();

    @Input() minCount: number = 2;

    public contentMessage: string = `برای شروع جستجو، حداقل ${this.minCount.toString()} کارکتر وارد کنید`;

    timeoutId: any;

    onSeek(value: string) {
        if (value.length > 0 && value.length < this.minCount)
            return;

        clearTimeout(this.timeoutId);  // cancel previous timer
        this.timeoutId = setTimeout(() => {
            this.onSeeking.emit(value);
        }, 1000);  // 1000ms = 1 second delay

    }


}
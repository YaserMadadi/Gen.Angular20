import { Component, Input } from "@angular/core";

@Component({
    selector: 'presenter',
    templateUrl: './presenter.html',
    standalone: true
})
export class Presenter {

    @Input() name: string = '';

    @Input() title: string = 'عنوان';

    @Input() value: string | number | Date | undefined | null = '';



}
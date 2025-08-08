import { Component, Input } from "@angular/core";

@Component({
    selector: 'presenter-textbox',
    templateUrl: './presenter-textbox.html',
    standalone: true,
    imports: [

    ]
})
export class PresenterTextBox {

    @Input() title: string = 'عنوان';

}
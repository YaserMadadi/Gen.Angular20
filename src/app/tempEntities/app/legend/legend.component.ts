import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Fieldset } from 'primeng/fieldset';

@Component({
    selector: 'legend-edit',
    templateUrl: './legend.component.html',
    imports: [
        FormsModule,
        Fieldset
    ]
})
export class LegendComponent {

}
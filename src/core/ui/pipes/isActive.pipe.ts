
import { Pipe, PipeTransform } from '@angular/core';
import { isUndefined } from 'lodash-es';

@Pipe({
    name: 'isActive'
})
export class isActivePipe implements PipeTransform {

    // {{ user.isActive | isActive:'Enabled':'Disabled' }}      =>>> manualValue  =>>>  true->Enabled   , false->Disabled
    // {{ user.isActive | isActive }}                           =>>> defaultValue =>>>  true->Active    , false->Insactive
    transform(value: boolean | undefined, trueText: string = 'Active', falseText: string = 'Inactive') {
        if (isUndefined(value))
            return '';
        return value ? trueText : falseText;
    }
}
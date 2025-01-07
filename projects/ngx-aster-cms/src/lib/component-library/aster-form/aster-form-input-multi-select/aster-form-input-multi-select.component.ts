import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AsterFormInput} from '../interface/aster-form-input';
import {AsterFormSelectOption} from '../interface/aster-form-select-option';
import {NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent,} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'aster-form-input-multi-select',
    imports: [
        CommonModule,
        NgLabelTemplateDirective,
        NgOptionTemplateDirective,
        NgSelectComponent,
        FormsModule
    ],
    templateUrl: './aster-form-input-multi-select.component.html',
    styleUrls: ['./aster-form-input-multi-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsterFormInputMultiSelectComponent<T> {

    @Input() data: AsterFormInput<T, AsterFormSelectOption> = {} as AsterFormInput<T, AsterFormSelectOption>;

    public selectedOption: AsterFormSelectOption[] = [];

    constructor() {
        this.selectedOption = this.data.multiSelectDefaultValue || [];
    }

    // TODO: set option to default value if no options available
	// TODO: set option to default value
}

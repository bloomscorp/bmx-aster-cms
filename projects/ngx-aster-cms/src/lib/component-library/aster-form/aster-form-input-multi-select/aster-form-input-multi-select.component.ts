import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, Input, signal, WritableSignal } from '@angular/core';
import { AsterFormInput } from '../interface/aster-form-input';
import { AsterFormSelectOption } from '../interface/aster-form-select-option';
import { NgSelectComponent, } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'aster-form-input-multi-select',
    imports: [
        CommonModule,
        NgSelectComponent,
        FormsModule
    ],
    templateUrl: './aster-form-input-multi-select.component.html',
    styleUrls: ['./aster-form-input-multi-select.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsterFormInputMultiSelectComponent<T> {

    private _multiSelectDefaultValue: WritableSignal<AsterFormSelectOption[]> = signal({} as AsterFormSelectOption[]);

    @Input() data: AsterFormInput<T, AsterFormSelectOption> = {} as AsterFormInput<T, AsterFormSelectOption>;

    @Input() set multiSelectDefaultValue(value: AsterFormSelectOption[]) {
        this._multiSelectDefaultValue.set(value);
    }

    get multiSelectDefaultValue(): AsterFormSelectOption[] {
        return this._multiSelectDefaultValue();
    }

    constructor() {
        effect(() => {
            if (this._multiSelectDefaultValue()) {
            }
        })
    }

    compareFn(item: AsterFormSelectOption, selected: AsterFormSelectOption) {
        return item.value === selected.value;
    }

    // TODO: set option to default value if no options available
    // TODO: set option to default value
}

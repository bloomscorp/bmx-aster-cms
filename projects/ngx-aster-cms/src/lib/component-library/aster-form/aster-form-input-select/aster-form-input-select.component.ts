import {Component, effect, Input, OnInit, signal, WritableSignal} from '@angular/core';
import {AsterFormInput} from "../interface/aster-form-input";
import {AsterFormSelectOption} from "../interface/aster-form-select-option";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'aster-form-input-select',
    imports: [
        NgForOf
    ],
    templateUrl: './aster-form-input-select.component.html',
    styleUrl: './aster-form-input-select.component.scss'
})
export class AsterFormInputSelectComponent<T> implements OnInit {

	@Input() data: AsterFormInput<T, AsterFormSelectOption> = {} as AsterFormInput<T, AsterFormSelectOption>;

    private _defaultValue: WritableSignal<AsterFormSelectOption> = signal({} as AsterFormSelectOption);

    @Input() set defaultValue(defaultValue: AsterFormSelectOption) {
        this._defaultValue.set(defaultValue);
    }

    get defaultValue(): AsterFormSelectOption {
        return this._defaultValue();
    }

    constructor() {
        effect(() => {
            if (this._defaultValue()) {
                this.data.defaultValue = this._defaultValue();
            }
        })
    }
    
    ngOnInit(): void {
    }
    
    public onChange(event: any) {
        this.data.defaultValue = this.data.options.find(option => option.value === event.target.value) as AsterFormSelectOption;
    }
}

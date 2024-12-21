import {Component, Input, OnInit} from '@angular/core';
import {AsterFormInput} from "../interface/aster-form-input";
import {AsterFormSelectOption} from "../interface/aster-form-select-option";
import {NgForOf} from "@angular/common";

@Component({
	selector: 'aster-form-input-select',
	standalone: true,
	imports: [
		NgForOf
	],
	templateUrl: './aster-form-input-select.component.html',
	styleUrl: './aster-form-input-select.component.scss'
})
export class AsterFormInputSelectComponent<T> implements OnInit {

	@Input() data: AsterFormInput<T, AsterFormSelectOption> = {} as AsterFormInput<T, AsterFormSelectOption>;
    
    ngOnInit(): void {
    }

	// TODO: set option to default value if no options available
	// TODO: set option to default value
    public onChange(event: any) {
        this.data.defaultValue = this.data.options.find(option => option.value === event.target.value) as AsterFormSelectOption;
        console.log(this.data.defaultValue);
    }
}

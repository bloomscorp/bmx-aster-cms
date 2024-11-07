import {Component, Input} from '@angular/core';
import {AsterFormInput} from "../interface/aster-form-input";

@Component({
	selector: 'aster-form-input-numeric',
	standalone: true,
	imports: [],
	templateUrl: './aster-form-input-numeric.component.html',
	styleUrl: './aster-form-input-numeric.component.scss'
})
export class AsterFormInputNumericComponent<T> {

	@Input() data: AsterFormInput<T, number> = {} as AsterFormInput<T, number>;

	// TODO: check if defaultValue is a number
}

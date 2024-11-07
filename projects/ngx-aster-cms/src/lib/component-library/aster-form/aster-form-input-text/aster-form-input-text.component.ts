import {Component, Input} from '@angular/core';
import {AsterFormInput} from "../interface/aster-form-input";

@Component({
	selector: 'aster-form-input-text',
	standalone: true,
	imports: [],
	templateUrl: './aster-form-input-text.component.html',
	styleUrl: './aster-form-input-text.component.scss'
})
export class AsterFormInputTextComponent<P> {

	@Input() data: AsterFormInput<P, any> = {} as AsterFormInput<P, any>;
}

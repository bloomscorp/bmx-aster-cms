import {Component, Input} from '@angular/core';
import {AsterFormInput} from "../interface/aster-form-input";
import {FormsModule} from "@angular/forms";

@Component({
	selector: 'aster-form-input-text',
	standalone: true,
	imports: [
		FormsModule
	],
	templateUrl: './aster-form-input-text.component.html',
	styleUrl: './aster-form-input-text.component.scss'
})
export class AsterFormInputTextComponent<T> {

	@Input() data: AsterFormInput<T, string> = {} as AsterFormInput<T, string>;

	public keyPress(event: any): void {
		// console.log(`v => ${event.target.value}`);
		// console.log(`d => ${this.data.defaultValue}`);
	}
}

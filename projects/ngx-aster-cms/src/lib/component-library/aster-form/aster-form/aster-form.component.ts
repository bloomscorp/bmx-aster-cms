import {Component, Input, OnInit} from '@angular/core';
import {AsterForm} from "../interface/aster-form";
import {NgForOf, NgSwitch, NgSwitchCase} from "@angular/common";
import {AsterFormInputType} from "../model/aster-form-input-type";
import {AsterFormInputTextComponent} from "../aster-form-input-text/aster-form-input-text.component";
import {AsterFormInputNumericComponent} from "../aster-form-input-numeric/aster-form-input-numeric.component";
import {AsterFormInputSelectComponent} from "../aster-form-input-select/aster-form-input-select.component";
import {
	AsterFormInputMultiSelectComponent
} from "../aster-form-input-multi-select/aster-form-input-multi-select.component";
import {AsterFormInputTextareaComponent} from "../aster-form-input-textarea/aster-form-input-textarea.component";
import {AsterFormInputRichtextComponent} from "../aster-form-input-richtext/aster-form-input-richtext.component";
import {AsterFormInputImageComponent} from '../aster-form-input-image/aster-form-input-image.component';
import {
	AsterFormInputMultipleImageComponent
} from '../aster-form-input-multiple-image/aster-form-input-multiple-image.component';

@Component({
	selector: 'aster-form',
	standalone: true,
	imports: [
		NgForOf,
		NgSwitch,
		NgSwitchCase,
		AsterFormInputTextComponent,
		AsterFormInputNumericComponent,
		AsterFormInputSelectComponent,
		AsterFormInputMultiSelectComponent,
		AsterFormInputTextareaComponent,
		AsterFormInputRichtextComponent,
		AsterFormInputImageComponent,
		AsterFormInputMultipleImageComponent
	],
	templateUrl: './aster-form.component.html',
	styleUrls: [
		'./aster-form.component.scss',
		'../../../ax-styles.scss'
	]
})
export class AsterFormComponent implements OnInit {

	@Input() public data: AsterForm<any> = {} as AsterForm<any>;
	public INPUT_TYPES: typeof AsterFormInputType = AsterFormInputType;

	public ngOnInit(): void {

	}

	public onSubmit(): void {
		// get data
		// submit data
	}
}

import {Component, Input, OnInit} from '@angular/core';
import {AsterForm} from "../interface/aster-form";
import {NgForOf, NgSwitch, NgSwitchCase} from "@angular/common";
import {AsterFormInputType} from "../model/aster-form-input-type";
import {AsterFormInputTextComponent} from "../aster-form-input-text/aster-form-input-text.component";
import {AsterFormInputNumericComponent} from "../aster-form-input-numeric/aster-form-input-numeric.component";

@Component({
	selector: 'aster-form',
	standalone: true,
	imports: [
		NgForOf,
		NgSwitch,
		NgSwitchCase,
		AsterFormInputTextComponent,
		AsterFormInputNumericComponent
	],
	templateUrl: './aster-form.component.html',
	styleUrl: './aster-form.component.scss'
})
export class AsterFormComponent implements OnInit {

	@Input() public data: AsterForm<any> = {} as AsterForm<any>;
	public INPUT_TYPES: typeof AsterFormInputType = AsterFormInputType;

	public ngOnInit(): void {

	}
}

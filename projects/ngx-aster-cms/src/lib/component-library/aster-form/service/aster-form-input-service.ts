import {AsterFormInput} from "../interface/aster-form-input";
import {AsterFormInputType} from "../model/aster-form-input-type";
import {AsterFormTextInput} from "../interface/aster-form-text-input";
import {alphaNumericID} from "bmx-pastebox";
import {AsterFormNumberInput} from "../interface/aster-form-number-input";

export class AsterFormInputService {

	private static _prepareId(): string {
		return alphaNumericID(8) + alphaNumericID(10);
	}

	private static _prepareName(): string {
		return alphaNumericID(12);
	}

	public static prepareTextInput<P>(data: AsterFormTextInput<P>): AsterFormInput<P, string> {
		return {
			id: data.id ? data.id : AsterFormInputService._prepareId(),
			model: data.model,
			type: AsterFormInputType.TEXT,
			key: data.key,
			label: data.label ? data.label : '',
			name: data.name ? data.name : AsterFormInputService._prepareName(),
			placeholder: data.placeholder ? data.placeholder : '',
			defaultValue: data.defaultValue ? data.defaultValue : '',
			min: data.minlength ? data.minlength : 1,
			max: data.maxlength ? data.maxlength : 999,
			pattern: data.pattern ? data.pattern : '',
			readonly: data.readonly ? data.readonly : false,
			spellcheck: data.spellcheck ? data.spellcheck : true,
			step: 0
		};
	}

	public static prepareNumericInput<P>(data: AsterFormNumberInput<P>): AsterFormInput<P, number> {
		return {
			id: data.id ? data.id : AsterFormInputService._prepareId(),
			model: data.model,
			type: AsterFormInputType.NUMBER,
			key: data.key,
			label: data.label ? data.label : '',
			name: data.name ? data.name : AsterFormInputService._prepareName(),
			placeholder: data.placeholder ? data.placeholder : '',
			defaultValue: data.defaultValue ? data.defaultValue : (data.min ? data.min : 0),
			min: data.min ? data.min : 0,
			max: data.max ? data.max : 9999,
			pattern: data.pattern ? data.pattern : '',
			readonly: data.readonly ? data.readonly : false,
			spellcheck: false,
			step: data.step ? data.step : 1
		};
	}
}

import {Injectable} from '@angular/core';
import {AsterForm} from "../interface/aster-form";
import {AsterFormPreview} from "../interface/aster-form-preview";
import {AsterFormInput} from "../interface/aster-form-input";
import {AsterFormCompatible} from "../interface/aster-form-compatible";
import {LooseObject} from "../../../interface/loose-object";
import {AsterFormInputType} from "../model/aster-form-input-type";

@Injectable({
	providedIn: 'root'
})
export class AsterFormService {

	constructor() {
	}

	public static defaultMapper<T extends AsterFormCompatible>(model: T, inputs: AsterFormInput<T, any>[]): LooseObject {

		const response: LooseObject = {} as AsterFormCompatible;

		inputs.forEach((input: AsterFormInput<T, any>): void => {
			switch (input.type) {
				case AsterFormInputType.TEXT:
				case AsterFormInputType.NUMBER:
				case AsterFormInputType.SELECT:
				case AsterFormInputType.TEXTAREA:
				case AsterFormInputType.RICH_TEXT:
				case AsterFormInputType.IMAGE:
					response[input.key] = input.getValue();
					break;
				case AsterFormInputType.MULTISELECT:
				case AsterFormInputType.MULTI_IMAGE:
					response[input.key] = input.getValues();
					break;
				default: response[input.key] = null;
			}
		});

		return response;
	}

	public static prepare<T extends AsterFormCompatible>(preview: AsterFormPreview<T>): AsterForm<T> {
		return {
			model: preview.model,
			inputs: preview.inputs,
			submit: preview.submit,
			mapper: AsterFormService.defaultMapper
		}
	}
}

import {Injectable} from '@angular/core';
import {AsterForm} from "./interface/aster-form";
import {AsterFormPreview} from "./interface/aster-form-preview";

@Injectable({
	providedIn: 'root'
})
export class AsterFormService {

	constructor() {
	}

	public static prepare<T>(preview: AsterFormPreview<T>): AsterForm<T> {
		return {
			model: preview.model,
			inputs: preview.inputs,
			submit: preview.submit,
		}
	}
}

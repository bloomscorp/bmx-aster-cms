import {AsterFormInput} from "./aster-form-input";
import {AsterFormSubmit} from "./aster-form-submit";

export interface AsterFormPreview<T> {
	model: T;
	inputs: AsterFormInput<T, any>[];
	submit: AsterFormSubmit
}

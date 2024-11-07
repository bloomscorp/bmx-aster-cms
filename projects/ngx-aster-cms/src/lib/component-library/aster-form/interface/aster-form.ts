import {AsterFormInput} from "./aster-form-input";

export interface AsterForm<T> {
	model: T;
	inputs: AsterFormInput<T>[];
}

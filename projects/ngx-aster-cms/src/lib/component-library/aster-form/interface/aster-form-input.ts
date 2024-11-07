import {AsterFormInputType} from "../model/aster-form-input-type";

export interface AsterFormInput<T, V> {
	id: string;
	model: T;
	type: AsterFormInputType;
	key: string;
	label: string;
	name: string;
	placeholder: string;
	defaultValue: V;
	minlength: number;
	maxlength: number;
	pattern: string;
	readonly: boolean;
	spellcheck: boolean;
}

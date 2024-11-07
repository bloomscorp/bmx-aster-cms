import {AsterFormSelectOption} from "./aster-form-select-option";

export interface AsterFormSelectInput<T> {
	id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	defaultValue?: AsterFormSelectOption;
	pattern?: string;
	disabled?: boolean;
	options: AsterFormSelectOption[];
}

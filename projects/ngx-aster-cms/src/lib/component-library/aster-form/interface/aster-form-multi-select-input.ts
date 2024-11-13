import {AsterFormSelectOption} from './aster-form-select-option';

export interface AsterFormMultiSelectInput<T> {
	id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	defaultValue?: AsterFormSelectOption[];
	pattern?: string;
	disabled?: boolean;
    appendTo?: string;
	options: AsterFormSelectOption[];
}

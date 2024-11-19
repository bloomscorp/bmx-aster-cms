import {AsterFormSelectOption} from './aster-form-select-option';

export interface AsterFormMultiSelectInput<T> {
	id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	multiSelectDefaultValue?: AsterFormSelectOption[];
	pattern?: string;
	disabled?: boolean;
    appendTo?: string;
	options: AsterFormSelectOption[];
	getValues?: () => AsterFormSelectOption[];
}

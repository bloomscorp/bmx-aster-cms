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
    multiSelectDefaultValue: V[];
	multiImageDefaultValue: V[];
    rows?: number;
    cols?: number;
	min: number;
	max: number;
	pattern: string;
	readonly: boolean;
	disabled: boolean;
	spellcheck: boolean;
	step: number;
	options: V[];
    appendTo?: string;
	getValue: () => V;
	getValues: () => V[];
}

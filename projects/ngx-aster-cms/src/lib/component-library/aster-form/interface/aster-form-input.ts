import {AsterFormInputType} from "../model/aster-form-input-type";

export interface AsterFormInput<T, V> {
	model: T;
	type: AsterFormInputType;
	label: string;
	key: string;
	defaultValue: V;
}

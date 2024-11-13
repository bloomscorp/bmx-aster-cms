import {AsterFormImageOption} from './aster-form-image-option.';

export interface AsterFormMultiImageInput<T> {
    id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	defaultValue?: AsterFormImageOption[];
	min?: number;
	max?: number;
	readonly?: boolean;
	disabled?: boolean;
}

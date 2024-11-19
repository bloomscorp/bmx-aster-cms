import {AsterFormImageItem} from './aster-form-image-item';

export interface AsterFormMultiImageInput<T> {
    id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	multiImageDefaultValue?: AsterFormImageItem[];
	min?: number;
	max?: number;
	readonly?: boolean;
	disabled?: boolean;
	getValues?: () => AsterFormImageItem[];
}

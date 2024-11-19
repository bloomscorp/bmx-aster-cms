import {AsterFormImageItem} from './aster-form-image-item';

export interface AsterFormImageInput<T> {
    id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	defaultValue?: AsterFormImageItem;
	min?: number;
	max?: number;
	readonly?: boolean;
	disabled?: boolean;
	getValue?: () => AsterFormImageItem;
}

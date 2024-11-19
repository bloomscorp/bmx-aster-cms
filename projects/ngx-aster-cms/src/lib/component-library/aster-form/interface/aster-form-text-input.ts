export interface AsterFormTextInput<T> {
	id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	defaultValue?: string;
	minlength?: number;
	maxlength?: number;
	pattern?: string;
	readonly?: boolean;
	disabled?: boolean;
	spellcheck?: boolean;
	getValue?: () => string;
}

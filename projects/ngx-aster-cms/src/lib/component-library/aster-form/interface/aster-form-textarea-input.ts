export interface AsterFormTextAreaInput<T> {
	id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	defaultValue?: string;
    rows?: number;
    cols?: number;
	minlength?: number;
	maxlength?: number;
	pattern?: string;
	readonly?: boolean;
	disabled?: boolean;
	spellcheck?: boolean;
}

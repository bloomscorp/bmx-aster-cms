export interface AsterFormRichtextInput<T> {
    id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	defaultValue?: string;
	pattern?: string;
	readonly?: boolean;
	disabled?: boolean;
	spellcheck?: boolean;
	getValue?: () => string;
}

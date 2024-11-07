export interface AsterFormNumberInput<T> {
	id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	defaultValue?: number;
	min?: number;
	max?: number;
	pattern?: string;
	readonly?: boolean;
	disabled?: boolean;
	step?: number;
}

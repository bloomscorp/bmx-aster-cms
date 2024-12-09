export interface AsterFormChipInput<T> {
    id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	defaultValue?: string[];
	min?: number;
	max?: number;
	readonly?: boolean;
	disabled?: boolean;
	getValue?: () => string;
}

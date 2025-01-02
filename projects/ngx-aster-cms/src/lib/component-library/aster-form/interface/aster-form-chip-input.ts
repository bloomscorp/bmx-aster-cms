import { AsterFormChipValue } from './aster-form-chip-value';

export interface AsterFormChipInput<T> {
	id?: string;
	model: T;
	key: string;
	label?: string;
	name?: string;
	placeholder?: string;
	chipDefaultValue?: AsterFormChipValue[];
	min?: number;
	max?: number;
	readonly?: boolean;
	disabled?: boolean;
	getValues?: () => AsterFormChipValue[];
}

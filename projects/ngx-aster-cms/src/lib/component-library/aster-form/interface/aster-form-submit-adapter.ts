import {AsterFormTransmission} from "./aster-form-transmission";

export interface AsterFormSubmitAdapter {
	api: string;
	label?: string;
	type?: AsterFormType;
	transmission?: AsterFormTransmission;
}

import {AsterFormTransmission} from "./aster-form-transmission";

export interface AsterFormSubmit {
	api: string;
	label: string;
	type: AsterFormType;
	transmission: AsterFormTransmission;
}

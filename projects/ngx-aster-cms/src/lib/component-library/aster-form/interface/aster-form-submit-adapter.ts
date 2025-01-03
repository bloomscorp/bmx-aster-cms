import {AsterFormTransmissionAdapter} from "./aster-form-transmission-adapter";

export interface AsterFormSubmitAdapter {
	api: string;
	label?: string;
	type?: AsterFormType;
	transmission?: AsterFormTransmissionAdapter;
}

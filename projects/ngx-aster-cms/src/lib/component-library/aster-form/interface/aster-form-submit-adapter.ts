import {AsterFormTransmissionAdapter} from "./aster-form-transmission-adapter";
import {AsterFormType} from "../../../type/AsterFormType";

export interface AsterFormSubmitAdapter {
	api: string;
	label?: string;
	type?: AsterFormType;
    isAuthenticated?: boolean;
	transmission?: AsterFormTransmissionAdapter;
}

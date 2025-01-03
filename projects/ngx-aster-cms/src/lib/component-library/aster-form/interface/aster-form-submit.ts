import {AsterFormTransmission} from "./aster-form-transmission";
import {AsterFormType} from "../../../type/AsterFormType";

export interface AsterFormSubmit {
	api: string;
	label: string;
	type: AsterFormType;
	transmission: AsterFormTransmission;
}

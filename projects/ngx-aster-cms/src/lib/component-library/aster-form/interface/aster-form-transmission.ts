import {AsterFormTransmissionCallback} from "./aster-form-transmission-callback";

export interface AsterFormTransmission {
	preExecute: AsterFormTransmissionCallback;
	postExecute: AsterFormTransmissionCallback;
	success: AsterFormTransmissionCallback;
	failure: AsterFormTransmissionCallback;
	complete: AsterFormTransmissionCallback;
}

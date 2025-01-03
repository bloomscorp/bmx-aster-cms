import {AsterFormTransmissionCallbackAdapter} from "./aster-form-transmission-callback-adapter";

export interface AsterFormTransmissionAdapter {
	preExecute?: AsterFormTransmissionCallbackAdapter;
	postExecute?: AsterFormTransmissionCallbackAdapter;
	success?: AsterFormTransmissionCallbackAdapter;
	failure?: AsterFormTransmissionCallbackAdapter;
	complete?: AsterFormTransmissionCallbackAdapter;
}

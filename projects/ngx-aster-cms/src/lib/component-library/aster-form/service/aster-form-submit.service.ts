import {Injectable} from '@angular/core';
import {AsterFormSubmitAdapter} from "../interface/aster-form-submit-adapter";
import {AsterFormSubmit} from "../interface/aster-form-submit";
import {AsterFormTransmission} from "../interface/aster-form-transmission";
import {AsterFormTransmissionCallback} from "../interface/aster-form-transmission-callback";

@Injectable({
	providedIn: 'root'
})
export class AsterFormSubmitService {

	constructor() {
	}

	private static defaultPreExecute(): AsterFormTransmissionCallback {
		return {
			message: '',
			callback: (): void => {}
		};
	}

	private static defaultPostExecute(): AsterFormTransmissionCallback {
		return {
			message: '',
			callback: (): void => {}
		};
	}

	private static defaultSuccess(): AsterFormTransmissionCallback {
		return {
			message: 'Operation Successful!',
			callback: (): void => {}
		};
	}

	private static defaultFailure(): AsterFormTransmissionCallback {
		return {
			message: 'Operation Failed!',
			callback: (): void => {}
		};
	}

	private static defaultComplete(): AsterFormTransmissionCallback {
		return {
			message: '',
			callback: (): void => {}
		};
	}

	private static defaultTransmission(): AsterFormTransmission {
		return {
			preExecute: AsterFormSubmitService.defaultPreExecute(),
			postExecute: AsterFormSubmitService.defaultPostExecute(),
			success: AsterFormSubmitService.defaultSuccess(),
			failure: AsterFormSubmitService.defaultFailure(),
			complete: AsterFormSubmitService.defaultComplete()
		};
	}

	private static prepareTransmission(adapter: AsterFormSubmitAdapter): AsterFormTransmission {

		if (adapter.transmission) {

		} else return AsterFormSubmitService.defaultTransmission();
	}

	public static prepareFormSubmit(adapter: AsterFormSubmitAdapter): AsterFormSubmit {

		return {
			api: adapter.api,
			label: adapter.label ? adapter.label : 'Submit',
			type: adapter.type ? adapter.type : 'POST',
			transmission: AsterFormSubmitService.prepareTransmission(adapter)
		};
	}
}

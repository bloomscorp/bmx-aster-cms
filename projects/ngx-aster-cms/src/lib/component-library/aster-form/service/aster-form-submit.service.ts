import {Injectable} from '@angular/core';
import {AsterFormSubmitAdapter} from "../interface/aster-form-submit-adapter";
import {AsterFormSubmit} from "../interface/aster-form-submit";
import {AsterFormTransmission} from "../interface/aster-form-transmission";
import {AsterFormTransmissionCallback} from "../interface/aster-form-transmission-callback";
import {AsterFormTransmissionAdapter} from "../interface/aster-form-transmission-adapter";

@Injectable({
	providedIn: 'root'
})
export class AsterFormSubmitService {

	constructor() {
	}

	private static defaultPreExecute(
		message: string = '',
		callback: (data?: any) => void = (): void => {}
	): AsterFormTransmissionCallback {
		return {
			message: message,
			callback: callback
		};
	}

	private static defaultPostExecute(
		message: string = '',
		callback: (data?: any) => void = (): void => {}
	): AsterFormTransmissionCallback {
		return {
			message: message,
			callback: callback
		};
	}

	private static defaultSuccess(
		message: string = 'Operation Successful!',
		callback: (data?: any) => void = (): void => {}
	): AsterFormTransmissionCallback {
		return {
			message: message,
			callback: callback
		};
	}

	private static defaultFailure(
		message: string = 'Operation Failed!',
		callback: (data?: any) => void = (): void => {}
	): AsterFormTransmissionCallback {
		return {
			message: message,
			callback: callback
		};
	}

	private static defaultComplete(
		message: string = '',
		callback: (data?: any) => void = (): void => {}
	): AsterFormTransmissionCallback {
		return {
			message: message,
			callback: callback
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
			return {
				preExecute: AsterFormSubmitService.defaultPreExecute(
					adapter.transmission.preExecute?.message,
					adapter.transmission.preExecute?.callback
				),
				postExecute: AsterFormSubmitService.defaultPostExecute(
					adapter.transmission.postExecute?.message,
					adapter.transmission.postExecute?.callback
				),
				success: AsterFormSubmitService.defaultSuccess(
					adapter.transmission.success?.message,
					adapter.transmission.success?.callback
				),
				failure: AsterFormSubmitService.defaultFailure(
					adapter.transmission.failure?.message,
					adapter.transmission.failure?.callback
				),
				complete: AsterFormSubmitService.defaultComplete(
					adapter.transmission.complete?.message,
					adapter.transmission.complete?.callback
				)
			};
		} else return AsterFormSubmitService.defaultTransmission();
	}

	public static prepareFormSubmit(adapter: AsterFormSubmitAdapter): AsterFormSubmit {
		return {
			api: adapter.api,
			label: adapter.label ? adapter.label : 'Submit',
			type: adapter.type ? adapter.type : 'POST',
            isAuthenticated: adapter.isAuthenticated ? adapter.isAuthenticated : false,
			transmission: AsterFormSubmitService.prepareTransmission(adapter)
		};
	}
}

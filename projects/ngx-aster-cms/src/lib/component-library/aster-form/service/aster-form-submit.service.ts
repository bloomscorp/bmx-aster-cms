import {Injectable} from '@angular/core';
import {AsterFormSubmitAdapter} from "../interface/aster-form-submit-adapter";
import {AsterFormSubmit} from "../interface/aster-form-submit";
import {AsterFormTransmission} from "../interface/aster-form-transmission";

@Injectable({
	providedIn: 'root'
})
export class AsterFormSubmitService {

	constructor() {
	}

	private static prepareTransmission(): AsterFormTransmission {

	}

	public static prepareFormSubmit(adapter: AsterFormSubmitAdapter): AsterFormSubmit {

		return {
			api: adapter.api,
			label: adapter.label ? adapter.label : 'Submit',
			type: adapter.type ? adapter.type : 'POST',
			transmission: AsterFormSubmitService.prepareTransmission()
		};
	}
}

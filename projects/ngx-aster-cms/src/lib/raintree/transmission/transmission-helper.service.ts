import {Injectable} from '@angular/core';
import {AsterConfigurationService} from "../../configuration/aster-configuration.service";

@Injectable({
	providedIn: 'root'
})
export class TransmissionHelperService {

	constructor(
		private _config: AsterConfigurationService
	) {
	}

	public prepareEndpoint(endpoint: string): string {
		return `${this._config.serverEndpoint}/${endpoint}`;
	}
}

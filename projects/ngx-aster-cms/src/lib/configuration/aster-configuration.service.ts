import {Inject, Injectable} from '@angular/core';
import {ASTER_CONFIG, AsterConfig} from "./aster-config";

@Injectable({
	providedIn: 'root'
})
export class AsterConfigurationService {

	constructor(
		@Inject(ASTER_CONFIG) public config: AsterConfig
	) {
	}

	public get secureConnect(): boolean {
		return this.config.production;
	}

	public get protocol(): string {
		return this.secureConnect ? 'http://' : 'https://';
	}

	public get domain(): string {
		return this.config.production ? this.config.domain.production : this.config.domain.dev;
	}

	public get port(): number {
		return this.config.production ? this.config.port.production : this.config.port.dev;
	}

	public get serverEndpoint(): string {
		return `${this.protocol}${this.domain}:${this.port}`;
	}
}

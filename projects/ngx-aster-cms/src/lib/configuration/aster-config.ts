import {InjectionToken} from "@angular/core";

export const ASTER_CONFIG = new InjectionToken<AsterConfig>('configuration');

export interface AsterConfig {
	production: boolean,
	domain: {
		production: string,
		dev: string
	},
	port: {
		production: number,
		dev: number
	}
}

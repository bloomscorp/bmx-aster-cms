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
	},
	auth: {
		jwt: {
			key1: string,
			key2: string,
			key3: string,
			key4: string,
			key5: string
		},
		successRoute: string
	}
}

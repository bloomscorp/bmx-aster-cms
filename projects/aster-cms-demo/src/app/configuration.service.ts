import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

    public static readonly PRODUCTION: boolean = environment.production;
	public static readonly FAKE_API: boolean = !ConfigurationService.PRODUCTION && false;
	public static readonly BYPASS_AUTH: boolean = !ConfigurationService.PRODUCTION;
	public static readonly SECURE_CONNECT: boolean = ConfigurationService.PRODUCTION;
	public static readonly PROTOCOL: string = ConfigurationService.SECURE_CONNECT ? 'https://' : 'http://';
	public static readonly DOMAIN_PRODUCTION: string = 'abc.bloomscorp.com';
	public static readonly DOMAIN_LOCALHOST: string = 'localhost';

	public static readonly DOMAIN: string = ConfigurationService.PRODUCTION
		? ConfigurationService.DOMAIN_PRODUCTION : ConfigurationService.DOMAIN_LOCALHOST;
	public static readonly SERVER_PORT: string = ConfigurationService.PRODUCTION ? '' : ':8089';
	
    
	public static readonly API_PORT: string = ConfigurationService.FAKE_API ? ':3004' : ConfigurationService.SERVER_PORT;
	public static readonly FRONTEND_PORT: string = ':4200';
	public static readonly SERVER_ENDPOINT: string = ConfigurationService.PROTOCOL +
		ConfigurationService.DOMAIN +
		ConfigurationService.SERVER_PORT;
	
	public static readonly API_ENDPOINT: string = ConfigurationService.PROTOCOL +
		ConfigurationService.DOMAIN +
		ConfigurationService.API_PORT;

	constructor() {
	}

}

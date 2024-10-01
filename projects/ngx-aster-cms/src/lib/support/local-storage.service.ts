import {Inject, Injectable} from '@angular/core';
import {ASTER_CONFIG, AsterConfig} from "../configuration/aster-config";
import {isEmptyString} from "bmx-pastebox";

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor(@Inject(ASTER_CONFIG) private _config: AsterConfig) {
	}

	private readonly _KEY_AUTH_SUCCESS_ROUTE: string = this._config.auth.successRouteKey;

	public store(key: string, value: string): void {
		localStorage.setItem(key, value);
	}

	public retrieve(key: string): string {
		const value: string | null = localStorage.getItem(key);
		return (value === null) ? '' : value;
	}

	public hasKey(key: string): boolean {
		return this.retrieve(key) !== null;
	}

	public clear(): void {
		localStorage.clear();
	}

	public removeItems(keys: string[]) {
		keys.forEach((key: string, index: number) => localStorage.removeItem(key));
	}

	public storeOnAuthSuccessRoute(route: string): void {
		this.store(this._KEY_AUTH_SUCCESS_ROUTE, route);
	}

	public retrieveOnAuthSuccessRoute(): string {
		const route: string = this.retrieve(this._KEY_AUTH_SUCCESS_ROUTE);
		return isEmptyString(route) ? '/' : route;
	}
}

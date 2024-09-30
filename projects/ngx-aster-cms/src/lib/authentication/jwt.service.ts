import {Inject, Injectable} from '@angular/core';
import {LocalStorageService} from "../../../../aster-cms-demo/src/app/local-storage.service";
import {JwtHelperService} from "@auth0/angular-jwt";
import {ConstantService} from "../../../../aster-cms-demo/src/app/constant.service";
import {ConfigurationService} from "../../../../aster-cms-demo/src/app/configuration.service";
import {MessageService} from "../../../../aster-cms-demo/src/app/message.service";
import {HttpHeaders} from "@angular/common/http";
import {ASTER_CONFIG, AsterConfig} from "../configuration/aster-config";
import {areStringsEqual, arrayLength, isEmptyString, valueExists} from "bmx-pastebox";

@Injectable({
	providedIn: 'root'
})
export class JWTService {

	constructor(
		@Inject(ASTER_CONFIG) private _config: AsterConfig,
		private _localStore: LocalStorageService,
	) {
	}

	private readonly _jwtHelper: JwtHelperService = new JwtHelperService();

	private readonly _KEY_033: string = this._config.auth.jwt.key1;
	private readonly _KEY_06: string = this._config.auth.jwt.key2;
	private readonly _KEY_40: string = this._config.auth.jwt.key3;
	private readonly _KEY_63: string = this._config.auth.jwt.key4;
	private readonly _KEY_25: string = this._config.auth.jwt.key5;

	private _jwtToken: string | null = null;
	private _expirationDate: Date | null = null;
	private _isExpired: boolean | null = null;

	private static shatterToken(token: string): string[] | null {
		return token.match(/.{1,50}/g);
	}

	private static prepareSchemeToken(token: string): string {
		return ConstantService.AUTHORIZATION_SCHEME + token;
	}

	private storeChunk(chunk: string, storeKey: string): void {
		this._localStore.store(storeKey, chunk);
	}

	private retrieveChunk(storeKey: string): string {
		const chunk: string = this._localStore.retrieve(storeKey);
		return isEmptyString(chunk) ? '' : chunk;
	}

	private storeJWT(token: string): void {
		const tokenChunks: string[] | null = JWTService.shatterToken(token);

		if (tokenChunks !== null && tokenChunks.length === 5) {
			this.storeChunk(tokenChunks[0], this._KEY_033);
			this.storeChunk(tokenChunks[1], this._KEY_06);
			this.storeChunk(tokenChunks[2], this._KEY_40);
			this.storeChunk(tokenChunks[3], this._KEY_63);
			this.storeChunk(tokenChunks[4], this._KEY_25);
		}
	}

	private retrieveJWT(): string {

		if (this._jwtToken !== null)
			return this._jwtToken;

		this._jwtToken = this.retrieveChunk(this._KEY_033) +
			this.retrieveChunk(this._KEY_06) +
			this.retrieveChunk(this._KEY_40) +
			this.retrieveChunk(this._KEY_63) +
			this.retrieveChunk(this._KEY_25);

		return this._jwtToken;
	}

	private isDomainAllowed(url: string): boolean {

		if (isEmptyString(url)) return false;

		const protocolSplitted: string[] = url.split('//');

		if (!arrayLength(protocolSplitted, 2)) return false;

		const hasPort: boolean = protocolSplitted[1].split(':').length > 1;
		const domainSplitted: string[] = protocolSplitted[1].split(hasPort ? ':' : '/');
		let portSplitted: string[] = [];

		if (domainSplitted.length < 2) return false;
		if (hasPort) portSplitted = domainSplitted[1].split('/');

		if (!areStringsEqual(
			protocolSplitted[0],
			ConfigurationService.PROTOCOL.substring(0, ConfigurationService.PROTOCOL.length - 2)
		)) return false;

		if (!areStringsEqual(
			domainSplitted[0],
			ConfigurationService.DOMAIN
		)) return false;

		return hasPort ? areStringsEqual(
			portSplitted[0],
			ConfigurationService.API_PORT.substring(1, ConfigurationService.API_PORT.length)
		) : true;
	}

	public prepareJWT(token: string): void {
		this._jwtToken = token;
		this._expirationDate = this._jwtHelper.getTokenExpirationDate(token);
		this._isExpired = this._jwtHelper.isTokenExpired(token);

		if (this._isExpired) throw new Error(MessageService.EXPIRED_TOKEN_RECEIVED);
		else this.storeJWT(token);
	}

	public isJWTUnexpired(forceCheck: boolean = false): boolean {

		if (this._expirationDate !== null) return (this._expirationDate.getTime() > new Date().getTime());
		if (forceCheck) return !this._jwtHelper.isTokenExpired(this.retrieveJWT());

		return false;
	}

	public hasLocallyStoredJWT(): boolean {
		return this._localStore.hasKey(this._KEY_033) &&
			this._localStore.hasKey(this._KEY_06) &&
			this._localStore.hasKey(this._KEY_40) &&
			this._localStore.hasKey(this._KEY_63) &&
			this._localStore.hasKey(this._KEY_25);
	}

	public hasValidJWT(): boolean {

		try {

			const token: string = this.retrieveJWT();

			if (isEmptyString(token)) return false;
			if (this._jwtHelper.isTokenExpired(token)) return false;

			this._jwtToken = token;

			return true;
		} catch (Error) {
			return false;
		}
	}

	public destroySession(): void {

		this._jwtToken = null;
		this._expirationDate = null;
		this._isExpired = null;

		this._localStore.removeItems([
			this._KEY_25,
			this._KEY_63,
			this._KEY_40,
			this._KEY_06,
			this._KEY_033
		]);
	}

	public injectToken(url: string, contentJSON: boolean = true): HttpHeaders {

		let authorizationToken: string;

		if (!this.isDomainAllowed(url)) authorizationToken = ConstantService.DOMAIN_NOT_ALLOWED;
		else {
			authorizationToken = !this.isJWTUnexpired(true) ?
				ConstantService.EXPIRED_TOKEN :
				JWTService.prepareSchemeToken(this.retrieveJWT());
		}

		if (!valueExists(this._jwtToken))
			authorizationToken = ConstantService.NO_JWT_TOKEN;

		if (contentJSON) {
			return new HttpHeaders({
				Authorization: authorizationToken,
				'Content-Type': 'application/json'
			});
		} else {
			return new HttpHeaders({
				Authorization: authorizationToken
			});
		}
	}
}

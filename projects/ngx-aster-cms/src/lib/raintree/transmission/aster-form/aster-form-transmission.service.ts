import {Injectable} from '@angular/core';
import {CRUDTransmissionService} from '../crud-transmission-service';
import {BmxTransmissionService} from "bmx-transmission";
import {JWTService} from "../../../authentication/jwt.service";
import {FormPayload} from "bmx-transmission/lib/raintree/interface/form-payload";
import {RaintreeResponse} from "bmx-transmission/lib/raintree/interface/raintree-response";

@Injectable({
	providedIn: 'root'
})
export class AsterFormTransmissionService extends CRUDTransmissionService<any> {

	constructor(
		private transmission: BmxTransmissionService,
		private jwt: JWTService
	) {
		super(transmission, jwt);
	}

	public post<F extends FormPayload>(
		payload: F,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: () => void,
		onComplete: () => void,
		url: string,
		multiLevelProcessing: boolean = true
	): void {
		this.transmission.executeFormPostPayload<F>(
			url,
			payload,
			this.jwt.injectToken(url, false),
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
			multiLevelProcessing
		);
	}

	public patch(): void {}

	public override create<F extends FormPayload>(
		payload: F,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: () => void,
		onComplete: () => void,
		url: string,
	): void {
		this.post(
			payload,
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
			url,
			true
		);
	}

	delete(): void {
	}

	read(): void {
	}

	update(): void {
	}
}

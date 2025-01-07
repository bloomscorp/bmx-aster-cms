import {BmxTransmissionService} from 'bmx-transmission';
import {RaintreeResponse} from 'bmx-transmission/lib/raintree/interface/raintree-response';
import {JWTService} from '../../authentication/jwt.service';
import {FormPayload} from 'bmx-transmission/lib/raintree/interface/form-payload';

export abstract class CRUDTransmissionService<E> {
	protected constructor(
		private _transmission: BmxTransmissionService,
		private _jwt: JWTService
	) {}

	public readAll<P extends RaintreeResponse>(
		onPreExecute: () => void,
		onPostExecute: (response: E[]) => void,
		onSuccess: (response: E[]) => void,
		onFailure: (error: string) => void,
		onComplete: () => void,
		url: string,
		key: string,
        jwt: boolean = true
	): void {
		this._transmission.executeGetPayload<P, E[]>(
			url,
			jwt ? this._jwt.injectToken(url): undefined,
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
			`${key}`
		);
	}

	public read<P extends RaintreeResponse>(
		onPreExecute: () => void,
		onPostExecute: (response: E) => void,
		onSuccess: (response: E) => void,
		onFailure: (error: string) => void,
		onComplete: () => void,
		url: string,
		key: string,
        jwt: boolean = true
	): void {
		this._transmission.executeGetPayload<P, E>(
			url,
			jwt ? this._jwt.injectToken(url): undefined,
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
			`data.${key}`
		);
	}

	public create<P extends FormPayload>(
		payload: P,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: () => void,
		onComplete: () => void,
		url: string
	): void {
		this._transmission.executeFormPostPayload<P>(
			url,
			payload,
			this._jwt.injectToken(url, false),
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
			true
		);
	}

	public update<P extends FormPayload>(
		payload: P,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: () => void,
		onComplete: () => void,
		url: string
	): void {
		this._transmission.executeFormPatchPayload<P>(
			url,
			payload,
			this._jwt.injectToken(url, false),
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
			true
		);
	}

	public delete(
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: (error: string) => void,
		onComplete: () => void,
		url: string
	): void {
		this._transmission.executeDeletePayload(
			url,
			this._jwt.injectToken(url),
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete
		);
	}
}

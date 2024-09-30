import {BmxTransmissionService} from "bmx-transmission";
import {JWTService} from "../../../../../aster-cms-demo/src/app/authentication/jwt.service";
import {Constant} from "../../support/constant";
import {RaintreeResponse} from "bmx-transmission/lib/raintree/interface/raintree-response";

export abstract class CRUDTransmissionService<E> {

	protected constructor(
		private _transmission: BmxTransmissionService,
		private _jwt: JWTService,
	) {
	}

	public readAll<P extends RaintreeResponse>(
		onPreExecute: () => void,
		onPostExecute: (response: E[]) => void,
		onSuccess: (response: E[]) => void,
		onFailure: (error: string) => void,
		onComplete: () => void,
		url: string,
		key: string
	): void {
		this._transmission.executeGetPayload<P, E[]>(
			url,
			this._jwt.injectToken(url),
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
			`data.${key}`
		);
	}

	public abstract create(): void;
	public abstract read(): void;
	public abstract update(): void;
	public abstract delete(): void;
}

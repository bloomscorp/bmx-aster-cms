import {Injectable} from '@angular/core';
import {CRUDTransmissionService} from '../crud-transmission-service';
import {BmxTransmissionService} from 'bmx-transmission';
import {JWTService} from '../../../authentication/jwt.service';
import { RaintreeResponse } from 'bmx-transmission/lib/raintree/interface/raintree-response';
import { FormPayload } from 'bmx-transmission/lib/raintree/interface/form-payload';

@Injectable({
	providedIn: 'root',
})
export class ProductTransmissionService<E> extends CRUDTransmissionService<E> {

    constructor(
		private transmission: BmxTransmissionService,
		private jwt: JWTService
	) {
		super(transmission, jwt);
	}

    public override create<P extends FormPayload>(
		payload: P,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: () => void,
		onComplete: () => void,
        url: string,
	): void {
        this.transmission.executeFormPostPayload<P>(
			url,
			payload,
			this.jwt.injectToken(url, false),
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
            true
		);
	}

	delete(): void {}

	read(): void {}

	update(): void {}
}

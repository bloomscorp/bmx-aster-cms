import {Injectable} from '@angular/core';
import {ToastService} from 'bmx-toast';
import {BmxTransmissionService} from 'bmx-transmission';
import {GenericDataValidatorService} from '../../generic-data-validator.service';
import {RaintreeResponse} from 'bmx-transmission/lib/raintree/interface/raintree-response';
import {RequestMapperService} from '../../request-mapper.service';
import {Product} from '../../product/interface/product';
import {JWTService} from '../../authentication/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProductTransmissionService {

    constructor(
        private _transmission: BmxTransmissionService,
        private _jwt: JWTService,
        private _toast: ToastService,
        private validator: GenericDataValidatorService,
    ) {
    }

    public addProduct(
		payload: Product,
		onPreExecute: () => void,
		onPostExecute: (response: RaintreeResponse) => void,
		onSuccess: (response: RaintreeResponse) => void,
		onFailure: () => void,
		onComplete: () => void
	): void {
        console.log('payload in add product', payload);
		this._transmission.executeFormPostPayload<Product>(
			RequestMapperService.CREATE_PRODUCT,
			payload,
			this._jwt.injectToken(RequestMapperService.CREATE_PRODUCT, false),
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
            true
		);
	}

}

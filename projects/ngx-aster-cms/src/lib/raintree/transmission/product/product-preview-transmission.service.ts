import {Injectable} from '@angular/core';
import {CRUDTransmissionService} from "../crud-transmission-service";
import {BmxTransmissionService} from "bmx-transmission";
import {JWTService} from "../../../../../../aster-cms-demo/src/app/authentication/jwt.service";
import {RaintreePayload} from "../../interface/raintree-payload";
import {Constant} from "../../../support/constant";

@Injectable({
	providedIn: 'root'
})
export class ProductPreviewTransmissionService<P> extends CRUDTransmissionService<P> {

	constructor(
		public transmission: BmxTransmissionService,
		public jwt: JWTService,
	) {
		super(
			transmission,
			jwt
		);
	}

	public fetchAll(
		onPreExecute: () => void,
		onPostExecute: (response: P[]) => void,
		onSuccess: (response: P[]) => void,
		onFailure: (error: string) => void,
		onComplete: () => void
	): void {
		super.readAll<RaintreePayload<'productPreviewList', P>>(
			onPreExecute,
			onPostExecute,
			onSuccess,
			onFailure,
			onComplete,
			'',
			Constant.PRODUCT_PREVIEW_LIST
		);
	}

	create(): void {
	}

	delete(): void {
	}

	read(): void {
	}

	update(): void {
	}
}

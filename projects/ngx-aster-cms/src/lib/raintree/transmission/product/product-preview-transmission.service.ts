import {Inject, Injectable} from '@angular/core';
import {CRUDTransmissionService} from "../crud-transmission-service";
import {BmxTransmissionService} from "bmx-transmission";
import {RaintreePayload} from "../../interface/raintree-payload";
import {Constant} from "../../../support/constant";
import {TransmissionHelperService} from "../transmission-helper.service";
import {AsterRequestMapper} from "../../../route/model/aster-request-mapper";
import {JWTService} from "../../../authentication/jwt.service";

@Injectable({
	providedIn: 'root'
})
export class ProductPreviewTransmissionService<P> extends CRUDTransmissionService<P> {

	constructor(
		public transmission: BmxTransmissionService,
		public jwt: JWTService,
		private _helper: TransmissionHelperService
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
			this._helper.prepareEndpoint(AsterRequestMapper.GET_PRODUCT_PREVIEW),
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

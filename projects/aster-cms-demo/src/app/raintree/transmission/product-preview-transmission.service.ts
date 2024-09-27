import {Injectable} from '@angular/core';
import {BmxTransmissionService} from 'bmx-transmission';
import {ToastService} from '../../toast.service';
import {GenericDataValidatorService} from '../../generic-data-validator.service';
import {JWTService} from '../../authentication/jwt.service';
import {ProductPreview} from '../../product/interface/product-preview';
import {ProductPreviewPayload} from '../interface/product-preview-response';
import {RequestMapperService} from '../../request-mapper.service';
import {ConstantService} from '../../constant.service';

@Injectable({
    providedIn: 'root'
})
export class ProductPreviewTransmissionService {

    constructor(
        private _transmission: BmxTransmissionService,
        private _jwt: JWTService,
        private _toast: ToastService,
        private validator: GenericDataValidatorService,
    ) {
    }

    public getAllProductPreview(
        onPreExecute: () => void,
        onPostExecute: (response: ProductPreview[]) => void,
        onSuccess: (response: ProductPreview[]) => void,
        onFailure: (error: string) => void,
        onComplete: () => void
    ): void {
        this._transmission.executeGetPayload<ProductPreviewPayload, ProductPreview[]>(
            RequestMapperService.GET_PRODUCT_PREVIEW,
            this._jwt.injectToken(RequestMapperService.GET_PRODUCT_PREVIEW),
            onPreExecute,
            onPostExecute,
            onSuccess,
            onFailure,
            onComplete,
            ConstantService.PRODUCT_PREVIEW_LIST
        );
    }

}

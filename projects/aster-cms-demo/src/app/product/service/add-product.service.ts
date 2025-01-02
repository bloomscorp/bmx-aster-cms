import {Injectable} from '@angular/core';
import {AsterAddProductService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-add-product-service";
import {Product} from "../interface/product";
import {AsterForm} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form";
import {AsterFormData} from "../model/aster-form-data";
import { ProductTransmissionService } from '../../raintree/transmission/product-transmission.service';
import { RaintreeResponse } from 'bmx-transmission/lib/raintree/interface/raintree-response';

@Injectable({
	providedIn: 'root'
})
export class AddProductService extends AsterAddProductService<Product>{

	constructor(
        private _api: ProductTransmissionService
    ) {
		super();
	}

	public override prepareData(): AsterForm<Product> {
		let formData: AsterForm<Product> = AsterFormData.addProductFormData;

        // TODO: will be remove once no longer required
        // formData.submit.operation = (data: any) => {
        //     data['id'] = 0;
        //     data['version'] = 0,
        //     data['heroImage'] = data['heroImage']['imageUrl'];
            
        //     this._api.addProduct(
        //         data, 
        //         () => {}, 
        //         (response: RaintreeResponse) => {}, 
        //         (response: RaintreeResponse) => {}, 
        //         () => {}, 
        //         () => {}
        //     );
        // };
        return formData;
	}
}

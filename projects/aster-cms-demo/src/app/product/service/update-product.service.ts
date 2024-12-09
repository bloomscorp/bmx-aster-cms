import { Injectable } from '@angular/core';
import { AsterUpdateProductService } from '../../../../../ngx-aster-cms/src/lib/product/service/aster-update-product-service';
import { Product } from '../interface/product';
import { AsterForm } from '../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form';
import { AsterFormData } from '../model/aster-form-data';

@Injectable({
	providedIn: 'root',
})
export class UpdateProductService extends AsterUpdateProductService<Product> {

    public productData: Product = {} as Product;

	constructor() {
        super();
    }

	public override prepareData(): AsterForm<Product> {
		//TODO: use the fetched product data to set the form data
        return AsterFormData.updateProductFormData;
	}

	public override fetchProduct(): void {
		//TODO: call api to set product data
	}
}

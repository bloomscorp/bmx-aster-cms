import {Injectable} from '@angular/core';
import {AsterAddProductService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-add-product-service";
import {Product} from "../interface/product";
import {AsterForm} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form";
import {AsterFormData} from "../model/aster-form-data";

@Injectable({
	providedIn: 'root'
})
export class AddProductService extends AsterAddProductService<Product>{

	constructor() {
		super();
	}

	public override prepareData(): AsterForm<Product> {
		return AsterFormData.addProductFormData;
	}
}

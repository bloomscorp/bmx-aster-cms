import {Injectable} from '@angular/core';
import {AsterAddProductService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-add-product-service";
import {Product} from "../interface/product";

@Injectable({
	providedIn: 'root'
})
export class AddProductService extends AsterAddProductService<Product>{

	constructor() {
		super();
	}
}

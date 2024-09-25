import {Injectable} from '@angular/core';
import {AsterProductService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-product-service";

@Injectable({
	providedIn: 'root'
})
export class ProductService extends AsterProductService {

	constructor() {
		super();
	}

	public override abstractTest2(): void {
		console.log('App abstractTest2');
	}
}

import {Injectable} from '@angular/core';
import {AsterProductListingService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-product-listing-service";
import {ProductListingScreenData} from "../../../../../ngx-aster-cms/src/lib/product/interface/screen/product-listing-screen-data";
import {ProductPreview} from "../interface/product-preview";

@Injectable({
	providedIn: 'root'
})
export class ProductListingService extends AsterProductListingService<ProductPreview> {

	constructor() {
		super();
	}

	public override screen: ProductListingScreenData = {
		header: {
			title: 'Manage Your Products',
			subtitle: 'View and manage your products listed here'
		}
	};

	public fetchProductList(): void {
	}
}

import {Injectable} from '@angular/core';
import {AbstractProductListingService} from "../../../../../ngx-aster-cms/src/lib/product/service/abstract-product-listing.service";
import {AsterProductListingService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-product-listing.service";
import {ProductListingScreenData} from "../../../../../ngx-aster-cms/src/lib/product/interface/screen/product-listing-screen-data";

@Injectable({
	providedIn: 'root'
})
export class ProductListingService extends AsterProductListingService{

	constructor() {
		super();
	}

	public override screen: ProductListingScreenData = {
		header: {
			title: 'Manage Your Products',
			subtitle: 'View and manage your products listed here'
		}
	};
}

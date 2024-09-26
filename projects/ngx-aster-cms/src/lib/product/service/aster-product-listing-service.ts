import {ProductListingScreenData} from "../interface/screen/product-listing-screen-data";

export abstract class AsterProductListingService<P> {

	public screen: ProductListingScreenData = {
		header: {
			title: 'Manage Products',
			subtitle: 'View and manage your products here'
		}
	};

	public productList: P[] = [];

	public abstract fetchProductList(): void;
}

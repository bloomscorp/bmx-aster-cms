import {ASTER_CONFIG, AsterConfig} from "../../../ngx-aster-cms/src/lib/configuration/aster-config";
import {environment} from "../environments/environment";
import {Provider} from "@angular/core";
import {AsterProductListingService} from "../../../ngx-aster-cms/src/lib/product/service/aster-product-listing-service";
import {ProductListingService} from "./product/service/product-listing.service";
import {AsterOrderListingService} from "../../../ngx-aster-cms/src/lib/order/service/aster-order-listing-service";
import {OrderListingService} from "./order/service/order-listing.service";
import {AsterAddProductService} from "../../../ngx-aster-cms/src/lib/product/service/aster-add-product-service";
import {AddProductService} from "./product/service/add-product.service";

export const APP_CONFIG: AsterConfig = {
	production: environment.production,
	domain: {
		production: '',
		dev: ''
	},
	port: {
		production: 0,
		dev: 0
	},
	auth: {
		jwt: {
			key1: 'vnxjsioau',
			key2: 'palzncy4',
			key3: 'xgdj2967sj',
			key4: 'mzncud936xnk',
			key5: 'zbci3278wosh3bvx'
		},
		successRouteKey: 'mznxh39w3hd'
	}
};

export const asterServiceProviders: Array<Provider> = [{
	provide: ASTER_CONFIG,
	useValue: APP_CONFIG
}, {
	provide: AsterProductListingService,
	useClass: ProductListingService
}, {
		provide: AsterOrderListingService,
		useClass: OrderListingService
}, {
	provide: AsterAddProductService,
	useClass: AddProductService
}];

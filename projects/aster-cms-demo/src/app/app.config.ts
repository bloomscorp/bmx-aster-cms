import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {AsterProductListingService} from "../../../ngx-aster-cms/src/lib/product/service/aster-product-listing-service";
import {ProductListingService} from "./product/service/product-listing.service";
import {AsterOrderListingService} from "../../../ngx-aster-cms/src/lib/order/service/aster-order-listing-service";
import {OrderListingService} from "./order/service/order-listing.service";
import {provideHttpClient} from "@angular/common/http";
import {asterServiceProviders} from "./aster-service-providers";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		provideHttpClient(),
		...asterServiceProviders,
	]
};

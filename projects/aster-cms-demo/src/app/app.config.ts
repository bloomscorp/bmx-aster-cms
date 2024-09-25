import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {AsterProductListingService} from "../../../ngx-aster-cms/src/lib/product/service/aster-product-listing.service";
import {ProductListingService} from "./product/service/product-listing.service";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		{
			provide: AsterProductListingService,
			useClass: ProductListingService
		}
	]
};

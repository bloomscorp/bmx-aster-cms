import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideClientHydration} from '@angular/platform-browser';
import {ProductService} from "./product/service/product.service";
import {AsterProductService} from "../../../ngx-aster-cms/src/lib/product/service/aster-product-service";

export const appConfig: ApplicationConfig = {
	providers: [
		provideRouter(routes),
		provideClientHydration(),
		{
			provide: AsterProductService,
			useClass: ProductService
		}
	]
};

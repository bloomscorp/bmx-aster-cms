import {Injectable} from '@angular/core';
import {
	AsterProductDetailsService
} from '../../../../../ngx-aster-cms/src/lib/product/service/aster-product-details-service';
import {Product} from '../interface/product';
import {ProductDetailsData} from '../model/product-details-data';

@Injectable({
    providedIn: 'root'
})
export class ProductDetailsService extends AsterProductDetailsService<Product> {

    constructor() {
        super();
    }

    public override prepareProduct(): Product {
        return ProductDetailsData.productDetails;
    }

    public override fetchProduct(): void {
        this.isLoading = false;
        this.productData = this.prepareProduct();
    }

}

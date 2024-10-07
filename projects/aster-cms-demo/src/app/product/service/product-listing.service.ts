import {Injectable} from '@angular/core';
import {AsterProductListingService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-product-listing-service";
import {ProductListingScreenData} from "../../../../../ngx-aster-cms/src/lib/product/interface/screen/product-listing-screen-data";
import {ProductPreview} from "../interface/product-preview";
import {ProductPreviewTransmissionService} from "../../raintree/transmission/product-preview-transmission.service";
import {TableData} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-table/interface/table-data";

@Injectable({
    providedIn: 'root'
})
export class ProductListingService extends AsterProductListingService<ProductPreview> {

    constructor(
        private _api: ProductPreviewTransmissionService
    ) {
        super();
    }

    public override screen: ProductListingScreenData = {
        header: {
            title: 'Manage Your Products',
            subtitle: 'View and manage your products listed here'
        }
    };

    public fetchProductList(): void {
        this._api.getAllProductPreview(
            () => { },
            (response: ProductPreview[]) => { },
            (response: ProductPreview[]) => {
                this.productList = response;
            },
            () => { },
            () => { }
        )
    }

	prepareProductListTable(): TableData<ProductPreview> {
		return {} as TableData<ProductPreview>;
	}
}

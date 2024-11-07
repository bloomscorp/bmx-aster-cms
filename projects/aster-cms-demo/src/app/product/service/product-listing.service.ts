import {Injectable} from '@angular/core';
import {AsterProductListingService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-product-listing-service";
import {ProductListingScreenData} from "../../../../../ngx-aster-cms/src/lib/product/interface/screen/product-listing-screen-data";
import {ProductPreview} from "../interface/product-preview";
import { TableData } from '../../../../../ngx-aster-cms/src/public-api';
import {ProductPreviewTransmissionService} from "../../../../../ngx-aster-cms/src/lib/raintree/transmission/product/product-preview-transmission.service";
import {ProductPreviewData} from "../model/product-preview-data";

@Injectable({
    providedIn: 'root'
})
export class ProductListingService extends AsterProductListingService<ProductPreview> {

    constructor(
        private _api: ProductPreviewTransmissionService<ProductPreview>
    ) {
        super();
    }

    public override screen: ProductListingScreenData = {
        header: {
            title: 'Manage Your Products',
            subtitle: 'View and manage your products listed here'
        }
    };

	public override prepareProductListTable(): TableData<ProductPreview> {
		return {
			columnData: {
				columns: [{
					header: {
						title: 'SKU'
					}
				}, {
					header: {
						title: 'Image'
					}
				}, {
					header: {
						title: 'Name'
					}
				}, {
					header: {
						title: 'Description'
					}
				}, {
					header: {
						title: 'Price'
					},
					sm: true
				}],
				actionsColumn: [{
					id: 0,
					name: 'Product Details',
					matIcon: 'arrow_circle_right',
					tooltip: 'view details',
					ariaLabel: 'view product details',
					isRoute: true,
					routeProvider: (product: ProductPreview, row: number, column: number): string => {
						return `product/${product.id}`;
					},
					run: (product: ProductPreview, row: number, column: number): void => {
						console.warn(product);
					},
				}],
				numbered: true
			},
			content: [],
			keys: ['sku', 'heroImage', 'name', 'description', 'price'],
		};
	}

    public fetchProductList(): void {
		this.table = this.prepareProductListTable();
		this.isLoading = false;
		this.table.content = ProductPreviewData.productPreviewItems;
		return;
    }
}

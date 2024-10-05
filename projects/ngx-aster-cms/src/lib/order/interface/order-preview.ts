import {TenantPreviewItem} from "../../tenant/interface/tenant-preview-item";
import {ProductPreview} from "../../product/interface/product-preview";

export interface OrderPreview {
	id: number;
	quantity: number;
	price: number;
	status: string;
	amount: number;
	orderDate: Date;
	tenant: TenantPreviewItem;
	productList: ProductPreview[];
}

import {TenantPreviewItem} from "../../tenant/interface/tenant-preview-item";
import {ProductPreviewItem} from "../../product/interface/product-preview-item";

export interface OrderItem {
	id: number;
	quantity: number;
	price: number;
	status: string;
	amount: number;
	orderDate: Date;
	tenant: TenantPreviewItem;
	productList: ProductPreviewItem[];
}

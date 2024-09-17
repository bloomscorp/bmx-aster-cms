import {OrderItem} from "../interface/order-item";
import {TenantPreviewItemList} from "../../tenant/model/tenant-preview-item-list";
import {ProductPreviewItemList} from "../../product/model/product-preview-item-list";

export class OrderItemList {

	private static readonly item1: OrderItem = {
		id: 32154,
		quantity: 10,
		price: 20,
		status: 'PROCESSING',
		amount: 2000,
		orderDate: new Date(),
		tenant: TenantPreviewItemList.tenantPreviewItems[0],
		productList: ProductPreviewItemList.productPreviewItems
	};

	private static readonly item2: OrderItem = {
		id: 29132,
		quantity: 20,
		price: 550,
		status: 'PENDING',
		amount: 11000,
		orderDate: new Date(),
		tenant: TenantPreviewItemList.tenantPreviewItems[1],
		productList: ProductPreviewItemList.productPreviewItems
	};

	private static items: OrderItem[] = [
		OrderItemList.item1,
		OrderItemList.item2,
	];

	public static get orderItems(): OrderItem[] {
		return OrderItemList.items;
	}
}

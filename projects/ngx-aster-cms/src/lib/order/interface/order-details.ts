import { TenantPreviewItem } from "../../tenant/interface/tenant-preview-item";
import { OrderAddress } from "./order-address";
import { OrderItem } from "./order-item";

export interface OrderDetails {
    id: number;
    total: number;
    paymentStatus: string;
    transaction: { [key: string]: any };
    shippingAddress: OrderAddress;
    deliveryAddress: OrderAddress;
    createdAt: number;
    tenant: TenantPreviewItem;
    orderItemList: OrderItem[];
    deleted: boolean;
}

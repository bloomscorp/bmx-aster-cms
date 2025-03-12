import { OrderAddress } from "../../../../../ngx-aster-cms/src/lib/order/interface/order-address";
import { OrderPreview } from "../../../../../ngx-aster-cms/src/lib/order/interface/order-preview";
import { TenantPreviewItemList } from "../../../../../ngx-aster-cms/src/lib/tenant/model/tenant-preview-item-list";

export class OrderPreviewData {

    private static readonly item1: OrderPreview = {
        id: 0,
        total: 230,
        shippingAddress: {} as OrderAddress,
        deliveryAddress: {} as OrderAddress,
        createdAt: 0,
        tenant: TenantPreviewItemList.tenantPreviewItems[0],
        orderItemList: [],
        transaction: {},
        deleted: false
    }

    public static get orderPreviewItems(): OrderPreview[] {
        return [
            OrderPreviewData.item1
        ];
    }
}

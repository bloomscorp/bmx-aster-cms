import { OrderDetails } from '../../../../../ngx-aster-cms/src/lib/order/interface/order-details';
import { TenantPreviewItemList } from '../../../../../ngx-aster-cms/src/lib/tenant/model/tenant-preview-item-list';
import { OrderItemData } from './order-item-data';

export class OrderDetailsData {

    private static readonly item1: OrderDetails = {
        id: 111,
        total: 230,
        shippingAddress: {
            name: 'John Doe',
            primaryPhone: '123-456-7890',
            alternatePhone: '987-654-3210',
            addressLine1: '123 Main Street',
            addressLine2: 'Apt 4B',
            landmark: 'Near Central Park',
            postalCode: '10001',
            city: 'New York',
            state: 'NY',
            country: 'USA',
        },
        deliveryAddress: {
            name: 'Jane Smith',
            primaryPhone: '555-123-4567',
            alternatePhone: '555-765-4321',
            addressLine1: '456 Elm Street',
            addressLine2: 'Suite 12',
            landmark: 'Opposite City Mall',
            postalCode: '90001',
            city: 'Los Angeles',
            state: 'CA',
            country: 'USA'
        },
        createdAt: 0,
        tenant: TenantPreviewItemList.tenantPreviewItems[0],
        orderItemList: OrderItemData.orderItems,
        transaction: {},
        deleted: false
    }

    public static get orderDetails(): OrderDetails {
        return OrderDetailsData.item1;
    }

}

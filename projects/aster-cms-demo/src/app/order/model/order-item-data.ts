import { OrderItem } from "../../../../../ngx-aster-cms/src/lib/order/interface/order-item";

export class OrderItemData {

    private static readonly item1: OrderItem = {
        quantity: 100,
        amount: 0,
        unit: '',
        productDetails: {
            id: 1,
            sku: 'SH-0022-CEO-EG-101-TPWT',
            name: 'Transparent White Rectangular Full Rim Eyeglasses',
            description: 'spectacle',
            group: 'eyeglasses',
            heroImage: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/1.png',
            price: 1000
        },
        shippingCode: '',
        trackingUrl: '',
        status: '',
        dispatchedOn: 0,
        estimatedDeliveryFrom: 0,
        estimatedDeliveryTo: 0,
        paymentStatus: '',
        createdAt: 0,
        updatedAt: 0,
        id: 0
    }

    public static get orderItems(): OrderItem[] {
        return [
            OrderItemData.item1
        ];
    }

}

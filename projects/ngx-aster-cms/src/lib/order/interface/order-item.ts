export interface OrderItem {
    quantity: number;
    amount: number;
    unit: string;
    productDetails: { [key: string]: any };
    shippingCode: string;
    trackingUrl: string;
    status: string;
    dispatchedOn: number;
    estimatedDeliveryFrom: number;
    estimatedDeliveryTo: number;
    paymentStatus: string;
    createdAt: number;
    updatedAt: number;
    id: number;
}

import { Injectable } from '@angular/core';
import { AsterOrderListingService } from '../../../../../ngx-aster-cms/src/lib/order/service/aster-order-listing-service';
import { OrderPreview } from "../../../../../ngx-aster-cms/src/lib/order/interface/order-preview";
import { TableData } from '../../../../../ngx-aster-cms/src/public-api';
import { OrderPreviewData } from '../model/order-preview-data';

@Injectable({
    providedIn: 'root'
})
export class OrderListingService extends AsterOrderListingService<OrderPreview> {

    constructor() {
        super();
    }

    public override prepareOrderListTable(): TableData<OrderPreview> {
        return {
			columnData: {
				columns: [{
					header: {
						title: 'Order ID'
					}, 
                    sm: true
				}, {
					header: {
						title: 'Name'
					}
				}, {
					header: {
						title: 'Email'
					}
				}, {
					header: {
						title: 'Total'
					},
					sm: true
				}],
				actionsColumn: [{
					id: 0,
					name: 'Order Details',
					matIcon: 'arrow_circle_right',
					tooltip: 'view details',
					ariaLabel: 'view order details',
					isRoute: true,
					routeProvider: (order: OrderPreview, row: number, column: number): string => {
						return `/order/${order.id}`;
					},
					run: (product: OrderPreview, row: number, column: number): void => {
						console.warn(product);
					},
				}],
				numbered: true
			},
			content: [],
			keys: ['id', 'tenant.name', 'tenant.email', 'total'],
		};
    }

    public override fetchOrderList(): void {
        this.table = this.prepareOrderListTable();
        this.isLoading = false;
        this.table.content = OrderPreviewData.orderPreviewItems;
        return;
    }
}

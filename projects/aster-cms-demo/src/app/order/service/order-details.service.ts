import { Injectable } from '@angular/core';
import { AsterOrderDetailsService } from '../../../../../ngx-aster-cms/src/public-api';
import { OrderDetails } from '../../../../../ngx-aster-cms/src/lib/order/interface/order-details';
import { OrderDetailsData } from '../model/order-details-data';

@Injectable({
    providedIn: 'root'
})
export class OrderDetailsService extends AsterOrderDetailsService<OrderDetails> {
    
    constructor() {
        super();
    }
    
    public override fetchOrderDetails(): void {
        //TODO: call api to set order data
        this.orderDetails = OrderDetailsData.orderDetails;
    }
    public override prepareOrderDetails(): void {
        //TODO: prepare data if needed after api call response
    }

    

}

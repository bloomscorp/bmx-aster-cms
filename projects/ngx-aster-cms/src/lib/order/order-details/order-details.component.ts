import { Component, OnInit } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { OrderDetailsScreenData } from '../interface/screen/order-details-screen-data';
import { AsterOrderDetailsService } from '../service/aster-order-details-service';
import { OrderDetails } from '../interface/order-details';

@Component({
    selector: 'aster-cms-order-details',
    imports: [
        MatIcon
    ],
    templateUrl: './order-details.component.html',
    styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent<O extends OrderDetails> implements OnInit {

    public screen: OrderDetailsScreenData = {} as OrderDetailsScreenData;

    constructor(public _: AsterOrderDetailsService<O>) { }

    public ngOnInit() {
        this.screen = this._.screen;
        this._.fetchOrderDetails();
        console.log(this._.orderDetails);
    }

}
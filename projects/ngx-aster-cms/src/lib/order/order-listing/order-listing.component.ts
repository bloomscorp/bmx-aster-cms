import {Component, OnInit} from '@angular/core';
import {HeaderSectionComponent} from "../../component-library/header/header-section/header-section.component";
import {OrderListingScreenData} from "../interface/screen/order-listing-screen-data";
import {AsterOrderListingService} from "../service/aster-order-listing-service";
import {AsterTableComponent} from "../../component-library/aster-table/aster-table/aster-table.component";

@Component({
	selector: 'aster-cms-order-listing',
	standalone: true,
	imports: [
		AsterTableComponent,
		HeaderSectionComponent
	],
	templateUrl: './order-listing.component.html',
	styleUrl: './order-listing.component.scss'
})
export class OrderListingComponent<O> implements OnInit {

	public screen: OrderListingScreenData = {} as OrderListingScreenData;

	constructor(public _: AsterOrderListingService<O>) {
	}

	public ngOnInit() {
		this.screen = this._.screen;
		this._.fetchOrderList();
	}
}

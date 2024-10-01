import {Component, Input} from '@angular/core';
import {HeaderSectionComponent} from "../../component-library/header/header-section/header-section.component";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {OrderItem} from "../interface/order-item";
import {OrderItemList} from "../model/order-item-list";
import {DatePipe} from "@angular/common";

@Component({
	selector: 'aster-cms-order-listing',
	standalone: true,
	imports: [
		HeaderSectionComponent,
		MatIcon,
		RouterLink,
		DatePipe
	],
	templateUrl: './order-listing.component.html',
	styleUrl: './order-listing.component.scss'
})
export class OrderListingComponent {

	@Input() heading: string = 'Manage Orders';
	@Input() subHeading: string = 'View and manage your orders here';

	public orderItems: OrderItem[] = OrderItemList.orderItems;

	constructor() {
	}
}

import {Component, OnInit} from '@angular/core';
import {HeaderSectionComponent} from "../../component-library/header/header-section/header-section.component";
import {RouterLink} from "@angular/router";
import {ProductListingScreenData} from "../interface/screen/product-listing-screen-data";
import {AsterProductListingService} from "../service/aster-product-listing-service";
import {AsterTableComponent} from "../../component-library/aster-table/aster-table/aster-table.component";

@Component({
	selector: 'aster-cms-product-listing',
	standalone: true,
	imports: [
		HeaderSectionComponent,
		RouterLink,
		AsterTableComponent
	],
	templateUrl: './product-listing.component.html',
	styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent<P> implements OnInit {

	public screen: ProductListingScreenData = {} as ProductListingScreenData;

	constructor(public _: AsterProductListingService<P>) {
	}

	public ngOnInit() {
		this.screen = this._.screen;
		this._.fetchProductList();
	}
}

import {Component, Input, OnInit} from '@angular/core';
import {HeaderSectionComponent} from "../../component-library/header-section/header-section.component";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {ProductPreviewItemList} from "../model/product-preview-item-list";
import {ProductPreviewItem} from "../interface/product-preview-item";
import {ProductListingScreenData} from "../interface/screen/product-listing-screen-data";
import {AsterProductListingService} from "../service/aster-product-listing-service";

@Component({
	selector: 'aster-cms-product-listing',
	standalone: true,
	imports: [
		HeaderSectionComponent,
		MatIcon,
		RouterLink
	],
	templateUrl: './product-listing.component.html',
	styleUrl: './product-listing.component.scss'
})
export class ProductListingComponent<P> implements OnInit {

	public screen: ProductListingScreenData = {} as ProductListingScreenData;

	public productPreviewItems: ProductPreviewItem[] = ProductPreviewItemList.productPreviewItems;

	constructor(private _: AsterProductListingService<P>) {
	}

	public ngOnInit() {
		this.screen = this._.screen;
		this._.fetchProductList();
	}
}

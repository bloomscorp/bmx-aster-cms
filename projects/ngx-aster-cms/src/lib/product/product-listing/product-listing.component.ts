import {Component, Input, OnInit} from '@angular/core';
import {HeaderSectionComponent} from "../../component-library/header-section/header-section.component";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {ProductPreviewItemList} from "../model/product-preview-item-list";
import {ProductPreviewItem} from "../interface/product-preview-item";
import {AsterProductService} from "../service/aster-product-service";

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
export class ProductListingComponent implements OnInit {

	@Input() heading: string = 'Manage Products';
	@Input() subHeading: string = 'View and manage your products here';

	public productPreviewItems: ProductPreviewItem[] = ProductPreviewItemList.productPreviewItems;

	constructor(private _productService: AsterProductService) {
	}

	public ngOnInit() {
		this._productService.concreteTest();
		this._productService.abstractTest();
		this._productService.abstractTest2();
	}
}

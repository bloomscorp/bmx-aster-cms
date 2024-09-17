import {Component, Input} from '@angular/core';
import {HeaderSectionComponent} from "../../component-library/header-section/header-section.component";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {TenantPreviewItem} from "../../tenant/interface/tenant-preview-item";
import {TenantPreviewItemList} from "../../tenant/model/tenant-preview-item-list";
import {ProductPreviewItemList} from "../model/product-preview-item-list";
import {ProductPreviewItem} from "../interface/product-preview-item";

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
export class ProductListingComponent {

	@Input() heading: string = 'Manage Products';
	@Input() subHeading: string = 'View and manage your products here';

	public productPreviewItems: ProductPreviewItem[] = ProductPreviewItemList.productPreviewItems;

	constructor() {
	}
}

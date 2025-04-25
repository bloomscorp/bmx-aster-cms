import {Component, OnInit} from '@angular/core';
import {ProductSegmentCardComponent} from "../product-segment-card/product-segment-card.component";
import {AsterManageProductService} from "../service/aster-manage-product-service";
import {ManageProductScreenData} from "../interface/screen/manage-product-screen-data";
import {HeaderSectionComponent} from "../../component-library/header/header-section/header-section.component";

@Component({
	selector: 'aster-cms-manage-product',
	imports: [
		ProductSegmentCardComponent,
		HeaderSectionComponent
	],
	templateUrl: './manage-product.component.html',
	styleUrl: './manage-product.component.scss'
})
export class ManageProductComponent implements OnInit {

	public screen: ManageProductScreenData = {} as ManageProductScreenData;

	constructor(public _: AsterManageProductService) {
	}

	ngOnInit(): void {
		this.screen = this._.screen;
		this._.prepareSegments();
	}
}

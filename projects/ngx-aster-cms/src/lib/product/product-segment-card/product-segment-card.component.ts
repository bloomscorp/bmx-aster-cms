import {Component, Input} from '@angular/core';
import {ProductSegment} from "../interface/product-segment";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
	selector: 'aster-cms-product-segment-card',
	imports: [
		MatIcon,
		RouterLink
	],
	templateUrl: './product-segment-card.component.html',
	styleUrl: './product-segment-card.component.scss'
})
export class ProductSegmentCardComponent {

	@Input() segmentItem: ProductSegment = {} as ProductSegment;

}

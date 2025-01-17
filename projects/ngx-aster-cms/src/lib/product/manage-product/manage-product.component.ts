import { Component } from '@angular/core';
import {ProductSegmentCardComponent} from "../product-segment-card/product-segment-card.component";

@Component({
  selector: 'aster-cms-manage-product',
	imports: [
		ProductSegmentCardComponent
	],
  templateUrl: './manage-product.component.html',
  styleUrl: './manage-product.component.scss'
})
export class ManageProductComponent {

}

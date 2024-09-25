import {Component} from '@angular/core';
import {AsterProductDetailsService} from "../service/aster-product-details.service";

@Component({
	selector: 'aster-cms-product-details',
	standalone: true,
	imports: [],
	templateUrl: './product-details.component.html',
	styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

	public constructor(_: AsterProductDetailsService) {
	}
}

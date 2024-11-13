import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import {ProductDetailsService} from '../service/product-details.service';

@Component({
	selector: 'acd-product-details',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {

    constructor(
       public _: ProductDetailsService
    ) {
        this._.fetchProduct();
    }

	ngOnInit(): void {
        this._.fetchProduct();
    }

}

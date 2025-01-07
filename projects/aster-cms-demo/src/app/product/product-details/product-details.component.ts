import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, type OnInit} from '@angular/core';
import {ProductDetailsService} from '../service/product-details.service';

@Component({
    selector: 'acd-product-details',
    imports: [
        CommonModule,
    ],
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
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

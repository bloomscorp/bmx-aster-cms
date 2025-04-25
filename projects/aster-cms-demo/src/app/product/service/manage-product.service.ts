import {Injectable} from '@angular/core';
import {
	AsterManageProductService
} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-manage-product-service";

@Injectable({
	providedIn: 'root'
})
export class ManageProductService extends AsterManageProductService {

	constructor() {
		super();
	}

	public override prepareSegments(): void {
		this.segments = [{
			name: 'Spectacles',
			icon: 'shopping_bag',
			count: 0,
			link: '/product/spectacles'
		}, {
			name: 'Spectacles',
			icon: 'shopping_bag',
			count: 0,
			link: '/product/sunglass'
		}];
	}
}

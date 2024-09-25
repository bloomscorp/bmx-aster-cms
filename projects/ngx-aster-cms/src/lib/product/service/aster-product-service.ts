import {AbstractProductService} from "./abstract-product-service";

export class AsterProductService extends AbstractProductService {

	public abstractTest(): void {
		console.log('abstractTest');
	}

	public abstractTest2(): void {
		console.log('abstractTest2');
	}
}

import {Product} from "../interface/product";
import {ProductPreview} from "../interface/product-preview";

export class ProductData {

	private static _product: Product = {
		id: 1,
		sku: 'P1',
		name: 'Product One',
		description: 'Product Description',
	};

	public static get product(): Product {
		return ProductData._product;
	}
}

import {ProductPreview} from "../interface/product-preview";

export class ProductPreviewData {

	private static readonly item1: ProductPreview = {
		id: 1,
		sku: 'SH-0022-CEO-EG-101-TPWT',
		name: 'Transparent White Rectangular Full Rim Eyeglasses',
		description: 'spectacle',
        group: 'eyeglasses',
		heroImage: 'image',
		price: 1000,
	};

	private static readonly item2: ProductPreview = {
		id: 2,
		sku: 'SH-0022-CEO-EG-101-TPWT',
		name: 'Transparent White Rectangular Full Rim Eyeglasses',
		description: 'spectacle',
        group: 'eyeglasses',
		heroImage: 'image',
		price: 1000,
	};


	private static items: ProductPreview[] = [
		ProductPreviewData.item1,
		ProductPreviewData.item2,
	];


	public static get productPreviewItems(): ProductPreview[] {
		return ProductPreviewData.items;
	}
}

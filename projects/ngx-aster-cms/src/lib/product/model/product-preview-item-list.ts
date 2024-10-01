import {ProductPreview} from "../interface/product-preview";

// TODO: remove this once api is integrated
export class ProductPreviewItemList {

	private static readonly item1: ProductPreview = {
		id: 1,
		heroImage: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0022-CEO-EG-101-TPWT/1.png',
		brandName: 'SH Sundure',
		price: 1000,
		stock: 10,
		productName: 'Transparent White Rectangular Full Rim Eyeglasses',
		productGroup: 'spectacle',
		productType: 'spectacle',
		sku: 'SH-0022-CEO-EG-101-TPWT'
	};

	private static readonly item2: ProductPreview = {
		id: 2,
		heroImage: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0013-TS-EG-3076-SLVR/1.png',
		brandName: 'Tomstar',
		price: 500,
		stock: 10,
		productName: 'Silver Rectanglular Full Rim Eyeglasses',
		productGroup: 'spectacle',
		productType: 'spectacle',
		sku: 'SH-0013-TS-EG-3076-SLVR'
	};


	private static items: ProductPreview[] = [
		ProductPreviewItemList.item1,
		ProductPreviewItemList.item2,
	];


	public static get productPreviewItems(): ProductPreview[] {
		return ProductPreviewItemList.items;
	}
}

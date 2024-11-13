import {Product} from '../interface/product';

export class ProductDetailsData {

    private static _productDetailsData: Product = {
        id: 1,
        sku: 'P1',
        name: 'Product One',
        description: 'The Basic Tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and dependability. Try this new look on your body, with a specific technique that gives each tee its own look.',
        price: 1999,
        category: 'Sunglasses',
        heroImage: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/1.png',
        galleryImages: [
            'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/1.png',
            'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/2.png',
            'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/3.png'
        ]
    };

    public static get productDetails(): Product {
        return ProductDetailsData._productDetailsData;
    }

}

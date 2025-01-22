import {Injectable} from '@angular/core';
import {AsterAddProductService} from "../../../../../ngx-aster-cms/src/lib/product/service/aster-add-product-service";
import {Product} from "../interface/product";
import {AsterForm} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form";
import {AsterFormData} from "../model/aster-form-data";

@Injectable({
	providedIn: 'root'
})
export class AddProductService extends AsterAddProductService<Product> {

	constructor(
    ) {
		super();
	}

	public override prepareData(): AsterForm<Product> {
        setTimeout(() => {
            AsterFormData._category.defaultValue = {
                value: '1',
                name: 'Category 1',
            }
        //     AsterFormData.addProductFormData.inputs[1].defaultValue = 'MONSTER2';
            AsterFormData._heroImage.defaultValue = {
                id: 0,
                imageUrl: 'https://anuprerna-bloomscorp-dev.s3.ap-south-1.amazonaws.com/sp-demo/7HNJ0ASMP5G2LM5JGHR2937KJ5NG01158.jpg',
                altText: '',
                deleted: false,
                order: 1,
                imageFile: null
            };
        //     AsterFormData._category.defaultValue = {
        //         value: '2',
        //         name: 'Category 2',
        //     }

        //     AsterFormData._collection.multiSelectDefaultValue = [{
        //         value: '2',
        //         name: 'Collection 2',
        //     }]

        //     AsterFormData._galleryImages.multiImageDefaultValue = [
        //         {
        //             imageUrl:
        //                 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/aster/assets/images/upload-image.svg',
        //             altText: 'Hero Image',
        //             order: 1,
        //             imageFile: null,
        //             deleted: false,
        //         },
        //         {
        //             imageUrl:
        //                 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/aster/assets/images/upload-image.svg',
        //             altText: 'Hero Image',
        //             order: 1,
        //             imageFile: null,
        //             deleted: false,
        //         },
        //     ]

        //     AsterFormData._tags.chipDefaultValue = [
        //         {
        //             value: 'tag_1',
        //             display: 'TAG 1',
        //         },
        //         {
        //             value: 'tag_2',
        //             display: 'TAG 2',
        //         },
        //     ];
        //     console.log('trigger hero image change');
            this.data = AsterFormData.addProductFormData;
          }, 2000);
		return AsterFormData.addProductFormData;
	}
}

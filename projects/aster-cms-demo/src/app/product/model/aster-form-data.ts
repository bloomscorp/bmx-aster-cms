import {Product} from "../interface/product";
import {AsterForm} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form";
import {
	AsterFormInput
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form-input";
import {
	AsterFormInputService
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/service/aster-form-input-service";
import {
	AsterFormSelectOption
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form-select-option";
import {AsterFormImageItem} from '../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form-image-item';
import {AsterFormService} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/service/aster-form.service";

export class AsterFormData {

	private static _product: Product = {
		id: 1,
		sku: 'P1',
		name: 'Product One',
		description: 'Product Description',
		price: 1999,
		category: 'Sunglasses',
        heroImage: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/1.png',
        galleryImages: [
            'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/1.png',
            'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/2.png',
            'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/3.png'
        ]
	};

	private static _sku: AsterFormInput<Product, string> = AsterFormInputService.prepareTextInput({
		model: AsterFormData._product,
		label: 'SKU',
		key: 'sku',
	});

	private static _name: AsterFormInput<Product, string> = AsterFormInputService.prepareTextInput({
		model: AsterFormData._product,
		label: 'Name',
		key: 'name',
	});

	private static _description: AsterFormInput<Product, string> = AsterFormInputService.prepareRichTextInput({
		model: AsterFormData._product,
		label: 'Description',
		key: 'description',
	});

	private static _price: AsterFormInput<Product, number> = AsterFormInputService.prepareNumericInput({
		model: AsterFormData._product,
		label: 'Price',
		key: 'price',
		min: 0
	});

	private static _category: AsterFormInput<Product, AsterFormSelectOption> = AsterFormInputService.prepareSelectInput({
		model: AsterFormData._product,
		label: 'Category',
		key: 'category',
		options: [{
			value: '1',
			name: 'Category 1',
		}, {
			value: '2',
			name: 'Category 2',
		}],
        defaultValue: {
            value: '2',
            name: 'Category 2'
        }
	});

    private static _subCategory: AsterFormInput<Product, AsterFormSelectOption> = AsterFormInputService.prepareMultiSelectInput({
		model: AsterFormData._product,
		label: 'Sub Category',
		key: 'subCategory',
		options: [{
			value: '1',
			name: 'Sub Category 1',
		}, {
			value: '2',
			name: 'Sub Category 2',
		}],
        appendTo: 'body'
	});

    private static _heroImage: AsterFormInput<Product, AsterFormImageItem> = AsterFormInputService.prepareImageInput({
        model: AsterFormData._product,
        label: 'Hero Image',
        key: 'heroImage',
        defaultValue: {
            value: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/aster/assets/images/upload-image.svg',
            altText: 'Hero Image'
        }
    });

    private static _galleryImages: AsterFormInput<Product, AsterFormImageItem> = AsterFormInputService.prepareMultiImageInput({
        model: AsterFormData._product,
        label: 'Gallery Images',
        key: 'galleryImages',
		multiImageDefaultValue: [
            {
                value: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/1.png',
                altText: 'Gallery Image'
            },
            {
                value: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/2.png',
                altText: 'Gallery Image'
            }
        ]
    });

    private static _tags: AsterFormInput<Product, string> = AsterFormInputService.prepareChipInput({
        model: AsterFormData._product,
        label: 'Tags',
        key: 'tags',
        chipDefaultValue: ['Tag 1', 'Tag 2']
    })

	public static get addProductFormData(): AsterForm<Product> {
		return AsterFormService.prepare({
			model: AsterFormData._product,
			inputs: [
				AsterFormData._sku,
				AsterFormData._name,
				AsterFormData._description,
				AsterFormData._price,
				AsterFormData._category,
				AsterFormData._subCategory,
				AsterFormData._heroImage,
				AsterFormData._galleryImages,
                AsterFormData._tags
			],
			submit: {
				label: 'Add Product',
				api: ''
			}
		});
	}

    public static get updateProductFormData(): AsterForm<Product> {
		return AsterFormService.prepare({
			model: AsterFormData._product,
			inputs: [
				AsterFormData._sku,
				AsterFormData._name,
				AsterFormData._description,
				AsterFormData._price,
				AsterFormData._category,
				AsterFormData._subCategory,
				AsterFormData._heroImage,
				AsterFormData._galleryImages,
                AsterFormData._tags
			],
			submit: {
				label: 'Update Product',
				api: ''
			}
		});
	}
}

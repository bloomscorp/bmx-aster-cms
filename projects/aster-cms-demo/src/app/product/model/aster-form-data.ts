import {Product} from "../interface/product";
import {AsterForm} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form";
import {
	AsterFormInput
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form-input";
import {
	AsterFormInputType
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/model/aster-form-input-type";
import {
	AsterFormInputService
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/service/aster-form-input-service";

export class AsterFormData {

	private static _product: Product = {
		id: 1,
		sku: 'P1',
		name: 'Product One',
		description: 'Product Description',
	};

	private static _sku: AsterFormInput<Product, string> = AsterFormInputService.prepareTextInput({
		model: AsterFormData._product,
		label: 'SKU',
		key: 'sku'
	});

	private static _name: AsterFormInput<Product, string> = AsterFormInputService.prepareTextInput({
		model: AsterFormData._product,
		label: 'Name',
		key: 'name',
	});

	private static _description: AsterFormInput<Product, string> = AsterFormInputService.prepareTextInput({
		model: AsterFormData._product,
		label: 'Description',
		key: 'description',
	});

	public static get addProductFormData(): AsterForm<Product> {
		return {
			model: AsterFormData._product,
			inputs: [
				AsterFormData._sku,
				AsterFormData._name,
				AsterFormData._description,
			]
		};
	}
}

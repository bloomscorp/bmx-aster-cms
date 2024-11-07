import {Product} from "../interface/product";
import {AsterForm} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form";
import {
	AsterFormInput
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form-input";
import {
	AsterFormInputType
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/model/aster-form-input-type";

export class AsterFormData {

	private static _product: Product = {
		id: 1,
		sku: 'P1',
		name: 'Product One',
		description: 'Product Description',
	};

	private static _sku: AsterFormInput<Product, string> = {
		model: AsterFormData._product,
		type: AsterFormInputType.TEXT,
		label: 'SKU',
		key: 'sku',
		defaultValue: '',
	}

	private static _name: AsterFormInput<Product, string> = {
		model: AsterFormData._product,
		type: AsterFormInputType.TEXT,
		label: 'Name',
		key: 'name',
		defaultValue: '',
	}

	private static _description: AsterFormInput<Product, string> = {
		model: AsterFormData._product,
		type: AsterFormInputType.TEXT,
		label: 'Description',
		key: 'description',
		defaultValue: '',
	}

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

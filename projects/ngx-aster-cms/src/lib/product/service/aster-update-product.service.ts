import { Injectable } from '@angular/core';
import { AsterFormCompatible } from '../../component-library/aster-form/interface/aster-form-compatible';
import { AsterForm } from '../../component-library/aster-form/interface/aster-form';
import { UpdateProductScreenData } from '../interface/screen/update-product-screen-data';

@Injectable({
	providedIn: 'root',
})
export abstract class AsterUpdateProductService<P extends AsterFormCompatible> {
	
    private _data: AsterForm<P> = {} as AsterForm<P>;
	public screen: UpdateProductScreenData = {
		header: {
			title: 'Update Your Products',
			subtitle: 'Update and review your products here',
		},
	};

    constructor() {}

	public get data(): AsterForm<P> {
		return this._data;
	}

	public set data(data: AsterForm<P>) {
		this._data = data;
	}

	public abstract prepareData(): AsterForm<P>;
	public abstract fetchProduct(): void;
}

import {AsterForm} from "../../component-library/aster-form/interface/aster-form";
import {AsterFormCompatible} from "../../component-library/aster-form/interface/aster-form-compatible";
import {AddProductScreenData} from "../interface/screen/add-product-screen-data";
import {signal, WritableSignal} from "@angular/core";

export abstract class AsterAddProductService<P extends AsterFormCompatible> {

    public screen: AddProductScreenData = {
		header: {
			title: 'Add Your Products',
			subtitle: 'Create and manage your products here'
		},
	};

	private _data: WritableSignal<AsterForm<P>> = signal({} as AsterForm<P>);

	public get data(): AsterForm<P> {
		return this._data();
	}

	public set data(data: AsterForm<P>) {
		this._data.set(data);
	}

	public abstract prepareData(): AsterForm<P>;
}

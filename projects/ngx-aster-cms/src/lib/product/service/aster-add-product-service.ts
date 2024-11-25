import {AsterForm} from "../../component-library/aster-form/interface/aster-form";
import {AsterFormCompatible} from "../../component-library/aster-form/interface/aster-form-compatible";

export abstract class AsterAddProductService<P extends AsterFormCompatible> {

	private _data: AsterForm<P> = {} as AsterForm<P>;

	public get data(): AsterForm<P> {
		return this._data;
	}

	public set data(data: AsterForm<P>) {
		this._data = data;
	}

	public abstract prepareData(): AsterForm<P>;
}

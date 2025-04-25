import {ProductSegment} from "../interface/product-segment";
import {ManageProductScreenData} from "../interface/screen/manage-product-screen-data";

export abstract class AsterManageProductService {

	public screen: ManageProductScreenData = {
		header: {
			title: 'Manage Products',
			subtitle: 'Select a product segment'
		},
	};

	private _segments: ProductSegment[] = [];

	public get segments() {
		return this._segments;
	}

	public set segments(segments: ProductSegment[]) {
		this._segments = segments;
	}

	public abstract prepareSegments(): void;
}

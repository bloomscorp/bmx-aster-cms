import {ProductSegment} from "../interface/product-segment";

export abstract class AsterManageProductService {

	private _segments: ProductSegment[] = [];

	public get segments() {
		return this._segments;
	}

	public set segments(segments: ProductSegment[]) {
		this._segments = segments;
	}

	public abstract prepareSegments(): void;
}

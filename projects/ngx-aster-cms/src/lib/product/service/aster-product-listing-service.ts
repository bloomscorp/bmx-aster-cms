import {ProductListingScreenData} from "../interface/screen/product-listing-screen-data";
import {TableData} from "../../component-library/aster-table/interface/table-data";

export abstract class AsterProductListingService<P> {

	public screen: ProductListingScreenData = {
		header: {
			title: 'Manage Products',
			subtitle: 'View and manage your products here'
		},
		//TODO: why is add product link dynamic?
        addProductLink: '/product/add'
	};

	private _loading: boolean = true;
	private _table: TableData<P> = {} as TableData<P>;
	private _productList: P[] = [];

	public get isLoading(): boolean {
		return this._loading;
	}

	public set isLoading(value: boolean) {
		this._loading = value;
	}

	public get table(): TableData<P> {
		return this._table;
	}

	public set table(value: TableData<P>) {
		this._table = value;
	}

	public get productList(): P[] {
		return this._productList;
	}

	public set productList(value: P[]) {
		this._productList = value;
	}

	public abstract fetchProductList(): void;
	public abstract prepareProductListTable(): TableData<P>;
}

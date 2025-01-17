import {TableData} from "../../component-library/aster-table/interface/table-data";
import {OrderListingScreenData} from "../interface/screen/order-listing-screen-data";

export abstract class AsterOrderListingService<O> {

	public screen: OrderListingScreenData = {
		header: {
			title: 'Manage Orders',
			subtitle: 'View and manage your orders here'
		}
	};

	private _loading: boolean = true;
	private _table: TableData<O> = {} as TableData<O>;
	private _orderList: O[] = [];

	public get isLoading(): boolean {
		return this._loading;
	}

	public set isLoading(value: boolean) {
		this._loading = value;
	}

	public get table(): TableData<O> {
		return this._table;
	}

	public set table(value: TableData<O>) {
		this._table = value;
	}

	public get orderList(): O[] {
		return this._orderList;
	}

	public set productList(value: O[]) {
		this._orderList = value;
	}

	public abstract fetchOrderList(): void;
	public abstract prepareOrderListTable(): TableData<O>;
}

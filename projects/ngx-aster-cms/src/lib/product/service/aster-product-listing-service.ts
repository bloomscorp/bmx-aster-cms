import {ProductListingScreenData} from "../interface/screen/product-listing-screen-data";
import {TableColumnData} from "../../component-library/aster-table/interface/table-column-data";
import {TableData} from "../../component-library/aster-table/interface/table-data";

export abstract class AsterProductListingService<P> {

	public screen: ProductListingScreenData = {
		header: {
			title: 'Manage Products',
			subtitle: 'View and manage your products here'
		}
	};

	public isLoading: boolean = true;
	public table: TableData<P> = {} as TableData<P>;
	public productList: P[] = [];

	public abstract fetchProductList(): void;
	public abstract prepareProductListTable(): TableData<P>;
}

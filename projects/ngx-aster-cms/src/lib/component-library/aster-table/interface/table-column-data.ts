import {TableColumn} from "./table-column";
import {CellAction} from "./cell-action";

export interface TableColumnData {
	columns: TableColumn[];
	numbered?: boolean;
	actionsColumn?: CellAction[];
}

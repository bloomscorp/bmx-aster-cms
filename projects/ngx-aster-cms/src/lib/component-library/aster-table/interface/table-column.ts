import {TableHeader} from "./table-header";
import {CellDefaultActions} from "./cell-default-actions";
import {CellAction} from "./cell-action";

export interface TableColumn {
	header: TableHeader;
	sm?: boolean;
	defaultActions?: CellDefaultActions;
	actions?: CellAction[];
}

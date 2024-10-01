import {TableColumnData} from "./table-column-data";

export interface TableData<T> {
	columnData: TableColumnData;
	content: T[];
	keys: string[];
}

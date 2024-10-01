export interface CellAction {
	id: number;
	name?: string;
	matIcon: string;
	tooltip: string;
	ariaLabel: string;
	isRoute?: boolean;
	routeProvider?: (value: any, row: number, column: number) => string;
	run: (value: any, row: number, column: number) => void;
}

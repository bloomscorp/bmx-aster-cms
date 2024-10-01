import {Component, Input} from '@angular/core';
import {TableData} from "../interface/table-data";
import {CellAction} from "../interface/cell-action";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {CdkCopyToClipboard} from "@angular/cdk/clipboard";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";

@Component({
	selector: 'aster-cms-aster-table',
	standalone: true,
	imports: [
		NgClass,
		CdkCopyToClipboard,
		MatTooltip,
		MatIcon,
		MatIconButton,
		NgIf,
		NgForOf,
		RouterLink
	],
	templateUrl: './aster-table.component.html',
	styleUrl: './aster-table.component.scss'
})
export class AsterTableComponent {

	@Input() public set tableData(data: TableData<any>) {
		this.data = data;
		this._checkTableData();
	}

	public data: TableData<any> = {} as TableData<any>;
	public page: number = 1;

	private _checkActionColumn(): void {

		const actionsColumn: CellAction[] | undefined = this.data.columnData.actionsColumn;

		if (actionsColumn && (actionsColumn.length > 0)) {
			actionsColumn.forEach(action => {
				if (action.isRoute && !action.routeProvider)
					console.error(`CellAction with id: ${action.id} which is a route needs a routeProvider!`);
			});
		}
	}

	private _checkTableData(): void {
		this._checkActionColumn();
	}

	public ngOnInit(): void {
	}

	protected getColumnIndex(): number {
		return this.data.columnData.numbered ? (this.data.keys.length + 1) : (this.data.keys.length);
	}

	protected actionColumnRouteProvider(action: CellAction, row: any, rowIndex: number): string {
		if (action.routeProvider)
			return action.routeProvider(row, rowIndex, this.getColumnIndex());
		return '/';
	}

	protected actionColumnRouteClickAction(action: CellAction, row: any, rowIndex: number): void {
		action.run(
			row,
			rowIndex,
			this.getColumnIndex()
		);
	}

	protected actionColumnClickAction(action: CellAction, row: any, rowIndex: number): void {
		action.run(
			row,
			rowIndex,
			(this.data.columnData.numbered ? (this.data.keys.length + 1) : (this.data.keys.length))
		);
	}
}

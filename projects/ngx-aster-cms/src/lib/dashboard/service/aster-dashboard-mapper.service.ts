import {Injectable} from '@angular/core';
import {AsterDashboardItems} from "../model/aster-dashboard-items";
import {AsterDashboardItem} from "../interface/aster-dashboard-item";

@Injectable({
	providedIn: 'root'
})
export class AsterDashboardMapperService {

	constructor() {
	}

	private _dashboardItems: AsterDashboardItem[] = AsterDashboardItems.items;

	get dashboardItems(): AsterDashboardItem[] {
		return this._dashboardItems;
	}

	set dashboardItems(value: AsterDashboardItem[]) {
		this._dashboardItems = value;
	}

	private _heading: string = 'Manage Dashboard';

	get heading(): string {
		return this._heading;
	}

	set heading(value: string) {
		this._heading = value;
	}

	private _subHeading: string = 'Start your website management journey';

	get subHeading(): string {
		return this._subHeading;
	}

	set subHeading(value: string) {
		this._subHeading = value;
	}
}

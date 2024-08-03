import {Component, Input} from '@angular/core';
import {NavigationComponent} from "../../navigation/navigation/navigation.component";
import {DashboardCardComponent} from "../dashboard-card/dashboard-card.component";
import {AsterDashboardItem} from "../interface/aster-dashboard-item";
import {HeaderSectionComponent} from "../../component-library/header-section/header-section.component";
import {AsterDashboardMapperService} from "../service/aster-dashboard-mapper.service";

@Component({
	selector: 'aster-cms-dashboard',
	standalone: true,
	imports: [
		NavigationComponent,
		DashboardCardComponent,
		HeaderSectionComponent
	],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

	@Input() heading: string  = '';
	@Input() subHeading: string  = '';
	@Input() dashboardItems: AsterDashboardItem[] = [];

	constructor(
		private _asterDashboardMapper: AsterDashboardMapperService
	) {
		this.dashboardItems = this._asterDashboardMapper.dashboardItems;
		this.heading = this._asterDashboardMapper.heading;
		this.subHeading= this._asterDashboardMapper.subHeading;
	}

}

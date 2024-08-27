import {Component, Input, OnInit} from '@angular/core';
import {NavigationComponent} from "../../navigation/navigation/navigation.component";
import {DashboardCardComponent} from "../dashboard-card/dashboard-card.component";
import {AsterDashboardItem} from "../interface/aster-dashboard-item";
import {HeaderSectionComponent} from "../../component-library/header-section/header-section.component";
import {AsterDashboardMapperService} from "../service/aster-dashboard-mapper.service";
import {DashboardService} from "../service/dashboard.service";

@Component({
	selector: 'aster-cms-dashboard',
	providers: [DashboardService],
	standalone: true,
	imports: [
		NavigationComponent,
		DashboardCardComponent,
		HeaderSectionComponent
	],
	templateUrl: './dashboard.component.html',
	styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

	@Input() heading: string  = '';
	@Input() subHeading: string  = '';
	@Input() dashboardItems: AsterDashboardItem[] = [];

	constructor(
		private _asterDashboardMapper: AsterDashboardMapperService,
		private _dashboard: DashboardService
	) {
		this.dashboardItems = this._asterDashboardMapper.dashboardItems;
		this.heading = this._asterDashboardMapper.heading;
		this.subHeading= this._asterDashboardMapper.subHeading;
	}

	public ngOnInit(): void {
		console.log(this._dashboard.test);
	}
}

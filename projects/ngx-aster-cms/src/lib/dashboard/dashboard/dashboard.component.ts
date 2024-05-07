import {Component, Input} from '@angular/core';
import {NavigationComponent} from "../../navigation/navigation/navigation.component";
import {DashboardCardComponent} from "../dashboard-card/dashboard-card.component";
import {DashboardItems} from "../model/dashboard-items";
import {DashboardItem} from "../interface/dashboard-item";
import {HeaderSectionComponent} from "../../component-library/header-section/header-section.component";

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

	@Input() dashboardItems: DashboardItem[] = DashboardItems.items;

}

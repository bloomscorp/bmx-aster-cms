import {Component, Input} from '@angular/core';
import {AsterDashboardItem} from "../interface/aster-dashboard-item";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'aster-cms-dashboard-card',
  standalone: true,
	imports: [
		MatIcon,
		RouterLink
	],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {

	@Input() dashboardItem: AsterDashboardItem = {} as AsterDashboardItem;

}

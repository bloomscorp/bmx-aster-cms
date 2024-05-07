import {Component, Input} from '@angular/core';
import {DashboardItem} from "../interface/dashboard-item";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'aster-cms-dashboard-card',
  standalone: true,
	imports: [
		MatIcon
	],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.scss'
})
export class DashboardCardComponent {

	@Input() dashboardItem: DashboardItem = {} as DashboardItem;

}

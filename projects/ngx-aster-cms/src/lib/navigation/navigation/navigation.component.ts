import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NavigationItem} from "../interface/navigation-item";
import {NavigationItems} from "../model/navigation-items";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatIconModule} from '@angular/material/icon';

@Component({
	selector: 'aster-cms-navigation',
	standalone: true,
	imports: [
		NgOptimizedImage,
		RouterLinkActive,
		RouterLink,
		MatIconModule
	],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

	@Input() public companyLogo: string = 'https://www.bloomscorp.com/assets/images/logo.png';
	@Input() public companyName: string = 'Bloomscorp';
	@Input() public navigationItemList: NavigationItem[] = NavigationItems.items;

	@Output() navigationToggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	public toggleSidebar(): void {
		this.navigationToggleEvent.emit(false);
	}

}

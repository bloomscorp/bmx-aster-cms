import {Component, Input} from '@angular/core';
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

	public showSubMen: boolean = false;
	@Input() public navigationItemList: NavigationItem[] = NavigationItems.items;
	public selectedMenu: NavigationItem = {} as NavigationItem;

	public onItemClick(selectedMenu: NavigationItem): void {
		this.selectedMenu = selectedMenu;
		if (this.selectedMenu.subItems.length > 0) this.showSubMen = true;
	}

	public onItemClose(): void {
		this.showSubMen = false;
	}

}

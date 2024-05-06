import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NavigationItem} from "../interface/navigation-item";
import {NavigationItems} from "../model/navigation-items";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
	selector: 'aster-cms-navigation',
	standalone: true,
	imports: [
		NgOptimizedImage,
		RouterLinkActive,
		RouterLink
	],
	templateUrl: './navigation.component.html',
	styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

	public showSubMen: boolean = false;
	public navigationItemList: NavigationItem[] = NavigationItems.items;
	public selectedMenu: NavigationItem = {} as NavigationItem;

	public onItemClick(selectedMenu: NavigationItem): void {
		this.selectedMenu = selectedMenu;
		if (this.selectedMenu.subItems.length > 0) this.showSubMen = true;
	}

	public onItemClose(): void {
		this.showSubMen = false;
	}

}

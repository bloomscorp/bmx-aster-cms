import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {AsterNavigationItem} from "../interface/aster-navigation-item";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {AsterNavigationMapperService} from "../service/aster-navigation-mapper.service";

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
export class NavigationComponent implements OnInit {

	@Input() public companyLogo: string = '';
	@Input() public companyName: string = '';
	@Input() public navigationItemList: AsterNavigationItem[] = [];

	@Output() navigationToggleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

	constructor(
		private _asterNavigationMapper: AsterNavigationMapperService
	) {
	}

	public toggleSidebar(): void {
		this.navigationToggleEvent.emit(false);
	}

	ngOnInit(): void {
		this.navigationItemList = this._asterNavigationMapper.navigationItemList;
		this.companyLogo = this._asterNavigationMapper.companyLogo;
		this.companyName = this._asterNavigationMapper.companyName;
	}

}

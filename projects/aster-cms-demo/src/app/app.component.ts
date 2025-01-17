import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {AsterNavigationItems, AsterNavigationMapperService, NavigationComponent} from 'ngx-aster-cms';
import {NgClass} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'acd-root',
    imports: [
        RouterOutlet,
        NavigationComponent,
        NgClass,
        MatSidenavModule,
        MatButtonModule,
        MatIcon
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

	public hideNavigation: boolean = false;
	public showToggleButton: boolean = true;
	public smallScreen: boolean = false;

	constructor(
		private _router: Router,
		private _asterNavigationMapper: AsterNavigationMapperService
	) {

		this._asterNavigationMapper.navigationItemList = AsterNavigationItems.items;
		this._asterNavigationMapper.companyName = 'Aster Demo';

		this._router.events.subscribe((ev): void => {
			if (ev instanceof NavigationEnd) {
				this.hideNavigation = ev.url === '/login' || ev.url === '/404' || ev.url === '/' || ev.urlAfterRedirects == '/404';
				this.showToggleButton = ev.url === '/login' || ev.url === '/404' || ev.url === '/' || ev.urlAfterRedirects == '/404';
			}
		});
	}

	ngOnInit(): void {
		if (typeof window !== "undefined") {
			if (window.innerWidth < 768) {
				this.hideNavigation = true;
				this.smallScreen = true;
			}
		}
	}
}

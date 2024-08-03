import {Component, OnInit} from '@angular/core';
import {NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {NavigationComponent} from 'ngx-aster-cms';
import {NgClass} from "@angular/common";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {AsterRequestMapper} from "../../../ngx-aster-cms/src/lib/route/model/aster-request-mapper";

@Component({
	selector: 'acd-root',
	standalone: true,
	imports: [
		RouterOutlet,
		NavigationComponent,
		NgClass,
		MatSidenavModule,
		MatButtonModule,
		MatIcon
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

	public hideNavigation: boolean = false;
	public showToggleButton: boolean = true;
	public smallScreen: boolean = false;

	constructor(private _router: Router) {
		this._router.events.subscribe((ev): void => {
			// console.log((ev as NavigationEnd).url)
			if (ev instanceof NavigationEnd) {
				this.hideNavigation = ev.url === '/login' || ev.url === '/404' || ev.url === '/' || ev.urlAfterRedirects == '/404';
				this.showToggleButton = ev.url === '/login' || ev.url === '/404' || ev.url === '/' || ev.urlAfterRedirects == '/404';
			}
		});
	}

	ngOnInit(): void {
		if (window.innerWidth < 768) {
			this.hideNavigation = true;
			this.smallScreen = true;
		}
	}
}

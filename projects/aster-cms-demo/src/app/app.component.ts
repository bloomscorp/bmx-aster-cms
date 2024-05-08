import {Component} from '@angular/core';
import {RouterOutlet, Router, NavigationEnd} from '@angular/router';
import {NavigationComponent} from 'ngx-aster-cms';
import {NgClass} from "@angular/common";

@Component({
	selector: 'acd-root',
	standalone: true,
	imports: [
		RouterOutlet,
		NavigationComponent,
		NgClass
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {

	public hideNavigation: boolean = true;

	constructor(private _router: Router) {
		this._router.events.subscribe((ev): void => {
			if (ev instanceof NavigationEnd) {
				this.hideNavigation = ev.url === '/login' || ev.url === '/';
			}
		});
	}
}

import {Injectable} from '@angular/core';
import {RouteReplace} from "../interface/route-replace";
import {Route} from "@angular/router";

@Injectable({
	providedIn: 'root'
})
export class AsterRouteService {

	constructor() {
	}

	// TODO: add method to replace default routes
	public static replaceRoutes(routes: RouteReplace[]): void {

	}

	public static replaceRouteUrl(route: Route, url: string): Route {
		route.path = url;
		return route;
	}
}

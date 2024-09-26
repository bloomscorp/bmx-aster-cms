import {Injectable} from '@angular/core';
import {RouteReplace} from "../interface/route-replace";

@Injectable({
	providedIn: 'root'
})
export class AsterRouteService {

	constructor() {
	}

	// TODO: add method to replace default routes
	public static replaceRoutes(routes: RouteReplace[]): void {

	}
}

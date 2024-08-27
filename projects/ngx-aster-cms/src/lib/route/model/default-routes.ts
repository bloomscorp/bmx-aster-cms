import {Route, Routes} from "@angular/router";
import {AsterRequestMapper} from "./aster-request-mapper";
import {RouteReplace} from "../interface/route-replace";

export class DefaultRoutes {

	public static readonly LOGIN: Route = {
		path: AsterRequestMapper.LOGIN,
		loadComponent: () => import('../../authentication/login/login.component').then(m => m.LoginComponent),
		pathMatch: 'full'
	};

	public static readonly DASHBOARD: Route = {
		path: AsterRequestMapper.DASHBOARD,
		loadComponent: () => import('../../dashboard/dashboard/dashboard.component').then(m => m.DashboardComponent),
		pathMatch: 'full'
	};

	public static readonly BASE: Route = {
		path: AsterRequestMapper.BASE_RELATIVE_URL,
		redirectTo: AsterRequestMapper.LOGIN,
		pathMatch: 'full'
	};

	public static readonly NOT_FOUND: Route = {
		path: AsterRequestMapper.INVALID_URL,
		loadComponent: () => import('../../404/not-found/not-found.component').then(m => m.NotFoundComponent),
		pathMatch: 'full'
	};

	public static readonly ANY_URL: Route = {
		path: '**',
		redirectTo: AsterRequestMapper.INVALID_URL
	};

	public static readonly ROUTES: Routes = [
		DefaultRoutes.BASE,
		DefaultRoutes.LOGIN,
		DefaultRoutes.DASHBOARD,
		DefaultRoutes.NOT_FOUND,
		DefaultRoutes.ANY_URL
	];

	// TODO: add method to replace default routes
	public static replaceRoutes(routes: RouteReplace[]): void {

	}
}

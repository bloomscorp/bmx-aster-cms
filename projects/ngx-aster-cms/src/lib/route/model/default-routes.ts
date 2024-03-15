import {Route, Routes} from "@angular/router";
import {AsterRequestMapper} from "./aster-request-mapper";

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
		path: '**',
		loadComponent: () => import('../../404/not-found/not-found.component').then(m => m.NotFoundComponent),
		pathMatch: 'full'
	};

	public static readonly ROUTES: Routes = [
		DefaultRoutes.BASE,
		DefaultRoutes.LOGIN,
		DefaultRoutes.DASHBOARD,
		DefaultRoutes.NOT_FOUND
	];
}

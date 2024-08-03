import {ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {inject} from "@angular/core";
import {AsterDashboardMapperService, AsterDashboardItems} from 'ngx-aster-cms';


export const dashboardResolver: ResolveFn<boolean> = (
	route: ActivatedRouteSnapshot, state: RouterStateSnapshot
): boolean => {

	const _asterDashboardMapper: AsterDashboardMapperService = inject(AsterDashboardMapperService);

	_asterDashboardMapper.dashboardItems = AsterDashboardItems.items;
	_asterDashboardMapper.heading = 'Dashboard';
	_asterDashboardMapper.subHeading = 'Welcome to Bloomscorp\'s dashboard';

	return true;
};

import {NavigationItem} from "../interface/navigation-item";

export class NavigationItems {

	private static readonly dashboardNavigation: NavigationItem = {
		icon: 'https://img.icons8.com/ios-glyphs/90/noticeboard.png',
		name: 'manage dashboard',
		url: '/dashboard',
		subItems: [],
	}

	private static readonly tenantNavigation: NavigationItem = {
		icon: 'https://img.icons8.com/material-rounded/60/guest-male.png',
		name: 'manage tenant',
		url: '/tenant',
		subItems: [
			// {
			// 	icon: 'https://img.icons8.com/material-sharp/90/ffffff/guest-male.png',
			// 	name: 'manage tenant',
			// 	description: 'Manage your tenants',
			// 	url: '/dashboard',
			// }
		],
	}

	public static get items(): NavigationItem[] {
		return [
			NavigationItems.dashboardNavigation,
			NavigationItems.tenantNavigation,
		]
	}
}

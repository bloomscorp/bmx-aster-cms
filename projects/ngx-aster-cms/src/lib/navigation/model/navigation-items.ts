import {NavigationItem} from "../interface/navigation-item";

export class NavigationItems {

	private static readonly dashboardNavigation: NavigationItem = {
		icon: 'https://img.icons8.com/ios-filled/50/diversity.png',
		name: 'manage tenant',
		url: '/dashboard',
		subItems: [
			{
				icon: 'https://img.icons8.com/ios-filled/50/diversity.png',
				name: 'manage tenant',
				description: 'Manage your tenants',
				url: '/dashboard',
			},
			{
				icon: 'https://img.icons8.com/ios-filled/50/diversity.png',
				name: 'manage other',
				description: 'Manage your tenants',
				url: '/tenant',
			}
		],
	}

	private static readonly productNavigation: NavigationItem = {
		icon: 'https://img.icons8.com/ios-filled/50/diversity.png',
		name: 'product',
		url: '/dashboard',
		subItems: [
			{
				icon: 'https://img.icons8.com/ios-filled/50/diversity.png',
				name: 'dashboard',
				description: '',
				url: '/dashboard',
			}
		],
	}

	public static get items(): NavigationItem[] {
		return [
			NavigationItems.dashboardNavigation,
			NavigationItems.productNavigation
		]
	}
}

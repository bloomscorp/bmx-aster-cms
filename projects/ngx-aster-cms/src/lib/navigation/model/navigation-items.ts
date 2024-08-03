import {NavigationItem} from "../interface/navigation-item";

export class NavigationItems {

	private static readonly dashboardNavigation: NavigationItem = {
		icon: 'donut_large',
		name: 'dashboard',
		url: '/dashboard',
		subItems: [],
	}

	private static readonly tenantNavigation: NavigationItem = {
		icon: 'manage_accounts',
		name: 'users',
		url: '/tenant',
		subItems: [],
	}

	private static readonly productNavigation: NavigationItem = {
		icon: 'shopping_bag',
		name: 'products',
		url: '/product',
		subItems: []
	}

	private static readonly orderNavigation: NavigationItem = {
		icon: 'inventory',
		name: 'orders',
		url: '/orders',
		subItems: [],
	}

	public static get items(): NavigationItem[] {
		return [
			NavigationItems.dashboardNavigation,
			NavigationItems.tenantNavigation,
			NavigationItems.productNavigation,
			NavigationItems.orderNavigation
		]
	}
}

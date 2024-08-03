import {AsterNavigationItem} from "../interface/aster-navigation-item";

export class AsterNavigationItems {

	private static readonly dashboardNavigation: AsterNavigationItem = {
		icon: 'donut_large',
		name: 'dashboard',
		url: '/dashboard',
	}

	private static readonly tenantNavigation: AsterNavigationItem = {
		icon: 'manage_accounts',
		name: 'users',
		url: '/tenant',
	}

	private static readonly productNavigation: AsterNavigationItem = {
		icon: 'shopping_bag',
		name: 'products',
		url: '/product',
	}

	private static readonly orderNavigation: AsterNavigationItem = {
		icon: 'inventory',
		name: 'orders',
		url: '/orders',
	}

	public static get items(): AsterNavigationItem[] {
		return [
			AsterNavigationItems.dashboardNavigation,
			AsterNavigationItems.tenantNavigation,
			AsterNavigationItems.productNavigation,
			AsterNavigationItems.orderNavigation
		]
	}
}

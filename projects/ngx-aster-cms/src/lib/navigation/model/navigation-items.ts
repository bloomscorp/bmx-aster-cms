import {NavigationItem} from "../interface/navigation-item";

export class NavigationItems {

	private static readonly dashboardNavigation: NavigationItem = {
		icon: 'dashboard',
		name: 'manage dashboard',
		url: '/dashboard',
		subItems: [],
	}

	private static readonly tenantNavigation: NavigationItem = {
		icon: 'manage_accounts',
		name: 'manage tenant',
		url: '/tenant',
		subItems: [],
	}

	private static readonly productNavigation: NavigationItem = {
		icon: 'shopping_bag',
		name: 'manage products',
		url: '/manage-product',
		subItems: [
			{
				icon: 'shopping_bag',
				name: 'manage skincare',
				description: 'Manage skincare products.',
				url: '/product/skincare',
			},
			{
				icon: 'shopping_bag',
				name: 'manage makeup',
				description: 'Manage makeup products.',
				url: '/product/makeup',
			}
		],
	}

	public static get items(): NavigationItem[] {
		return [
			NavigationItems.dashboardNavigation,
			NavigationItems.tenantNavigation,
			NavigationItems.productNavigation
		]
	}
}

import {AsterDashboardItem} from "../interface/aster-dashboard-item";

export class AsterDashboardItems {

	private static readonly item1: AsterDashboardItem = {
		name: 'manage users',
		icon: 'manage_accounts',
		count: 0,
		link: '/tenant'
	}

	private static readonly item2: AsterDashboardItem = {
		name: 'manage products',
		icon: 'shopping_bag',
		count: 200,
		link: '/product'
	}

	private static readonly item3: AsterDashboardItem = {
		name: 'manage orders',
		icon: 'shopping_cart',
		count: 213,
		link: '/orders'
	}

	public static items: AsterDashboardItem[] = [
		AsterDashboardItems.item1,
		AsterDashboardItems.item2,
		AsterDashboardItems.item3
	];
}

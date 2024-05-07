import {DashboardItem} from "../interface/dashboard-item";

export class DashboardItems {

	private static readonly item1: DashboardItem = {
		name: 'manage user',
		icon: 'manage_accounts',
		count: 0,
		link: '/tenant'
	}

	private static readonly item2: DashboardItem = {
		name: 'manage products',
		icon: 'shopping_bag',
		count: 200,
		link: '/product'
	}

	private static readonly item3: DashboardItem = {
		name: 'manage orders',
		icon: 'shopping_cart',
		count: 213,
		link: '/orders'
	}

	public static get items(): DashboardItem[] {
		return [
			DashboardItems.item1,
			DashboardItems.item2,
			DashboardItems.item3
		]
	}
}

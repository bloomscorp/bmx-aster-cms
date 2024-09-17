import {AsterNavigationItem} from "../interface/aster-navigation-item";
import {AsterRequestMapper} from "../../route/model/aster-request-mapper";

export class AsterNavigationItems {

	private static readonly dashboardNavigation: AsterNavigationItem = {
		icon: 'donut_large',
		name: 'dashboard',
		url: AsterRequestMapper.getAbsoluteUrl(AsterRequestMapper.DASHBOARD),
	}

	private static readonly tenantNavigation: AsterNavigationItem = {
		icon: 'manage_accounts',
		name: 'users',
		url: AsterRequestMapper.getAbsoluteUrl(AsterRequestMapper.MANAGE_USERS),
	}

	private static readonly productNavigation: AsterNavigationItem = {
		icon: 'shopping_bag',
		name: 'products',
		url: AsterRequestMapper.getAbsoluteUrl(AsterRequestMapper.MANAGE_PRODUCTS),
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

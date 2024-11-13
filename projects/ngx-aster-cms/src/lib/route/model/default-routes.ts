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

	public static readonly MANAGE_USERS: Route = {
		path: AsterRequestMapper.MANAGE_USERS,
		loadComponent: () => import('../../tenant/tenant-listing/tenant-listing.component').then(m => m.TenantListingComponent),
		pathMatch: 'full'
	};

	public static readonly USER_DETAILS: Route = {
		path: AsterRequestMapper.USER_DETAILS,
		loadComponent: () => import('../../tenant/tenant-details/tenant-details.component').then(m => m.TenantDetailsComponent),
		pathMatch: 'full'
	};

	public static readonly MANAGE_PRODUCTS: Route = {
		path: AsterRequestMapper.MANAGE_PRODUCTS,
		loadComponent: () => import('../../product/product-listing/product-listing.component').then(m => m.ProductListingComponent),
		pathMatch: 'full'
	};

    public static readonly ADD_PRODUCT: Route = {
		path: AsterRequestMapper.PRODUCT_ADD,
		loadComponent: () => import('../../product/add-product/add-product.component').then(m => m.AddProductComponent),
		pathMatch: 'full'
	}

	public static readonly  MANAGE_ORDERS: Route = {
		path: AsterRequestMapper.MANAGE_ORDERS,
		loadComponent: () => import('../../order/order-listing/order-listing.component').then(m => m.OrderListingComponent),
		pathMatch: 'full'
	}

	public static readonly  ORDER_DETAILS: Route = {
		path: AsterRequestMapper.ORDER_DETAILS,
		loadComponent: () => import('../../order/order-details/order-details.component').then(m => m.OrderDetailsComponent),
		pathMatch: 'full'
	}

	public static readonly BASE: Route = {
		path: AsterRequestMapper.BASE_RELATIVE_URL,
		redirectTo: AsterRequestMapper.LOGIN,
		pathMatch: 'full'
	};

	public static readonly NOT_FOUND: Route = {
		path: AsterRequestMapper.INVALID_URL,
		loadComponent: () => import('../../404/not-found/not-found.component').then(m => m.NotFoundComponent),
		pathMatch: 'full'
	};

	public static readonly ANY_URL: Route = {
		path: '**',
		redirectTo: AsterRequestMapper.INVALID_URL
	};

	public static readonly ROUTES: Routes = [
		DefaultRoutes.BASE,
		DefaultRoutes.LOGIN,
		DefaultRoutes.DASHBOARD,
		DefaultRoutes.MANAGE_USERS,
		DefaultRoutes.USER_DETAILS,
		DefaultRoutes.MANAGE_PRODUCTS,
		DefaultRoutes.MANAGE_ORDERS,
		DefaultRoutes.ORDER_DETAILS,
		DefaultRoutes.NOT_FOUND,
		DefaultRoutes.ANY_URL,
	];
}

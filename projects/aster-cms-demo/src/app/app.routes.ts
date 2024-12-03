import {Routes} from '@angular/router';
import {DefaultRoutes} from "../../../ngx-aster-cms/src/lib/route/model/default-routes";
import {AsterRequestMapper} from "../../../ngx-aster-cms/src/lib/route/model/aster-request-mapper";
import {dashboardResolver} from "./common/resolvers/dashboard.resolver";

export const routes: Routes = [
    DefaultRoutes.BASE,
    DefaultRoutes.LOGIN,
    {
        path: AsterRequestMapper.DASHBOARD,
        loadComponent: () => import('ngx-aster-cms').then(m => m.DashboardComponent),
        pathMatch: 'full',
        resolve: {resolve: dashboardResolver}
    },
    DefaultRoutes.MANAGE_USERS,
    DefaultRoutes.USER_DETAILS,
    DefaultRoutes.MANAGE_PRODUCTS,
    DefaultRoutes.ADD_PRODUCT,
    DefaultRoutes.UPDATE_PRODUCT,
    {
        path: AsterRequestMapper.PRODUCT_DETAILS,
        loadComponent: () => import('./product/product-details/product-details.component').then(m => m.ProductDetailsComponent),
        pathMatch: 'full'
    },
    DefaultRoutes.MANAGE_ORDERS,
    DefaultRoutes.ORDER_DETAILS,
    DefaultRoutes.NOT_FOUND,
    DefaultRoutes.ANY_URL
];

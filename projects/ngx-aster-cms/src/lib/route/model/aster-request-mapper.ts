export class AsterRequestMapper {

	public static readonly BASE_RELATIVE_URL: string = '';
	public static readonly ROOT_URL: string = '/';
	public static readonly LOGIN: string = 'login';
	public static readonly INVALID_URL: string = '404';
	public static readonly DASHBOARD: string = 'dashboard';
	public static readonly MANAGE_USERS: string = 'manage-users';
	public static readonly USER_DETAILS: string = 'user/:userId';
	public static readonly MANAGE_PRODUCTS: string = 'manage-products';
	public static readonly PRODUCT_DETAILS: string = 'product/:productGroup/:productId';

	private constructor() {
	}

	public static getAbsoluteUrl(url: string): string {
		return this.ROOT_URL + url;
	}
}

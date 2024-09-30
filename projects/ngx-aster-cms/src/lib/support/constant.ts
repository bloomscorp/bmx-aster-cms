export class Constant {

	/* JWT CONSTANTS */

	public static readonly AUTHORIZATION_HEADER: string = 'Authorization';
	public static readonly CONTENT_TYPE_HEADER: string = 'Content-Type';
	public static readonly AUTHORIZATION_SCHEME: string = 'Bearer ';
	public static readonly EXPIRED_TOKEN: string = 'expired-token';
	public static readonly DOMAIN_NOT_ALLOWED: string = 'domain-not-allowed';
	public static readonly NO_JWT_TOKEN: string = 'no-jwt-token';

	public static readonly PRODUCT_PREVIEW_LIST: string = 'productPreviewList';

	private constructor() {
	}
}

import {Injectable} from '@angular/core';
import {ConfigurationService} from './configuration.service';

@Injectable({
    providedIn: 'root'
})
export class RequestMapperService {

    public static readonly ROOT_URL: string = '/';

    public static readonly GET_PRODUCT_PREVIEW: string = ConfigurationService.SERVER_ENDPOINT + '/get/product-preview-list';

    public static readonly CREATE_PRODUCT: string = ConfigurationService.SERVER_ENDPOINT + '/add/product';

    constructor() { }

}

import {RaintreeResponse} from 'bmx-transmission/lib/raintree/interface/raintree-response';
import {ProductPreview} from '../../product/interface/product-preview';

export interface ProductPreviewPayload extends RaintreeResponse {
    productPreviewList: ProductPreview[];
}
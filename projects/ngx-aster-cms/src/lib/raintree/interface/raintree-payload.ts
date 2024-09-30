import {RaintreeResponse} from "bmx-transmission/lib/raintree/interface/raintree-response";

export interface RaintreePayload<K extends string, E> extends RaintreeResponse {
	data: {
		[key in K]: E[]
	}
}

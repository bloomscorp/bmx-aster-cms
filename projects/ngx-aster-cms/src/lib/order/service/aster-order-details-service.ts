import { OrderDetailsScreenData } from "../interface/screen/order-details-screen-data";

export abstract class AsterOrderDetailsService<O> {

    public screen: OrderDetailsScreenData = {
		header: {
			title: 'Order Details',
			subtitle: 'View and update your order here'
		}
	};

    private _loading: boolean = true;
	private _orderDetails: O = {} as O;

    public get isLoading(): boolean {
		return this._loading;
	}

	public set isLoading(value: boolean) {
		this._loading = value;
	}

    public get orderDetails(): O {
        return this._orderDetails;
    }

    public set orderDetails(value: O) {
        this._orderDetails = value;        
    }

    public abstract fetchOrderDetails(): void;
    public abstract prepareOrderDetails(): void;
}

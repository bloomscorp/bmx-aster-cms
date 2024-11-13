export abstract class AsterProductDetailsService<P> {

    private _loading: boolean = true;

    private _product: P = {} as P;

    public get productData(): P {
        return this._product;
    }

    public set productData(value: P) {
        this._product = value;
    }

    public get isLoading(): boolean {
        return this._loading;
    }

    public set isLoading(value: boolean) {
        this._loading = value;
    }

    public abstract prepareProduct(): P;
    public abstract fetchProduct(): void;
}

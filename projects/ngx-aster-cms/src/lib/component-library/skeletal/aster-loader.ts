export abstract class AsterLoader {

	public isLoading: boolean = true;

	public abstract startLoading(): void;
	public abstract stopLoading(): void;
}

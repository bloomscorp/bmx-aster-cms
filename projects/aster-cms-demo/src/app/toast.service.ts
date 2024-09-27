import {Injectable} from '@angular/core';
import {BmxToastService} from 'bmx-toast';

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    constructor(
		private _toastService: BmxToastService
    ) { }

    public info(message: string): void {
		this._toastService.generate({
			type: 'info',
			toastHeading: 'INFO',
			toastText: message,
			timeout: 3000,
			position: 'top-right',
			autoClose: true,
			progressbar: true
		});
    }

    public show(message: string): void {
        this.info(message);
    }

    public loading(message: string): void {
		this.info(message);
    }

    public warning(message: string): void {
		this._toastService.generate({
			type: 'warning',
			toastHeading: 'WARNING',
			toastText: message,
			timeout: 3000,
			position: 'top-right',
			autoClose: true,
			progressbar: true
		});
    }

    public error(message: string): void {
		this._toastService.generate({
			type: 'error',
			toastHeading: 'ERROR',
			toastText: message,
			timeout: 3000,
			position: 'top-right',
			autoClose: true,
			progressbar: true
		});
    }

    public success(message: string): void {
		this._toastService.generate({
			type: 'success',
			toastHeading: 'SUCCESS',
			toastText: message,
			timeout: 3000,
			position: 'top-right',
			autoClose: true,
			progressbar: true
		});
    }

    public close() {}
}

import {Injectable} from '@angular/core';
import {ToastService} from './toast.service';

@Injectable({
	providedIn: 'root'
})
export class GenericDataValidatorService {

	constructor(
		private _toast: ToastService
	) {
	}

	public minLength(value: string, minLength: number, propName: string): boolean {
		if (value.length < minLength) {
			this._toast.error('Minimum length ' + minLength + ' required for ' + propName);
		}
		return value.length >= minLength;
	}

	public maxLength(value: string, maxLength: number, propName: string): boolean {
		if (value.length > maxLength) {
			this._toast.error('Maximum length ' + maxLength + ' required for ' + propName);
		}
		return value.length <= maxLength;
	}

	public max(value: number, maxValue: number, propName: string): boolean {
		if (value > maxValue) {
			this._toast.error('Maximum value ' + maxValue + ' required for ' + propName);
		}
		return value <= maxValue;
	}

	public min(value: number, minValue: number , propName: string): boolean {
		if (value < minValue) {
			this._toast.error('Minimum value ' + minValue + ' required for ' + propName);
		}
		return value >= minValue;
	}

    public isEmpty(value: string, propName: string): boolean {
        if (value.length == 0) {
            this._toast.error(propName + ' cannot be empty');
        }
        return value.length == 0;
    }

	public isEmptyObject(value: any, propName: string): boolean {
		if (value == null) {
			this._toast.error(propName + ' cannot be empty');
		}
		return value == null;
	}

	public isEmptyArray(value: any[], propName: string): boolean {
		if (value.length == 0) {
			this._toast.error(propName + ' cannot be empty');
		}
		return value.length == 0;
	}

	public isEmptyID(value: number, propName: string): boolean {
		if (value == 0) {
			this._toast.error(propName + ' cannot be empty');
		}
		return value == 0;
	}
}

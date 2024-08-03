import {Injectable} from '@angular/core';
import {AsterNavigationItem} from "../interface/aster-navigation-item";
import {AsterNavigationItems} from "../model/aster-navigation-items";

@Injectable({
	providedIn: 'root'
})
export class AsterNavigationMapperService {

	constructor() {
	}

	private _navigationItemList: AsterNavigationItem[] = AsterNavigationItems.items;

	get navigationItemList(): AsterNavigationItem[] {
		return this._navigationItemList;
	}

	set navigationItemList(value: AsterNavigationItem[]) {
		this._navigationItemList = value;
	}

	private _companyLogo: string = 'https://www.bloomscorp.com/assets/images/logo.png';

	get companyLogo(): string {
		return this._companyLogo;
	}

	set companyLogo(value: string) {
		this._companyLogo = value;
	}

	private _companyName: string = 'Bloomscorp';

	get companyName(): string {
		return this._companyName;
	}

	set companyName(value: string) {
		this._companyName = value;
	}
}

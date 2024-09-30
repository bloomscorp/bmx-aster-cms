import {Injectable} from '@angular/core';
import {CRUDTransmissionService} from "../crud-transmission-service";

@Injectable({
	providedIn: 'root'
})
export class ProductTransmissionService extends CRUDTransmissionService {

	constructor() {
		super();
	}

	create(): void {
	}

	delete(): void {
	}

	read(): void {
	}

	update(): void {
	}
}

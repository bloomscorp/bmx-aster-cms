import { Injectable } from '@angular/core';
import { CRUDTransmissionService } from '../crud-transmission-service';
import { BmxTransmissionService } from 'bmx-transmission';
import { JWTService } from '../../../authentication/jwt.service';

@Injectable({
	providedIn: 'root',
})
export class ProductTransmissionService<E> extends CRUDTransmissionService<E> {
	
    constructor(
		private transmission: BmxTransmissionService,
		private jwt: JWTService
	) {
		super(transmission, jwt);
	}

	create(): void {}

	delete(): void {}

	read(): void {}

	update(): void {}
}

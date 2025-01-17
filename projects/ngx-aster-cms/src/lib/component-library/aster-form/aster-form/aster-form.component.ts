import {Component, Input, OnInit} from '@angular/core';
import {AsterForm} from "../interface/aster-form";
import {NgForOf, NgSwitch, NgSwitchCase} from "@angular/common";
import {AsterFormInputType} from "../model/aster-form-input-type";
import {AsterFormInputTextComponent} from "../aster-form-input-text/aster-form-input-text.component";
import {AsterFormInputNumericComponent} from "../aster-form-input-numeric/aster-form-input-numeric.component";
import {AsterFormInputSelectComponent} from "../aster-form-input-select/aster-form-input-select.component";
import {
	AsterFormInputMultiSelectComponent
} from "../aster-form-input-multi-select/aster-form-input-multi-select.component";
import {AsterFormInputTextareaComponent} from "../aster-form-input-textarea/aster-form-input-textarea.component";
import {AsterFormInputRichtextComponent} from "../aster-form-input-richtext/aster-form-input-richtext.component";
import {AsterFormInputImageComponent} from '../aster-form-input-image/aster-form-input-image.component';
import {
	AsterFormInputMultipleImageComponent
} from '../aster-form-input-multiple-image/aster-form-input-multiple-image.component';
import {AsterFormService} from "../service/aster-form.service";
import { AsterFormInputChipComponent } from "../aster-form-input-chip/aster-form-input-chip.component";
import { RaintreeResponse } from 'bmx-transmission/lib/raintree/interface/raintree-response';
import {AsterFormTransmissionService} from "../../../raintree/transmission/aster-form/aster-form-transmission.service";
import {FormPayload} from "bmx-transmission/lib/raintree/interface/form-payload";

@Component({
	selector: 'aster-form',
	standalone: true,
	imports: [
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    AsterFormInputTextComponent,
    AsterFormInputNumericComponent,
    AsterFormInputSelectComponent,
    AsterFormInputMultiSelectComponent,
    AsterFormInputTextareaComponent,
    AsterFormInputRichtextComponent,
    AsterFormInputImageComponent,
    AsterFormInputMultipleImageComponent,
    AsterFormInputChipComponent
],
	templateUrl: './aster-form.component.html',
	styleUrls: [
		'./aster-form.component.scss',
		'../../../ax-styles.scss'
	]
})
export class AsterFormComponent implements OnInit {

	@Input() public data: AsterForm<any> = {} as AsterForm<any>;
	public INPUT_TYPES: typeof AsterFormInputType = AsterFormInputType;

	constructor(
        public _: AsterFormService,
        public _api: AsterFormTransmissionService
    ) {
	}

	public ngOnInit(): void {

	}

	public onSubmit(): void {

		this._.prepareGetValues(this.data.inputs);

		const response: FormPayload = this.data.mapper(
			this.data.model,
			this.data.inputs
		);

		switch (this.data.submit.type) {
			case "POST":
				this._api.post(
					response,
					(): void => {
						this.data.submit.transmission.preExecute.callback();
					},
					(response: RaintreeResponse) => {
						this.data.submit.transmission.postExecute.callback(response);
					},
					(response: RaintreeResponse) => {
						this.data.submit.transmission.success.callback(response);
					},
					() => {
						this.data.submit.transmission.failure.callback();
					},
					() => {
						this.data.submit.transmission.complete.callback();
					},
					this.data.submit.api,
                    true,
                    this.data.submit.isAuthenticated
				);
				break;
			case "PATCH": 
            this._api.patch(
                    response,
                    (): void => {
                        this.data.submit.transmission.preExecute.callback();
                    },
                    (response: RaintreeResponse) => {
                        this.data.submit.transmission.postExecute.callback(response);
                    },
                    (response: RaintreeResponse) => {
                        this.data.submit.transmission.success.callback(response);
                    },
                    () => {
                        this.data.submit.transmission.failure.callback();
                    },
                    () => {
                        this.data.submit.transmission.complete.callback();
                    },
                    this.data.submit.api,
                    true,
                    this.data.submit.isAuthenticated
                );
                break;
		}
	}
}

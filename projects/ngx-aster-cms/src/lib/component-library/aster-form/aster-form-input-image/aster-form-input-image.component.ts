import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
import {AsterFormInput} from '../interface/aster-form-input';
import {SanitizeUrlPipe} from '../../pipes/sanitize-url.pipe';
import {AsterFormImageItem} from '../interface/aster-form-image-item';

@Component({
	selector: 'aster-form-input-image',
	standalone: true,
	imports: [
		CommonModule,
        SanitizeUrlPipe
	],
	templateUrl: './aster-form-input-image.component.html',
	styleUrls: ['./aster-form-input-image.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsterFormInputImageComponent<T> implements OnInit {

	@Input() data: AsterFormInput<T,AsterFormImageItem> = {} as AsterFormInput<T,AsterFormImageItem>;

    public imageURL: string = '';

    constructor() {
    }

    ngOnInit(): void {
        if (this.data.defaultValue?.value instanceof File) {
            this.imageURL = URL.createObjectURL(this.data.defaultValue?.value);
        } else {
            this.imageURL = this.data.defaultValue?.value;
        }
    }

}

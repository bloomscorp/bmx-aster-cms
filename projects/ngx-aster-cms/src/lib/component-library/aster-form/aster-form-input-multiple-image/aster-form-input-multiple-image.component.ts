import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, type OnInit} from '@angular/core';
import {AsterFormImageOption} from '../interface/aster-form-image-option.';
import {AsterFormInput} from '../interface/aster-form-input';
import {SanitizeUrlPipe} from '../../pipes/sanitize-url.pipe';

@Component({
    selector: 'aster-form-input-multiple-image',
    standalone: true,
    imports: [
        CommonModule,
        SanitizeUrlPipe
    ],
    templateUrl: './aster-form-input-multiple-image.component.html',
    styleUrls: ['./aster-form-input-multiple-image.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsterFormInputMultipleImageComponent<T> implements OnInit {

    @Input() data: AsterFormInput<T, AsterFormImageOption[]> = {} as AsterFormInput<T, AsterFormImageOption[]>;

    public defaultImages: AsterFormImageOption[] = [];

    constructor() {
    }

    ngOnInit(): void {

        if (this.data.defaultValue) {
            this.data.defaultValue.forEach((image) => {
                if (image.value instanceof File) {
                    image.value = URL.createObjectURL(image.value);
                }
                this.defaultImages.push({value: image.value, altText: image.altText});
            });
        }
    }

}

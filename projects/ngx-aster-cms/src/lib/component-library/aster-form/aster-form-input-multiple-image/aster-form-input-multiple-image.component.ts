import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, type OnInit,} from '@angular/core';
import {AsterFormImageItem} from '../interface/aster-form-image-item';
import {AsterFormInput} from '../interface/aster-form-input';
import {SanitizeUrlPipe} from '../../pipe/sanitize-url.pipe';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'aster-form-input-multiple-image',
    imports: [CommonModule, SanitizeUrlPipe, MatIconModule],
    templateUrl: './aster-form-input-multiple-image.component.html',
    styleUrls: ['./aster-form-input-multiple-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsterFormInputMultipleImageComponent<T> implements OnInit {
	@Input() data: AsterFormInput<T, AsterFormImageItem> = {} as AsterFormInput<
		T,
		AsterFormImageItem
	>;

	public defaultImages: AsterFormImageItem[] = [];

	constructor() {}

	ngOnInit(): void {
	}

	public prepareImage(input: AsterFormImageItem): string {
		if (input.imageFile instanceof File) {
			return URL.createObjectURL(input?.imageFile);
		} else {
			return input.imageUrl;
		}
	}

    public uploadData(event: Event) {
        const target = event.target as HTMLInputElement;
        const files = target.files as FileList;
        Array.from(files).forEach(file => {
            this.data.multiImageDefaultValue.push({
                imageFile: file,
                imageUrl: '',
                altText: '',
                order: this.data.multiImageDefaultValue.length + 1,
                deleted: false
            });
        });

        target.value = '';
    }

    public removeImage(index: number) {
        if (this.data.multiImageDefaultValue[index].imageUrl) {
            this.data.multiImageDefaultValue[index].deleted = true;
        } else {
            this.data.multiImageDefaultValue.splice(index, 1);
        }
    }
}

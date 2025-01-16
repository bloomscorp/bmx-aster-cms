import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input, type OnInit,} from '@angular/core';
import {AsterFormInput} from '../interface/aster-form-input';
import {SanitizeUrlPipe} from '../../pipe/sanitize-url.pipe';
import {AsterFormImageItem} from '../interface/aster-form-image-item';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';

@Component({
    selector: 'aster-form-input-image',
    imports: [CommonModule, SanitizeUrlPipe, FormsModule, MatIconModule],
    templateUrl: './aster-form-input-image.component.html',
    styleUrls: ['./aster-form-input-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsterFormInputImageComponent<T> implements OnInit {
	@Input() data: AsterFormInput<T, AsterFormImageItem> = {} as AsterFormInput<
		T,
		AsterFormImageItem
	>;

	public imageURL: string = '';
    public hideDeleteButton: boolean = false;

	constructor() {}

	ngOnInit(): void {
		if (this.data.defaultValue?.imageFile instanceof File) {
			this.imageURL = URL.createObjectURL(
				this.data.defaultValue?.imageFile
			);
		} else {
			this.imageURL = this.data.defaultValue.imageUrl;
		}
	}

    public uploadData(event: Event) {
        const target = event.target as HTMLInputElement;
        const files = target.files as FileList;
        this.imageURL = URL.createObjectURL(files[0]);
        this.data.defaultValue.imageFile = files[0];
        this.hideDeleteButton = false;
        this.data.defaultValue.deleted = false;
    }

    public removeImage( e: Event ) {
        e.preventDefault();
        this.imageURL = '';
        this.data.defaultValue.imageFile = null;
        this.data.defaultValue.deleted = true;
        this.hideDeleteButton = true;
    }
}

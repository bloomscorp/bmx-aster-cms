import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, Input, signal, WritableSignal, type OnInit, } from '@angular/core';
import { AsterFormInput } from '../interface/aster-form-input';
import { SanitizeUrlPipe } from '../../pipe/sanitize-url.pipe';
import { AsterFormImageItem } from '../interface/aster-form-image-item';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'aster-form-input-image',
    imports: [CommonModule, SanitizeUrlPipe, FormsModule, MatIconModule],
    templateUrl: './aster-form-input-image.component.html',
    styleUrls: ['./aster-form-input-image.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsterFormInputImageComponent<T> implements OnInit {

    @Input() public data: AsterFormInput<T, AsterFormImageItem> = {} as AsterFormInput<T, AsterFormImageItem>;

    private _defaultValue: WritableSignal<AsterFormImageItem> = signal({} as AsterFormImageItem);

    @Input() set defaultValue(defaultValue: AsterFormImageItem) { 
        this._defaultValue.set(defaultValue); 
    }

    get defaultValue(): AsterFormImageItem { return this._defaultValue(); }

    public imageURL: string = '';
    public hideDeleteButton: boolean = true;

    constructor() {
        effect(() => {
            if (this._defaultValue()) {
                this.setDefault();
            }
        });
    }

    ngOnInit(): void {
        // this.setDefault();
    }

    public setDefault(): void {
        if (this.data.defaultValue?.imageFile instanceof File) {
            this.imageURL = URL.createObjectURL(
                this.data.defaultValue?.imageFile
            );
        } else {
            this.imageURL = this.data.defaultValue.imageUrl;
        }

        if (this.data.defaultValue.deleted || !this.imageURL) {
            this.hideDeleteButton = true;
        }
    }

    public uploadData(event: Event) {
        const target = event.target as HTMLInputElement;
        const files = target.files as FileList;
        this.imageURL = URL.createObjectURL(files[0]);
        this.data.defaultValue.imageFile = files[0];
        this.hideDeleteButton = false;
        this.data.defaultValue.deleted = false;
        this.data.defaultValue.imageUrl = '';
    }

    public removeImage(e: Event) {
        e.preventDefault();
        this.imageURL = '';
        this.data.defaultValue.imageFile = null;
        this.data.defaultValue.deleted = true;
        this.hideDeleteButton = true;
    }
}

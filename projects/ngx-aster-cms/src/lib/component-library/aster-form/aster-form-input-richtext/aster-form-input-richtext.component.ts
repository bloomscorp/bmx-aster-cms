import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AsterFormInput} from '../interface/aster-form-input';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'aster-form-input-richtext',
    imports: [
        CommonModule,
        CKEditorModule,
        FormsModule
    ],
    templateUrl: './aster-form-input-richtext.component.html',
    styleUrls: ['./aster-form-input-richtext.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsterFormInputRichtextComponent<T> {

    @Input() data: AsterFormInput<T, string> = {} as AsterFormInput<T, string>;

    public Editor;
    public editorConfig = {
        toolbar: {
            items: [
                'undo',
                'redo',
                '|',
                'heading',
                '|',
                'bold',
                'italic',
                '|',
                'link',
                '|',
                'bulletedList',
                'numberedList',
            ],
            shouldNotGroupWhenFull: false,
        },
        language: 'en',
    };

    constructor() {

        this.Editor = ClassicEditor;
    }

}

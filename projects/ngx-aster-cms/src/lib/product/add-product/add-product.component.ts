import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	Inject,
	PLATFORM_ID,
} from '@angular/core';
import { HeaderSectionComponent } from '../../component-library/header/header-section/header-section.component';
import {
	NgLabelTemplateDirective,
	NgOptionTemplateDirective,
	NgSelectComponent,
} from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'aster-cms-add-product',
	standalone: true,
	imports: [
		CommonModule,
		NgLabelTemplateDirective,
		NgOptionTemplateDirective,
		NgSelectComponent,
		HeaderSectionComponent,
		CKEditorModule,
	],
	templateUrl: './add-product.component.html',
	styleUrl: './add-product.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent {
	
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

	isBrowser = false;

	constructor(@Inject(PLATFORM_ID) platformId: Object) {
		this.isBrowser = isPlatformBrowser(platformId);

        if (this.isBrowser) {
            this.Editor = ClassicEditor;
        }
	}
}

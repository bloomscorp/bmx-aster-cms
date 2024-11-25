import {CommonModule, isPlatformBrowser} from '@angular/common';
import {ChangeDetectionStrategy, Component, Inject, OnInit, PLATFORM_ID,} from '@angular/core';
import {HeaderSectionComponent} from '../../component-library/header/header-section/header-section.component';
import {NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent,} from '@ng-select/ng-select';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AsterFormComponent} from "../../component-library/aster-form/aster-form/aster-form.component";
import {AsterAddProductService} from "../service/aster-add-product-service";
import {AsterFormCompatible} from "../../component-library/aster-form/interface/aster-form-compatible";

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
		AsterFormComponent,
	],
	templateUrl: './add-product.component.html',
	styleUrl: './add-product.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent<P extends AsterFormCompatible> implements OnInit {

	public isBrowser: boolean = false;
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

	constructor(
		@Inject(PLATFORM_ID) platformId: Object,
		public _: AsterAddProductService<P>
	) {

		this.isBrowser = isPlatformBrowser(platformId);

        if (this.isBrowser) {
            this.Editor = ClassicEditor;
        }
	}

	public ngOnInit(): void {
		this._.data = this._.prepareData();
	}
}

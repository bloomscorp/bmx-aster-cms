import { CommonModule } from '@angular/common';
import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
} from '@angular/core';
import { HeaderSectionComponent } from '../../component-library/header/header-section/header-section.component';
import {
	NgLabelTemplateDirective,
	NgOptionTemplateDirective,
	NgSelectComponent,
} from '@ng-select/ng-select';
import { AsterFormComponent } from '../../component-library/aster-form/aster-form/aster-form.component';
import { AsterAddProductService } from '../service/aster-add-product-service';
import { AsterFormCompatible } from '../../component-library/aster-form/interface/aster-form-compatible';
import { AddProductScreenData } from '../interface/screen/add-product-screen-data';

@Component({
	selector: 'aster-cms-add-product',
	standalone: true,
	imports: [
		CommonModule,
		NgLabelTemplateDirective,
		NgOptionTemplateDirective,
		NgSelectComponent,
		HeaderSectionComponent,
		AsterFormComponent,
	],
	templateUrl: './add-product.component.html',
	styleUrl: './add-product.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProductComponent<P extends AsterFormCompatible>
	implements OnInit
{
	public screen: AddProductScreenData = {} as AddProductScreenData;

	constructor(public _: AsterAddProductService<P>) {}

	public ngOnInit(): void {
		this._.data = this._.prepareData();
		this.screen = this._.screen;
	}
}

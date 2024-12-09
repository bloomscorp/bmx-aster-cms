import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';
import { HeaderSectionComponent } from '../../component-library/header/header-section/header-section.component';
import { AsterFormComponent } from '../../component-library/aster-form/aster-form/aster-form.component';
import { UpdateProductScreenData } from '../interface/screen/update-product-screen-data';
import { AsterUpdateProductService } from '../service/aster-update-product-service';
import { AsterFormCompatible } from '../../component-library/aster-form/interface/aster-form-compatible';

@Component({
	selector: 'aster-cms-update-product',
	standalone: true,
	imports: [CommonModule, HeaderSectionComponent, AsterFormComponent],
	templateUrl: './update-product.component.html',
	styleUrl: './update-product.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateProductComponent<P extends AsterFormCompatible>
	implements OnInit
{
	public screen: UpdateProductScreenData = {} as UpdateProductScreenData;

	constructor(public _: AsterUpdateProductService<P>) {}

	ngOnInit(): void {
        this.screen = this._.screen;
        //TODO: after finish fetch product prepare data will be called
        this._.fetchProduct();
        this._.data = this._.prepareData();
    }
}

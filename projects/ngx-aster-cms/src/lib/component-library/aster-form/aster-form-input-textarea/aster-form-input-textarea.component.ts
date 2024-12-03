import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, type OnInit } from '@angular/core';
import {AsterFormInput} from '../interface/aster-form-input';

@Component({
	selector: 'aster-form-input-textarea',
	standalone: true,
	imports: [
		CommonModule,
	],
	templateUrl: './aster-form-input-textarea.component.html',
	styleUrls: ['./aster-form-input-textarea.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsterFormInputTextareaComponent<T> {

    @Input() data: AsterFormInput<T, string> = {} as AsterFormInput<T, string>;
}

import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AsterFormInput} from '../interface/aster-form-input';
import {FormsModule} from '@angular/forms';

@Component({
    selector: 'aster-form-input-textarea',
    imports: [
        CommonModule,
        FormsModule
    ],
    templateUrl: './aster-form-input-textarea.component.html',
    styleUrls: ['./aster-form-input-textarea.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsterFormInputTextareaComponent<T> {

    @Input() data: AsterFormInput<T, string> = {} as AsterFormInput<T, string>;
}

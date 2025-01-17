import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TagInputModule} from 'ngx-chips';
import {AsterFormInput} from "../interface/aster-form-input";

@Component({
    selector: 'aster-form-input-chip',
    imports: [
        CommonModule,
        TagInputModule,
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './aster-form-input-chip.component.html',
    styleUrl: './aster-form-input-chip.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsterFormInputChipComponent<T> {

    @Input() data: AsterFormInput<T, string[]> = {} as AsterFormInput<T, string[]>;

	ngOnInit(): void { }

}

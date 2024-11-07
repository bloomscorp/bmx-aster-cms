import {Component, Input, OnInit} from '@angular/core';
import {AsterForm} from "../interface/aster-form";

@Component({
	selector: 'aster-form',
	standalone: true,
	imports: [],
	templateUrl: './aster-form.component.html',
	styleUrl: './aster-form.component.scss'
})
export class AsterFormComponent implements OnInit {

	@Input() public data: AsterForm<any> = {} as AsterForm<any>;

	public ngOnInit(): void {

	}
}

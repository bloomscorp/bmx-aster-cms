import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'aster-cms-login-form',
  standalone: true,
	imports: [
		NgOptimizedImage,
		RouterLink
	],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {

	@Input() companyLogo: string = 'https://www.bloomscorp.com/assets/images/logo.png';

}

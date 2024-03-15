import { Component } from '@angular/core';
import {LoginFormComponent} from "../login-form/login-form.component";

@Component({
  selector: 'aster-cms-login',
  standalone: true,
	imports: [
		LoginFormComponent
	],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}

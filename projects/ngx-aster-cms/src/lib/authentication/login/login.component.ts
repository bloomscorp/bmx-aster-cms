import {Component, Input} from '@angular/core';
import {LoginFormComponent} from "../login-form/login-form.component";

@Component({
    selector: 'aster-cms-login',
    imports: [
        LoginFormComponent
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

	@Input() companyLogo: string = 'https://www.bloomscorp.com/assets/images/logo.png';

}

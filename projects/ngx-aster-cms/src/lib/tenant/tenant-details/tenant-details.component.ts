import {Component, Input} from '@angular/core';
import {HeaderSectionComponent} from "../../component-library/header-section/header-section.component";
import {TenantAddressListComponent} from "../tenant-address-list/tenant-address-list.component";

@Component({
	selector: 'aster-cms-tenant-details',
	standalone: true,
	imports: [
		HeaderSectionComponent,
		TenantAddressListComponent,
	],
	templateUrl: './tenant-details.component.html',
	styleUrl: './tenant-details.component.scss'
})
export class TenantDetailsComponent {

	@Input() heading: string = 'User Details';
	@Input() subHeading: string = 'View and manage your user details here';

}

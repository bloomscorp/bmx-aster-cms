import {Component, Input} from '@angular/core';
import {HeaderSectionComponent} from "../../component-library/header/header-section/header-section.component";
import { TenantPreviewItemList } from '../model/tenant-preview-item-list';
import { TenantPreviewItem } from '../interface/tenant-preview-item';
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";

@Component({
	selector: 'aster-cms-tenant-listing',
	standalone: true,
	imports: [
		HeaderSectionComponent,
		RouterLink,
		MatIcon
	],
	templateUrl: './tenant-listing.component.html',
	styleUrl: './tenant-listing.component.scss'
})
export class TenantListingComponent {

	@Input() heading: string  = 'Manage Users';
	@Input() subHeading: string  = 'View and manage your users here';

    public tenantPreviewItems: TenantPreviewItem[] = TenantPreviewItemList.tenantPreviewItems;

    constructor() {}

}

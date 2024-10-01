import {Component} from '@angular/core';

@Component({
  selector: 'aster-cms-tenant-address-list',
  standalone: true,
  imports: [],
  templateUrl: './tenant-address-list.component.html',
  styleUrl: './tenant-address-list.component.scss'
})
export class TenantAddressListComponent {
	activeIndex: number = 0; // Track which accordion is active

	toggleAccordion(index: number): void {
		this.activeIndex = index;
	}
}

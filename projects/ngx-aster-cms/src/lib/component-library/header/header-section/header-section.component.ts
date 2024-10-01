import {Component, Input} from '@angular/core';

@Component({
  selector: 'aster-cms-header-section',
  standalone: true,
  imports: [],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {

	@Input() section: string = '';
	@Input() subSection: string = '';

}

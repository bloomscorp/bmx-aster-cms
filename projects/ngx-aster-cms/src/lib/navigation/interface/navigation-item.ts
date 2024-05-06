import {NavigationSubItem} from "./navigation-sub-item";

export interface NavigationItem {
	name: string;
	icon: string;
	url: string;
	subItems: NavigationSubItem[];
}

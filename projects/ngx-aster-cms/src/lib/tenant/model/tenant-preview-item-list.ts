import {TenantPreviewItem} from "../interface/tenant-preview-item";

export class TenantPreviewItemList {
	private static readonly item1: TenantPreviewItem = {
		id: 1,
		name: 'Deep Dey',
		email: 'deepdey20998@gmail.com',
		phone: '+91 9876543210',
		dateOfJoining: '12/12/2020',
		status: 'Active',
		gender: 'Male',
		profilePicture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
	};

	private static readonly item2: TenantPreviewItem = {
		id: 2,
		name: 'John Doe',
		email: 'johndoe20998@gmail.com',
		phone: '+91 9876543210',
		dateOfJoining: '12/12/2020',
		status: 'Active',
		gender: 'Male',
		profilePicture: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
	};

	private static items: TenantPreviewItem[] = [
		TenantPreviewItemList.item1,
		TenantPreviewItemList.item2,
	];

	public static get tenantPreviewItems(): TenantPreviewItem[] {
		return TenantPreviewItemList.items;
	}
}

export interface AsterFormImageItem {
	imageUrl: string;
	order: number;
	imageFile?: File | null;
	altText: string;
	deleted: boolean;
}

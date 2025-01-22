export interface AsterFormImageItem {
    id: number;
	imageUrl: string;
	order: number;
	imageFile?: File | null;
	altText: string;
	deleted: boolean;
}

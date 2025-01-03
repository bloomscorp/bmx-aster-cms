export interface AsterFormSubmit {
	label: string;
	api: string;
	type: 'POST' | 'PATCH';
    operation: (data: any) => any;
}

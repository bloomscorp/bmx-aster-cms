export interface AsterFormSubmit {
	label: string;
	api: string;
    operation: (data: any) => any;
}

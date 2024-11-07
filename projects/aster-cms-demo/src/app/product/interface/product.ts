import {BehemothORM} from "../../behemoth/interface/behemoth-orm";

export interface Product extends BehemothORM {
	sku: string;
	name: string;
	description: string;
	price: number;
}

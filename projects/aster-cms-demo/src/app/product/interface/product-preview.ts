import {BehemothORM} from "../../behemoth/interface/behemoth-orm";

export interface ProductPreview extends BehemothORM {
	sku: string;
	name: string;
	description: string;
	heroImage: string;
	price: number;
}

import {BehemothORM} from "../../behemoth/interface/behemoth-orm";
import {
	AsterFormCompatible
} from "../../../../../ngx-aster-cms/src/lib/component-library/aster-form/interface/aster-form-compatible";

export interface Product extends BehemothORM, AsterFormCompatible {
	sku: string;
	name: string;
	description: string;
	price: number;
	category: string;
    heroImage: string;
    galleryImages: string[];
}

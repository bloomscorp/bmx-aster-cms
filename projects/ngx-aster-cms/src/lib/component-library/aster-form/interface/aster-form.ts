import {AsterFormInput} from "./aster-form-input";
import {AsterFormSubmit} from "./aster-form-submit";
import {AsterFormCompatible} from "./aster-form-compatible";
import {LooseObject} from "../../../interface/loose-object";

export interface AsterForm<T extends AsterFormCompatible> {
	model: T;
	inputs: AsterFormInput<T, any>[];
	submit: AsterFormSubmit,
	mapper: (model: T, inputs: AsterFormInput<T, any>[]) => LooseObject,
}

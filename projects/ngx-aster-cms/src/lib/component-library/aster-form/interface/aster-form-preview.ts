import {AsterFormInput} from "./aster-form-input";
import {AsterFormCompatible} from "./aster-form-compatible";
import {LooseObject} from "../../../interface/loose-object";
import {AsterFormSubmitAdapter} from "./aster-form-submit-adapter";

export interface AsterFormPreview<T extends AsterFormCompatible> {
	model: T;
	inputs: AsterFormInput<T, any>[];
	submit: AsterFormSubmitAdapter,
	mapper?: (model: T, inputs: AsterFormInput<T, any>[]) => LooseObject,
}

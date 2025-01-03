import {AsterFormInput} from "./aster-form-input";
import {AsterFormCompatible} from "./aster-form-compatible";
import {AsterFormSubmitAdapter} from "./aster-form-submit-adapter";
import {FormPayload} from "bmx-transmission/lib/raintree/interface/form-payload";

export interface AsterFormPreview<T extends AsterFormCompatible> {
	model: T;
	inputs: AsterFormInput<T, any>[];
	submit: AsterFormSubmitAdapter,
	mapper?: (model: T, inputs: AsterFormInput<T, any>[]) => FormPayload,
}

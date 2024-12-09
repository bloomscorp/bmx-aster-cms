import {AsterFormInput} from "../interface/aster-form-input";
import {AsterFormInputType} from "../model/aster-form-input-type";
import {AsterFormTextInput} from "../interface/aster-form-text-input";
import {alphaNumericID} from "bmx-pastebox";
import {AsterFormNumberInput} from "../interface/aster-form-number-input";
import {AsterFormSelectInput} from "../interface/aster-form-select-input";
import {AsterFormSelectOption} from "../interface/aster-form-select-option";
import {AsterFormMultiSelectInput} from '../interface/aster-form-multi-select-input';
import {AsterFormTextAreaInput} from '../interface/aster-form-textarea-input';
import {AsterFormRichtextInput} from '../interface/aster-form-richtext-input';
import {AsterFormImageInput} from '../interface/aster-form-image-input';
import {AsterFormImageItem} from '../interface/aster-form-image-item';
import {AsterFormMultiImageInput} from '../interface/aster-form-multi-image-input';
import { AsterFormChipInput } from "../interface/aster-form-chip-input";

export class AsterFormInputService {

    private static _prepareId(): string {
        return alphaNumericID(8) + alphaNumericID(10);
    }

    private static _prepareName(): string {
        return alphaNumericID(12);
    }

    public static prepareSelectDefaultValue<P>(data: AsterFormSelectInput<P>): AsterFormSelectOption {
        return {
            name: data.label ? `Select ${data.label}` : 'Choose from dropdown',
            value: ''
        };
    }

	public static prepareImageDefaultValue(empty: boolean = true): AsterFormImageItem {
		return {
			value: empty ? '' : 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/aster/assets/images/upload-image.svg',
			altText: empty ? '' : 'default image'
		};
	}

	public static prepareGetValue<V>(
		getValue: (() => V) | undefined,
		defaultValue: V | undefined,
		otherDefault: V
	): () => V {
		if (getValue)
			return getValue;
		return defaultValue ? ((): NonNullable<V> => defaultValue) : ((): V => otherDefault);
	}

	public static prepareGetValues<V>(
		getValues: (() => V[]) | undefined,
		defaultValue: V[] | undefined,
		otherDefault: V[]
	): () => V[] {
		if (getValues)
			return getValues;
		return defaultValue ? ((): NonNullable<V[]> => defaultValue) : ((): V[] => otherDefault);
	}

    public static prepareTextInput<P>(data: AsterFormTextInput<P>): AsterFormInput<P, string> {

        const x: AsterFormInput<P, string> = {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.TEXT,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : '',
            multiSelectDefaultValue: [],
			multiImageDefaultValue: [],
            min: data.minlength ? data.minlength : 1,
            max: data.maxlength ? data.maxlength : 999,
            pattern: data.pattern ? data.pattern : '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: data.spellcheck ? data.spellcheck : true,
            step: 0,
            options: [],
			getValue: () => '',
			getValues: (): never[] => []
        };

		return x;
    }

    public static prepareNumericInput<P>(data: AsterFormNumberInput<P>): AsterFormInput<P, number> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.NUMBER,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : (data.min ? data.min : 0),
            multiSelectDefaultValue: [],
			multiImageDefaultValue: [],
            min: data.min ? data.min : 0,
            max: data.max ? data.max : 9999,
            pattern: data.pattern ? data.pattern : '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: data.step ? data.step : 1,
            options: [],
			getValue: () => 0,
			getValues: (): never[] => []
        };
    }

    public static prepareTextareaInput<P>(data: AsterFormTextAreaInput<P>): AsterFormInput<P, string> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.TEXTAREA,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : '',
            multiSelectDefaultValue: [],
			multiImageDefaultValue: [],
            min: data.minlength ? data.minlength : 1,
            max: data.maxlength ? data.maxlength : 999,
            pattern: data.pattern ? data.pattern : '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: data.spellcheck ? data.spellcheck : true,
            rows: data.rows ? data.rows : 3,
            cols: data.cols ? data.cols : 30,
            step: 0,
            options: [],
			getValue: () => '',
			getValues: (): never[] => []
        };
    }

    public static prepareRichTextInput<P>(data: AsterFormRichtextInput<P>): AsterFormInput<P, string> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.RICH_TEXT,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : '',
            multiSelectDefaultValue: [],
			multiImageDefaultValue: [],
            min: 1,
            max: 999,
            pattern: data.pattern ? data.pattern : '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: data.spellcheck ? data.spellcheck : true,
            step: 0,
            options: [],
			getValue: () => '',
			getValues: (): never[] => []
        };
    }

    public static prepareSelectInput<P>(data: AsterFormSelectInput<P>): AsterFormInput<P, AsterFormSelectOption> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.SELECT,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: '',
            defaultValue: data.defaultValue ? data.defaultValue : AsterFormInputService.prepareSelectDefaultValue(data),
            multiSelectDefaultValue: [],
			multiImageDefaultValue: [],
            min: 0,
            max: 0,
            pattern: data.pattern ? data.pattern : '',
            readonly: false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 1,
            options: data.options ? data.options : [],
			getValue: () => AsterFormInputService.prepareSelectDefaultValue(data),
			getValues: (): never[] => []
        };
    }

    public static prepareMultiSelectInput<P>(data: AsterFormMultiSelectInput<P>): AsterFormInput<P, AsterFormSelectOption> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.MULTISELECT,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: '',
            defaultValue: {} as AsterFormSelectOption,
            multiSelectDefaultValue: data.multiSelectDefaultValue ? data.multiSelectDefaultValue : [],
			multiImageDefaultValue: [],
            min: 0,
            max: 0,
            pattern: data.pattern ? data.pattern : '',
            readonly: false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 1,
            options: data.options ? data.options : [],
            appendTo: data.appendTo,
			getValues: (): never[] => [],
			getValue: (): AsterFormSelectOption => { return {} as AsterFormSelectOption; }
        };
    }

    public static prepareImageInput<P>(data: AsterFormImageInput<P>): AsterFormInput<P, AsterFormImageItem> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.IMAGE,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : AsterFormInputService.prepareImageDefaultValue(),
            multiSelectDefaultValue: [],
			multiImageDefaultValue: [],
            min: data.min ? data.min : 1,
            max: data.max ? data.max : 999,
            pattern: '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 0,
            options: [],
			getValue: () => AsterFormInputService.prepareImageDefaultValue(),
			getValues: (): never[] => []
        }
    }

    public static prepareMultiImageInput<P>(data: AsterFormMultiImageInput<P>): AsterFormInput<P, AsterFormImageItem> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.MULTI_IMAGE,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: {} as AsterFormImageItem,
            multiSelectDefaultValue: [],
			multiImageDefaultValue: [],
            min: data.min ? data.min : 1,
            max: data.max ? data.max : 999,
            pattern: '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 0,
            options: [],
			getValues: () => [],
			getValue: (): AsterFormImageItem => { return {} as AsterFormImageItem; }
        }
    }

    public static prepareChipInput<P>(data: AsterFormChipInput<P>): AsterFormInput<P, string[]> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.CHIP,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : [],
            multiSelectDefaultValue: [],
			multiImageDefaultValue: [],
            min: data.min ? data.min : 1,
            max: data.max ? data.max : 999,
            pattern: '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 0,
            options: [],
			getValue: () => [],
			getValues: (): never[] => []
        };
    }
}

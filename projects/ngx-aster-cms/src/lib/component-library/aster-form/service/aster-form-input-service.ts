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
import {AsterFormImageOption} from '../interface/aster-form-image-option.';
import {AsterFormMultiImageInput} from '../interface/aster-form-multi-image-input.';

export class AsterFormInputService {

    private static _prepareId(): string {
        return alphaNumericID(8) + alphaNumericID(10);
    }

    private static _prepareName(): string {
        return alphaNumericID(12);
    }

    private static _prepareSelectDefaultValue<P>(data: AsterFormSelectInput<P>): AsterFormSelectOption {
        return {
            name: data.label ? `Select ${data.label}` : 'Choose from dropdown',
            value: ''
        };
    }

    public static prepareTextInput<P>(data: AsterFormTextInput<P>): AsterFormInput<P, string> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.TEXT,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : '',
            multiselectDefaultValue: [],
            min: data.minlength ? data.minlength : 1,
            max: data.maxlength ? data.maxlength : 999,
            pattern: data.pattern ? data.pattern : '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: data.spellcheck ? data.spellcheck : true,
            step: 0,
            options: []
        };
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
            multiselectDefaultValue: [],
            min: data.min ? data.min : 0,
            max: data.max ? data.max : 9999,
            pattern: data.pattern ? data.pattern : '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: data.step ? data.step : 1,
            options: []
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
            multiselectDefaultValue: [],
            min: data.minlength ? data.minlength : 1,
            max: data.maxlength ? data.maxlength : 999,
            pattern: data.pattern ? data.pattern : '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: data.spellcheck ? data.spellcheck : true,
            rows: data.rows ? data.rows : 3,
            cols: data.cols ? data.cols : 30,
            step: 0,
            options: []
        };
    }

    public static prepareRichTextInput<P>(data: AsterFormRichtextInput<P>): AsterFormInput<P, string> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.RICHTEXT,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : '',
            multiselectDefaultValue: [],
            min: 1,
            max: 999,
            pattern: data.pattern ? data.pattern : '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: data.spellcheck ? data.spellcheck : true,
            step: 0,
            options: []
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
            defaultValue: data.defaultValue ? data.defaultValue : AsterFormInputService._prepareSelectDefaultValue(data),
            multiselectDefaultValue: [],
            min: 0,
            max: 0,
            pattern: data.pattern ? data.pattern : '',
            readonly: false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 1,
            options: data.options ? data.options : [],
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
            multiselectDefaultValue: data.defaultValue ? data.defaultValue : [],
            min: 0,
            max: 0,
            pattern: data.pattern ? data.pattern : '',
            readonly: false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 1,
            options: data.options ? data.options : [],
            appendTo: data.appendTo
        };
    }

    public static prepareImageInput<P>(data: AsterFormImageInput<P>): AsterFormInput<P, AsterFormImageOption> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.IMAGE,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : {
                value: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/1.png',
                altText: 'Default image'
            },
            multiselectDefaultValue: [],
            min: data.min ? data.min : 1,
            max: data.max ? data.max : 999,
            pattern: '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 0,
            options: []
        }
    }

    public static prepareMultiImageInput<P>(data: AsterFormMultiImageInput<P>): AsterFormInput<P, AsterFormImageOption[]> {
        return {
            id: data.id ? data.id : AsterFormInputService._prepareId(),
            model: data.model,
            type: AsterFormInputType.MULTIIMAGE,
            key: data.key,
            label: data.label ? data.label : '',
            name: data.name ? data.name : AsterFormInputService._prepareName(),
            placeholder: data.placeholder ? data.placeholder : '',
            defaultValue: data.defaultValue ? data.defaultValue : [{
                value: 'https://s3-ap-south-1.amazonaws.com/bloomscorp-cdn/spectacle-hub/SH-0034-SB-EG-825-MTBLK/1.png',
                altText: 'Default image'
            }],
            multiselectDefaultValue: [],
            min: data.min ? data.min : 1,
            max: data.max ? data.max : 999,
            pattern: '',
            readonly: data.readonly ? data.readonly : false,
            disabled: data.disabled ? data.disabled : false,
            spellcheck: false,
            step: 0,
            options: []
        }
    }
}

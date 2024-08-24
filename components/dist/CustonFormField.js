"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var PatientForm_1 = require("./forms/PatientForm");
var image_1 = require("next/image");
require("react-phone-number-input/style.css");
var react_phone_number_input_1 = require("react-phone-number-input");
var RenderField = function (_a) {
    var field = _a.field, props = _a.props;
    var fieldType = props.fieldType, iconSrc = props.iconSrc, iconAlt = props.iconAlt, placeholder = props.placeholder;
    switch (fieldType) {
        case PatientForm_1.FormFieldType.INPUT:
            return (React.createElement("div", { className: "flex rounded-md border border-dark-500 bg-dark-400" },
                iconSrc && iconAlt && (React.createElement(image_1["default"], { src: iconSrc, alt: iconAlt, height: 24, width: 24, className: "ml-2" })),
                React.createElement(form_1.FormControl, null,
                    React.createElement(input_1.Input, __assign({ placeholder: placeholder }, field, { className: "shad-input border-0" })))));
        case PatientForm_1.FormFieldType.PHONE_INPUT:
            return (React.createElement(form_1.FormControl, null,
                React.createElement(react_phone_number_input_1["default"], { defaultCountry: "PH", placeholder: placeholder, international: true, withCountryCallingCode: true, value: field.value, onChange: field.onChange, className: "input-phone" })));
        default:
            break;
    }
};
var CustomFormField = function (props) {
    var control = props.control, fieldType = props.fieldType, name = props.name, label = props.label;
    return (React.createElement(form_1.FormField, { control: control, name: name, render: function (_a) {
            var field = _a.field;
            return (React.createElement(form_1.FormItem, { className: "flex-1" },
                fieldType !== PatientForm_1.FormFieldType.CHECKBOX && label && (React.createElement(form_1.FormLabel, null, label)),
                React.createElement(RenderField, { field: field, props: props }),
                React.createElement(form_1.FormMessage, { className: "shad-error" })));
        } }));
};
exports["default"] = CustomFormField;

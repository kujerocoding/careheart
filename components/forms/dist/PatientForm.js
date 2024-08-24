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
exports.FormFieldType = void 0;
var zod_1 = require("@hookform/resolvers/zod");
var react_hook_form_1 = require("react-hook-form");
var zod_2 = require("zod");
var button_1 = require("@/components/ui/button");
var form_1 = require("@/components/ui/form");
var CustonFormField_1 = require("../CustonFormField");
var FormFieldType;
(function (FormFieldType) {
    FormFieldType["INPUT"] = "input";
    FormFieldType["CHECKBOX"] = "checkbox";
    FormFieldType["TEXTAREA"] = "textarea";
    FormFieldType["PHONE_INPUT"] = "phoneInput";
    FormFieldType["DATE_PICKER"] = "datePicker";
    FormFieldType["SELECT"] = "select";
    FormFieldType["SKELETON"] = "skeleton";
})(FormFieldType = exports.FormFieldType || (exports.FormFieldType = {}));
var formSchema = zod_2.z.object({
    username: zod_2.z.string().min(2, {
        message: "Username must be at least 2 characters."
    })
});
var PatientForm = function () {
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(formSchema),
        defaultValues: {
            username: ""
        }
    });
    function onSubmit(values) {
        console.log(values);
    }
    return (React.createElement(form_1.Form, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-6 flex-1" },
            React.createElement("section", { className: "mb-12 space-y-4" },
                React.createElement("h1", { className: "header" }, "Hi there!"),
                React.createElement("p", { className: "text-dark-700" }, "Schedule your first appointment")),
            React.createElement(CustonFormField_1["default"], { fieldType: FormFieldType.INPUT, control: form.control, name: "name", label: "Full name", placeholder: "John Doe", iconSrc: "/assets/icons/user.svg", iconAlt: "user" }),
            React.createElement(CustonFormField_1["default"], { fieldType: FormFieldType.INPUT, control: form.control, name: "name", label: "Full name", placeholder: "test@emails.com", iconSrc: "/assets/icons/email.svg", iconAlt: "user" }),
            React.createElement(CustonFormField_1["default"], { fieldType: FormFieldType.PHONE_INPUT, control: form.control, name: "name", label: "Full name", placeholder: "1234567" }),
            React.createElement(button_1.Button, { type: "submit" }, "Submit"))));
};
exports["default"] = PatientForm;

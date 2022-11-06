"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../../components");
exports.default = {
    title: "UI/MyLabel",
    component: components_1.MyLabel,
    argTypes: {
        color: { control: "select" },
        size: { control: "select" },
    },
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(components_1.MyLabel, Object.assign({}, args)));
exports.Basic = Template.bind({});
exports.Basic.args = {
    allCaps: false,
    size: "normal",
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    allCaps: true,
    size: "normal",
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    color: "secondary",
    size: "h2",
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    color: "tertiary",
    size: "h3",
};
exports.CustomColor = Template.bind({});
exports.Tertiary.args = {
    fontColor: "#5517ac",
    size: "h1",
};

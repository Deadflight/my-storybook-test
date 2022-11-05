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
import { jsx as _jsx } from "react/jsx-runtime";
import { MyLabel } from "../../components";
export default {
    title: "UI/MyLabel",
    component: MyLabel,
    argTypes: {
        color: { control: "select" },
        size: { control: "select" },
    },
};
var Template = function (args) { return (_jsx(MyLabel, __assign({}, args))); };
export var Basic = Template.bind({});
Basic.args = {
    allCaps: false,
    size: "normal",
};
export var AllCaps = Template.bind({});
AllCaps.args = {
    allCaps: true,
    size: "normal",
};
export var Secondary = Template.bind({});
Secondary.args = {
    color: "secondary",
    size: "h2",
};
export var Tertiary = Template.bind({});
Tertiary.args = {
    color: "tertiary",
    size: "h3",
};
export var CustomColor = Template.bind({});
Tertiary.args = {
    fontColor: "#5517ac",
    size: "h1",
};

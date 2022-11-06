import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel/MyLabel";

export default {
	title: "UI/MyLabel",
	component: MyLabel,
	argTypes: {
		color: { control: "select" },
		size: { control: "select" },
	},
} as ComponentMeta<typeof MyLabel>;

const Template: ComponentStory<typeof MyLabel> = (args) => (
	<MyLabel {...args} />
);

export const Basic = Template.bind({});

Basic.args = {
	allCaps: false,
	size: "normal",
};

export const AllCaps = Template.bind({});

AllCaps.args = {
	allCaps: true,
	size: "normal",
};

export const Secondary = Template.bind({});

Secondary.args = {
	color: "secondary",
	size: "h2",
};

export const Tertiary = Template.bind({});

Tertiary.args = {
	color: "tertiary",
	size: "h3",
};

export const CustomColor = Template.bind({});

Tertiary.args = {
	fontColor: "#5517ac",
	size: "h1",
};

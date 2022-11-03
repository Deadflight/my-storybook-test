import React from "react";
import "./MyLabel.css";

export interface MyLabelProps {
	/**
	 * Capitalize the label
	 */
	allCaps: boolean;
	/**
	 * Color of label's text
	 */
	color: "primary" | "secondary" | "tertiary";
	/**
	 * Label's font color
	 */
	fontColor?: string;
	/**
	 * Message to show in the label
	 */
	label: string;
	/**
	 * Size of the label
	 */
	size: "normal" | "h1" | "h2" | "h3";
}

export const MyLabel = ({
	allCaps = false,
	color = "primary",
	fontColor,
	label = "No label",
	size = "normal",
}: MyLabelProps) => {
	return (
		<span
			className={`label ${size} text-${color}`}
			style={{
				color: fontColor,
			}}
		>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};

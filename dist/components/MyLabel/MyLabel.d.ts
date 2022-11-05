/// <reference types="react" />
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
export declare const MyLabel: ({ allCaps, color, fontColor, label, size, }: MyLabelProps) => JSX.Element;
export default MyLabel;

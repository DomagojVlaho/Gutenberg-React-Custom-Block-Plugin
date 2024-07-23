import {
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { ColorPalette } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

export const TopCurveSettings = (props) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				min={100}
				max={300}
				value={props.attributes.topWidth || 100}
				onChange={(newValue) =>
					props.setAttributes({
						topWidth: parseInt(newValue),
					})
				}
				label={__("Width", metadata.textdomain)}
			/>
			<RangeControl
				min={0}
				max={200}
				value={props.attributes.topHeight}
				onChange={(newValue) =>
					props.setAttributes({
						topHeight: parseInt(newValue),
					})
				}
				label={__("Height", metadata.textdomain)}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.topFlipX}
					onChange={(isChecked) => {
						props.setAttributes({ topFlipX: isChecked });
					}}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.topFlipY}
					onChange={(isChecked) => {
						props.setAttributes({ topFlipY: isChecked });
					}}
				/>
				<span>{__("Flip vertically", metadata.textdomain)}</span>
			</div>
			<HorizontalRule />
			<div>
				<label>{__("Curve color", metadata.textdomain)}</label>
				<ColorPalette
					// disableCustomColors
					// colors={{ name: "yellow", color: "#ffff00" }}
					value={props.attributes.topColor}
					onChange={(newValue) => props.setAttributes({ topColor: newValue })}
				/>
			</div>
		</>
	);
};

import {
	HorizontalRule,
	RangeControl,
	ToggleControl,
} from "@wordpress/components";
import { ColorPalette } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";
import metadata from "../block.json";

export const BottomCurveSettings = (props) => {
	return (
		<>
			<HorizontalRule />
			<RangeControl
				min={100}
				max={300}
				value={props.attributes.bottomWidth || 100}
				onChange={(newValue) =>
					props.setAttributes({
						bottomWidth: parseInt(newValue),
					})
				}
				label={__("Width", metadata.textdomain)}
			/>
			<RangeControl
				min={0}
				max={200}
				value={props.attributes.bottomHeight}
				onChange={(newValue) =>
					props.setAttributes({
						bottomHeight: parseInt(newValue),
					})
				}
				label={__("Height", metadata.textdomain)}
			/>
			<HorizontalRule />
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.bottomFlipX}
					onChange={(isChecked) => {
						props.setAttributes({ bottomFlipX: isChecked });
					}}
				/>
				<span>{__("Flip horizontally", metadata.textdomain)}</span>
			</div>
			<div style={{ display: "flex" }}>
				<ToggleControl
					checked={props.attributes.bottomFlipY}
					onChange={(isChecked) => {
						props.setAttributes({ bottomFlipY: isChecked });
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
					value={props.attributes.bottomColor}
					onChange={(newValue) =>
						props.setAttributes({ bottomColor: newValue })
					}
				/>
			</div>
		</>
	);
};

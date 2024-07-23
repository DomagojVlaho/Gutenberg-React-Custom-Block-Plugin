import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	useInnerBlocksProps,
	BlockControls,
	JustifyContentControl,
} from "@wordpress/block-editor";
import { parseValue } from "../../utils/parseValue";
import "./editor.scss";

export default function Edit(props) {
	// console.log(props);
	const blockGap = parseValue(props.attributes.style?.spacing?.blockGap || "");
	// console.log(blockGap);
	const blockProps = useBlockProps({
		style: { gap: blockGap, justifyContent: props.attributes.justifyContent },
	});
	// Alternative way of restricting inner blocks - using useInnerBlocksProps instead of InnerBlocks
	const innerBlocksProps = useInnerBlocksProps(blockProps, {
		template: [["blockylicious/clicky-button", {}]],
		allowedBlocks: ["blockylicious/clicky-button"],
	});
	// Alternative way of restricting inner blocks - using useInnerBlocksProps instead of InnerBlocks

	return (
		// <div {...blockProps}>
		// 	<InnerBlocks
		// 		template={[["blockylicious/clicky-button", {}]]}
		// 		allowedBlocks={["blockylicious/clicky-button"]}
		// 	/>
		// </div>
		<>
			<BlockControls>
				<JustifyContentControl
					value={props.attributes.justifyContent}
					allowedControls={["left", "center", "right"]}
					onChange={(newValue) => {
						props.setAttributes({ justifyContent: newValue });
					}}
				/>
			</BlockControls>
			<div {...innerBlocksProps}></div>
		</>
	);
}

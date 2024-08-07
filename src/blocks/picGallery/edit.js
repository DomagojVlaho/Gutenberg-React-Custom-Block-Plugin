import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	BlockControls,
	useInnerBlocksProps,
} from "@wordpress/block-editor";
import { ToolbarGroup, ToolbarButton, Icon } from "@wordpress/components";
import metadata from "./block.json";
import { useState } from "@wordpress/element";
import { useSelect } from "@wordpress/data";
import "./editor.scss";
import { ImageThumbnail } from "../../components/imageThumbnail";

export default function Edit(props) {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps(
		{
			className: "pic-gallery-inner-blocks",
		},
		{
			allowedBlocks: ["blockylicious/pic-image"],
		},
	);
	const [editMode, setEditMode] = useState(true);
	const innerBlocks = useSelect(
		(select) => {
			const { getBlocksByClientId } = select("core/block-editor");
			const block = getBlocksByClientId(props.clientId)?.[0];
			return block?.innerBlocks;
		},
		[props.clientId],
	);
	const [previewModeImage, setPreviewModeImage] = useState({
		imageId: innerBlocks?.[0]?.attributes.imageId,
		blockId: innerBlocks?.[0]?.clientId,
	});

	return (
		<>
			<div {...blockProps}>
				{!!editMode && (
					<div className="edit-mode">
						<span className="pic-label">
							{__("Pic image gallery", metadata.textdomain)}
						</span>
						<div {...innerBlocksProps} />
					</div>
				)}
				{!editMode && (
					<>
						<div className="preview-mode">
							{(innerBlocks || []).map((innerBlock) => (
								<ImageThumbnail
									imageId={innerBlock.attributes.imageId}
									key={innerBlock.clientId}
									height={75}
									onClick={() => {
										setPreviewModeImage({
											imageId: innerBlock.attributes.imageId,
											blockId: innerBlock.clientId,
										});
									}}
									className={`thumb ${
										innerBlock.clientId === previewModeImage.blockId
											? "selected"
											: ""
									}`}
								/>
							))}
						</div>
						<div>
							<ImageThumbnail
								imageId={previewModeImage.imageId}
								height="initial"
							/>
						</div>
					</>
				)}
			</div>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={
							editMode ? (
								<Icon icon="welcome-view-site" />
							) : (
								<Icon icon="edit" />
							)
						}
						label={
							editMode
								? __("Preview gallery", metadata.textdomain)
								: __("Edit gallery", metadata.textdomain)
						}
						onClick={() => {
							setEditMode((prevState) => !prevState);
						}}
					/>
				</ToolbarGroup>
			</BlockControls>
		</>
	);
}

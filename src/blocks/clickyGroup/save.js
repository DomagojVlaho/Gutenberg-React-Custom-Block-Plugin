import { useBlockProps, useInnerBlocksProps } from "@wordpress/block-editor";

export default function Save() {
	const blockProps = useBlockProps.save();
	const { children } = useInnerBlocksProps.save(blockProps);
	return children;

	// Alternative:
	// const innerBlocksProps = useInnerBlocksProps.save(blockProps);
	// return innerBlocksProps.children;
}

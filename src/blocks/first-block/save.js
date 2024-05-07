import { useBlockProps } from '@wordpress/block-editor'

export default function Save() {
	const elementProps = useBlockProps.save()

	return <p {...elementProps}>Save</p>
}

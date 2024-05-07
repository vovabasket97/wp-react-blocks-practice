import { useBlockProps } from '@wordpress/block-editor'

export default function Edit() {
  const elementProps = useBlockProps()

  return <p {...elementProps}>Edit</p>
}

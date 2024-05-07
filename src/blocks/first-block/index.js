import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";

import "./editor.scss";
import "./style.scss";

registerBlockType("blocks-course/firstblock", {
  edit: function () {
    const elementProps = useBlockProps();

    return <p {...elementProps}>Edit</p>;
  },
  save: function () {
    const elementProps = useBlockProps.save();

    return <p {...elementProps}>Save</p>;
  },
});

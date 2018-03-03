/**
 * WordPress dependencies
 */
import { IconButton } from "@wordpress/components";

/**
 * Internal dependencies
 */
import "./style.scss";

function CenterToggle({ onClick, isOpened }) {
  return (
    <IconButton
      className="newtify-center-toggle"
      icon="admin-comments"
      onClick={onClick}
      isToggled={isOpened}
    />
  );
}

export default CenterToggle;

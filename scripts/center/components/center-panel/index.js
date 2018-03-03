/**
 * WordPress dependencies
 */
import { IconButton } from "@wordpress/components";

/**
 * Internal dependencies
 */
import "./style.scss";
import NotificationList from "../notification-list";

function CenterPanel() {
  return (
    <div className="newtify-center-panel">
      <NotificationList />
    </div>
  );
}

export default CenterPanel;

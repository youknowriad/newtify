/**
 * WordPress dependencies
 */
import { Dashicon } from "@wordpress/components";

function NotificationIcon({ status }) {
  switch (status) {
    case "success":
      return <Dashicon icon="yes" />;
    case "error":
    case "warning":
      return <Dashicon icon="warning" />;
    default:
      return <Dashicon icon="info" />;
  }
}

export default NotificationIcon;

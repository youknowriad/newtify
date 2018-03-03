/**
 * WordPress dependencies
 */
import { withSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import "./style.scss";
import Notificaiton from "../notification";

function NotificationList({ notifications }) {
  if (!notifications.length) {
    return (
      <div className="newtify-notification-list__empty">No notifications.</div>
    );
  }
  return (
    <div>
      {notifications.map(notification => (
        <Notificaiton key={notification.id} notification={notification} />
      ))}
    </div>
  );
}

export default withSelect(select => ({
  notifications: select("core/newtify").getNotifications()
}))(NotificationList);

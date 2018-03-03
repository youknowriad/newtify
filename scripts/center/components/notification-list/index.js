/**
 * WordPress dependencies
 */
import { withSelect } from "@wordpress/data";

/**
 * Internal dependencies
 */
import Notificaiton from "../notification";

function NotificationList({ notifications }) {
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

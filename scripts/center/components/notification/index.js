/**
 * External dependencies
 */
import moment from "moment";

/**
 * Internal dependencies
 */
import "./style.scss";
import NotificationIcon from "../notification-icon";

function Notification({ notification }) {
  return (
    <div className="newtify-notification">
      <div className="newtify-notification__icon">
        <NotificationIcon status={notification.status} />
      </div>
      <div className="newtify-notification__content">
        {notification.content}
      </div>
      <div className="newtify-notification__time">
        {moment.unix(notification.time).fromNow()}
      </div>
    </div>
  );
}

export default Notification;

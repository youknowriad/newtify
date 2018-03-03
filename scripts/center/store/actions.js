/**
 * External dependencies
 */
import uuid from "uuid/v4";
import moment from "moment";

/**
 * Returns an action object to add a new notification.
 *
 * @param {string} content        Notification content
 * @param {string} status         Notification status
 * @param {boolean} isDismissable Whether the notification is dismissable
 * @param {boolean} time          Notification timestamp
 * @param {boolean} id            Notification id
 *
 * @return {Object}               Action Object
 */
export function addNotification(
  content,
  status,
  isDismissable = false,
  time = moment().format("X"),
  id = uuid()
) {
  return {
    type: "NOTIFICATIONS_ADD",
    notifications: [{ id, content, status, isDismissable, time }]
  };
}

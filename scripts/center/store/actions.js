/**
 * External dependencies
 */
import uuid from "uuid/v4";
import moment from "moment";

/**
 * Function used to create a notification object.
 *
 * @param {Object}  notification                Notification
 * @param {string}  notification.content        Notification content
 * @param {string}  notification.status         Notification status
 * @param {boolean} notification.isDismissable  Whether the notification is dismissable
 * @param {boolean} notification.time           Notification timestamp
 * @param {boolean} notification.id             Notification id
 *
 *
 * @return {Object}                             Notification Object
 */
export function createNotification({
  content,
  status,
  isDismissable = false,
  time = moment().format("X"),
  id = uuid()
}) {
  return { id, content, status, isDismissable, time };
}

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
export function addNotification(content, status, isDismissable, time, id) {
  return {
    type: "NOTIFICATIONS_ADD",
    notifications: [
      createNotification({ id, content, status, isDismissable, time })
    ]
  };
}

/**
 * Returns an action object to add new notifications.
 *
 * @param {array}  notifications  Notification list
 * @return {Object}               Action Object
 */
export function addNotifications(notifications) {
  return {
    type: "NOTIFICATIONS_ADD",
    notifications: notifications.map(createNotification)
  };
}

/**
 * External dependencies
 */
import { reduce, map } from "lodash";
import { nodeToReact } from "dom-react";

/**
 * WordPress dependencies
 */
import { createElement } from "@wordpress/element";
import { dispatch } from "@wordpress/data";

export function importOldNotices() {
  const defaultContainer = ".wrap";
  const notifications = map(
    document.querySelectorAll(`${defaultContainer} > .notice`),
    element => {
      const isDismissable = element.classList.contains("is-dismissible");
      const status = reduce(
        element.classList,
        (memo, className) => {
          if (className.indexOf("notice-") === 0) {
            return className.substring(7);
          }
          return memo;
        },
        "success"
      );
      const content = nodeToReact(element.querySelector("p"), createElement);

      return { status, isDismissable, content };
    }
  );

  dispatch("core/newtify").addNotifications(notifications);
}

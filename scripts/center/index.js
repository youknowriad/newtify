/**
 * WordPress dependencies
 */
import { render } from "@wordpress/element";

/**
 * Internal dependencies
 */
import "./style.scss";
import "./store";
import { importOldNotices } from "./importer";
import Center from "./components/center";

render(<Center />, document.getElementById("wp-admin-bar-newtify-center"));

// Delay to wait for the notifications to appear
setTimeout(importOldNotices, 50);

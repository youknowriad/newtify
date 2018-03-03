/**
 * WordPress dependencies
 */
import { render } from "@wordpress/element";

/**
 * Internal dependencies
 */
import "./style.scss";
import "./store";
import Center from "./components/center";

render(<Center />, document.getElementById("wp-admin-bar-newtify-center"));

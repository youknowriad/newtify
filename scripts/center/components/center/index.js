/**
 * WordPress dependencies
 */
import { Component, Fragment } from "@wordpress/element";

/**
 * Internal dependencies
 */
import "./style.scss";
import CenterPanel from "../center-panel";
import CenterToggle from "../center-toggle";

class Center extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      opened: false
    };

    this.openPanel = this.openPanel.bind(this);
    this.closePanel = this.closePanel.bind(this);
  }

  openPanel() {
    this.setState({ opened: true });
  }

  closePanel() {
    this.setState({ opened: false });
  }

  render() {
    const { opened } = this.state;
    return (
      <Fragment>
        {opened && <CenterPanel />}
        {opened && (
          <div className="newtify-center__layover" onClick={this.closePanel} />
        )}
        <CenterToggle
          onClick={opened ? this.closePanel : this.openPanel}
          isOpened={opened}
        />
      </Fragment>
    );
  }
}

export default Center;

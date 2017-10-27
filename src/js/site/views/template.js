/**
 * Starfinder - Template
 * ===
 *
 * @module template
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import {Link} from 'react-router-dom';
import ActionBar from '../elements/action-bar';
import Drawer from '../elements/drawer';
import Icon from '../elements/icon';
import LeftNav from './template/left-nav';
import Main from './template/main';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Template
 * @class
 * @extends React.Component
 */
class Template extends React.Component {

  /**
   * Template
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      menuCollapsed: false,
      panelCollapsed: false
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div className="o-app__container">
        <header className="o-app__header">
          <ActionBar
            title="Starfinder"
            leftIcon="menu"
            onLeftIconClick={(event) => this.toggleMenu(event)} >
            <Icon value="search" />
          </ActionBar>
        </header>
        <header className="o-app__bread-crumb">title</header>
        <Main />
        <footer className="o-app__footer">
          <ActionBar
            title="footer"
            rightIcon="settings" />
        </footer>
      </div>
    );
  }

  toggleMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState({menuCollapsed: !this.state.menuCollapsed});
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Template;

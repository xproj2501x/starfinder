/**
 * Starfinder - Action Bar
 * ===
 *
 * @module actionBar
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import PropTypes from 'prop-types';
import Icon from './icon';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * ActionBar
 * @class
 * @extends React.Component
 */
class ActionBar extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * ActionBar
   * @constructor
   */
  constructor(props) {
    super(props);

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div ref={(node) => {this.rootNode = node;}} className={`${this.props.className} c-action-bar`}>
        {this.renderLeftIcon()}
        {this.renderTitle()}
        {this.props.children}
        {this.renderRightIcon()}
      </div>
    );
  }


  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  renderTitle() {
    const TITLE = this.props.title;

    if (typeof TITLE === 'string') {
      return (
        <h1 className="c-action-bar__title">{TITLE}</h1>
      );
    }
    return TITLE;
  }

  renderLeftIcon() {
    if (this.props.leftIcon) {
      return <Icon
        className="c-action-bar__left-icon"
        value={this.props.leftIcon}
        onClick={this.props.onLeftIconClick} />;
    }
  }

  renderRightIcon() {
    if (this.props.rightIcon) {
      return <Icon
        className="c-action-bar__right-icon"
        value={this.props.rightIcon}
        onClick={this.props.onRightIconClick} />;
    }
  }

}

ActionBar.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  className: PropTypes.string,
  leftIcon: PropTypes.string,
  onLeftIconClick: PropTypes.func,
  rightIcon: PropTypes.string,
  onRightIconClick: PropTypes.func,
  children: PropTypes.node
};

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ActionBar;

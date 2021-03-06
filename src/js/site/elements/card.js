/**
 * Starfinder - Card
 * ===
 *
 * @module card
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import PropTypes from 'prop-types';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Card
 * @class
 * @extends React.Component
 */
class Card extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Card
   * @constructor
   */
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false
    };
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  toggle() {
    this.setState({isCollapsed: !this.state.isCollapsed});
  }

  render() {
    const IS_COLLAPSED = this.state.isCollapsed;
    let body;

    if (IS_COLLAPSED) {
      body = null;
    } else {
      body = <div className="c-card__body o-grid o-grid--no-spacing">
        {this.props.children}
      </div>
    }

    return (
      <section className="c-card">
        <div className="c-card__heading">
          {this.props.title}
          <button className="c-button c-button--primary-dark--flat c-button--collapse" onClick={() => this.toggle()}>
            +
          </button>
        </div>
        {body}
      </section>
    );
  }


  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

Card.propTypes = {
  title: PropTypes.string,

};
////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Card;

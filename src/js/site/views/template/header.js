/**
 * Starfinder - Header
 * ===
 *
 * @module header
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Header
 * @class
 * @extends React.Component
 */
class Header extends React.Component {

  /**
   * Header
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
      <header className="o-grid o-grid--no-spacing o-app__header">
        <div className="o-cell o-cell--column-6">
          <i className="c-icon">menu</i>
        </div>
        <div className="o-cell o-cell--column-6">col 2</div>
      </header>
    );
  }

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Header;

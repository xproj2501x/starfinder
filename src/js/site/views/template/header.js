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
      <header className="o-cell o-cell--column-12 o-grid o-grid--no-spacing o-app__header">
        <div className="o-cell o-cell--column-6">left</div>
        <div className="o-cell o-cell--column-6">right</div>
      </header>
    );
  }

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Header;
/**
 * Starfinder - Left Nav
 * ===
 *
 * @module leftNav
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Link } from 'react-router-dom';
////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * LeftNav
 * @class
 * @extends React.Component
 */
class LeftNav extends React.Component {

  /**
   * LeftNav
   * @constructor
   */
  constructor() {
    super();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <nav className="o-app__left-nav o-app__left-nav--collapsed">
        <ul className="menu">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/encounters'>Encounters</Link></li>
          <li><Link to='/characters'>Characters</Link></li>
        </ul>
      </nav>
    );
  }

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default LeftNav;
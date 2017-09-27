/**
 * Starfinder - Encounters
 * ===
 *
 * @module encounters
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import { Switch, Route } from 'react-router-dom'

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Encounters
 * @class
 * @extends React.Component
 */
class Encounters extends React.Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Encounters
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
      <div className="o-cell o-cell--column-4 c-card .o-encounters">
        <div className="c-card__body o-grid o-initiative-table" id="character-grid">
          <div className="o-cell o-cell--column-6">
            <button className="c-button c-button--primary" id="start-button">Start</button>
            <button className="c-button c-button--primary" id="previous-button" disabled> &larr; </button>
            <button className="c-button c-button--primary" id="next-button" disabled> &rarr; </button>
          </div>
          <div className="o-cell o-cell--column-6">
            <select id="encounter-dropdown">
              <option></option>
            </select>
            <button className="c-button c-button--primary" id="add-button"> + </button>
          </div>
          <div className="o-cell o-cell--column-6">
            <button className="c-button c-button--primary" id="roll-button"> Roll </button>
            <button className="c-button c-button--primary" id="sort-button"> Sort </button>
          </div>
          <div className="o-cell o-cell--column-6">
            <button className="c-button c-button--primary"> oth1 </button>
            <button className="c-button c-button--primary"> oth2 </button>
          </div>
          <div className="o-cell o-cell--column-12 o-grid o-grid--no-spacing o-initiative-table__heading">
            <div className="o-cell o-cell--column-4">Name</div>
            <div className="o-cell o-cell--column-1 init">Init</div>
            <div className="o-cell o-cell--column-2 hit-points">HP</div>
            <div className="o-cell o-cell--column-2 stamina">Stamina</div>
            <div className="o-cell o-cell--column-1 kac">KAC</div>
            <div className="o-cell o-cell--column-1 eac">EAC</div>
            <div className="o-cell o-cell--column-1 quick-buttons"></div>
          </div>
        </div>
      </div>
    );
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Encounters;

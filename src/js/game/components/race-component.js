/**
 * Starfinder - Race Component
 * ===
 *
 * @module raceComponent
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Component from '../../engine/component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * Proprty names for the component
 * @enum {string}
 */
const KEYS = {
  STRENGTH: 'strength',
  DEXTERITY: 'dexterity',
  CONSTITUTION: 'constitution',
  INTELLIGENCE: 'intelligence',
  WISDOM: 'wisdom',
  CHARISMA: 'charisma'
};

/**
 * Default values for the component
 * @enum {*}
 */
const DEFAULTS = {
  strength: 0,
  dexterity: 0,
  constitution: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * RaceComponent
 * @class
 * @extends Component
 */
class RaceComponent extends Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////


  /**
   * RaceComponent
   * @constructor
   * @param {string} id - the UUID of the parent entity
   * @param {object} state - the initial state of the component
   */
  constructor(id, state = {}) { // eslint-disable-line id-length
    super(id, DEFAULTS, state);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {object} data - configuration for the component to be created
   * @return {RaceComponent}
   */
  static create(data) {
    if (data === null) {
      throw new Error('Abilities component configuration missing');
    }
    return new RaceComponent(data.id, data.state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default RaceComponent;

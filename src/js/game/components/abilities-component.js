/**
 * Starfinder - Abilities Component
 * ===
 *
 * @module abilitiesComponent
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
 * AbilitiesComponent
 * @class
 * @extends ComponentModel
 */
class AbilitiesComponent extends Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Get _state.strength;
   * @readonly
   * @return {int}
   */
  get strength() {
    return this._getProperty(KEYS.STRENGTH);
  }

  /**
   * Get _state.dexterity;
   * @readonly
   * @return {int}
   */
  get dexterity() {
    return this._getProperty(KEYS.STRENGTH);
  }

  /**
   * Get _state.constitution;
   * @readonly
   * @return {int}
   */
  get constitution() {
    return this._getProperty(KEYS.CONSTITUTION);
  }

  /**
   * Get _state.intelligence;
   * @readonly
   * @return {int}
   */
  get intelligence() {
    return this._getProperty(KEYS.INTELLIGENCE);
  }

  /**
   * Get _state.wisdom;
   * @readonly
   * @return {int}
   */
  get wisdom() {
    return this._getProperty(KEYS.WISDOM);
  }

  /**
   * Get _state.charisma;
   * @readonly
   * @return {int}
   */
  get charisma() {
    return this._getProperty(KEYS.CHARISMA);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////


  /**
   * AttributesComponent
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
   * @return {AbilitiesComponent}
   */
  static create(data) {
    if (data === null) {
      throw new Error('Abilities component configuration missing');
    }
    return new AbilitiesComponent(data.id, data.state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AbilitiesComponent;

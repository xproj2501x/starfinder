/**
 * Starfinder - Abilities Scores Component
 * ===
 *
 * @module abilitiesScoresComponent
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
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * AbilitiesScoresComponent
 * @class
 * @extends Component
 */
class AbilitiesScoresComponent extends Component {

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
   * AttributesScoresComponent
   * @constructor
   * @param {string} id - the UUID of the parent entity
   * @param {object} state - the initial state of the component
   */
  constructor(id, state) { // eslint-disable-line id-length
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
   * @return {AbilitiesScoresComponent}
   */
  static create({id, state}) {

    return new AbilitiesScoresComponent(id, state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AbilitiesScoresComponent;

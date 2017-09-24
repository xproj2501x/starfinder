/**
 * Starfinder - Abilities Component
 * ===
 *
 * @module abilitiesModel
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import ComponentModel from '../models/component-model';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * Proeprty names for the component
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
class AbilitiesComponent extends ComponentModel {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  get strength() {
    return this._getProperty(KEYS.STRENGTH);
  }

  get strengthModifier() {
    return this._calculateModifier(KEYS.STRENGTH);
  }

  get dexterity() {
    return this._getProperty(KEYS.STRENGTH);
  }

  get dexterityModifier() {
    return this._calculateModifier(KEYS.STRENGTH);
  }

  get constitution () {
    return this._getProperty(KEYS.CONSTITUTION);
  }

  get constitutionModifier () {
    return this._calculateModifier(KEYS.CONSTITUTION);
  }

  get intelligence() {
    return this._getProperty(KEYS.INTELLIGENCE);
  }

  get intelligenceModifier() {
    return this._calculateModifier(KEYS.INTELLIGENCE);
  }

  get wisdom() {
    return this._getProperty(KEYS.WISDOM);
  }

  get wisdomModifier() {
    return this._calculateModifier(KEYS.WISDOM);
  }


  get charisma() {
    return this._getProperty(KEYS.CHARISMA);
  }

  get charismaModifier() {
    return this._calculateModifier(KEYS.CHARISMA);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////


  /**
   * AttributesComponent
   * @constructor
   * @param {string} id - the id of the parent entity
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
  /**
   * Calculates the modifier value for the ability
   * @param property
   * @returns {number}
   * @private
   */
  _calculateModifier(property) {
    const VALUE = this._getProperty(property);

    return Math.floor((VALUE / 2) - 5);
  }
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

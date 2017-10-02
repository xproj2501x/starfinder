/**
 * Starfinder - Health Component
 * ===
 *
 * @module healthComponent
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import ComponentModel from '../../engine/component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * Proeprty names for the component
 * @enum {string}
 */
const KEYS = {
  STAMINA: 'stamina',
  HIT_POINTS: 'hitPoints',
  RESOLVE: 'resolve',
  DAMAGE: 'damage',
  SUBDUAL_DAMAGE: 'subdualDamage',
  TEMPORARY_HIT_POINTS: 'temporaryHitPoints'
};

/**
 * Default values for the component
 * @enum {*}
 */
const DEFAULTS = {
  stamina: 0,
  hitPoints: 0,
  resolve: 0,
  damage: 0,
  subdualDamage: 0,
  temporaryHitPoints: 0
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * HealthComponent
 * @class
 * @extends ComponentModel
 */
class HealthComponent extends ComponentModel {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Get _state.stamina
   * @readonly
   * @return {int}
   */
  get stamina() {
    return this._getProperty(KEYS.STAMINA);
  }

  /**
   * Get _state.hitPoints
   * @readonly
   * @return {int}
   */
  get hitPoints() {
    return this._getProperty(KEYS.HIT_POINTS);
  }

  /**
   * Get _state.resolve
   * @readonly
   * @return {int}
   */
  get resolve() {
    return this._getProperty(KEYS.RESOLVE);
  }

  /**
   * Get _state.damage
   * @readonly
   * @return {int}
   */
  get damage() {
    return this._getProperty(KEYS.DAMAGE);
  }

  /**
   * Get _state.subdualDamage
   * @readonly
   * @return {int}
   */
  get subdualDamage() {
    return this._getProperty(KEYS.SUBDUAL_DAMAGE);
  }

  /**
   * Get _state.temporaryHitPoints
   * @readonly
   * @return {int}
   */
  get temporaryHitPoints() {
    return this._getProperty(KEYS.TEMPORARY_HIT_POINTS);
  }

  get currentHealth() {
    const VALUE = (this.stamina + this.hitPoints + this.temporaryHitPoints) - this.damage - this.subdualDamage;
  }
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

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {object} data - configuration for the component to be created
   * @return {HealthComponent}
   */
  static create(data) {
    if (data === null) {
      throw new Error('Health component configuration missing');
    }
    return new HealthComponent(data.id, data.state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default HealthComponent;

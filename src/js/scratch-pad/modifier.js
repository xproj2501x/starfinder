/**
 * Starfinder - Modifier
 * ===
 *
 * @module modifier
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const MAP = {
  TYPE: 0x000000,
  TARGET: 0x00001,
  SOURCE: 0x000002,
  VALUE: 0x00003
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Modifier
 * @class
 */
class Modifier {

  //////////////////////////////////////////////////////////////////////////////
  // Static Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The type, state, and modifiers for the component
   * @private
   * @type {Array}
   */
  _data;


  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Returns the type of the modifier
   * @readonly
   * @return {int}
   */
  get type() {
    return this._data[MAP.TYPE];
  }

  /**
   * Returns the component type for the modifier
   * @readonly
   * @return {int}
   */
  get componentType() {
    return this._data[MAP.COMPONENT_TYPE];
  }


  /**
   * Returns the value of the modifier
   * @readonly
   * @return {*}
   */
  get value() {
    return this._data[MAP.VALUE];
  }

  /**
   * Component
   * @constructor
   * @param {int} type - the type of the component to be created
   * @param {object} state - the initial state of the component
   */
  constructor(type, componentType, value) {
    this._data = [];
    this._data[MAP.TYPE] = type;
    this._data[MAP.COMPONENT_TYPE] = componentType;
    this._data[MAP.VALUE] = value;
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
   * @return {Modifier}
   */
  static create(data) {
    if (data === null) {
      throw new Error('Modifier configuration missing');
    }
    return new Modifier(data.type, data.componentType, data.state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Modifier;
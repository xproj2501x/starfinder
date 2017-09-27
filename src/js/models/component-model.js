/**
 * Starfinder - Component Model
 * ===
 *
 * @module componentModel
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import ModifierModel from './modifier-model';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * ComponentModel
 * @class
 */
class ComponentModel {

  //////////////////////////////////////////////////////////////////////////////
  // Static Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The UUID of the parent entity
   * @private
   * @type {string}
   */
  _id;

  /**
   * The state properties of the component
   * @private
   * @type {object}
   */
  _state;

  _modifiers;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Get _id
   * @readonly
   * @return {string}
   */
  get id() { // eslint-disable-line id-length
    return this._id;
  }

  /**
   * ComponentModel
   * @constructor
   * @param {string} id - the id of the parent entity
   * @param {object} config - the default settings for the component state
   * @param {object} state - the initial state of the component
   */
  constructor(id, config, state) { // eslint-disable-line id-length
    if (id === null) {
      throw new Error('Component id cannot be null');
    }
    if (config === null) {
      throw new Error('Component configuration cannot be null');
    }
    if (state === null) {
      throw new Error('Component state cannot be null');
    }
    this._id = id;
    this._state = Object.assign({}, config);
    this.update(state);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Updates the state of the component with new values
   * @param {object} state - the new state of the component
   */
  update(state) {
    if (state instanceof ModifierModel) {
      this._applyModifier(state);
      return;
    }
    for (const KEY in state) {
      if (!this._state.hasOwnProperty(KEY)) {
        throw new Error(`Invalid property ${KEY} for component type ${this.constructor.name}`);
      }
    }
    this._state = Object.assign({}, this._state, state);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Gets the property value for the specified key
   * @private
   * @param {string} key - the name of the property
   * @returns {*}
*/
  _getProperty(key) {
    if (!this._state.hasOwnProperty(key)) {
      throw new Error(`Property: ${key} not found for component type: ${this.constructor.name} `);
    }
    return this._state[key];
  }

  _applyModifier(modifier) {
    this._modifiers.push(modifier);
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {object} data - configuration for the component to be created
   * @return {ComponentModel}
   */
  static create(data) {
    if (data === null) {
      throw new Error('Component configuration missing');
    }
    return new ComponentModel(data.id, data.defaults, data.state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ComponentModel;

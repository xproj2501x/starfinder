/**
 * Starfinder - Entity
 * ===
 *
 * @module entity
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import createUUID from '../utility/uuid';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const MAP = {
  ID: 0x000000,
  COMPONENTS: 0x000001
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Entity
 * @class
 */
class Entity {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The id and components of the entity
   * @private
   * @type {Array}
   */
  _data;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the UUID of the entity
   * @readonly
   * @return {string}
   */
  get id() { // eslint-disable-line id-length
    return this._data[MAP.ID];
  }

  /**
   * Entity
   * @constructor
   * @param {string} id - the UUID of the entity
   */
  constructor(id) { // eslint-disable-line id-length
    this._data = [];
    this._data[MAP.ID] = id || createUUID();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Attaches a component to the entity
   * @param {Component} component - the component to be attached
   */
  attachComponent(component) {
    const TYPE = component.type;

    if (this._components[TYPE]) {
      throw new Error(`Component type: ${TYPE} already attached to entity id: ${this.id}`);
    }
    this._components[TYPE] = component;
  }

  /**
   * Detaches a component currently attached to the entity
   * @param {string} type - the component type to be detached
   */
  detachComponent(type) {
    if (!this._components[type]) {
      throw new Error(`Component type: ${type} is not attached to entity id: ${this.id}`);
    }
    this._components[type] = 0;
  }

  /**
   * Determines if the entity can be used by the calling system
   * @param {Array} key - the access key for the system
   * @return {Array}
   */
  unlock(key) {
    const LOCK = [];

    for (let idx = 0; idx < key.length - 1; idx++) {
      const INDEX = key[0] + idx;

      if (key[idx + 1] && !this._data[INDEX]) {
        throw new Error(`Invalid key: ${key} for entity id: ${this.id}`);
      }
      LOCK.push(this._data[INDEX]);
    }
    return LOCK;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {string} id - the UUID of the entity
   * @return {Entity}
   */
  static create(id) { // eslint-disable-line id-length
    id = id || null;
    return new Entity(id);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Entity;

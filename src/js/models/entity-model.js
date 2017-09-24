/**
 * Starfinder - EntityModel
 * ===
 *
 * @module entityModel
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import createUUID from '../utility/uuid';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * EntityModel
 * @class
 */
class EntityModel {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The UUID of the entity
   * @private
   * @type {string}
   */
  _id;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Returns the UUID of the entity
   * @readonly
   * @return {string}
   */
  get id() { // eslint-disable-line id-length
    return this._id;
  }

  /**
   * EntityModel
   * @constructor
   */
  constructor() { // eslint-disable-line id-length
    this._id = createUUID();
    this._components = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Attaches a component to the entity
   * @param {Component} component - the component to be attached
   */
  attachComponent(component) {
    const TYPE = typeof component;

    if (this._findComponent(TYPE)) {
      throw new Error(`Component type: ${TYPE} already attached to entity id: ${this.id}`);
    }
    this._components.push(component);
  }

  /**
   * Detaches a component currently attached to the entity
   * @param {string} type - the component type to be detached
   */
  detachComponent(type) {
    const COMPONENT = this._findComponent(type);

    if (!COMPONENT) {
      throw new Error(`Component type: ${type} is not attached to entity id: ${this.id}`);
    }

    const INDEX = this._components.indexOf(COMPONENT);

    this._components.slice(INDEX, 1);
  }

  /**
   * Determines if the entity can be used by the calling system
   * @todo: Get lock segment as string and do a bitwise AND
   * @param {Array} key - the access key for the system
   * @return {Array}
   */
  unlock(key) {
    const LOCK = [];
    const START = key.shift();

    for (let idx = 0; idx < key.length; idx++) {
      const INDEX = START + idx;

      if (key[idx] && !this._data[INDEX]) {
        throw new Error(`Invalid key: ${key} for entity id: ${this.id}`);
      }
      LOCK.push(this._data[INDEX]);
    }
    return LOCK;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _findComponent(type) {
    const COMPONENT = this._components.find((component) => {
      return component instanceof type;
    });

    return COMPONENT ? COMPONENT : null;
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {EntityModel}
   */
  static create() { // eslint-disable-line id-length
    return new EntityModel();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default EntityModel;

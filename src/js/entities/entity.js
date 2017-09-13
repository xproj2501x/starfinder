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
   * The UUID of the entity
   * @private
   * @type {string}
   */
  _id;

  /**
   * The components currently attached to the entity
   * @private
   * @type {object}
   */
  _components;

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
   * Entity
   * @constructor
   */
  constructor() {
    this._id = createUUID(); // eslint-disable-line id-length
    this._components = {};
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Attaches a component to the entity
   * @param {string} type - the component type to be attached
   * @param {Component} component - the component to be attached
   */
  attachComponent(type, component) {
    if (this._components[type]) {
      throw new Error(`Component type ${type} already attached to entity ${this._id}`);
    }
    this._components[type] = component;
  }

  /**
   * Detaches a component currently attached to the entity
   * @param {string} type - the component type to be detached
   */
  detachComponent(type) {
    if (!this._components[type]) {
      throw new Error(`Component type ${type} is not attached to entity ${this._id}`);
    }
    delete this._components[type];
  }

  /**
   * Finds a component attached to the entity
   * @param {string} type - the type of component to be retrieved
   * @return {Component}
   */
  findComponent(type) {
    if (!this._components[type]) {
      throw new Error(`Component type ${type} is not attached to entity ${this._id}`);
    }
    return this._components[type];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {int} id - the id number for the entity
   * @return {Entity}
   */
  static create(id) { // eslint-disable-line id-length
    return new Entity(id);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Entity;

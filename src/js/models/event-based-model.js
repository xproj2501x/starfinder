/**
 * Starfinder - EventBasedModel
 * ===
 *
 * @module eventBasedModel
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * EventBasedModel
 * @class
 */
class EventBasedModel {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * The UUID of the entity
   * @private
   * @type {string}
   */
  _id;

  _version;
  _base;
  _events;
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
   * EventBasedModel
   * @constructor
   * @param {object} entity - configuration of the entity
   */
  constructor(entity) {
    this._id = entity.id;
    this._version = 0;
    this._base = Object.assign({}, entity.state);
    this._events = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Applies a property change event and updates the model
   * @param {objemct} event - the property change event
   */
  applyEvent(event) {
    if (this._version++ === 5) {
     this._replayEvents();
    }
    this._events.push(event);
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Gets the property value for the specified key
   * @private
   * @param {string} key
   */
  _getProperty(key) {
    let property = Object.assign({}, this._base);

    this._events.forEach((event) => {
      if (event.data.hasOwnProperty(key)) {
        property = Object.assign(property, event.data[key]);
      }
    });
  }

  /**
   * Rebuilds the model from a collection of events
   * @private
   */
  _replayEvents() {
    if (this._events.length !== this._version) {
      throw new Error(`Invalid state for entity: ${this.id}`);
    }
    while (this._events.length) {
      const EVENT = this._events.shift();

      this._base = Object.assign({}, this._base, EVENT.data);
    }
    this._version = 0;
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {EventBasedModel}
   */
  static create(entity) { // eslint-disable-line id-length
    return new EventBasedModel(entity);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default EventBasedModel;

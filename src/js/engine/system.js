/**
 * Starfinder - System
 * ===
 *
 * @module system
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import { MESSAGES } from './constants';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * System
 * @class
 */
class System {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {Logger}
   */
  _logger;

  /**
   * @private
   * @type {MessageService}
   */
  _messageService;

  _components;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * System
   * @constructor
   * @param {object} config - the message service used by the application
   */
  constructor(config) {
    this._logger = config.LOG_SERVICE.registerLogger(this.constructor.name);
    this._messageService = config.MESSAGE_SERVICE;
    this._messageService.subscribe(MESSAGES.COMPONENT_CREATED, (message) => this.handleComponentCreated(message));
    this._messageService.subscribe(MESSAGES.COMPONENT_UPDATED, (message) => this.handleComponentUpdated(message));
    this._components = {};
  }
  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  handleComponentCreated(message) {
    throw new Error('handleComponentCreated() called from base System class');
  }

  handleComponentUpdated(message) {
    throw Error('handleComponentCreated() called from base System class');
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Sends an event message to notify other systems that a property has been modified
   * @private
   * @param {object} component - the component that has been modified
   * event message
   * event type:
   * entity id:
   * property changed:
   * old value:
   * new value:
   */
  _raiseComponentUpdatedEvent(component) {
    const MESSAGE = {
      subject: MESSAGES.COMPONENT_UPDATED
    };

    this._messageService.publish(MESSAGE);
  }

  /**
   * Handles a property change event from another system
   * @private
   * @param {object} event - the property change event
   */
  _handlePropertyChangeEvent(event) {

  }

  static create(config) {
    return new System(config);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default System;

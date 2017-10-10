/**
 * Engine - Component Manager
 * ===
 *
 * @module componentManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import { MESSAGES } from './constants';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * ComponentManager
 * @class
 */
class ComponentManager {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @type {Logger}
   */
  _logger;

  /**
   * @type {MessageService}
   */
  _messageService;

  /**
   * Collection of component templates
   * @private
   * @type {object}
   */
  _templates;

  /**
   * Collection of components
   * @private
   * @type {Array}
   */
  _components;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * ComponentManager
   * @constructor
   * @param {object} config - configuration for the component manager
   */
  constructor(config) {
    this._logger = config.LOG_SERVICE.registerLogger(this.constructor.name);
    this._messageService = config.MESSAGE_SERVICE;
    this._messageService.subscribe(MESSAGES.CREATE_COMPONENT, (message) => this.createComponent(message));
    this._messageService.subscribe(MESSAGES.DESTROY_COMPONENT, (message) => this.destroyComponent(message));
    this._messageService.subscribe(MESSAGES.ENTITY_DESTROYED, (message) => this.destroyComponent(message));
    this._templates = config.templates;
    this._components = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Creates a new component
   * @param {object} message - component settings
   * id: entity id
   * type: constructor name
   * state:  object
   */
  createComponent(message) {
    const TEMPLATE = this._getTemplate(message.type);
    const COMPONENT = TEMPLATE.create({id: message.id, state: message.state});

    this._components.push(COMPONENT);
    this._messageService.publish({
      subject: MESSAGES.COMPONENT_CREATED,
      body: { type: message.type,
        component: COMPONENT }
    });
  }

  /**
   * Destroys the specified component
   * @param {object} message - the settings for the component to be destroyed
   * id: entity id
   * type: constructor name
   */
  destroyComponent(message) {
    this._messageService.publish(MESSAGES.COMPONENT_DESTROYED, {
      subject: MESSAGES.COMPONENT_DESTROYED,
      body: { id: 1, type: '' }
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _getTemplate(type) {
    return this._templates[type];
  }

  /**
   * Finds a component with the specified id
   * @param {string} id - the id of the component to be retrieved
   * @param {string} type - the type of component to be retrieved
   * @return {Component}
   */
  _getComponent(id , type) { // eslint-disable-line id-length
    const COMPONENT = this._components.find((component) => {
      const IS_ID = (component.id === id);
      const IS_TYPE = (component.type === type);

      if (IS_ID && IS_TYPE) {
        return component;
      }
      return null;
    });

    if (!COMPONENT) {
      throw new Error(`Component id ${id} not found`);
    }
    return COMPONENT;
  }

  _getComponentsForEntity(id) {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {object} config - configuration for the component manager
   * @return {ComponentManager}
   */
  static create(config) {
    return new ComponentManager(config);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ComponentManager;

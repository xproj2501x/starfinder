/**
 * Engine - Entity Manager
 * ===
 *
 * @module entityManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import { MESSAGES } from './constants';
import Entity from './entity';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * EntityManager
 * @class
 */
class EntityManager {

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
   * Collection of entity builders
   * @private
   * @type {object}
   */
  _assemblages;

  /**
   * Collection of entities
   * @private
   * @type {Array}
   */
  _entities;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////


  /**
   * EntityManager
   * @constructor
   * @param {object} config - configuration for the entity manager
   */
  constructor(config) {
    this._logger = config.LOG_SERVICE.registerLogger(this.constructor.name);
    this._messageService = config.MESSAGE_SERVICE;
    this._messageService.subscribe(MESSAGES.CREATE_ENTITY, (message) => this.createEntity(message));
    this._messageService.subscribe(MESSAGES.DESTROY_ENTITY, (message) => this.destroyEntity(message));
    this._messageService.subscribe(MESSAGES.COMPONENT_CREATED, (message) => this.attachComponentToEntity(message));
    this._messageService.subscribe(MESSAGES.COMPONENT_DESTROYED, (message) => this.detachComponentFromEntity(message));
    this._entities = [];
    this._assemblages = config.assemblages;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Creates a new entity
   * @param {object} message - the command message to create a new entity
   */
  createEntity(message) {
    const ASSEMBLAGE = this._assemblages[message.assemblage];
    const ENTITY = Entity.create();

    this._entities.push(ENTITY);
    ASSEMBLAGE.forEach((component) => {
      this._messageService.publish({
        subject: MESSAGES.CREATE_COMPONENT,
        body: {
          id: ENTITY.id,
          type: component,
          state: {}
        }
      });
    });

    this._messageService.publish({
      subject: MESSAGES.ENTITY_CREATED,
      body: { entity: ENTITY }
    });
  }

  /**
   * Destroys an entity
   * @param {object} message - the command message to destroy an entity
   * id: entity id
   */
  destroyEntity(message) {
    const ID = message.body.id;

    try {
      const ENTITY = this.findEntity(ID);
      const INDEX = this._entities.indexOf(ENTITY);

      this._entities.splice(INDEX, 1);
    } catch (err) {
      throw err;
    }
    this._messageService.publish({
      subject: MESSAGES.ENTITY_DESTROYED,
      body: { id: ID }
    });
  }

  /**
   * Attaches a component to the specified entity
   * @param {object} message - the settings for the component to be attached
   * id: entity id
   * type: component constructor
   * state: state object
   */
  attachComponentToEntity(message) {
    const ENTITY = this._getEntity(message.component.id);

    ENTITY.attachComponent(message.type, message.component);
  }

  /**
   * Detaches a component from the specified entity
   * @param {object} message - the settings for the component to be attached
   * id: entity id
   * type: component constructor
   */
  detachComponentFromEntity(message) {
    const ENTITY = this._getEntity(message.body.id);

    ENTITY.detachComponent(message.type);
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Finds an entity with the specified id
   * @param {string} id - The id of the entity to be retrieved
   * @return {Entity}
   */
  _getEntity(id) { // eslint-disable-line id-length
    const ENTITY = this._entities.find((entity) => {
      if (entity.id === id) {
        return entity;
      }
      return null;
    });

    if (!ENTITY) {
      throw new Error(`Entity id ${id} not found`);
    }
    return ENTITY;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {object} config - configuration for the entity manager
   * @return {EntityManager}
   */
  static create(config) {
    return new EntityManager(config);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default EntityManager;

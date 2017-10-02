/**
 * Engine - Constants
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

/**
 * Messages used by the engine
 * @enum {string}
 */
export const MESSAGES = {
  // COMMANDS
  CREATE_ENTITY: 'CREATE_ENTITY',
  DESTROY_ENTITY: 'DESTROY_ENTITY',
  CREATE_COMPONENT: 'CREATE_COMPONENT',
  DESTROY_COMPONENT: 'DESTROY_COMPONENT',
  LOAD_MODULE: 'LOAD_MODULE',
  UNLOAD_MODULE: 'UNLOAD_MODULE',

  // EVENTS
  ENTITY_CREATED: 'ENTITY_CREATED',
  ENTITY_DESTROYED: 'ENTITY_DESTROYED',
  COMPONENT_CREATED: 'COMPONENT_CREATED',
  COMPONENT_DESTROYED: 'COMPONENT_DESTROYED',
  COMPONENT_UPDATED: 'COMPONENT_UPDATED',
  MODULE_LOADED: 'MODULE_LOADED',
  MODULE_UNLOADED: 'MODULE_UNLOADED'
};
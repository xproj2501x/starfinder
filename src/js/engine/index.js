/**
 * Engine - Index
 * ===
 *
 * @module index
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import LogService from '../framework/services/log';
import MessageService from '../framework/services/message';
import Engine from './engine';
import EntityManager from './entity-manager';
import ComponentManager from './component-manager';
import SystemManager from './system-manager';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SERVICES = {
  MESSAGE_SERVICE: MessageService.create(),
  LOG_SERVICE: LogService.create()
};

////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////
/**
 *
 */
function buildEngine(config) {
  const CONFIG = Object.assign({}, SERVICES);
  const ENGINE = Engine.create(CONFIG);
  const ENTITY_MANAGER = EntityManager.create(Object.assign(CONFIG, {assemblages: config.ASSEMBLAGES}));
  const COMPONENT_MANAGER = ComponentManager.create(Object.assign(CONFIG, {templates: config.COMPONENTS}));
  const SYSTEM_MANAGER = SystemManager.create(Object.assign(CONFIG, {systems: config.SYSTEMS}));

  return ENGINE;
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default buildEngine;

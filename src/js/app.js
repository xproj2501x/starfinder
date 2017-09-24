/**
 * Starfinder - App
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import '../css/_site.scss';
import  * as CONSTANTS from './constants';
import CombatTracker from './views/combat-tracker';
import EntityModel from './models/entity-model';
import AbilitiesComponent from './components/abilities-component';

const COMBAT_TRACKER = new CombatTracker();
const ENTITY_MODEL = EntityModel.create();


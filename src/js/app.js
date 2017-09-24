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

const ABILITIES_COMPONENT = AbilitiesComponent.create({id: ENTITY_MODEL.id, state: {strength: 12, dexterity: 12}});

ENTITY_MODEL.attachComponent(ABILITIES_COMPONENT);
console.log(ABILITIES_COMPONENT.strength);
console.log(ABILITIES_COMPONENT.strengthModifier);



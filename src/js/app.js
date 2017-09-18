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
import Entity from './entity';
import Component from './component';

const COMBAT_TRACKER = new CombatTracker();
const CHARACTER = new Entity.create();
const NAME = Component.create({
  type: CONSTANTS.COMPONENT_TYPES.NAME,
  state: 'Character 1'
});
const STRENGTH = Component.create({
  type: CONSTANTS.COMPONENT_TYPES.STRENGTH,
  state: 10
});
const DEXTERITY = Component.create({
  type: CONSTANTS.COMPONENT_TYPES.DEXTERITY,
  state: 10
});
const CONSTITUTION = Component.create({
  type: CONSTANTS.COMPONENT_TYPES.CONSTITUTION,
  state: 10
});
const INTELLIGENCE = Component.create({
  type: CONSTANTS.COMPONENT_TYPES.INTELLIGENCE,
  state: 10
});
const WISDOM = Component.create({
  type: CONSTANTS.COMPONENT_TYPES.WISDOM,
  state: 10
});
const CHARISMA = Component.create({
  type: CONSTANTS.COMPONENT_TYPES.CHARISMA,
  state: 10
});
const KEY = [2, 1, 1, 1, 1, 1, 1];

CHARACTER.attachComponent(NAME);
CHARACTER.attachComponent(STRENGTH);
CHARACTER.attachComponent(DEXTERITY);
CHARACTER.attachComponent(CONSTITUTION);
CHARACTER.attachComponent(INTELLIGENCE);
CHARACTER.attachComponent(WISDOM);
CHARACTER.attachComponent(CHARISMA);
console.log(CHARACTER.unlock(KEY));

if ('1011' & '1011') {
  console.log('true');
}


/**
 * Starfinder - App
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import '../css/_site.scss';
import CombatTracker from './views/combat-tracker';
import Entity from './entities/entity';
import Component from './components/component';

const COMBAT_TRACKER = new CombatTracker();
const ENTITY = new Entity.create();
const COMPONENT_DATA = {
  id: ENTITY.id,
  type: 2,
  state: {
    foo: 'asdfasf',
    bar: 25
  }
};
const COMPONENT = Component.create(COMPONENT_DATA);

console.log(COMPONENT.state);



// (x * 2^n1) * (y * 2^n2) + z = 2400000



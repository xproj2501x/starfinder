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

const COMBAT_TRACKER = new CombatTracker();
const MAX = 2400000;

for (let idx = 1; idx < 39; idx++) {
  const POWER1 = Math.pow(2, idx);
  const REMAINDER1 = MAX % POWER1;

  for (let jdx = 39; jdx > 0; jdx-- ) {
    const POWER2 = Math.pow(2, jdx);
    const REMAINDER2 = REMAINDER1 % POWER2;

    if (REMAINDER2 > 0 ){
      console.log(`2 ^ ${idx}: ${POWER1} * 2 ^ ${jdx}: ${POWER2} = ${MAX - REMAINDER2} remainder: ${REMAINDER2}`);
    }
  }

}

function solve(size, iteration) {
    const POWER = Math.pow(2, iteration);
    const REMAINDER = size % POWER;
}
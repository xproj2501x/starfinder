/**
 * Starfinder - Constants
 * ===
 *
 */

import CombatTracker from './views/combat-tracker';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
export const DEBUG = (location.search === '?DEBUG');

export const MESSAGES = {
  PROPERTY_CHANGE: 'PROPERTY_CHANGE'
};

export const ROUTES = {
  ENCOUNTERS: {
    name: 'encounters',
    route: '/encounters',
    view: CombatTracker,
    template: 'html/encounters.html'
  }
};
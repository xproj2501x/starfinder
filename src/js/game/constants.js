/**
 * PROJECT - NAME
 * ===
 *
 * @module NAME
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import AbilityScoresComponent from './components/ability-scores-component';
import HealthComponent from './components/health-component';
import LevelComponent from './components/level-component';
import NameComponent from './components/name-component';
import RaceComponent from './components/race-component';
import CHARACTER_ASSEMBLAGE from './assemblages/character-assemblage';
import HealthSystem from './systems/health-system';
import AbilityScoresSystem from './systems/ability-scores-system';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
export const COMPONENTS = {
  abilityScores: AbilityScoresComponent,
  health: HealthComponent,
  level: LevelComponent,
  name: NameComponent,
  race: RaceComponent
};

export const ASSEMBLAGES = {
  character: CHARACTER_ASSEMBLAGE
};

export const SYSTEMS = [
  AbilityScoresSystem
];



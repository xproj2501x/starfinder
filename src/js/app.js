/**
 * Starfinder - App
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import '../css/_site.scss';
import * as CONSTANTS from './constants';
import CombatTracker from './views/combat-tracker';
import Framework from './framework/framework';
import Bind from './framework/view/bind';


const FRAMEWORK = Framework.create();
FRAMEWORK.configure(CONSTANTS.ROUTES);
/**
 * Starfinder - Inject
 * ===
 *
 * @module inject
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Container from './container';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const CONTAINER = Container.create();

////////////////////////////////////////////////////////////////////////////////
// Function
////////////////////////////////////////////////////////////////////////////////
function Inject(...dependencies) {
  return (target, key, descriptor) => {


  };
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Inject;

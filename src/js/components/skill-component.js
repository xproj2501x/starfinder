/**
 * Starfinder - Skill Component
 * ===
 *
 * @module skillComponent
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Component from './component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * SkillComponent
 * @class
 * @extends Component
 */
class SkillComponent extends Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * SkillComponent
   * @constructor
   * @param {int} id - the UUID of the parent entity
   * @param {string} type - the type of the component to be created
   * @param {object} state - the initial state of the component
   */
  constructor(id, type, state) { // eslint-disable-line id-length
    super(id, type, state);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @param {object} data - configuration for the component to be created
   * @return {SkillComponent}
   */
  static create(data) {
    if (data === null) {
      throw new Error('Component configuration missing');
    }
    return new SkillComponent(data.id, data.type, data.state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default SkillComponent;

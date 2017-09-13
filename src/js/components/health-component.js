/**
 * Starfinder - Health Component
 * ===
 *
 * @module healthComponent
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
 * HealthComponent
 * @class
 * @extends Component
 */
class HealthComponent extends Component {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Get _state.stamina
   * @return {{total: *, current}}
   */
  get stamina() {
    return {
      total: this._state.stamina.total,
      current: this._state.stamina.current
    };
  }

  /**
   * Get _state.hitPoints
   * @return {{total: *, current}}
   */
  get hitPoints() {
    return {
      total: this._state.hitPoints.total,
      current: this._state.hitPoints.current
    };
  }

  /**
   * Get _state.resolve
   * @return {{total: *, current}}
   */
  get resolve() {
    return {
      total: this._state.resolve.total,
      current: this._state.resolve.current
    };
  }

  /**
   * HealthComponent
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
   * @return {HealthComponent}
   */
  static create(data) {
    if (data === null) {
      throw new Error('Component configuration missing');
    }
    return new HealthComponent(data.id, data.type, data.state);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default HealthComponent;

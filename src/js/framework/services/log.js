/**
 * Starfinder - Log
 * ===
 *
 * @module log
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
let instance = null;

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * Log
 * @class
 */
class Log {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type {Array}
   */
  _log = [];

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * Log
   * @constructor
   * @return {Log}
   */
  constructor() {
    if (!instance) {
      instance = this; // eslint-disable-line consistent-this
    }
    return instance;
  }

  /**
   * Writes a message to the log
   * @param {object} message - the message to be written
   */
  write(message) {
    this._log.push(message);
    console.log(message);
  }
  ////////////////////////////////////////////////////////////////////////////////
  // Public Methods
  ////////////////////////////////////////////////////////////////////////////////

  /**
   * Clears the log
   */
  clear() {
    this._log = [];
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Private Methods
  ////////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Log;

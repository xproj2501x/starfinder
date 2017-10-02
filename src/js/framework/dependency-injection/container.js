/**
 * Framework - Container
 * ===
 *
 * @module contanier
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
 * Container
 * @class
 */
class Container {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _dependencies;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Container
   * @constructor
   */
  constructor() {
    if (!instance) {
      this._dependencies = [];
      instance = this; // eslint-disable-line consistent-this
    }
    return instance;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Registers a class with the container
   * @param {class} target - the class to be registered
   */
  register(target) {
    const INDEX = this._dependencies.indexOf(target);

    if (INDEX !== -1) {
      throw new Error(`Class: ${target} is already registered`);
    }
    this._dependencies.push(target);
  }

  /**
   * Instantiates an instance of the specified class and resolves any dependencies
   * @param {class} target - the class to be resolved
   */
  resolve(target) {
    const CONSTRUCTOR = this._findClass(target);
    const FN_ARGS = /^class|function\s*[^\(]*\(\s*([^\)]*)\)/m;
    const TEXT = target.toString();

    console.log(TEXT);
    console.log('text:');
    console.log(TEXT.match(FN_ARGS)[1].split(', '));
    // if (TEXT.match(FN_ARGS)[1] !== '') {
    //   let deps = [];
    //   let args = text.match(FN_ARGS)[1].split(', ');
    //   for (let idx = 0; idx < args.length; idx++) {
    //     deps.push(this.resolve(args[idx]));
    //   }
    //   return new fn(...deps);
    // } else {
    //   return new fn();
    // }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Finds the specified class in the class collection
   * @private
   * @param {string} name - the name of the class
   * @return {*}
   */
  _findClass(name) {
    const INDEX = this._dependencies.indexOf(name);

    if (INDEX === -1) {
      throw new Error(`Class: ${name} has not been registered with the container`);
    }
    return this._dependencies[INDEX];
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {Container}
   */
  static create() {
    return new Container();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Container;
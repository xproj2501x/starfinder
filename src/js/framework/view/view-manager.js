/**
 * Starfinder - View Manager
 * ===
 *
 * @module viewManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import AjaxService from '../services/ajax-service';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
let instance = null;

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * ViewManager
 * @class
 */
class ViewManager {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _root;
  _ajaxService;
  _templates;
  _views;
  _bindings;

  _active;
  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * ViewManager
   * @constructor
   */
  constructor() {
    if (!instance) {
      this._ajaxService = AjaxService.create();
      this._views = {};
      this._templates = {};
      this._bindings = {};
      this._root = document.querySelectorAll('[data-bind-view]')[0];
      instance = this;
    }
    return instance;
    // 1. Get template, check cache or load via ajax
    // 2. Convert to document and append
    // 3. Apply data bindings
    // 2. Parse for custom tags
    // *
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  loadView(name) {
    const VIEW = this._views[name];

    this._loadTemplate(VIEW.template)
      .then((template) => {
        const PARSER = new DOMParser();
        const DOCUMENT = PARSER.parseFromString(template, 'text/html');
        const TEMPLATE = DOCUMENT.body.firstChild;

        this._root.appendChild(TEMPLATE);

        const CLASS = new VIEW.view();
        const BINDING = this._bindings[CLASS.constructor.name];

        this._registerBinding(BINDING);
      });
  }

  unloadView() {

  }

  addView(view) {
    this._views[view.name] = view;
  }

  addBinding(target, binding) {
    this._bindings[target] = binding;
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _loadTemplate(template) {
    if (!this._templates[template]) {
      return this._ajaxService.get({
        url: template
      }).then((response) => {
        const TEMPLATE = response.responseText;
        this._templates[template] = TEMPLATE;
        return TEMPLATE;
      }).catch((err) => {
        console.log('error');
        console.log(err);
      });
    }
    return this._templates[name];
  }

  _registerBinding(binding) {
    const ELEMENTS = document.querySelectorAll('[data-bind]');

    for (let idx = 0; idx < ELEMENTS.length; idx++) {
      console.log(ELEMENTS[idx].getAttribute('data-bind'));
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @returns {ViewManager}
   */
  static create() {
    return new ViewManager();
  }

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ViewManager;

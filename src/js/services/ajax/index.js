/**
 * Starfinder - Ajax Service
 * ===
 *
 * @module ajaxService
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
/**
 * API Methods
 * @enum {string}
 */
const METHOD = {
  DELETE: 'DELETE',
  GET: 'GET',
  HEAD: 'HEAD',
  PATCH: 'PATCH',
  POST: 'POST',
  PUT: 'PUT'
};

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * AjaxService
 * @class
 */
class AjaxService {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * AjaxService
   * @constructor
   */
  constructor() {

  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Sends a delete request to the specified resource
   * @param {object} options - options for the request
   * @return {Promise}
   */
  delete(options) {
    return this._send(METHOD.DELETE, options);
  }

  /**
   * Sends a get request to the specified resource
   * @param {object} options - options for the request
   * @return {Promise}
   */
  get(options) {
    return this._send(METHOD.GET, options);
  }

  /**
   * Sends a head request to the specified resource
   * @param {object} options - options for the request
   * @return {Promise}
   */
  head(options) {
    return this._send(METHOD.HEAD, options);
  }

  /**
   * Sends a patch request to the specified resource
   * @param {object} options - options for the request
   * @return {Promise}
   */
  patch(options) {
    return this._send(METHOD.PATCH, options);
  }

  /**
   * Sends a post request to the specified resource
   * @param { object } options - options for the request
   * @return {Promise}
   */
  post(options) {
    return this._send(METHOD.POST, options);
  }

  /**
   * Sends a put request to the specified resource
   * @param { object } options - options for the request
   * @return {Promise}
   */
  put(options) {
    return this._send(METHOD.PUT, options);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Sends a request to the specified resource
   * @param {string} method - the request method
   * @param {object} options - options for the request
   * @return {Promise}
   */
  _send(method, options) {
    return new Promise((resolve, reject) => {
      const XHR = new XMLHttpRequest();

      XHR.open(method, options.url);
      for (const HEADER in options.headers) {
        if (options.headers.hasOwnProperty(HEADER)) {
          const VALUE = options.headers[HEADER];

          XHR.setRequestHeader(HEADER, VALUE);
        }
      }
      XHR.onload = function() {
        if (this.status >= 200 && this.status < 300) {
          resolve(XHR);
        } else {
          reject({
            status: this.status,
            statusText: XHR.statusText
          });
        }
      };
      XHR.onerror = function() {
        reject({
          status: this.status,
          statusText: XHR.statusText
        });
      };
      XHR.send(options.body);
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @return {AjaxService}
   */
  static create() {
    return new AjaxService();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AjaxService;

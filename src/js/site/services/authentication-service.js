/**
 * Starfinder - Authentication Service
 * ===
 *
 * @module authenticationService
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import { API_HOST, API_RESOURCES } from '../../constants';
import AjaxService from '../../services/ajax';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const API = 'http://localhost:3099';
const RESOURCE = '/token';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class AuthenticationService {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _ajaxService;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor() {
    this._ajaxService = new AjaxService();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  login(credentials) {
    let options = {
      url: API_HOST + API_RESOURCES.TOKEN,
      headers: {
        'username': credentials.username,
        'password': credentials.password
      }
    };

    return this._ajaxService.post(options)
      .then((data) => {
        console.log(data);
        console.log(data.responseText);
      }).catch((err) => {
        console.log(err);
      });
  }

  logout(token) {
    let options = {
      url: API + RESOURCE,
      headers: {
        Authorization: 'Bearer ' + token
      }
    }

    return this._ajaxService.delete(options)
      .then((data) => {

      }).catch((err) => {

      });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AuthenticationService;
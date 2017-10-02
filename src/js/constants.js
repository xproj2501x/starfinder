/**
 * Starfinder - Constants
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
export const NODE_ENV = {
  PRODUCTION: 'PRODUCTION',
  DEVELOPMENT: 'DEVELOPMENT',
  STAGING: 'STAGING',
  TEST: 'TEST'
};

export const API_HOST = 'http://localhost:3099/data';

/**
 * URI for API endpoints
 * @enum {string}
 */
export const API_ENDPOINTS = {
  ADVENTURES: '/adventures',
  ACCOUNTS: '/accounts',
  CAMPAIGNS: '/campaigns',
  CHARACTERS: '/characters',
  ENCOUNTERS: '/encounters',
  REFERENCE: '/reference',
  STARSHIPS: '/starships',
  TOKEN: '/token',

};

/**
 * Allowed methods for API queries
 * @enum {string}
 */
export const API_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
};

/**
 * Response codes for API queries
 * @enum {string}
 */
export const API_RESPONSE_CODES = {
  OKAY: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504
};

export const DEBUG = (location.search === '?DEBUG');

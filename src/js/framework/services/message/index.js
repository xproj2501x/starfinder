/**
 * Starfinder - Message Service
 * ===
 *
 * @module messageService
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
 * MessageService
 * @class
 */
class MessageService {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * A collection of callback function subscriptions
   * @private
   * @type {object}
   */
  _subscribers;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  /**
   * MessageService
   * @constructor
   */
  constructor() {
    if (!instance) {
      instance = this; // eslint-disable-line consistent-this
      this._subscribers = {};
    }
    return instance;
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Public Methods
  ////////////////////////////////////////////////////////////////////////////////
  /**
   * Adds a subscriber for the specified message type
   * @param {string} subject - the message type
   * @param {function} subscriber - the subscriber
   */
  subscribe(subject, subscriber) {
    if (!(this._subscribers[subject])) {
      this._subscribers[subject] = [];
    }
    const SUBSCRIBERS = this._subscribers[subject];

    SUBSCRIBERS.push(subscriber);
  }

  /**
   * Removes a subscriber for the message type
   * @param {string} subject - the subject of the message
   * @param {object} subscriber - the callback function for the subscriber
   */
  unsubscribe(subject, subscriber) {
    if (subject in this._subscribers) {
      const SUBSCRIBERS = this._subscribers[subject];
      const INDEX = SUBSCRIBERS.indexOf(subscriber);
      const VALUE = -1;

      if (INDEX > VALUE) {
        SUBSCRIBERS.slice(INDEX, 0);
      }
    }
  }

  /**
   * Publishes a message to all subscribers
   * @param {object} message - the message to be sent
   */
  publish(message) {
    const SUBSCRIBERS = this._subscribers[message.subject];

    SUBSCRIBERS.forEach((subscriber) => {
      subscriber(message.body);
    });
  }

  sendMessage(sender, recipient, subject, body) {

  }
  ////////////////////////////////////////////////////////////////////////////////
  // Private Methods
  ////////////////////////////////////////////////////////////////////////////////
  /**
   * Verifies that the subscriber exists for the message
   * @private
   * @param {string} subject - the subject of the message
   * @param {object} subscriber - the callback subscriber for teh message
   * @return {int}
   */
  _hasSubscriber(subject, subscriber) {
    const SUBSCRIBERS = this._subscribers[subject];

    return SUBSCRIBERS.indexOf(subscriber);
  }

  ////////////////////////////////////////////////////////////////////////////////
  // Static Methods
  ////////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @static
   * @return {MessageService}
   */
  static create() {
    return new MessageService();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default MessageService;

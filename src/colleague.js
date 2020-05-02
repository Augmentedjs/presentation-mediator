import { View } from "presentation-view";

/**
 * <em>Colleague View</em> &mdash; The 'child' view.<br/>
 * The Colleague communicates with other Colleagues through its Mediator.<br/>
 * Supported options:</br/>
 * <ul>
 * <li>mediator - A mediator for this view</li>
 * </ul>
 * @param {object} options Options to pass
 * @extends View
 */
class Colleague extends View {
  constructor(options) {
    super(options);
    if (options && options.mediator) {
      this._mediator = mediator;
    } else {
      this._mediator = null;
    }
  };

  /**
   * Send a message to the mediator's queue
   * @param {string} message Message to send
   * @param {object} data Data to send with message
   * @returns {string} Message sent
   */
  sendMessage(message, data) {
    if (this._mediator) {
      this._mediator.trigger(message, data);
    } else {
      console.warn(`sendMessage: No mediator is available for ${(this.name) ? this.name : "-unnamed-"}, talking to myself.`);
    }
    return message;
  };

  /**
   * Set the mediator to this colleague
   * @param {Mediator} mediator The mediator
   * @deprecated set with: this.mediator = ...
   * @returns {Mediator} The mediator
   */
  setMediatorMessageQueue(mediator) {
    return this._setMediatorMessageQueue(mediator);
  };

  _setMediatorMessageQueue(mediator) {
    //console.debug(`setMediatorMessageQueue: ${this.name} has a mediator? ${(this._mediator !== null)} and a mediator was passed? ${(mediator !== null)}`);
    if (mediator) {
      if (this._mediator) {
        // already registered, send a dismiss message
        //console.debug(`${this.name} already registered, send a dismiss message.`);
        this._mediator._dismissMe(this);
      }
      this._mediator = mediator;
    }
    return mediator;
  };

  /**
   * Remove the mediator from this colleague
   * @returns {boolean} true
   */
  removeMediatorMessageQueue() {
    this._mediator = null;
    return true;
  };

  /**
   * Property of the mediator
   * @property {Mediator} mediator
   */
  get mediator() {
    return this._mediator;
  };

  set mediator(mediator) {
    return _setMediatorMessageQueue(mediator);
  };
};

export default Colleague;

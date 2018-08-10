!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("augmentedjs-next"),require("presentation-view")):"function"==typeof define&&define.amd?define("presentation-mediator",["augmentedjs-next","presentation-view"],t):"object"==typeof exports?exports["presentation-mediator"]=t(require("augmentedjs-next"),require("presentation-view")):e["presentation-mediator"]=t(e.Augmented,e["presentation-view"])}(this,function(e,t){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,n),s.l=!0,s.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(i,s,function(t){return e[t]}.bind(null,s));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4);t.default=class extends i.View{constructor(e){super(e),e&&e.mediator?this._mediator=mediator:this._mediator=null}sendMessage(e,t){this._mediator?this._mediator.trigger(e,t):console.warn(`sendMessage: No mediator is available for ${this.name}, talking to myself.`)}setMediatorMessageQueue(e){e&&(this._mediator&&this._mediator._dismissMe(this),this._mediator=e)}removeMediatorMessageQueue(){this._mediator=null}get mediator(){return this._mediator}}},function(e,t,n){"use strict";var i=r(n(2)),s=r(n(0));function r(e){return e&&e.__esModule?e:{default:e}}e.exports.Mediator=i.default,e.exports.Colleague=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(3)),s=function(e){return e&&e.__esModule?e:{default:e}}(n(0));const r="augmentedChannel",u="augmentedIdentifier";t.default=class extends s.default{constructor(e){super(e),this._defaultChannel=r,this._defaultIdentifier=u,this._channels={},this._colleagueMap={},this._subscriptions={}}_dismissMe(e){if(e instanceof s.default){let t=this._colleagueMap[e],n=this._channels[t];this.unsubscribe(t,n.fn,e,n.identifier)}}delegateEvents(e){super.delegateEvents(e),this.subscriptions={}}undelegateEvents(e){super.undelegateEvents(e),this.unsetSubscriptions()}get subscriptions(){return this._subscriptions}set subscriptions(e){if(e&&i.Utility.extend(this._subscriptions||{},e),!(e=e||this._subscriptions)||0===e.length)return;this.unsetSubscriptions(e);let t=0,n=e.length;for(t=0;t<n;t++){let n=e[t],i=!1;n.$once&&(n=n.$once,i=!0),"string"==typeof n&&(n=this[n]),this.subscribe(n.channel,n,this,i)}}unsetSubscriptions(e){if(!(e=e||this._subscriptions)||0===e.length)return;let t=0;const n=e.length;for(t=0;t<n;t++){let n=e[t],i=!1;n.$once&&(n=n.$once,i=!0),"string"==typeof n&&(n=this[n]),this.unsubscribe(n.channel,n.$once||n,this)}}observeColleague(e,t,n,i){e instanceof s.default&&(n||(n=this._defaultChannel),e.setMediatorMessageQueue(this),this.subscribe(n,t,e,!1,i||this._defaultIdentifier))}observeColleagueAndTrigger(e,t,n){this.observeColleague(e,(...n)=>{e.trigger(t,n[0])},t,n||this._defaultIdentifier)}dismissColleague(e,t,n,i){e instanceof s.default&&(n||(n=this._defaultChannel),e.removeMediatorMessageQueue(),this.unsubscribe(n,t,e,i))}dismissColleagueTrigger(e,t,n){let i=n||this._defaultIdentifier;this.dismissColleague(e,(...t)=>{e.trigger(t[0],t[1])},t,i)}subscribe(e,t,n,i,s){this._channels[e]||(this._channels[e]=[]);const r={fn:t,context:n||this,once:i,identifier:s||this._defaultIdentifier};this._channels[e].push(r),this._colleagueMap[n]=e,this.on(e,this.publish,n)}publish(e,...t){if(!e||!this._channels[e])return;let n,i=[].slice.call(t,1),s=0;const r=this._channels[e].length;for(s=0;s<r;s++)(n=this._channels[e][s])&&(n.fn&&n.fn.apply(n.context,i),n.once&&(this.unsubscribe(e,n.fn,n.context,n.identifier),s--))}unsubscribe(e,t,n,i){if(!this._channels[e])return;let s,r=i||this._defaultIdentifier,u=0;for(u=0;u<this._channels[e].length;u++)(s=this._channels[e][u])&&s.identifier===r&&s.context===n&&(this._channels[e].splice(u,1),u--,delete this._colleagueMap[s.context])}subscribeOnce(e,t,n,i){this.subscribe(e,t,n,!0,i)}getColleagues(e){const t=this.getChannel(e);return t?t.context:null}get channels(){return this._channels}getChannel(e){return e||(e=this._defaultChannel),this._channels[e]?this._channels[e]:null}get defaultChannel(){return this.getChannel(this._defaultChannel)}get defaultIdentifier(){return this._defaultIdentifier}}},function(t,n){t.exports=e},function(e,n){e.exports=t}])});
//# sourceMappingURL=presentation-mediator.js.map
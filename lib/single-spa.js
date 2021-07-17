(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.singleSpa = factory());
}(this, (function () { 'use strict';

  function registerApp() {
    console.log('注册App');
  }

  function start() {
    console.log('start micro iframe');
  }

  var main = {
    registerApp,
    start,
  };

  return main;

})));
//# sourceMappingURL=single-spa.js.map

!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="js/",t(t.s=4)}([function(e,t,n){for(var r=document.querySelectorAll("[data-module]"),o=0;o<r.length;o++){var u=r[o],a=u.getAttribute("data-module");new(0,n(3)("./"+a).default)(u)}},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(t){r(this,e),this.el=t,console.log(t.textContent,"- From the example module")};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0);n.n(r);console.log("app.js has loaded!")},function(e,t,n){function r(e){return n(o(e))}function o(e){var t=u[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var u={"./example":1,"./example.js":1,"./index":0,"./index.js":0};r.keys=function(){return Object.keys(u)},r.resolve=o,e.exports=r,r.id=3},function(e,t,n){e.exports=n(2)}]);
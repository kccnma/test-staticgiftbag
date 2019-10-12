// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../node_modules/lax.js/lib/lax.min.js":[function(require,module,exports) {
"use strict";function _slicedToArray(t,a){return _arrayWithHoles(t)||_iterableToArrayLimit(t,a)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(t,a){var n=[],e=!0,r=!1,o=void 0;try{for(var l,i=t[Symbol.iterator]();!(e=(l=i.next()).done)&&(n.push(l.value),!a||n.length!==a);e=!0);}catch(t){r=!0,o=t}finally{try{e||null==i.return||i.return()}finally{if(r)throw o}}return n}function _arrayWithHoles(t){if(Array.isArray(t))return t}!function(){var lax=function(){for(var lax={elements:[]},lastY=0,currentBreakpoint="default",breakpointsSeparator="_",transformFns={"data-lax-opacity":function(t,a){t.opacity=a},"data-lax-translate":function(t,a){t.transform+=" translate(".concat(a,"px, ").concat(a,"px)")},"data-lax-translate-x":function(t,a){t.transform+=" translateX(".concat(a,"px)")},"data-lax-translate-y":function(t,a){t.transform+=" translateY(".concat(a,"px)")},"data-lax-scale":function(t,a){t.transform+=" scale(".concat(a,")")},"data-lax-scale-x":function(t,a){t.transform+=" scaleX(".concat(a,")")},"data-lax-scale-y":function(t,a){t.transform+=" scaleY(".concat(a,")")},"data-lax-skew":function(t,a){t.transform+=" skew(".concat(a,"deg, ").concat(a,"deg)")},"data-lax-skew-x":function(t,a){t.transform+=" skewX(".concat(a,"deg)")},"data-lax-skew-y":function(t,a){t.transform+=" skewY(".concat(a,"deg)")},"data-lax-rotate":function(t,a){t.transform+=" rotate(".concat(a,"deg)")},"data-lax-rotate-x":function(t,a){t.transform+=" rotateX(".concat(a,"deg)")},"data-lax-rotate-y":function(t,a){t.transform+=" rotateY(".concat(a,"deg)")},"data-lax-brightness":function(t,a){t.filter+=" brightness(".concat(a,"%)")},"data-lax-contrast":function(t,a){t.filter+=" contrast(".concat(a,"%)")},"data-lax-hue-rotate":function(t,a){t.filter+=" hue-rotate(".concat(a,"deg)")},"data-lax-blur":function(t,a){t.filter+=" blur(".concat(a,"px)")},"data-lax-invert":function(t,a){t.filter+="  invert(".concat(a,"%)")},"data-lax-saturate":function(t,a){t.filter+="  saturate(".concat(a,"%)")},"data-lax-grayscale":function(t,a){t.filter+="  grayscale(".concat(a,"%)")},"data-lax-bg-pos":function(t,a){t.backgroundPosition="".concat(a,"px ").concat(a,"px")},"data-lax-bg-pos-x":function(t,a){t.backgroundPositionX="".concat(a,"px")},"data-lax-bg-pos-y":function(t,a){t.backgroundPositionY="".concat(a,"px")}},_crazy="",i=0;i<20;i++)_crazy+=" "+5*i+" "+47*i%360+", ";function intrp(t,a){for(var n=0;t[n][0]<=a&&void 0!==t[n+1];)n+=1;var e=t[n][0],r=void 0===t[n-1]?e:t[n-1][0],o=t[n][1],l=void 0===t[n-1]?o:t[n-1][1];return Math.min(Math.max((a-r)/(e-r),0),1)*(o-l)+l}function fnOrVal(s){return"("===s[0]?eval(s):parseFloat(s)}return lax.presets={linger:function(t){return{"data-lax-translate-y":"(vh*0.7) 0, 0 200, -500 0"}},lazy:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-y":"(vh) 0, (-elh) ".concat(t)}},eager:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-y":"(vh) 0, (-elh) -".concat(t)}},slalom:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:50;return{"data-lax-translate-x":"vh ".concat(t,", (vh*0.8) ").concat(-t,", (vh*0.6) ").concat(t,", (vh*0.4) ").concat(-t,", (vh*0.2) ").concat(t,", (vh*0) ").concat(-t,", (-elh) ").concat(t)}},crazy:function(t){return{"data-lax-hue-rotate":"".concat(_crazy," | loop=20")}},spin:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"(vh) 0, (-elh) ".concat(t)}},spinRev:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"(vh) 0, (-elh) ".concat(-t)}},spinIn:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"vh ".concat(t,", (vh*0.5) 0")}},spinOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:360;return{"data-lax-rotate":"(vh*0.5) 0, -elh ".concat(t)}},blurInOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:40;return{"data-lax-blur":"(vh) ".concat(t,", (vh*0.8) 0, (vh*0.2) 0, 0 ").concat(t)}},blurIn:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:40;return{"data-lax-blur":"(vh) ".concat(t,", (vh*0.7) 0")}},blurOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:40;return{"data-lax-blur":"(vh*0.3) 0, 0 ".concat(t)}},fadeInOut:function(){return{"data-lax-opacity":"(vh) 0, (vh*0.8) 1, (vh*0.2) 1, 0 0"}},fadeIn:function(){return{"data-lax-opacity":"(vh) 0, (vh*0.7) 1"}},fadeOut:function(){return{"data-lax-opacity":"(vh*0.3) 1, 0 0"}},driftLeft:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-x":"vh ".concat(t,", -elh ").concat(-t)}},driftRight:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:100;return{"data-lax-translate-x":"vh ".concat(-t,", -elh ").concat(t)}},leftToRight:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;return{"data-lax-translate-x":"vh 0, -elh (vw*".concat(t,")")}},rightToLeft:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:1;return{"data-lax-translate-x":"vh 0, -elh (vw*".concat(-t,")")}},zoomInOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:.2;return{"data-lax-scale":"(vh) ".concat(t,", (vh*0.8) 1, (vh*0.2) 1, -elh ").concat(t)}},zoomIn:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:.2;return{"data-lax-scale":"(vh) ".concat(t,", (vh*0.7) 1")}},zoomOut:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:.2;return{"data-lax-scale":"(vh*0.3) 1, -elh ".concat(t)}},speedy:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:30;return{"data-lax-skew-x":"(vh) ".concat(t,", -elh ").concat(-t)}},swing:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:30;return{"data-lax-skew-y":"(vh) ".concat(t,", -elh ").concat(-t)}}},lax.addPreset=function(t,a){lax.presets[t]=a},lax.setup=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};lax.breakpoints=t.breakpoints||{},lax.selector=t.selector||".lax",lax.populateElements()},lax.removeElement=function(a){var t=lax.elements.findIndex(function(t){return t.el=a});-1<t&&lax.elements.splice(t,1)},lax.createLaxObject=function(t){return{el:t,originalStyle:{transform:t.style.transform,filter:t.style.filter},transforms:{}}},lax.calcTransforms=function(l){for(var i=l.el,e=[],t=0;t<i.attributes.length;t++){var a=i.attributes[t];-1<a.name.indexOf("data-lax-preset")&&e.push(a)}for(var n=function(t){var a=e[t],n=a.name.split(breakpointsSeparator),o=n[1]?"".concat(breakpointsSeparator).concat(n[1]):"";a.value.split(" ").forEach(function(t){var a=t.split("-"),n=lax.presets[a[0]];if(n){var e=n(a[1]);for(var r in e)i.setAttribute("".concat(r).concat(o),e[r])}else console.log("lax error: preset ".concat(a[0]," is not defined"))}),i.setAttribute("data-lax-anchor","self"),i.attributes.removeNamedItem(a.name)},r=0;r<e.length;r++)n(r);if(!(i.attributes["data-lax-use-gpu"]&&"false"===i.attributes["data-lax-use-gpu"].value)&&(i.style["backface-visibility"]="hidden",i.style["-webkit-backface-visibility"]="hidden"),i.attributes["data-lax-use-gpu"]&&i.attributes.removeNamedItem("data-lax-use-gpu"),l.optimise=!1,i.attributes["data-lax-optimize"]&&"true"===i.attributes["data-lax-optimize"].value){l.optimise=!0;var o=i.getBoundingClientRect();i.setAttribute("data-lax-opacity","".concat(-o.height-1," 0, ").concat(-o.height," 1, ").concat(window.innerHeight," 1, ").concat(window.innerHeight+1," 0")),i.attributes.removeNamedItem("data-lax-optimize")}for(var c=0;c<i.attributes.length;c++){var s=i.attributes[c];if(!(s.name.indexOf("data-lax")<0)){var u=s.name.split(breakpointsSeparator),f=u[0].split("-"),d=u[1]||"default";if("lax"===f[1])if("data-lax-anchor"===s.name){l["data-lax-anchor"]="self"===s.value?i:document.querySelector(s.value);var v=l["data-lax-anchor"].getBoundingClientRect();l.anchorTop=Math.floor(v.top)+window.scrollY}else!function(){var t=_slicedToArray(s.value.replace(/vw/g,window.innerWidth).replace(/vh/g,window.innerHeight).replace(/elh/g,i.clientHeight).replace(/elw/g,i.clientWidth).replace(/\s+/g," ").split("|"),2),a=t[0],n=t[1],r={};n&&n.split(" ").forEach(function(t){var a=_slicedToArray(t.split("="),2),n=a[0],e=a[1];r[n]=n&&fnOrVal(e)});var e=u[0],o=a.split(",").map(function(t){return t.trim().split(" ").map(fnOrVal)}).sort(function(t,a){return t[0]-a[0]});l.transforms[e]||(l.transforms[e]={}),l.transforms[e][d]={valueMap:o,options:r}}()}}var x=i.attributes["data-lax-sprite-data"]&&i.attributes["data-lax-sprite-data"].value;if(x){l.spriteData=x.split(",").map(function(t){return parseInt(t)}),i.style.height=l.spriteData[1]+"px",i.style.width=l.spriteData[0]+"px";var p=i.attributes["data-lax-sprite-image"]&&i.attributes["data-lax-sprite-image"].value;p&&(i.style.backgroundImage="url(".concat(p,")"))}return l},lax.addElement=function(t){var a=lax.calcTransforms(lax.createLaxObject(t));lax.elements.push(a),lax.updateElement(a)},lax.populateElements=function(){lax.elements=[],document.querySelectorAll(lax.selector).forEach(lax.addElement),currentBreakpoint=lax.getCurrentBreakPoint()},lax.updateElements=function(){lax.elements.forEach(function(t){lax.calcTransforms(t),lax.updateElement(t)}),currentBreakpoint=lax.getCurrentBreakPoint()},lax.getCurrentBreakPoint=function(){var t="default",a=window.innerWidth;for(var n in lax.breakpoints){if(!(parseFloat(lax.breakpoints[n])<=a))break;t=n}return t},lax.updateElement=function(t){var a=t.originalStyle,n=t.anchorTop,e=t.transforms,r=t.spriteData,o=t.el,l=n?n-lastY:lastY,i={transform:a.transform,filter:a.filter};for(var c in e){var s=e[c][currentBreakpoint]||e[c].default;if(s){var u=l;s.options.offset&&(u+=s.options.offset),s.options.speed&&(u*=s.options.speed),s.options.loop&&(u%=s.options.loop);var f=transformFns[c],d=intrp(s.valueMap,u);f&&f(i,d)}}if(r){var v=_slicedToArray(r,5),x=v[0],p=v[1],h=v[2],m=v[3],g=v[4],b=Math.floor(lastY/g)%h,y=b%m,k=Math.floor(b/m);i.backgroundPosition="-".concat(y*x,"px -").concat(k*p,"px")}if(0===i.opacity)o.style.opacity=0;else for(var w in i)o.style[w]=i[w]},lax.update=function(t){lastY!==t&&(lastY=t,lax.elements.forEach(lax.updateElement))},lax}();"undefined"!=typeof module&&void 0!==module.exports?module.exports=lax:window.lax=lax}();
},{}],"../js/goodies.js":[function(require,module,exports) {
"use strict";

var _lax = _interopRequireDefault(require("lax.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

function initLax() {
  _lax.default.setup();

  var updateLax = function updateLax() {
    _lax.default.update(window.scrollY);

    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
}

window.addEventListener("load", initLax()); // EVENT-GROUP

function useEventGroup() {
  var useEvents = document.querySelectorAll(".use-event");
  useEvents.forEach(function (event) {
    var listener = event.getAttribute("data-event");
    var setElement = event.getAttribute("data-event-element");
    var setClass = event.getAttribute("data-event-add");
    event.addEventListener(listener, function () {
      var elements = document.querySelectorAll(".".concat(setElement));
      elements.forEach(function (element) {
        element.classList.toggle(setClass);
        console.log(element, element.classList);
      });
    });
  });
}

useEventGroup(); // WIDOW SLAYER

function widowSlayer() {
  var pTag = document.querySelectorAll("p");
  pTag.forEach(function (tag) {
    // 1. Split all the words from the p tag from anytime there's a space
    var words = tag.innerHTML.split(" "); // 2. Find the last space and insert a &nbsp; in it's place

    var lastWordsList = words.slice(-1) && words.splice(-2); // 3. Join the last two togehter with a &nbsp;

    tag.innerHTML = words.join(" ") + " " + lastWordsList.join("&nbsp;");
  });
}

widowSlayer(); // PARALAX PG MOUSE
//? When we move the mouse, we want the items to follow it
//! 1. Add in the '.pg-mouse' on the wrapper div
//! 2. Add in '[data-pg-speed]' to all items that you wish to have parallax
//todo positive go in the direction of the scroll and negative go opposite
//todo the higher the number the faster the speed of the animation

function runParallaxPG() {
  // HTML SETUP
  var pgMouse = document.querySelectorAll(".pg-mouse"); // startingPos SETUP

  var startingPos = {
    xPos: {
      begin: 0,
      end: window.innerWidth,
      position: 0
    },
    yPos: {
      begin: 0,
      end: window.innerHeight,
      position: 0
    }
  };
  var startingXPosRange = startingPos.xPos.end - startingPos.xPos.begin;
  var startingYPosRange = startingPos.yPos.end - startingPos.yPos.begin; // itemPosition SETUP

  var itemPosition = {
    x: {
      begin: -150,
      end: 150,
      position: 0
    },
    y: {
      begin: -150,
      end: 150,
      position: 0
    }
  };
  var xRange = itemPosition.x.end - itemPosition.x.begin;
  var yRange = itemPosition.y.end - itemPosition.y.begin;

  var startPgMouse = function startPgMouse(event) {
    // Mouse x
    startingPos.xPos.position = event.clientX;
    startingPos.xPos.fraction = (startingPos.xPos.position - startingPos.xPos.begin) / startingXPosRange; // Mouse y

    startingPos.yPos.position = event.clientY;
    startingPos.yPos.fraction = (startingPos.yPos.position - startingPos.yPos.begin) / startingYPosRange; // itemPosition X
    // The .end - will make it move inverse of the mouse

    itemPosition.x.position = itemPosition.x.end - startingPos.xPos.fraction * xRange; // itemPosition Y

    itemPosition.y.position = itemPosition.y.end - startingPos.yPos.fraction * yRange; //itemPosition to HTML

    pgMouse.forEach(function (pg) {
      var tags = pg.querySelectorAll("[data-pg-speed]");
      tags.forEach(function (tag) {
        var pgSpeed = parseFloat(tag.getAttribute("data-pg-speed"));
        var newItemPosition = {
          x: itemPosition.x.position - itemPosition.x.position * pgSpeed,
          y: itemPosition.y.position - itemPosition.y.position * pgSpeed,
          zIndex: 10000 - 10000 * pgSpeed
        };
        tag.style.zIndex = newItemPosition.zIndex;
        tag.style.transform = "translate(".concat(newItemPosition.x, "px, ").concat(newItemPosition.y, "px");
        tag.style.transition = "transform  ease";
      });
    });
  };

  var windowResize = function windowResize() {
    // This is the X position
    startingPos.xPos.end = window.innerWidth;
    startingXPosRange = (_readOnlyError("startingXPosRange"), startingPos.xPos.end - startingPos.xPos.begin); // This is the Y position

    startingPos.yPos.end = window.innerHeight;
    startingYPosRange = (_readOnlyError("startingYPosRange"), startingPos.yPos.end - startingPos.yPos.begin);
  }; //todo If window.innerwidth = a certain amount run the mouse follow else run the device orientation


  var mouseWrapper = document.querySelectorAll(".pg-mouse"); // Run parallax mouse only on tablet and above

  var breakpointMedium = "1050";

  if (window.innerWidth > breakpointMedium) {
    mouseWrapper.forEach(function (wrapper) {
      wrapper.addEventListener("mousemove", startPgMouse);
      wrapper.addEventListener("resize", windowResize);
    });
  }
}

runParallaxPG(); // REFRESH JS AFTER SWUP TRANSITION

document.addEventListener("swup:contentReplaced", function () {
  widowSlayer();
  initLax();
  runParallaxPG();
  useEventGroup();
});
},{"lax.js":"../../node_modules/lax.js/lib/lax.min.js"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65518" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/goodies.js"], null)
//# sourceMappingURL=/goodies.0cf12025.js.map
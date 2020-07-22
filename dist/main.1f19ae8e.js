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
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var x = "\n.skin *{box-sizing:border-box;margin: 0px; padding: 0px;}\n.skin *::before,.skin *::after{box-sizing:border-box;}\n.skin{\n    position: relative;\n    background-color: #ffe600;\n    height:100vh;\n}\n.trangle{\n    position: absolute;\n    top: 155px;\n    left: 50%;\n    border:10px solid black;\n    width:0px;\n    height: 0px;\n    transform: translate(-50%,-50%);\n    border-color: black transparent transparent;\n}\n\n.cycle{\n    position: absolute;\n    top: -20px;\n    left: -10px;\n    border: 1px solid black;\n    width: 20px;\n    height: 10px;\n    border-radius: 10px 10px 0 0;\n    background-color: black;\n    \n}\n\n\n.eye{\n    position:absolute;\n    left: 50%;\n    top:100px;\n    border:2px solid black;\n    width: 64px;\n    height: 64px;\n    margin-left: -32px;\n    background-color: #2e2e2e;\n    border-radius: 50%;\n}\n\n.eye::after{\n    content: '';\n    display: block;\n    border: 3px #000 solid;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 4px;\n}\n\n.eye.left{\n    transform: translate(-100px);\n}\n\n.eye.right{\n    transform: translate(100px);\n}\n\n.mouth{\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n\n.mouth .up{\n    position: relative;\n    top: -10px;\n}\n\n.mouth .up .lip{\n    border: 3px solid black;\n    border-top-color: transparent;\n    border-top-width: 0px;\n    background-color: #ffe600;\n}\n\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    border-right-color: transparent;\n    border-right-width: 0px;\n    transform: rotate(-15deg);\n    left: 20px;\n}\n\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0;\n    border-left-color: transparent;\n    border-left-width: 0px;\n    transform: rotate(15deg);\n    margin-left: 100px;\n}\n\n.mouth .down{ \n    width: 160px;\n    height: 180px;\n    margin-left: 20px;\n    position: absolute;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1{\n    border:2px solid black;\n    border-radius: 80px/400px;\n    background-color: #9b000a;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 .yuan2{\n    border: 1px solid gray;\n    background-color: #ff485f;\n    margin-left: -75px;\n    border-radius: 100px;\n}\n\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 76px;\n    height: 76px;\n    top:200px;\n    margin-left: -38px;\n    border-radius: 50%;\n    background-color: #ff0000;\n}\n\n.face.left{\n    transform: translateX(-150px);\n}\n\n.face.right{\n    transform: translateX(150px);\n}\n";
var _default = x;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 0;
var t = 100; //速度控制

function run() {
  n += 1;

  if (n > _css.default.length) {
    clearInterval(timer);
    return;
  }

  console.log("n:".concat(n, ",string.substr:").concat(_css.default.substr(0, n)));
  demo1.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo1.scrollTop = demo1.scrollHeight;
}

var timer = setInterval(run, t); //timer明显是一个函数调用的结果； 

btnPause.onclick = function () {
  clearInterval(timer);
};

btnPlay.onclick = function () {
  if (timer) {
    //先判断有没有计时器，有的话就清除，没有的话就设置一个
    clearInterval(timer);
  }

  timer = setInterval(run, t);
};

btnSlow.onclick = function () {
  clearInterval(timer);
  t = 300;
  timer = setInterval(run, t);
};

btnNormal.onclick = function () {
  clearInterval(timer);
  t = 100;
  timer = setInterval(run, t);
};

btnFast.onclick = function () {
  clearInterval(timer);
  t = 0;
  timer = setInterval(run, t);
};
},{"./css.js":"css.js"}],"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49433" + '/');

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
},{}]},{},["C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"K4Xi":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n="\n.skin *{box-sizing:border-box;margin: 0px; padding: 0px;}\n.skin *::before,.skin *::after{box-sizing:border-box;}\n.skin{\n    position: relative;\n    background-color: #ffe600;\n    height:100vh;\n}\n.trangle{\n    position: absolute;\n    top: 155px;\n    left: 50%;\n    border:10px solid black;\n    width:0px;\n    height: 0px;\n    transform: translate(-50%,-50%);\n    border-color: black transparent transparent;\n}\n\n.cycle{\n    position: absolute;\n    top: -20px;\n    left: -10px;\n    border: 1px solid black;\n    width: 20px;\n    height: 10px;\n    border-radius: 10px 10px 0 0;\n    background-color: black;\n    \n}\n\n\n.eye{\n    position:absolute;\n    left: 50%;\n    top:100px;\n    border:2px solid black;\n    width: 64px;\n    height: 64px;\n    margin-left: -32px;\n    background-color: #2e2e2e;\n    border-radius: 50%;\n}\n\n.eye::after{\n    content: '';\n    display: block;\n    border: 3px #000 solid;\n    width: 30px;\n    height: 30px;\n    background: #fff;\n    border-radius: 50%;\n    position: relative;\n    left: 8px;\n    top: 4px;\n}\n\n.eye.left{\n    transform: translate(-100px);\n}\n\n.eye.right{\n    transform: translate(100px);\n}\n\n.mouth{\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n}\n\n.mouth .up{\n    position: relative;\n    top: -10px;\n}\n\n.mouth .up .lip{\n    border: 3px solid black;\n    border-top-color: transparent;\n    border-top-width: 0px;\n    background-color: #ffe600;\n}\n\n.mouth .up .lip.left{\n    border-radius: 0 0 0 50px;\n    border-right-color: transparent;\n    border-right-width: 0px;\n    transform: rotate(-15deg);\n    left: 20px;\n}\n\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0;\n    border-left-color: transparent;\n    border-left-width: 0px;\n    transform: rotate(15deg);\n    margin-left: 100px;\n}\n\n.mouth .down{ \n    width: 160px;\n    height: 180px;\n    margin-left: 20px;\n    position: absolute;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1{\n    border:2px solid black;\n    border-radius: 80px/400px;\n    background-color: #9b000a;\n    overflow: hidden;\n}\n\n.mouth .down .yuan1 .yuan2{\n    border: 1px solid gray;\n    background-color: #ff485f;\n    margin-left: -75px;\n    border-radius: 100px;\n}\n\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 76px;\n    height: 76px;\n    top:200px;\n    margin-left: -38px;\n    border-radius: 50%;\n    background-color: #ff0000;\n}\n\n.face.left{\n    transform: translateX(-150px);\n}\n\n.face.right{\n    transform: translateX(150px);\n}\n",r=n;exports.default=r;
},{}],"epB2":[function(require,module,exports) {
"use strict";var t=n(require("./css.js"));function n(t){return t&&t.__esModule?t:{default:t}}var e=0,l=100;function r(){(e+=1)>t.default.length?clearInterval(c):(console.log("n:".concat(e,",string.substr:").concat(t.default.substr(0,e))),demo1.innerText=t.default.substr(0,e),demo2.innerHTML=t.default.substr(0,e),demo1.scrollTop=demo1.scrollHeight)}var c=setInterval(r,l);btnPause.onclick=function(){clearInterval(c)},btnPlay.onclick=function(){c&&clearInterval(c),c=setInterval(r,l)},btnSlow.onclick=function(){clearInterval(c),l=300,c=setInterval(r,l)},btnNormal.onclick=function(){clearInterval(c),l=100,c=setInterval(r,l)},btnFast.onclick=function(){clearInterval(c),l=0,c=setInterval(r,l)};
},{"./css.js":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.14af870b.js.map
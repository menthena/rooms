/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);
	module.exports = __webpack_require__(4);


/***/ },
/* 1 */
/***/ function(module, exports) {

	/*!
	  * https://github.com/paulmillr/es6-shim
	  * @license es6-shim Copyright 2013-2015 by Paul Miller (http://paulmillr.com)
	  *   and contributors,  MIT License
	  * es6-shim: v0.33.13
	  * see https://github.com/paulmillr/es6-shim/blob/0.33.13/LICENSE
	  * Details and documentation:
	  * https://github.com/paulmillr/es6-shim/
	  */
	(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var o=function(e){try{e();return false}catch(t){return true}};var i=function valueOrFalseIfThrows(e){try{return e()}catch(t){return false}};var a=n(o);var u=function(){return!o(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&u();var f=function foo(){}.name==="foo";var c=Function.call.bind(Array.prototype.forEach);var l=Function.call.bind(Array.prototype.reduce);var p=Function.call.bind(Array.prototype.filter);var v=Function.call.bind(Array.prototype.some);var y=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var h=function(e,t){c(Object.keys(t),function(r){var n=t[r];y(e,r,n,false)})};var g=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var n=new r;if(typeof t!=="undefined"){Object.keys(t).forEach(function(e){U.defineByDescriptor(n,e,t[e])})}return n};var b=function(e,t){if(!Object.setPrototypeOf){return false}return i(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=g(e.prototype,{constructor:{value:r}});return t(r)})};var d=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var m=d();var O=m.isFinite;var w=Function.call.bind(String.prototype.indexOf);var j=Function.call.bind(Object.prototype.toString);var S=Function.call.bind(Array.prototype.concat);var T=Function.call.bind(String.prototype.slice);var I=Function.call.bind(Array.prototype.push);var E=Function.apply.bind(Array.prototype.push);var M=Function.call.bind(Array.prototype.shift);var P=Math.max;var x=Math.min;var N=Math.floor;var C=Math.abs;var A=Math.log;var k=Math.sqrt;var _=Function.call.bind(Object.prototype.hasOwnProperty);var R;var F=function(){};var D=m.Symbol||{};var z=D.species||"@@species";var L=Number.isNaN||function isNaN(e){return e!==e};var q=Number.isFinite||function isFinite(e){return typeof e==="number"&&O(e)};var G=function isArguments(e){return j(e)==="[object Arguments]"};var W=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&j(e)!=="[object Array]"&&j(e.callee)==="[object Function]"};var H=G(arguments)?G:W;var B={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},object:function(e){return e!==null&&typeof e==="object"},string:function(e){return j(e)==="[object String]"},regex:function(e){return j(e)==="[object RegExp]"},symbol:function(e){return typeof m.Symbol==="function"&&typeof e==="symbol"}};var $=B.symbol(D.iterator)?D.iterator:"_es6-shim iterator_";if(m.Set&&typeof(new m.Set)["@@iterator"]==="function"){$="@@iterator"}if(!m.Reflect){y(m,"Reflect",{})}var V=m.Reflect;var J={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!J.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(e==null){throw new TypeError(t||"Cannot call method on "+e)}},TypeIsObject:function(e){return e!=null&&Object(e)===e},ToObject:function(e,t){J.RequireObjectCoercible(e,t);return Object(e)},IsCallable:function(e){return typeof e==="function"&&j(e)==="[object Function]"},IsConstructor:function(e){return J.IsCallable(e)},ToInt32:function(e){return J.ToNumber(e)>>0},ToUint32:function(e){return J.ToNumber(e)>>>0},ToNumber:function(e){if(j(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=J.ToNumber(e);if(L(t)){return 0}if(t===0||!q(t)){return t}return(t>0?1:-1)*N(C(t))},ToLength:function(e){var t=J.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return L(e)&&L(t)},SameValueZero:function(e,t){return e===t||L(e)&&L(t)},IsIterable:function(e){return J.TypeIsObject(e)&&(typeof e[$]!=="undefined"||H(e))},GetIterator:function(e){if(H(e)){return new R(e,"value")}var r=J.GetMethod(e,$);if(!J.IsCallable(r)){throw new TypeError("value is not an iterable")}var n=t(r,e);if(!J.TypeIsObject(n)){throw new TypeError("bad iterator")}return n},GetMethod:function(e,t){var r=J.ToObject(e)[t];if(r===void 0||r===null){return void 0}if(!J.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,r){var n=J.GetMethod(e,"return");if(n===void 0){return}var o,i;try{o=t(n,e)}catch(a){i=a}if(r){return}if(i){throw i}if(!J.TypeIsObject(o)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!J.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=J.IteratorNext(e);var r=J.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n){return V.construct(e,t,o)}var i=o.prototype;if(!J.TypeIsObject(i)){i=Object.prototype}var a=g(i);var u=J.Call(e,a,t);return J.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!J.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[z];if(n===void 0||n===null){return t}if(!J.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=String(e);var i="<"+t;if(r!==""){var a=String(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var s=i+">";var f=s+o;return f+"</"+t+">"}};var U={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&J.IsCallable(t.toString)){y(e,"toString",t.toString.bind(t),true)}}};var K=function wrapConstructor(e,t,r){U.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){c(Object.getOwnPropertyNames(e),function(n){if(n in F||r[n]){return}U.proxy(e,n,t)})}else{c(Object.keys(e),function(n){if(n in F||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;U.redefine(e.prototype,"constructor",t)};var X=function(){return this};var Z=function(e){if(s&&!_(e,z)){U.getter(e,z,X)}};var Q=function overrideNative(e,t,r){var n=e[t];y(e,t,r,true);U.preserveToString(e[t],n)};var Y=function(e,t){var r=t||function iterator(){return this};y(e,$,r);if(!e[$]&&B.symbol($)){e[$]=r}};var ee=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var te=function createDataPropertyOrThrow(e,t,r){ee(e,t,r);if(!J.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var re=function(e,t,r,n){if(!J.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!J.TypeIsObject(o)){o=r}var i=g(o);for(var a in n){if(_(n,a)){var u=n[a];y(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var ne=String.fromCodePoint;Q(String,"fromCodePoint",function fromCodePoint(t){return e(ne,this,arguments)})}var oe={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!J.SameValue(r,J.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){I(t,String.fromCharCode(r))}else{r-=65536;I(t,String.fromCharCode((r>>10)+55296));I(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=J.ToObject(e,"bad callSite");var r=J.ToObject(t.raw,"bad raw value");var n=r.length;var o=J.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,s,f,c;while(a<o){u=String(a);f=String(r[u]);I(i,f);if(a+1>=o){break}s=a+1<arguments.length?arguments[a+1]:"";c=String(s);I(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){Q(String,"raw",oe.raw)}h(String,oe);var ie=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var ae=Infinity;var ue={repeat:function repeat(e){J.RequireObjectCoercible(this);var t=String(this);var r=J.ToInteger(e);if(r<0||r>=ae){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return ie(t,r)},startsWith:function startsWith(e){J.RequireObjectCoercible(this);var t=String(this);if(B.regex(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=String(e);var n=arguments.length>1?arguments[1]:void 0;var o=P(J.ToInteger(n),0);return T(t,o,o+r.length)===r},endsWith:function endsWith(e){J.RequireObjectCoercible(this);var t=String(this);if(B.regex(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=String(e);var n=t.length;var o=arguments.length>1?arguments[1]:void 0;var i=typeof o==="undefined"?n:J.ToInteger(o);var a=x(P(i,0),n);return T(t,a-r.length,a)===r},includes:function includes(e){if(B.regex(e)){throw new TypeError('"includes" does not accept a RegExp')}var t;if(arguments.length>1){t=arguments[1]}return w(this,e,t)!==-1},codePointAt:function codePointAt(e){J.RequireObjectCoercible(this);var t=String(this);var r=J.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){Q(String.prototype,"includes",ue.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var se=o(function(){"/a/".startsWith(/a/)});var fe="abc".startsWith("a",Infinity)===false;if(!se||!fe){Q(String.prototype,"startsWith",ue.startsWith);Q(String.prototype,"endsWith",ue.endsWith)}}h(String.prototype,ue);var ce=["	\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var le=new RegExp("(^["+ce+"]+)|(["+ce+"]+$)","g");var pe=function trim(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")}return String(this).replace(le,"")};var ve=["\x85","\u200b","\ufffe"].join("");var ye=new RegExp("["+ve+"]","g");var he=/^[\-+]0x[0-9a-f]+$/i;var ge=ve.trim().length!==ve.length;y(String.prototype,"trim",pe,ge);var be=function(e){J.RequireObjectCoercible(e);this._s=String(e);this._i=0};be.prototype.next=function(){var e=this._s,t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return{value:void 0,done:true}}var r=e.charCodeAt(t),n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return{value:e.substr(t,o),done:false}};Y(be.prototype);Y(String.prototype,function(){return new be(this)});var de={from:function from(e){var r=this;var n=arguments.length>1?arguments[1]:void 0;var o,i;if(n===void 0){o=false}else{if(!J.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}i=arguments.length>2?arguments[2]:void 0;o=true}var a=typeof(H(e)||J.GetMethod(e,$))!=="undefined";var u,s,f;if(a){s=J.IsConstructor(r)?Object(new r):[];var c=J.GetIterator(e);var l,p;f=0;while(true){l=J.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=i===undefined?n(p,f):t(n,i,p,f)}s[f]=p}catch(v){J.IteratorClose(c,true);throw v}f+=1}u=f}else{var y=J.ToObject(e);u=J.ToLength(y.length);s=J.IsConstructor(r)?Object(new r(u)):new Array(u);var h;for(f=0;f<u;++f){h=y[f];if(o){h=i!==undefined?t(n,i,h,f):n(h,f)}s[f]=h}}s.length=u;return s},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!J.IsCallable(t)?new Array(e):J.Construct(t,[e]);for(var o=0;o<e;++o){te(n,o,arguments[o])}n.length=e;return n}};h(Array,de);Z(Array);var me=function(e){return{value:e,done:arguments.length===0}};R=function(e,t){this.i=0;this.array=e;this.kind=t};h(R.prototype,{next:function(){var e=this.i,t=this.array;if(!(this instanceof R)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=J.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return{value:o,done:false}}}this.array=void 0;return{value:void 0,done:true}}});Y(R.prototype);var Oe=function getAllKeys(e){var t=[];for(var r in e){I(t,r)}return t};var we=function(e,t){h(this,{object:e,array:Oe(e),kind:t})};h(we.prototype,{next:function next(){var e;var t=this.array;if(!(this instanceof we)){throw new TypeError("Not an ObjectIterator")}while(t.length>0){e=M(t);if(!(e in this.object)){continue}if(this.kind==="key"){return me(e)}else if(this.kind==="value"){return me(this.object[e])}else{return me([e,this.object[e]])}}return me()}});Y(we.prototype);var je=Array.of===de.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!je){Q(Array,"of",de.of)}var Se={copyWithin:function copyWithin(e,t){var r=arguments[2];var n=J.ToObject(this);var o=J.ToLength(n.length);var i=J.ToInteger(e);var a=J.ToInteger(t);var u=i<0?P(o+i,0):x(i,o);var s=a<0?P(o+a,0):x(a,o);r=typeof r==="undefined"?o:J.ToInteger(r);var f=r<0?P(o+r,0):x(r,o);var c=x(f-s,o-u);var l=1;if(s<u&&u<s+c){l=-1;s+=c-1;u+=c-1}while(c>0){if(_(n,s)){n[u]=n[s]}else{delete n[s]}s+=l;u+=l;c-=1}return n},fill:function fill(e){var t=arguments.length>1?arguments[1]:void 0;var r=arguments.length>2?arguments[2]:void 0;var n=J.ToObject(this);var o=J.ToLength(n.length);t=J.ToInteger(typeof t==="undefined"?0:t);r=J.ToInteger(typeof r==="undefined"?o:r);var i=t<0?P(o+t,0):x(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=J.ToObject(this);var n=J.ToLength(r.length);if(!J.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=J.ToObject(this);var n=J.ToLength(r.length);if(!J.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new R(this,"key")},values:function values(){return new R(this,"value")},entries:function entries(){return new R(this,"entry")}};if(Array.prototype.keys&&!J.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!J.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[$]){h(Array.prototype,{values:Array.prototype[$]});if(B.symbol(D.unscopables)){Array.prototype[D.unscopables].values=true}}if(f&&Array.prototype.values&&Array.prototype.values.name!=="values"){var Te=Array.prototype.values;Q(Array.prototype,"values",function values(){return t(Te,this)});y(Array.prototype,$,Array.prototype.values,true)}h(Array.prototype,Se);Y(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){Y(Object.getPrototypeOf([].values()))}var Ie=function(){return i(function(){return Array.from({length:-1}).length===0})}();var Ee=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!Ie||!Ee){Q(Array,"from",de.from)}var Me=function(){return i(function(){return Array.from([0],undefined)})}();if(!Me){var Pe=Array.from;Q(Array,"from",function from(r){if(arguments.length>0&&typeof arguments[1]!=="undefined"){return e(Pe,this,arguments)}else{return t(Pe,this,r)}})}var xe=function(e,r){var n={length:-1};n[r?(-1>>>0)-1:0]=true;return i(function(){t(e,n,function(){throw new RangeError("should not reach here")},[])})};if(!xe(Array.prototype.forEach)){var Ne=Array.prototype.forEach;Q(Array.prototype,"forEach",function forEach(t){return e(Ne,this.length>=0?this:[],arguments)},true)}if(!xe(Array.prototype.map)){var Ce=Array.prototype.map;Q(Array.prototype,"map",function map(t){return e(Ce,this.length>=0?this:[],arguments)},true)}if(!xe(Array.prototype.filter)){var Ae=Array.prototype.filter;Q(Array.prototype,"filter",function filter(t){return e(Ae,this.length>=0?this:[],arguments)},true)}if(!xe(Array.prototype.some)){var ke=Array.prototype.some;Q(Array.prototype,"some",function some(t){return e(ke,this.length>=0?this:[],arguments)},true)}if(!xe(Array.prototype.every)){var _e=Array.prototype.every;Q(Array.prototype,"every",function every(t){return e(_e,this.length>=0?this:[],arguments)},true)}if(!xe(Array.prototype.reduce)){var Re=Array.prototype.reduce;Q(Array.prototype,"reduce",function reduce(t){return e(Re,this.length>=0?this:[],arguments)},true)}if(!xe(Array.prototype.reduceRight,true)){var Fe=Array.prototype.reduceRight;Q(Array.prototype,"reduceRight",function reduceRight(t){return e(Fe,this.length>=0?this:[],arguments)},true)}var De=Number("0o10")!==8;var ze=Number("0b10")!==2;var Le=v(ve,function(e){return Number(e+0+e)===0});if(De||ze||Le){var qe=Number;var Ge=/^0b[01]+$/i;var We=/^0o[0-7]+$/i;var He=Ge.test.bind(Ge);var Be=We.test.bind(We);var $e=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(B.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(B.primitive(t)){return t}}throw new TypeError("No default value")};var Ve=ye.test.bind(ye);var Je=he.test.bind(he);var Ue=function(){var e=function Number(r){var n;if(arguments.length>0){n=B.primitive(r)?r:$e(r,"number")}else{n=0}if(typeof n==="string"){n=t(pe,n);if(He(n)){n=parseInt(T(n,2),2)}else if(Be(n)){n=parseInt(T(n,2),8)}else if(Ve(n)||Je(n)){n=NaN}}var o=this;var a=i(function(){qe.prototype.valueOf.call(o);return true});if(o instanceof e&&!a){return new qe(n)}return qe(n)};return e}();K(qe,Ue,{});Number=Ue;U.redefine(m,"Number",Ue)}var Ke=Math.pow(2,53)-1;h(Number,{MAX_SAFE_INTEGER:Ke,MIN_SAFE_INTEGER:-Ke,EPSILON:2.220446049250313e-16,parseInt:m.parseInt,parseFloat:m.parseFloat,isFinite:q,isInteger:function isInteger(e){return q(e)&&J.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&C(e)<=Number.MAX_SAFE_INTEGER},isNaN:L});y(Number,"parseInt",m.parseInt,Number.parseInt!==m.parseInt);if(![,1].find(function(e,t){return t===0})){Q(Array.prototype,"find",Se.find)}if([,1].findIndex(function(e,t){return t===0})!==0){Q(Array.prototype,"findIndex",Se.findIndex)}var Xe=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var Ze=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var Qe=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Ye=function(e,t){var r=Object.keys(Object(t));var n;if(J.IsCallable(Object.getOwnPropertySymbols)){n=p(Object.getOwnPropertySymbols(Object(t)),Xe(t))}return l(S(r,n||[]),Qe(t),e)};var et={assign:function(t,r){var n=J.ToObject(t,"Cannot convert undefined or null to object");return l(e(Ze,1,arguments),Ye,n)},is:function is(e,t){return J.SameValue(e,t)}};var tt=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(tt){Q(Object,"assign",et.assign)}h(Object,et);if(s){var rt={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!J.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||J.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(a){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};h(Object,rt)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf,r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var nt=!o(function(){Object.keys("foo")});if(!nt){var ot=Object.keys;Q(Object,"keys",function keys(e){return ot(J.ToObject(e))})}if(Object.getOwnPropertyNames){var it=!o(function(){Object.getOwnPropertyNames("foo")});if(!it){var at=typeof window==="object"?Object.getOwnPropertyNames(window):[];var ut=Object.getOwnPropertyNames;Q(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=J.ToObject(e);if(j(t)==="[object Window]"){try{return ut(t)}catch(r){return S([],at)}}return ut(t)})}}if(Object.getOwnPropertyDescriptor){var st=!o(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!st){var ft=Object.getOwnPropertyDescriptor;Q(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return ft(J.ToObject(e),t)})}}if(Object.seal){var ct=!o(function(){Object.seal("foo")});if(!ct){var lt=Object.seal;Q(Object,"seal",function seal(e){if(!B.object(e)){return e}return lt(e)})}}if(Object.isSealed){var pt=!o(function(){Object.isSealed("foo")});if(!pt){var vt=Object.isSealed;Q(Object,"isSealed",function isSealed(e){if(!B.object(e)){return true}return vt(e)})}}if(Object.freeze){var yt=!o(function(){Object.freeze("foo")});if(!yt){var ht=Object.freeze;Q(Object,"freeze",function freeze(e){if(!B.object(e)){return e}return ht(e)})}}if(Object.isFrozen){var gt=!o(function(){Object.isFrozen("foo")});if(!gt){var bt=Object.isFrozen;Q(Object,"isFrozen",function isFrozen(e){if(!B.object(e)){return true}return bt(e)})}}if(Object.preventExtensions){var dt=!o(function(){Object.preventExtensions("foo")});if(!dt){var mt=Object.preventExtensions;Q(Object,"preventExtensions",function preventExtensions(e){if(!B.object(e)){return e}return mt(e)})}}if(Object.isExtensible){var Ot=!o(function(){Object.isExtensible("foo")});if(!Ot){var wt=Object.isExtensible;Q(Object,"isExtensible",function isExtensible(e){if(!B.object(e)){return false}return wt(e)})}}if(Object.getPrototypeOf){var jt=!o(function(){Object.getPrototypeOf("foo")});if(!jt){var St=Object.getPrototypeOf;Q(Object,"getPrototypeOf",function getPrototypeOf(e){return St(J.ToObject(e))})}}var Tt=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&J.IsCallable(e.get)}();if(s&&!Tt){var It=function flags(){if(!J.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};U.getter(RegExp.prototype,"flags",It)}var Et=i(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});if(!Et&&s){var Mt=RegExp;var Pt=function(){return function RegExp(e,t){var r=this instanceof RegExp;if(!r&&(B.regex(e)||e&&e.constructor===RegExp)){return e}if(B.regex(e)&&B.string(t)){return new RegExp(e.source,t)}return new Mt(e,t)}}();K(Mt,Pt,{$input:true});RegExp=Pt;U.redefine(m,"RegExp",Pt)}if(s){var xt={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};c(Object.keys(xt),function(e){if(e in RegExp&&!(xt[e]in RegExp)){U.getter(RegExp,xt[e],function get(){return RegExp[e]})}})}Z(RegExp);var Nt=1/Number.EPSILON;var Ct=function roundTiesToEven(e){return e+Nt-Nt};var At=Math.pow(2,-23);var kt=Math.pow(2,127)*(2-At);var _t=Math.pow(2,-126);var Rt=Number.prototype.clz;delete Number.prototype.clz;var Ft={acosh:function acosh(e){var t=Number(e);if(Number.isNaN(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return A(t/Math.E+k(t+1)*k(t-1)/Math.E)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!O(t)){return t}return t<0?-Math.asinh(-t):A(t+k(t*t+1))},atanh:function atanh(e){var t=Number(e);if(Number.isNaN(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*A((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0,n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=Math.exp(A(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var r=Number(e);var n=J.ToUint32(r);if(n===0){return 32}return Rt?t(Rt,n):31-N(A(n+.5)*Math.LOG2E)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(Number.isNaN(t)){return NaN}if(!O(t)){return Infinity}if(t<0){t=-t}if(t>21){return Math.exp(t)/2}return(Math.exp(t)+Math.exp(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!O(t)||t===0){return t}if(C(t)>.5){return Math.exp(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=C(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*k(r)},log2:function log2(e){return A(e)*Math.LOG2E},log10:function log10(e){return A(e)*Math.LOG10E},log1p:function log1p(e){var t=Number(e);if(t<-1||Number.isNaN(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(A(1+t)/(1+t-1))},sign:function sign(e){var t=Number(e);if(t===0){return t}if(Number.isNaN(t)){return t}return t<0?-1:1},sinh:function sinh(e){var t=Number(e);if(!O(t)||t===0){return t}if(C(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(Math.exp(t-1)-Math.exp(-t-1))*Math.E/2},tanh:function tanh(e){var t=Number(e);if(Number.isNaN(t)||t===0){return t}if(t===Infinity){return 1}if(t===-Infinity){return-1}var r=Math.expm1(t);var n=Math.expm1(-t);if(r===Infinity){return 1}if(n===Infinity){return-1}return(r-n)/(Math.exp(t)+Math.exp(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-N(-t):N(t)},imul:function imul(e,t){var r=J.ToUint32(e);var n=J.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||L(t)){return t}var r=Math.sign(t);var n=C(t);if(n<_t){return r*Ct(n/_t/At)*_t*At}var o=(1+At/Number.EPSILON)*n;var i=o-(o-n);if(i>kt||L(i)){return r*Infinity}return r*i}};h(Math,Ft);y(Math,"log1p",Ft.log1p,Math.log1p(-1e-17)!==-1e-17);y(Math,"asinh",Ft.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));y(Math,"tanh",Ft.tanh,Math.tanh(-2e-17)!==-2e-17);y(Math,"acosh",Ft.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);y(Math,"cbrt",Ft.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);y(Math,"sinh",Ft.sinh,Math.sinh(-2e-17)!==-2e-17);var Dt=Math.expm1(10);y(Math,"expm1",Ft.expm1,Dt>22025.465794806718||Dt<22025.465794806718);var zt=Math.round;var Lt=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var qt=Nt+1;var Gt=2*Nt-1;var Wt=[qt,Gt].every(function(e){return Math.round(e)===e});y(Math,"round",function round(e){var t=N(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!Lt||!Wt);U.preserveToString(Math.round,zt);var Ht=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=Ft.imul;U.preserveToString(Math.imul,Ht)}if(Math.imul.length!==2){Q(Math,"imul",function imul(t,r){return e(Ht,Math,arguments)})}var Bt=function(){var e=m.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}J.IsPromise=function(e){if(!J.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!J.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.promise=new e(r);if(!(J.IsCallable(t.resolve)&&J.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&J.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){I(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=M(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=m.Promise;return e&&e.resolve&&function(t){return e.resolve().then(t)}};var i=J.IsCallable(m.setImmediate)?m.setImmediate.bind(m):typeof process==="object"&&process.nextTick?process.nextTick:o()||(J.IsCallable(n)?n():function(t){e(t,0)});var a=1;var u=2;var s=3;var f=4;var l=5;var p=function(e,t){var r=e.capabilities;var n=e.handler;var o,i=false,s;if(n===a){o=t}else if(n===u){o=t;i=true}else{try{o=n(t)}catch(f){o=f;i=true}}s=i?r.reject:r.resolve;s(o)};var v=function(e,t){c(e,function(e){i(function(){p(e,t)})})};var y=function(e,t){var r=e._promise;var n=r.fulfillReactions;r.result=t;r.fulfillReactions=void 0;r.rejectReactions=void 0;r.state=f;v(n,t)};var g=function(e,t){var r=e._promise;var n=r.rejectReactions;r.result=t;r.fulfillReactions=void 0;r.rejectReactions=void 0;r.state=l;v(n,t)};var b=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return g(e,new TypeError("Self resolution"))}if(!J.TypeIsObject(r)){return y(e,r)}try{n=r.then}catch(o){return g(e,o)}if(!J.IsCallable(n)){return y(e,r)}i(function(){d(e,r,n)})};var n=function(r){if(t){return}t=true;return g(e,r)};return{resolve:r,reject:n}};var d=function(e,r,n){var o=b(e);var i=o.resolve;var a=o.reject;try{t(n,r,i,a)}catch(u){a(u)}};var O=function(e){if(!J.TypeIsObject(e)){throw new TypeError("Promise is not object")}var t=e[z];if(t!==void 0&&t!==null){return t}return e};var w;var j=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!J.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=re(this,e,w,{_promise:{result:void 0,state:s,fulfillReactions:[],rejectReactions:[]}});var n=b(r);var o=n.reject;try{t(n.resolve,o)}catch(i){o(i)}return r};return e}();w=j.prototype;var S=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var T=function(e,t,r){var n=e.iterator;var o=[],i={count:1},a,u;var s=0;while(true){try{a=J.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(f){e.done=true;throw f}o[s]=void 0;var c=t.resolve(u);var l=S(s,o,r,i);i.count+=1;c.then(l,r.reject);s+=1}if(--i.count===0){var p=r.resolve;p(o)}return r.promise};var E=function(e,t,r){var n=e.iterator,o,i,a;while(true){try{o=J.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(u){e.done=true;throw u}a=t.resolve(i);a.then(r.resolve,r.reject)}return r.promise};h(j,{all:function all(e){var t=O(this);var n=new r(t);var o,i;try{o=J.GetIterator(e);i={iterator:o,done:false};return T(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{J.IteratorClose(o,true)}catch(s){u=s}}var f=n.reject;f(u);return n.promise}},race:function race(e){var t=O(this);var n=new r(t);var o,i;try{o=J.GetIterator(e);i={iterator:o,done:false};return E(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{J.IteratorClose(o,true)}catch(s){u=s}}var f=n.reject;f(u);return n.promise}},reject:function reject(e){
	var t=this;var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(J.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});h(w,{"catch":function(e){return this.then(void 0,e)},then:function then(e,t){var n=this;if(!J.IsPromise(n)){throw new TypeError("not a promise")}var o=J.SpeciesConstructor(n,j);var c=new r(o);var v={capabilities:c,handler:J.IsCallable(e)?e:a};var y={capabilities:c,handler:J.IsCallable(t)?t:u};var h=n._promise;var g;if(h.state===s){I(h.fulfillReactions,v);I(h.rejectReactions,y)}else if(h.state===f){g=h.result;i(function(){p(v,g)})}else if(h.state===l){g=h.result;i(function(){p(y,g)})}else{throw new TypeError("unexpected Promise state")}return c.promise}});return j}();if(m.Promise){delete m.Promise.accept;delete m.Promise.defer;delete m.Promise.prototype.chain}if(typeof Bt==="function"){h(m,{Promise:Bt});var $t=b(m.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var Vt=!o(function(){m.Promise.reject(42).then(null,5).then(null,F)});var Jt=o(function(){m.Promise.call(3,F)});var Ut=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);return t===r}(m.Promise);if(!$t||!Vt||!Jt||Ut){Promise=Bt;Q(m,"Promise",Bt)}Z(Promise)}var Kt=function(e){var t=Object.keys(l(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Xt=Kt(["z","a","bb"]);var Zt=Kt(["z",1,"a","3",2]);if(s){var Qt=function fastkey(e){if(!Xt){return null}var t=typeof e;if(t==="undefined"||e===null){return"^"+String(e)}else if(t==="string"){return"$"+e}else if(t==="number"){if(!Zt){return"n"+e}return e}else if(t==="boolean"){return"b"+e}return null};var Yt=function emptyObject(){return Object.create?Object.create(null):{}};var er=function addIterableToMap(e,n,o){if(r(o)||B.string(o)){c(o,function(e){n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.set;if(!J.IsCallable(a)){throw new TypeError("bad map")}i=J.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=J.IteratorStep(i);if(u===false){break}var s=u.value;try{if(!J.TypeIsObject(s)){throw new TypeError("expected iterable of pairs")}t(a,n,s[0],s[1])}catch(f){J.IteratorClose(i,true);throw f}}}}};var tr=function addIterableToSet(e,n,o){if(r(o)||B.string(o)){c(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.add;if(!J.IsCallable(a)){throw new TypeError("bad set")}i=J.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=J.IteratorStep(i);if(u===false){break}var s=u.value;try{t(a,n,s)}catch(f){J.IteratorClose(i,true);throw f}}}}};var rr={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!J.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+String(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i,t=this.kind,r=this.head,n;if(typeof this.i==="undefined"){return{value:void 0,done:true}}while(e.isRemoved()&&e!==r){e=e.prev}while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return{value:n,done:false}}}this.i=void 0;return{value:void 0,done:true}}};Y(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=re(this,Map,a,{_es6map:true,_head:null,_storage:Yt(),_size:0});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){er(Map,e,arguments[0])}return e};a=u.prototype;U.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});h(a,{get:function get(e){o(this,"get");var t=Qt(e);if(t!==null){var r=this._storage[t];if(r){return r.value}else{return}}var n=this._head,i=n;while((i=i.next)!==n){if(J.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Qt(e);if(t!==null){return typeof this._storage[t]!=="undefined"}var r=this._head,n=r;while((n=n.next)!==r){if(J.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head,i=n,a;var u=Qt(e);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}while((i=i.next)!==n){if(J.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(J.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},"delete":function(t){o(this,"delete");var r=this._head,n=r;var i=Qt(t);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}while((n=n.next)!==r){if(J.SameValueZero(n.key,t)){n.key=n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._size=0;this._storage=Yt();var t=this._head,r=t,n=r.next;while((r=n)!==t){r.key=r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});Y(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!J.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+String(t))}};var n;var o=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=re(this,Set,n,{_es6set:true,"[[SetData]]":null,_storage:Yt()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){tr(Set,e,arguments[0])}return e};n=o.prototype;var i=function ensureMap(e){if(!e["[[SetData]]"]){var t=e["[[SetData]]"]=new rr.Map;c(Object.keys(e._storage),function(e){var r=e;if(r==="^null"){r=null}else if(r==="^undefined"){r=void 0}else{var n=r.charAt(0);if(n==="$"){r=T(r,1)}else if(n==="n"){r=+T(r,1)}else if(n==="b"){r=r==="btrue"}else{r=+r}}t.set(r,r)});e._storage=null}};U.getter(o.prototype,"size",function(){r(this,"size");i(this);return this["[[SetData]]"].size});h(o.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Qt(e))!==null){return!!this._storage[t]}i(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Qt(e))!==null){this._storage[t]=true;return this}i(this);this["[[SetData]]"].set(e,e);return this},"delete":function(e){r(this,"delete");var t;if(this._storage&&(t=Qt(e))!==null){var n=_(this._storage,t);return delete this._storage[t]&&n}i(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Yt()}else{this["[[SetData]]"].clear()}},values:function values(){r(this,"values");i(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");i(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;i(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});y(o.prototype,"keys",o.prototype.values,true);Y(o.prototype,o.prototype.values);return o}()};if(m.Map||m.Set){var nr=i(function(){return new Map([[1,2]]).get(1)===2});if(!nr){var or=m.Map;m.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new or;if(arguments.length>0){er(Map,e,arguments[0])}Object.setPrototypeOf(e,m.Map.prototype);y(e,"constructor",Map,true);return e};m.Map.prototype=g(or.prototype);U.preserveToString(m.Map,or)}var ir=new Map;var ar=function(e){e["delete"](0);e["delete"](-0);e.set(0,3);e.get(-0,4);return e.get(0)===3&&e.get(-0)===4}(ir);var ur=ir.set(1,2)===ir;if(!ar||!ur){var sr=Map.prototype.set;Q(Map.prototype,"set",function set(e,r){t(sr,this,e===0?0:e,r);return this})}if(!ar){var fr=Map.prototype.get;var cr=Map.prototype.has;h(Map.prototype,{get:function get(e){return t(fr,this,e===0?0:e)},has:function has(e){return t(cr,this,e===0?0:e)}},true);U.preserveToString(Map.prototype.get,fr);U.preserveToString(Map.prototype.has,cr)}var lr=new Set;var pr=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(lr);var vr=lr.add(1)===lr;if(!pr||!vr){var yr=Set.prototype.add;Set.prototype.add=function add(e){t(yr,this,e===0?0:e);return this};U.preserveToString(Set.prototype.add,yr)}if(!pr){var hr=Set.prototype.has;Set.prototype.has=function has(e){return t(hr,this,e===0?0:e)};U.preserveToString(Set.prototype.has,hr);var gr=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(gr,this,e===0?0:e)};U.preserveToString(Set.prototype["delete"],gr)}var br=b(m.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var dr=Object.setPrototypeOf&&!br;var mr=function(){try{return!(m.Map()instanceof m.Map)}catch(e){return e instanceof TypeError}}();if(m.Map.length!==0||dr||!mr){var Or=m.Map;m.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new Or;if(arguments.length>0){er(Map,e,arguments[0])}Object.setPrototypeOf(e,Map.prototype);y(e,"constructor",Map,true);return e};m.Map.prototype=Or.prototype;U.preserveToString(m.Map,Or)}var wr=b(m.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var jr=Object.setPrototypeOf&&!wr;var Sr=function(){try{return!(m.Set()instanceof m.Set)}catch(e){return e instanceof TypeError}}();if(m.Set.length!==0||jr||!Sr){var Tr=m.Set;m.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new Tr;if(arguments.length>0){tr(Set,e,arguments[0])}Object.setPrototypeOf(e,Set.prototype);y(e,"constructor",Set,true);return e};m.Set.prototype=Tr.prototype;U.preserveToString(m.Set,Tr)}var Ir=!i(function(){return(new Map).keys().next().done});if(typeof m.Map.prototype.clear!=="function"||(new m.Set).size!==0||(new m.Map).size!==0||typeof m.Map.prototype.keys!=="function"||typeof m.Set.prototype.keys!=="function"||typeof m.Map.prototype.forEach!=="function"||typeof m.Set.prototype.forEach!=="function"||a(m.Map)||a(m.Set)||typeof(new m.Map).keys().next!=="function"||Ir||!br){delete m.Map;delete m.Set;h(m,{Map:rr.Map,Set:rr.Set},true)}if(m.Set.prototype.keys!==m.Set.prototype.values){y(m.Set.prototype,"keys",m.Set.prototype.values,true)}Y(Object.getPrototypeOf((new m.Map).keys()));Y(Object.getPrototypeOf((new m.Set).keys()));if(f&&m.Set.prototype.has.name!=="has"){var Er=m.Set.prototype.has;Q(m.Set.prototype,"has",function has(e){return t(Er,this,e)})}}h(m,rr);Z(m.Map);Z(m.Set)}var Mr=function throwUnlessTargetIsObject(e){if(!J.TypeIsObject(e)){throw new TypeError("target must be an object")}};var Pr={apply:function apply(){return e(J.Call,null,arguments)},construct:function construct(e,t){if(!J.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length<3?e:arguments[2];if(!J.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return J.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){Mr(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},enumerate:function enumerate(e){Mr(e);return new we(e,"key")},has:function has(e,t){Mr(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(Pr,{ownKeys:function ownKeys(e){Mr(e);var t=Object.getOwnPropertyNames(e);if(J.IsCallable(Object.getOwnPropertySymbols)){E(t,Object.getOwnPropertySymbols(e))}return t}})}var xr=function ConvertExceptionToBoolean(e){return!o(e)};if(Object.preventExtensions){Object.assign(Pr,{isExtensible:function isExtensible(e){Mr(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){Mr(e);return xr(function(){Object.preventExtensions(e)})}})}if(s){var Nr=function get(e,r,n){var o=Object.getOwnPropertyDescriptor(e,r);if(!o){var i=Object.getPrototypeOf(e);if(i===null){return undefined}return Nr(i,r,n)}if("value"in o){return o.value}if(o.get){return t(o.get,n)}return undefined};var Cr=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return Cr(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!J.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return V.defineProperty(o,r,{value:n})}else{return V.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(Pr,{defineProperty:function defineProperty(e,t,r){Mr(e);return xr(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){Mr(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){Mr(e);var r=arguments.length>2?arguments[2]:e;return Nr(e,t,r)},set:function set(e,t,r){Mr(e);var n=arguments.length>3?arguments[3]:e;return Cr(e,t,r,n)}})}if(Object.getPrototypeOf){var Ar=Object.getPrototypeOf;Pr.getPrototypeOf=function getPrototypeOf(e){Mr(e);return Ar(e)}}if(Object.setPrototypeOf&&Pr.getPrototypeOf){var kr=function(e,t){var r=t;while(r){if(e===r){return true}r=Pr.getPrototypeOf(r)}return false};Object.assign(Pr,{setPrototypeOf:function setPrototypeOf(e,t){Mr(e);if(t!==null&&!J.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===V.getPrototypeOf(e)){return true}if(V.isExtensible&&!V.isExtensible(e)){return false}if(kr(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var _r=function(e,t){if(!J.IsCallable(m.Reflect[e])){y(m.Reflect,e,t)}else{var r=i(function(){m.Reflect[e](1);m.Reflect[e](NaN);m.Reflect[e](true);return true});if(r){Q(m.Reflect,e,t)}}};Object.keys(Pr).forEach(function(e){_r(e,Pr[e])});if(f&&m.Reflect.getPrototypeOf.name!=="getPrototypeOf"){var Rr=m.Reflect.getPrototypeOf;Q(m.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(Rr,m.Reflect,e)})}if(m.Reflect.setPrototypeOf){if(i(function(){m.Reflect.setPrototypeOf(1,{});return true})){Q(m.Reflect,"setPrototypeOf",Pr.setPrototypeOf)}}if(m.Reflect.defineProperty){if(!i(function(){var e=!m.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!m.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){Q(m.Reflect,"defineProperty",Pr.defineProperty)}}if(m.Reflect.construct){if(!i(function(){var e=function F(){};return m.Reflect.construct(function(){},[],e)instanceof e})){Q(m.Reflect,"construct",Pr.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Fr=Date.prototype.toString;var Dr=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return t(Fr,this)};Q(Date.prototype,"toString",Dr)}var zr={anchor:function anchor(e){return J.CreateHTML(this,"a","name",e)},big:function big(){return J.CreateHTML(this,"big","","")},blink:function blink(){return J.CreateHTML(this,"blink","","")},bold:function bold(){return J.CreateHTML(this,"b","","")},fixed:function fixed(){return J.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return J.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return J.CreateHTML(this,"font","size",e)},italics:function italics(){return J.CreateHTML(this,"i","","")},link:function link(e){return J.CreateHTML(this,"a","href",e)},small:function small(){return J.CreateHTML(this,"small","","")},strike:function strike(){return J.CreateHTML(this,"strike","","")},sub:function sub(){return J.CreateHTML(this,"sub","","")},sup:function sub(){return J.CreateHTML(this,"sup","","")}};c(Object.keys(zr),function(e){var r=String.prototype[e];var n=false;if(J.IsCallable(r)){var o=t(r,"",' " ');var i=S([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){Q(String.prototype,e,zr[e])}});var Lr=function(){if(!B.symbol(D.iterator)){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e(D())!=="undefined"){return true}if(e([D()])!=="[null]"){return true}var t={a:D()};t[D()]=true;if(e(t)!=="{}"){return true}return false}();var qr=i(function(){if(!B.symbol(D.iterator)){return true}return JSON.stringify(Object(D()))==="{}"&&JSON.stringify([Object(D())])==="[{}]"});if(Lr||!qr){var Gr=JSON.stringify;Q(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=J.IsCallable(n)?n:null;var a=function(e,r){var o=n?t(n,this,e,r):r;if(typeof o!=="symbol"){if(B.symbol(o)){return Qe({})(o)}else{return o}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return Gr.apply(this,o)})}return m});
	//# sourceMappingURL=es6-shim.map


/***/ },
/* 2 */
/***/ function(module, exports) {

	/*! *****************************************************************************
	Copyright (C) Microsoft. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	"use strict";
	var Reflect;
	(function (Reflect) {
	    // Load global or shim versions of Map, Set, and WeakMap
	    var functionPrototype = Object.getPrototypeOf(Function);
	    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
	    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
	    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
	    // [[Metadata]] internal slot
	    var __Metadata__ = new _WeakMap();
	    /**
	      * Applies a set of decorators to a property of a target object.
	      * @param decorators An array of decorators.
	      * @param target The target object.
	      * @param targetKey (Optional) The property key to decorate.
	      * @param targetDescriptor (Optional) The property descriptor for the target key
	      * @remarks Decorators are applied in reverse order.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     C = Reflect.decorate(decoratorsArray, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Object.defineProperty(C, "staticMethod",
	      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
	      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
	      *
	      *     // method (on prototype)
	      *     Object.defineProperty(C.prototype, "method",
	      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
	      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
	      *
	      */
	    function decorate(decorators, target, targetKey, targetDescriptor) {
	        if (!IsUndefined(targetDescriptor)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            else if (IsUndefined(targetKey)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(targetDescriptor)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
	        }
	        else if (!IsUndefined(targetKey)) {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsObject(target)) {
	                throw new TypeError();
	            }
	            targetKey = ToPropertyKey(targetKey);
	            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
	        }
	        else {
	            if (!IsArray(decorators)) {
	                throw new TypeError();
	            }
	            else if (!IsConstructor(target)) {
	                throw new TypeError();
	            }
	            return DecorateConstructor(decorators, target);
	        }
	    }
	    Reflect.decorate = decorate;
	    /**
	      * A default metadata decorator factory that can be used on a class, class member, or parameter.
	      * @param metadataKey The key for the metadata entry.
	      * @param metadataValue The value for the metadata entry.
	      * @returns A decorator function.
	      * @remarks
	      * If `metadataKey` is already defined for the target and target key, the
	      * metadataValue for that key will be overwritten.
	      * @example
	      *
	      *     // constructor
	      *     @Reflect.metadata(key, value)
	      *     class C {
	      *     }
	      *
	      *     // property (on constructor, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticProperty;
	      *     }
	      *
	      *     // property (on prototype, TypeScript only)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         property;
	      *     }
	      *
	      *     // method (on constructor)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         static staticMethod() { }
	      *     }
	      *
	      *     // method (on prototype)
	      *     class C {
	      *         @Reflect.metadata(key, value)
	      *         method() { }
	      *     }
	      *
	      */
	    function metadata(metadataKey, metadataValue) {
	        function decorator(target, targetKey) {
	            if (!IsUndefined(targetKey)) {
	                if (!IsObject(target)) {
	                    throw new TypeError();
	                }
	                targetKey = ToPropertyKey(targetKey);
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	            }
	            else {
	                if (!IsConstructor(target)) {
	                    throw new TypeError();
	                }
	                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, undefined);
	            }
	        }
	        return decorator;
	    }
	    Reflect.metadata = metadata;
	    /**
	      * Define a unique metadata entry on the target.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param metadataValue A value that contains attached metadata.
	      * @param target The target object on which to define metadata.
	      * @param targetKey (Optional) The property key for the target.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     Reflect.defineMetadata("custom:annotation", options, C);
	      *
	      *     // property (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
	      *
	      *     // decorator factory as metadata-producing annotation.
	      *     function MyAnnotation(options): Decorator {
	      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
	      *     }
	      *
	      */
	    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
	    }
	    Reflect.defineMetadata = defineMetadata;
	    /**
	      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasMetadata = hasMetadata;
	    /**
	      * Gets a value indicating whether the target object has the provided metadata key defined.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function hasOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.hasOwnMetadata = hasOwnMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getMetadata = getMetadata;
	    /**
	      * Gets the metadata value for the provided metadata key on the target object.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function getOwnMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
	    }
	    Reflect.getOwnMetadata = getOwnMetadata;
	    /**
	      * Gets the metadata keys defined on the target object or its prototype chain.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryMetadataKeys(target, targetKey);
	    }
	    Reflect.getMetadataKeys = getMetadataKeys;
	    /**
	      * Gets the unique metadata keys defined on the target object.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns An array of unique metadata keys.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.getOwnMetadataKeys(C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
	      *
	      */
	    function getOwnMetadataKeys(target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        return OrdinaryOwnMetadataKeys(target, targetKey);
	    }
	    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
	    /**
	      * Deletes the metadata entry from the target object with the provided key.
	      * @param metadataKey A key used to store and retrieve metadata.
	      * @param target The target object on which the metadata is defined.
	      * @param targetKey (Optional) The property key for the target.
	      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
	      * @example
	      *
	      *     class C {
	      *         // property declarations are not part of ES6, though they are valid in TypeScript:
	      *         // static staticProperty;
	      *         // property;
	      *
	      *         constructor(p) { }
	      *         static staticMethod(p) { }
	      *         method(p) { }
	      *     }
	      *
	      *     // constructor
	      *     result = Reflect.deleteMetadata("custom:annotation", C);
	      *
	      *     // property (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
	      *
	      *     // property (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
	      *
	      *     // method (on constructor)
	      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
	      *
	      *     // method (on prototype)
	      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
	      *
	      */
	    function deleteMetadata(metadataKey, target, targetKey) {
	        if (!IsObject(target)) {
	            throw new TypeError();
	        }
	        else if (!IsUndefined(targetKey)) {
	            targetKey = ToPropertyKey(targetKey);
	        }
	        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
	        if (IsUndefined(metadataMap)) {
	            return false;
	        }
	        if (!metadataMap.delete(metadataKey)) {
	            return false;
	        }
	        if (metadataMap.size > 0) {
	            return true;
	        }
	        var targetMetadata = __Metadata__.get(target);
	        targetMetadata.delete(targetKey);
	        if (targetMetadata.size > 0) {
	            return true;
	        }
	        __Metadata__.delete(target);
	        return true;
	    }
	    Reflect.deleteMetadata = deleteMetadata;
	    function DecorateConstructor(decorators, target) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target);
	            if (!IsUndefined(decorated)) {
	                if (!IsConstructor(decorated)) {
	                    throw new TypeError();
	                }
	                target = decorated;
	            }
	        }
	        return target;
	    }
	    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            var decorated = decorator(target, propertyKey, descriptor);
	            if (!IsUndefined(decorated)) {
	                if (!IsObject(decorated)) {
	                    throw new TypeError();
	                }
	                descriptor = decorated;
	            }
	        }
	        return descriptor;
	    }
	    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
	        for (var i = decorators.length - 1; i >= 0; --i) {
	            var decorator = decorators[i];
	            decorator(target, propertyKey);
	        }
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
	    function GetOrCreateMetadataMap(target, targetKey, create) {
	        var targetMetadata = __Metadata__.get(target);
	        if (!targetMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            targetMetadata = new _Map();
	            __Metadata__.set(target, targetMetadata);
	        }
	        var keyMetadata = targetMetadata.get(targetKey);
	        if (!keyMetadata) {
	            if (!create) {
	                return undefined;
	            }
	            keyMetadata = new _Map();
	            targetMetadata.set(targetKey, keyMetadata);
	        }
	        return keyMetadata;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
	    function OrdinaryHasMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return true;
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryHasMetadata(MetadataKey, parent, P);
	        }
	        return false;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
	    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, false);
	        if (metadataMap === undefined) {
	            return false;
	        }
	        return Boolean(metadataMap.has(MetadataKey));
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
	    function OrdinaryGetMetadata(MetadataKey, O, P) {
	        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
	        if (hasOwn) {
	            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
	        }
	        var parent = GetPrototypeOf(O);
	        if (parent !== null) {
	            return OrdinaryGetMetadata(MetadataKey, parent, P);
	        }
	        return undefined;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
	    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, false);
	        if (metadataMap === undefined) {
	            return undefined;
	        }
	        return metadataMap.get(MetadataKey);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
	    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
	        var metadataMap = GetOrCreateMetadataMap(O, P, true);
	        metadataMap.set(MetadataKey, MetadataValue);
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
	    function OrdinaryMetadataKeys(O, P) {
	        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
	        var parent = GetPrototypeOf(O);
	        if (parent === null) {
	            return ownKeys;
	        }
	        var parentKeys = OrdinaryMetadataKeys(parent, P);
	        if (parentKeys.length <= 0) {
	            return ownKeys;
	        }
	        if (ownKeys.length <= 0) {
	            return parentKeys;
	        }
	        var set = new _Set();
	        var keys = [];
	        for (var _i = 0; _i < ownKeys.length; _i++) {
	            var key = ownKeys[_i];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        for (var _a = 0; _a < parentKeys.length; _a++) {
	            var key = parentKeys[_a];
	            var hasKey = set.has(key);
	            if (!hasKey) {
	                set.add(key);
	                keys.push(key);
	            }
	        }
	        return keys;
	    }
	    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
	    function OrdinaryOwnMetadataKeys(target, targetKey) {
	        var metadataMap = GetOrCreateMetadataMap(target, targetKey, false);
	        var keys = [];
	        if (metadataMap) {
	            metadataMap.forEach(function (_, key) { return keys.push(key); });
	        }
	        return keys;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
	    function IsUndefined(x) {
	        return x === undefined;
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
	    function IsArray(x) {
	        return Array.isArray(x);
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
	    function IsObject(x) {
	        return typeof x === "object" ? x !== null : typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
	    function IsConstructor(x) {
	        return typeof x === "function";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
	    function IsSymbol(x) {
	        return typeof x === "symbol";
	    }
	    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
	    function ToPropertyKey(value) {
	        if (IsSymbol(value)) {
	            return value;
	        }
	        return String(value);
	    }
	    function GetPrototypeOf(O) {
	        var proto = Object.getPrototypeOf(O);
	        if (typeof O !== "function" || O === functionPrototype) {
	            return proto;
	        }
	        // TypeScript doesn't set __proto__ in ES5, as it's non-standard. 
	        // Try to determine the superclass constructor. Compatible implementations
	        // must either set __proto__ on a subclass constructor to the superclass constructor,
	        // or ensure each class has a valid `constructor` property on its prototype that
	        // points back to the constructor.
	        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
	        // This is the case when in ES6 or when using __proto__ in a compatible browser.
	        if (proto !== functionPrototype) {
	            return proto;
	        }
	        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
	        var prototype = O.prototype;
	        var prototypeProto = Object.getPrototypeOf(prototype);
	        if (prototypeProto == null || prototypeProto === Object.prototype) {
	            return proto;
	        }
	        // if the constructor was not a function, then we cannot determine the heritage.
	        var constructor = prototypeProto.constructor;
	        if (typeof constructor !== "function") {
	            return proto;
	        }
	        // if we have some kind of self-reference, then we cannot determine the heritage.
	        if (constructor === O) {
	            return proto;
	        }
	        // we have a pretty good guess at the heritage.
	        return constructor;
	    }
	    // naive Map shim
	    function CreateMapPolyfill() {
	        var cacheSentinel = {};
	        function Map() {
	            this._keys = [];
	            this._values = [];
	            this._cache = cacheSentinel;
	        }
	        Map.prototype = {
	            get size() {
	                return this._keys.length;
	            },
	            has: function (key) {
	                if (key === this._cache) {
	                    return true;
	                }
	                if (this._find(key) >= 0) {
	                    this._cache = key;
	                    return true;
	                }
	                return false;
	            },
	            get: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._cache = key;
	                    return this._values[index];
	                }
	                return undefined;
	            },
	            set: function (key, value) {
	                this.delete(key);
	                this._keys.push(key);
	                this._values.push(value);
	                this._cache = key;
	                return this;
	            },
	            delete: function (key) {
	                var index = this._find(key);
	                if (index >= 0) {
	                    this._keys.splice(index, 1);
	                    this._values.splice(index, 1);
	                    this._cache = cacheSentinel;
	                    return true;
	                }
	                return false;
	            },
	            clear: function () {
	                this._keys.length = 0;
	                this._values.length = 0;
	                this._cache = cacheSentinel;
	            },
	            forEach: function (callback, thisArg) {
	                var size = this.size;
	                for (var i = 0; i < size; ++i) {
	                    var key = this._keys[i];
	                    var value = this._values[i];
	                    this._cache = key;
	                    callback.call(this, value, key, this);
	                }
	            },
	            _find: function (key) {
	                var keys = this._keys;
	                var size = keys.length;
	                for (var i = 0; i < size; ++i) {
	                    if (keys[i] === key) {
	                        return i;
	                    }
	                }
	                return -1;
	            }
	        };
	        return Map;
	    }
	    // naive Set shim
	    function CreateSetPolyfill() {
	        var cacheSentinel = {};
	        function Set() {
	            this._map = new _Map();
	        }
	        Set.prototype = {
	            get size() {
	                return this._map.length;
	            },
	            has: function (value) {
	                return this._map.has(value);
	            },
	            add: function (value) {
	                this._map.set(value, value);
	                return this;
	            },
	            delete: function (value) {
	                return this._map.delete(value);
	            },
	            clear: function () {
	                this._map.clear();
	            },
	            forEach: function (callback, thisArg) {
	                this._map.forEach(callback, thisArg);
	            }
	        };
	        return Set;
	    }
	    // naive WeakMap shim
	    function CreateWeakMapPolyfill() {
	        var UUID_SIZE = 16;
	        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
	        var nodeCrypto = isNode && require("crypto");
	        var hasOwn = Object.prototype.hasOwnProperty;
	        var keys = {};
	        var rootKey = CreateUniqueKey();
	        function WeakMap() {
	            this._key = CreateUniqueKey();
	        }
	        WeakMap.prototype = {
	            has: function (target) {
	                var table = GetOrCreateWeakMapTable(target, false);
	                if (table) {
	                    return this._key in table;
	                }
	                return false;
	            },
	            get: function (target) {
	                var table = GetOrCreateWeakMapTable(target, false);
	                if (table) {
	                    return table[this._key];
	                }
	                return undefined;
	            },
	            set: function (target, value) {
	                var table = GetOrCreateWeakMapTable(target, true);
	                table[this._key] = value;
	                return this;
	            },
	            delete: function (target) {
	                var table = GetOrCreateWeakMapTable(target, false);
	                if (table && this._key in table) {
	                    return delete table[this._key];
	                }
	                return false;
	            },
	            clear: function () {
	                // NOTE: not a real clear, just makes the previous data unreachable
	                this._key = CreateUniqueKey();
	            }
	        };
	        function FillRandomBytes(buffer, size) {
	            for (var i = 0; i < size; ++i) {
	                buffer[i] = Math.random() * 255 | 0;
	            }
	        }
	        function GenRandomBytes(size) {
	            if (nodeCrypto) {
	                var data = nodeCrypto.randomBytes(size);
	                return data;
	            }
	            else if (typeof Uint8Array === "function") {
	                var data = new Uint8Array(size);
	                if (typeof crypto !== "undefined") {
	                    crypto.getRandomValues(data);
	                }
	                else if (typeof msCrypto !== "undefined") {
	                    msCrypto.getRandomValues(data);
	                }
	                else {
	                    FillRandomBytes(data, size);
	                }
	                return data;
	            }
	            else {
	                var data = new Array(size);
	                FillRandomBytes(data, size);
	                return data;
	            }
	        }
	        function CreateUUID() {
	            var data = GenRandomBytes(UUID_SIZE);
	            // mark as random - RFC 4122 § 4.4
	            data[6] = data[6] & 0x4f | 0x40;
	            data[8] = data[8] & 0xbf | 0x80;
	            var result = "";
	            for (var offset = 0; offset < UUID_SIZE; ++offset) {
	                var byte = data[offset];
	                if (offset === 4 || offset === 6 || offset === 8) {
	                    result += "-";
	                }
	                if (byte < 16) {
	                    result += "0";
	                }
	                result += byte.toString(16).toLowerCase();
	            }
	            return result;
	        }
	        function CreateUniqueKey() {
	            var key;
	            do {
	                key = "@@WeakMap@@" + CreateUUID();
	            } while (hasOwn.call(keys, key));
	            keys[key] = true;
	            return key;
	        }
	        function GetOrCreateWeakMapTable(target, create) {
	            if (!hasOwn.call(target, rootKey)) {
	                if (!create) {
	                    return undefined;
	                }
	                Object.defineProperty(target, rootKey, { value: Object.create(null) });
	            }
	            return target[rootKey];
	        }
	        return WeakMap;
	    }
	    // hook global Reflect
	    (function (__global) {
	        if (typeof __global.Reflect !== "undefined") {
	            if (__global.Reflect !== Reflect) {
	                for (var p in Reflect) {
	                    __global.Reflect[p] = Reflect[p];
	                }
	            }
	        }
	        else {
	            __global.Reflect = Reflect;
	        }
	    })(typeof window !== "undefined" ? window :
	        typeof WorkerGlobalScope !== "undefined" ? self :
	            typeof global !== "undefined" ? global :
	                Function("return this;")());
	})(Reflect || (Reflect = {}));
	//# sourceMappingURL=Reflect.js.map

/***/ },
/* 3 */
/***/ function(module, exports) {

	// Copyright 2014 Google Inc. All rights reserved.
	//
	// Licensed under the Apache License, Version 2.0 (the "License");
	// you may not use this file except in compliance with the License.
	//     You may obtain a copy of the License at
	//
	// http://www.apache.org/licenses/LICENSE-2.0
	//
	// Unless required by applicable law or agreed to in writing, software
	// distributed under the License is distributed on an "AS IS" BASIS,
	// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	//     See the License for the specific language governing permissions and
	// limitations under the License.

	!function(a,b){!function(){var a=0;if(window.requestAnimationFrame||(window.requestAnimationFrame=function(b,c){var d=Date.now(),e=Math.max(0,16-(d-a)),f=window.setTimeout(function(){b(d+e)},e);return a=d+e,f}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(a){clearTimeout(a)}),document.documentElement.animate){var b=document.documentElement.animate([],0),c=!0;if(b&&(c=!1,"play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(a){void 0===b[a]&&(c=!0)})),!c)return}var d={},e={},f={},g=null;!function(a,b){function c(a){if("number"==typeof a)return a;var b={};for(var c in a)b[c]=a[c];return b}function d(){this._delay=0,this._endDelay=0,this._fill="none",this._iterationStart=0,this._iterations=1,this._duration=0,this._playbackRate=1,this._direction="normal",this._easing="linear"}function e(a,b,c){var e=new d;return b&&(e.fill="both",e.duration="auto"),"number"!=typeof a||isNaN(a)?void 0!==a&&Object.getOwnPropertyNames(a).forEach(function(b){if("auto"!=a[b]){if(("number"==typeof e[b]||"duration"==b)&&("number"!=typeof a[b]||isNaN(a[b])))return;if("fill"==b&&-1==t.indexOf(a[b]))return;if("direction"==b&&-1==u.indexOf(a[b]))return;e[b]=a[b]}}):e.duration=a,e}function f(a){return"number"==typeof a&&(a=isNaN(a)?{duration:0}:{duration:a}),a}function g(b,c){b=a.numericTimingToObject(b);var d=e(b,c);return d._easing=j(d.easing),d}function h(a,b,c,d){return 0>a||a>1||0>c||c>1?C:function(e){function f(a,b,c){return 3*a*(1-c)*(1-c)*c+3*b*(1-c)*c*c+c*c*c}if(0==e||1==e)return e;for(var g=0,h=1;;){var i=(g+h)/2,j=f(a,c,i);if(Math.abs(e-j)<.001)return f(b,d,i);e>j?g=i:h=i}}}function i(a,b){return function(c){if(c>=1)return 1;var d=1/a;return c+=b*d,c-c%d}}function j(a){var b=A.exec(a);if(b)return h.apply(this,b.slice(1).map(Number));var c=B.exec(a);if(c)return i(Number(c[1]),{start:v,middle:w,end:x}[c[2]]);var d=y[a];return d?d:C}function k(a){return Math.abs(l(a)/a.playbackRate)}function l(a){return a.duration*a.iterations}function m(a,b,c){return null==b?D:b<c.delay?E:b>=c.delay+a?F:G}function n(a,b,c,d,e){switch(d){case E:return"backwards"==b||"both"==b?0:null;case G:return c-e;case F:return"forwards"==b||"both"==b?a:null;case D:return null}}function o(a,b,c,d){return(d.playbackRate<0?b-a:b)*d.playbackRate+c}function p(a,b,c,d,e){return c===1/0||c===-(1/0)||c-d==b&&e.iterations&&(e.iterations+e.iterationStart)%1==0?a:c%a}function q(a,b,c,d){return 0===c?0:b==a?d.iterationStart+d.iterations-1:Math.floor(c/a)}function r(a,b,c,d){var e=a%2>=1,f="normal"==d.direction||d.direction==(e?"alternate-reverse":"alternate"),g=f?c:b-c,h=g/b;return b*d.easing(h)}function s(a,b,c){var d=m(a,b,c),e=n(a,c.fill,b,d,c.delay);if(null===e)return null;if(0===a)return d===E?0:1;var f=c.iterationStart*c.duration,g=o(a,e,f,c),h=p(c.duration,l(c),g,f,c),i=q(c.duration,h,g,c);return r(i,c.duration,h,c)/c.duration}var t="backwards|forwards|both|none".split("|"),u="reverse|alternate|alternate-reverse".split("|");d.prototype={_setMember:function(b,c){this["_"+b]=c,this._effect&&(this._effect._timingInput[b]=c,this._effect._timing=a.normalizeTimingInput(a.normalizeTimingInput(this._effect._timingInput)),this._effect.activeDuration=a.calculateActiveDuration(this._effect._timing),this._effect._animation&&this._effect._animation._rebuildUnderlyingAnimation())},get playbackRate(){return this._playbackRate},set delay(a){this._setMember("delay",a)},get delay(){return this._delay},set endDelay(a){this._setMember("endDelay",a)},get endDelay(){return this._endDelay},set fill(a){this._setMember("fill",a)},get fill(){return this._fill},set iterationStart(a){this._setMember("iterationStart",a)},get iterationStart(){return this._iterationStart},set duration(a){this._setMember("duration",a)},get duration(){return this._duration},set direction(a){this._setMember("direction",a)},get direction(){return this._direction},set easing(a){this._setMember("easing",a)},get easing(){return this._easing},set iterations(a){this._setMember("iterations",a)},get iterations(){return this._iterations}};var v=1,w=.5,x=0,y={ease:h(.25,.1,.25,1),"ease-in":h(.42,0,1,1),"ease-out":h(0,0,.58,1),"ease-in-out":h(.42,0,.58,1),"step-start":i(1,v),"step-middle":i(1,w),"step-end":i(1,x)},z="\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",A=new RegExp("cubic-bezier\\("+z+","+z+","+z+","+z+"\\)"),B=/steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,C=function(a){return a},D=0,E=1,F=2,G=3;a.cloneTimingInput=c,a.makeTiming=e,a.numericTimingToObject=f,a.normalizeTimingInput=g,a.calculateActiveDuration=k,a.calculateTimeFraction=s,a.calculatePhase=m,a.toTimingFunction=j}(d,g),function(a,b){function c(a,b){return a in i?i[a][b]||b:b}function d(a,b,d){var e=f[a];if(e){g.style[a]=b;for(var h in e){var i=e[h],j=g.style[i];d[i]=c(i,j)}}else d[a]=c(a,b)}function e(b){function c(){var a=e.length;null==e[a-1].offset&&(e[a-1].offset=1),a>1&&null==e[0].offset&&(e[0].offset=0);for(var b=0,c=e[0].offset,d=1;a>d;d++){var f=e[d].offset;if(null!=f){for(var g=1;d-b>g;g++)e[b+g].offset=c+(f-c)*g/(d-b);b=d,c=f}}}if(!Array.isArray(b)&&null!==b)throw new TypeError("Keyframes must be null or an array of keyframes");if(null==b)return[];for(var e=b.map(function(b){var c={};for(var e in b){var f=b[e];if("offset"==e){if(null!=f&&(f=Number(f),!isFinite(f)))throw new TypeError("keyframe offsets must be numbers.")}else{if("composite"==e)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"add compositing is not supported"};f="easing"==e?a.toTimingFunction(f):""+f}d(e,f,c)}return void 0==c.offset&&(c.offset=null),void 0==c.easing&&(c.easing=a.toTimingFunction("linear")),c}),f=!0,g=-(1/0),h=0;h<e.length;h++){var i=e[h].offset;if(null!=i){if(g>i)throw{code:DOMException.INVALID_MODIFICATION_ERR,name:"InvalidModificationError",message:"Keyframes are not loosely sorted by offset. Sort or specify offsets."};g=i}else f=!1}return e=e.filter(function(a){return a.offset>=0&&a.offset<=1}),f||c(),e}var f={background:["backgroundImage","backgroundPosition","backgroundSize","backgroundRepeat","backgroundAttachment","backgroundOrigin","backgroundClip","backgroundColor"],border:["borderTopColor","borderTopStyle","borderTopWidth","borderRightColor","borderRightStyle","borderRightWidth","borderBottomColor","borderBottomStyle","borderBottomWidth","borderLeftColor","borderLeftStyle","borderLeftWidth"],borderBottom:["borderBottomWidth","borderBottomStyle","borderBottomColor"],borderColor:["borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"],borderLeft:["borderLeftWidth","borderLeftStyle","borderLeftColor"],borderRadius:["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],borderRight:["borderRightWidth","borderRightStyle","borderRightColor"],borderTop:["borderTopWidth","borderTopStyle","borderTopColor"],borderWidth:["borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth"],flex:["flexGrow","flexShrink","flexBasis"],font:["fontFamily","fontSize","fontStyle","fontVariant","fontWeight","lineHeight"],margin:["marginTop","marginRight","marginBottom","marginLeft"],outline:["outlineColor","outlineStyle","outlineWidth"],padding:["paddingTop","paddingRight","paddingBottom","paddingLeft"]},g=document.createElementNS("http://www.w3.org/1999/xhtml","div"),h={thin:"1px",medium:"3px",thick:"5px"},i={borderBottomWidth:h,borderLeftWidth:h,borderRightWidth:h,borderTopWidth:h,fontSize:{"xx-small":"60%","x-small":"75%",small:"89%",medium:"100%",large:"120%","x-large":"150%","xx-large":"200%"},fontWeight:{normal:"400",bold:"700"},outlineWidth:h,textShadow:{none:"0px 0px 0px transparent"},boxShadow:{none:"0px 0px 0px 0px transparent"}};a.normalizeKeyframes=e}(d,g),function(a,b,c){function d(a){for(var b={},c=0;c<a.length;c++)for(var d in a[c])if("offset"!=d&&"easing"!=d&&"composite"!=d){var e={offset:a[c].offset,easing:a[c].easing,value:a[c][d]};b[d]=b[d]||[],b[d].push(e)}for(var f in b){var g=b[f];if(0!=g[0].offset||1!=g[g.length-1].offset)throw{type:DOMException.NOT_SUPPORTED_ERR,name:"NotSupportedError",message:"Partial keyframes are not supported"}}return b}function e(a){var c=[];for(var d in a)for(var e=a[d],f=0;f<e.length-1;f++){var g=e[f].offset,h=e[f+1].offset,i=e[f].value,j=e[f+1].value;g==h&&(1==h?i=j:j=i),c.push({startTime:g,endTime:h,easing:e[f].easing,property:d,interpolation:b.propertyInterpolation(d,i,j)})}return c.sort(function(a,b){return a.startTime-b.startTime}),c}b.convertEffectInput=function(c){var f=a.normalizeKeyframes(c),g=d(f),h=e(g);return function(a,c){null!=c&&h.filter(function(a){return 0>=c&&0==a.startTime||c>=1&&1==a.endTime||c>=a.startTime&&c<=a.endTime}).forEach(function(d){var e=c-d.startTime,f=d.endTime-d.startTime,g=0==f?0:d.easing(e/f);b.apply(a,d.property,d.interpolation(g))})}}}(d,e,g),function(a,b){function c(a,b,c){f[c]=f[c]||[],f[c].push([a,b])}function d(a,b,d){for(var e=0;e<d.length;e++){var f=d[e];c(a,b,f),/-/.test(f)&&c(a,b,f.replace(/-(.)/g,function(a,b){return b.toUpperCase()}))}}function e(b,c,d){if("initial"==c||"initial"==d){var e=b.replace(/-(.)/g,function(a,b){return b.toUpperCase()});"initial"==c&&(c=g[e]),"initial"==d&&(d=g[e])}for(var h=c==d?[]:f[b],i=0;h&&i<h.length;i++){var j=h[i][0](c),k=h[i][0](d);if(void 0!==j&&void 0!==k){var l=h[i][1](j,k);if(l){var m=a.Interpolation.apply(null,l);return function(a){return 0==a?c:1==a?d:m(a)}}}}return a.Interpolation(!1,!0,function(a){return a?d:c})}var f={};a.addPropertiesHandler=d;var g={backgroundColor:"transparent",backgroundPosition:"0% 0%",borderBottomColor:"currentColor",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px",borderBottomWidth:"3px",borderLeftColor:"currentColor",borderLeftWidth:"3px",borderRightColor:"currentColor",borderRightWidth:"3px",borderSpacing:"2px",borderTopColor:"currentColor",borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderTopWidth:"3px",bottom:"auto",clip:"rect(0px, 0px, 0px, 0px)",color:"black",fontSize:"100%",fontWeight:"400",height:"auto",left:"auto",letterSpacing:"normal",lineHeight:"120%",marginBottom:"0px",marginLeft:"0px",marginRight:"0px",marginTop:"0px",maxHeight:"none",maxWidth:"none",minHeight:"0px",minWidth:"0px",opacity:"1.0",outlineColor:"invert",outlineOffset:"0px",outlineWidth:"3px",paddingBottom:"0px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",right:"auto",textIndent:"0px",textShadow:"0px 0px 0px transparent",top:"auto",transform:"",verticalAlign:"0px",visibility:"visible",width:"auto",wordSpacing:"normal",zIndex:"auto"};a.propertyInterpolation=e}(e,g),function(a,b,c){function d(b){var c=a.calculateActiveDuration(b),d=function(d){return a.calculateTimeFraction(c,d,b)};return d._totalDuration=b.delay+c+b.endDelay,d._isCurrent=function(d){var e=a.calculatePhase(c,d,b);return e===PhaseActive||e===PhaseBefore},d}b.KeyframeEffect=function(c,e,f){var g,h=d(a.normalizeTimingInput(f)),i=b.convertEffectInput(e),j=function(){i(c,g)};return j._update=function(a){return g=h(a),null!==g},j._clear=function(){i(c,null)},j._hasSameTarget=function(a){return c===a},j._isCurrent=h._isCurrent,j._totalDuration=h._totalDuration,j},b.NullEffect=function(a){var b=function(){a&&(a(),a=null)};return b._update=function(){return null},b._totalDuration=0,b._isCurrent=function(){return!1},b._hasSameTarget=function(){return!1},b}}(d,e,g),function(a,b){a.apply=function(b,c,d){b.style[a.propertyName(c)]=d},a.clear=function(b,c){b.style[a.propertyName(c)]=""}}(e,g),function(a){window.Element.prototype.animate=function(b,c){return a.timeline._play(a.KeyframeEffect(this,b,c))}}(e),function(a,b){function c(a,b,d){if("number"==typeof a&&"number"==typeof b)return a*(1-d)+b*d;if("boolean"==typeof a&&"boolean"==typeof b)return.5>d?a:b;if(a.length==b.length){for(var e=[],f=0;f<a.length;f++)e.push(c(a[f],b[f],d));return e}throw"Mismatched interpolation arguments "+a+":"+b}a.Interpolation=function(a,b,d){return function(e){return d(c(a,b,e))}}}(e,g),function(a,b,c){a.sequenceNumber=0;var d=function(a,b,c){this.target=a,this.currentTime=b,this.timelineTime=c,this.type="finish",this.bubbles=!1,this.cancelable=!1,this.currentTarget=a,this.defaultPrevented=!1,this.eventPhase=Event.AT_TARGET,this.timeStamp=Date.now()};b.Animation=function(b){this._sequenceNumber=a.sequenceNumber++,this._currentTime=0,this._startTime=null,this._paused=!1,this._playbackRate=1,this._inTimeline=!0,this._finishedFlag=!1,this.onfinish=null,this._finishHandlers=[],this._effect=b,this._inEffect=this._effect._update(0),this._idle=!0,this._currentTimePending=!1},b.Animation.prototype={_ensureAlive:function(){this.playbackRate<0&&0===this.currentTime?this._inEffect=this._effect._update(-1):this._inEffect=this._effect._update(this.currentTime),this._inTimeline||!this._inEffect&&this._finishedFlag||(this._inTimeline=!0,b.timeline._animations.push(this))},_tickCurrentTime:function(a,b){a!=this._currentTime&&(this._currentTime=a,this._isFinished&&!b&&(this._currentTime=this._playbackRate>0?this._totalDuration:0),this._ensureAlive())},get currentTime(){return this._idle||this._currentTimePending?null:this._currentTime},set currentTime(a){a=+a,isNaN(a)||(b.restart(),this._paused||null==this._startTime||(this._startTime=this._timeline.currentTime-a/this._playbackRate),this._currentTimePending=!1,this._currentTime!=a&&(this._tickCurrentTime(a,!0),b.invalidateEffects()))},get startTime(){return this._startTime},set startTime(a){a=+a,isNaN(a)||this._paused||this._idle||(this._startTime=a,this._tickCurrentTime((this._timeline.currentTime-this._startTime)*this.playbackRate),b.invalidateEffects())},get playbackRate(){return this._playbackRate},set playbackRate(a){if(a!=this._playbackRate){var b=this.currentTime;this._playbackRate=a,this._startTime=null,"paused"!=this.playState&&"idle"!=this.playState&&this.play(),null!=b&&(this.currentTime=b)}},get _isFinished(){return!this._idle&&(this._playbackRate>0&&this._currentTime>=this._totalDuration||this._playbackRate<0&&this._currentTime<=0)},get _totalDuration(){return this._effect._totalDuration},get playState(){return this._idle?"idle":null==this._startTime&&!this._paused&&0!=this.playbackRate||this._currentTimePending?"pending":this._paused?"paused":this._isFinished?"finished":"running"},play:function(){this._paused=!1,(this._isFinished||this._idle)&&(this._currentTime=this._playbackRate>0?0:this._totalDuration,this._startTime=null,b.invalidateEffects()),this._finishedFlag=!1,b.restart(),this._idle=!1,this._ensureAlive()},pause:function(){this._isFinished||this._paused||this._idle||(this._currentTimePending=!0),this._startTime=null,this._paused=!0},finish:function(){this._idle||(this.currentTime=this._playbackRate>0?this._totalDuration:0,this._startTime=this._totalDuration-this.currentTime,this._currentTimePending=!1)},cancel:function(){this._inEffect&&(this._inEffect=!1,this._idle=!0,this.currentTime=0,this._startTime=null,this._effect._update(null),b.invalidateEffects(),b.restart())},reverse:function(){this.playbackRate*=-1,this.play()},addEventListener:function(a,b){"function"==typeof b&&"finish"==a&&this._finishHandlers.push(b)},removeEventListener:function(a,b){if("finish"==a){var c=this._finishHandlers.indexOf(b);c>=0&&this._finishHandlers.splice(c,1)}},_fireEvents:function(a){var b=this._isFinished;if((b||this._idle)&&!this._finishedFlag){var c=new d(this,this._currentTime,a),e=this._finishHandlers.concat(this.onfinish?[this.onfinish]:[]);e.forEach(function(a){a.call(c.target,c)})}this._finishedFlag=b},_tick:function(a){return this._idle||this._paused||(null==this._startTime?this.startTime=a-this._currentTime/this.playbackRate:this._isFinished||this._tickCurrentTime((a-this._startTime)*this.playbackRate)),this._currentTimePending=!1,this._fireEvents(a),!this._idle&&(this._inEffect||!this._finishedFlag)}}}(d,e,g),function(a,b,c){function d(a){a||(a=Date.now());var b=j;j=[],a<t.currentTime&&(a=t.currentTime),h(a),b.forEach(function(b){b[1](a)}),p&&h(a),g(),m=void 0}function e(a,b){return a._sequenceNumber-b._sequenceNumber}function f(){this._animations=[],this.currentTime=window.performance&&performance.now?performance.now():0}function g(){q.forEach(function(a){a()}),q.length=0}function h(a){o=!1;var c=b.timeline;c.currentTime=a,c._animations.sort(e),n=!1;var d=c._animations;c._animations=[];var f=[],g=[];d=d.filter(function(b){return b._inTimeline=b._tick(a),b._inEffect?g.push(b._effect):f.push(b._effect),b._isFinished||b._paused||b._idle||(n=!0),b._inTimeline}),q.push.apply(q,f),q.push.apply(q,g),c._animations.push.apply(c._animations,d),p=!1,n&&requestAnimationFrame(function(){})}var i=window.requestAnimationFrame,j=[],k=0;window.requestAnimationFrame=function(a){var b=k++;return 0==j.length&&i(d),j.push([b,a]),b},window.cancelAnimationFrame=function(a){j.forEach(function(b){b[0]==a&&(b[1]=function(){})})},f.prototype={_play:function(c){c._timing=a.normalizeTimingInput(c.timing);var d=new b.Animation(c);return d._idle=!1,d._timeline=this,this._animations.push(d),b.restart(),b.invalidateEffects(),d}};var l,m=void 0,l=function(){return void 0==m&&(m=performance.now()),m},n=!1,o=!1;b.restart=function(){return n||(n=!0,requestAnimationFrame(function(){}),o=!0),o};var p=!1;b.invalidateEffects=function(){p=!0};var q=[],r=1e3/60,s=window.getComputedStyle;Object.defineProperty(window,"getComputedStyle",{configurable:!0,enumerable:!0,value:function(){if(p){var a=l();a-t.currentTime>0&&(t.currentTime+=r*(Math.floor((a-t.currentTime)/r)+1)),h(t.currentTime)}return g(),s.apply(this,arguments)}});var t=new f;b.timeline=t}(d,e,g),function(a){function b(a,b){var c=a.exec(b);return c?(c=a.ignoreCase?c[0].toLowerCase():c[0],[c,b.substr(c.length)]):void 0}function c(a,b){b=b.replace(/^\s*/,"");var c=a(b);return c?[c[0],c[1].replace(/^\s*/,"")]:void 0}function d(a,d,e){a=c.bind(null,a);for(var f=[];;){var g=a(e);if(!g)return[f,e];if(f.push(g[0]),e=g[1],g=b(d,e),!g||""==g[1])return[f,e];e=g[1]}}function e(a,b){for(var c=0,d=0;d<b.length&&(!/\s|,/.test(b[d])||0!=c);d++)if("("==b[d])c++;else if(")"==b[d]&&(c--,0==c&&d++,0>=c))break;var e=a(b.substr(0,d));return void 0==e?void 0:[e,b.substr(d)]}function f(a,b){for(var c=a,d=b;c&&d;)c>d?c%=d:d%=c;return c=a*b/(c+d)}function g(a){return function(b){var c=a(b);return c&&(c[0]=void 0),c}}function h(a,b){return function(c){var d=a(c);return d?d:[b,c]}}function i(b,c){for(var d=[],e=0;e<b.length;e++){var f=a.consumeTrimmed(b[e],c);if(!f||""==f[0])return;void 0!==f[0]&&d.push(f[0]),c=f[1]}return""==c?d:void 0}function j(a,b,c,d,e){for(var g=[],h=[],i=[],j=f(d.length,e.length),k=0;j>k;k++){var l=b(d[k%d.length],e[k%e.length]);if(!l)return;g.push(l[0]),h.push(l[1]),i.push(l[2])}return[g,h,function(b){var d=b.map(function(a,b){return i[b](a)}).join(c);return a?a(d):d}]}function k(a,b,c){for(var d=[],e=[],f=[],g=0,h=0;h<c.length;h++)if("function"==typeof c[h]){var i=c[h](a[g],b[g++]);d.push(i[0]),e.push(i[1]),f.push(i[2])}else!function(a){d.push(!1),e.push(!1),f.push(function(){return c[a]})}(h);return[d,e,function(a){for(var b="",c=0;c<a.length;c++)b+=f[c](a[c]);return b}]}a.consumeToken=b,a.consumeTrimmed=c,a.consumeRepeated=d,a.consumeParenthesised=e,a.ignore=g,a.optional=h,a.consumeList=i,a.mergeNestedRepeated=j.bind(null,null),a.mergeWrappedNestedRepeated=j,a.mergeList=k}(e),function(a){function b(b){function c(b){var c=a.consumeToken(/^inset/i,b);if(c)return d.inset=!0,c;var c=a.consumeLengthOrPercent(b);if(c)return d.lengths.push(c[0]),c;var c=a.consumeColor(b);return c?(d.color=c[0],c):void 0}var d={inset:!1,lengths:[],color:null},e=a.consumeRepeated(c,/^/,b);return e&&e[0].length?[d,e[1]]:void 0}function c(c){var d=a.consumeRepeated(b,/^,/,c);return d&&""==d[1]?d[0]:void 0}function d(b,c){for(;b.lengths.length<Math.max(b.lengths.length,c.lengths.length);)b.lengths.push({px:0});for(;c.lengths.length<Math.max(b.lengths.length,c.lengths.length);)c.lengths.push({px:0});if(b.inset==c.inset&&!!b.color==!!c.color){for(var d,e=[],f=[[],0],g=[[],0],h=0;h<b.lengths.length;h++){var i=a.mergeDimensions(b.lengths[h],c.lengths[h],2==h);f[0].push(i[0]),g[0].push(i[1]),e.push(i[2])}if(b.color&&c.color){var j=a.mergeColors(b.color,c.color);f[1]=j[0],g[1]=j[1],d=j[2]}return[f,g,function(a){for(var c=b.inset?"inset ":" ",f=0;f<e.length;f++)c+=e[f](a[0][f])+" ";return d&&(c+=d(a[1])),c}]}}function e(b,c,d,e){function f(a){return{inset:a,color:[0,0,0,0],lengths:[{px:0},{px:0},{px:0},{px:0}]}}for(var g=[],h=[],i=0;i<d.length||i<e.length;i++){var j=d[i]||f(e[i].inset),k=e[i]||f(d[i].inset);g.push(j),h.push(k)}return a.mergeNestedRepeated(b,c,g,h)}var f=e.bind(null,d,", ");a.addPropertiesHandler(c,f,["box-shadow","text-shadow"])}(e),function(a,b){function c(a){return a.toFixed(3).replace(".000","")}function d(a,b,c){return Math.min(b,Math.max(a,c))}function e(a){return/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a)?Number(a):void 0}function f(a,b){return[a,b,c]}function g(a,b){return 0!=a?i(0,1/0)(a,b):void 0}function h(a,b){return[a,b,function(a){return Math.round(d(1,1/0,a))}]}function i(a,b){return function(e,f){return[e,f,function(e){return c(d(a,b,e))}]}}function j(a,b){return[a,b,Math.round]}a.clamp=d,a.addPropertiesHandler(e,i(0,1/0),["border-image-width","line-height"]),a.addPropertiesHandler(e,i(0,1),["opacity","shape-image-threshold"]),a.addPropertiesHandler(e,g,["flex-grow","flex-shrink"]),a.addPropertiesHandler(e,h,["orphans","widows"]),a.addPropertiesHandler(e,j,["z-index"]),a.parseNumber=e,a.mergeNumbers=f,a.numberToString=c}(e,g),function(a,b){function c(a,b){return"visible"==a||"visible"==b?[0,1,function(c){return 0>=c?a:c>=1?b:"visible"}]:void 0}a.addPropertiesHandler(String,c,["visibility"])}(e),function(a,b){function c(a){a=a.trim(),f.fillStyle="#000",f.fillStyle=a;var b=f.fillStyle;if(f.fillStyle="#fff",f.fillStyle=a,b==f.fillStyle){f.fillRect(0,0,1,1);var c=f.getImageData(0,0,1,1).data;f.clearRect(0,0,1,1);var d=c[3]/255;return[c[0]*d,c[1]*d,c[2]*d,d]}}function d(b,c){return[b,c,function(b){function c(a){return Math.max(0,Math.min(255,a))}if(b[3])for(var d=0;3>d;d++)b[d]=Math.round(c(b[d]/b[3]));return b[3]=a.numberToString(a.clamp(0,1,b[3])),"rgba("+b.join(",")+")"}]}var e=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");e.width=e.height=1;var f=e.getContext("2d");a.addPropertiesHandler(c,d,["background-color","border-bottom-color","border-left-color","border-right-color","border-top-color","color","outline-color","text-decoration-color"]),a.consumeColor=a.consumeParenthesised.bind(null,c),a.mergeColors=d}(e,g),function(a,b){function c(a,b){if(b=b.trim().toLowerCase(),"0"==b&&"px".search(a)>=0)return{px:0};if(/^[^(]*$|^calc/.test(b)){b=b.replace(/calc\(/g,"(");var c={};b=b.replace(a,function(a){return c[a]=null,"U"+a});for(var d="U("+a.source+")",e=b.replace(/[-+]?(\d*\.)?\d+/g,"N").replace(new RegExp("N"+d,"g"),"D").replace(/\s[+-]\s/g,"O").replace(/\s/g,""),f=[/N\*(D)/g,/(N|D)[*\/]N/g,/(N|D)O\1/g,/\((N|D)\)/g],g=0;g<f.length;)f[g].test(e)?(e=e.replace(f[g],"$1"),g=0):g++;if("D"==e){for(var h in c){var i=eval(b.replace(new RegExp("U"+h,"g"),"").replace(new RegExp(d,"g"),"*0"));if(!isFinite(i))return;c[h]=i}return c}}}function d(a,b){return e(a,b,!0)}function e(b,c,d){var e,f=[];for(e in b)f.push(e);for(e in c)f.indexOf(e)<0&&f.push(e);return b=f.map(function(a){return b[a]||0}),c=f.map(function(a){return c[a]||0}),[b,c,function(b){var c=b.map(function(c,e){return 1==b.length&&d&&(c=Math.max(c,0)),a.numberToString(c)+f[e]}).join(" + ");return b.length>1?"calc("+c+")":c}]}var f="px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",g=c.bind(null,new RegExp(f,"g")),h=c.bind(null,new RegExp(f+"|%","g")),i=c.bind(null,/deg|rad|grad|turn/g);a.parseLength=g,a.parseLengthOrPercent=h,a.consumeLengthOrPercent=a.consumeParenthesised.bind(null,h),a.parseAngle=i,a.mergeDimensions=e;var j=a.consumeParenthesised.bind(null,g),k=a.consumeRepeated.bind(void 0,j,/^/),l=a.consumeRepeated.bind(void 0,k,/^,/);a.consumeSizePairList=l;var m=function(a){var b=l(a);return b&&""==b[1]?b[0]:void 0},n=a.mergeNestedRepeated.bind(void 0,d," "),o=a.mergeNestedRepeated.bind(void 0,n,",");a.mergeNonNegativeSizePair=n,a.addPropertiesHandler(m,o,["background-size"]),a.addPropertiesHandler(h,d,["border-bottom-width","border-image-width","border-left-width","border-right-width","border-top-width","flex-basis","font-size","height","line-height","max-height","max-width","outline-width","width"]),a.addPropertiesHandler(h,e,["border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius","bottom","left","letter-spacing","margin-bottom","margin-left","margin-right","margin-top","min-height","min-width","outline-offset","padding-bottom","padding-left","padding-right","padding-top","perspective","right","shape-margin","text-indent","top","vertical-align","word-spacing"])}(e,g),function(a,b){function c(b){return a.consumeLengthOrPercent(b)||a.consumeToken(/^auto/,b)}function d(b){var d=a.consumeList([a.ignore(a.consumeToken.bind(null,/^rect/)),a.ignore(a.consumeToken.bind(null,/^\(/)),a.consumeRepeated.bind(null,c,/^,/),a.ignore(a.consumeToken.bind(null,/^\)/))],b);return d&&4==d[0].length?d[0]:void 0}function e(b,c){return"auto"==b||"auto"==c?[!0,!1,function(d){var e=d?b:c;if("auto"==e)return"auto";var f=a.mergeDimensions(e,e);return f[2](f[0])}]:a.mergeDimensions(b,c)}function f(a){return"rect("+a+")"}var g=a.mergeWrappedNestedRepeated.bind(null,f,e,", ");a.parseBox=d,a.mergeBoxes=g,a.addPropertiesHandler(d,g,["clip"])}(e,g),function(a,b){function c(a){return function(b){var c=0;return a.map(function(a){return a===k?b[c++]:a})}}function d(a){return a}function e(b){if(b=b.toLowerCase().trim(),"none"==b)return[];for(var c,d=/\s*(\w+)\(([^)]*)\)/g,e=[],f=0;c=d.exec(b);){if(c.index!=f)return;f=c.index+c[0].length;var g=c[1],h=n[g];if(!h)return;var i=c[2].split(","),j=h[0];if(j.length<i.length)return;for(var k=[],o=0;o<j.length;o++){var p,q=i[o],r=j[o];if(p=q?{A:function(b){return"0"==b.trim()?m:a.parseAngle(b)},N:a.parseNumber,T:a.parseLengthOrPercent,L:a.parseLength}[r.toUpperCase()](q):{a:m,n:k[0],t:l}[r],void 0===p)return;k.push(p)}if(e.push({t:g,d:k}),d.lastIndex==b.length)return e}}function f(a){return a.toFixed(6).replace(".000000","")}function g(b,c){if(b.decompositionPair!==c){b.decompositionPair=c;var d=a.makeMatrixDecomposition(b)}if(c.decompositionPair!==b){c.decompositionPair=b;var e=a.makeMatrixDecomposition(c)}return null==d[0]||null==e[0]?[[!1],[!0],function(a){return a?c[0].d:b[0].d}]:(d[0].push(0),e[0].push(1),[d,e,function(b){var c=a.quat(d[0][3],e[0][3],b[5]),g=a.composeMatrix(b[0],b[1],b[2],c,b[4]),h=g.map(f).join(",");return h}])}function h(a){return a.replace(/[xy]/,"")}function i(a){return a.replace(/(x|y|z|3d)?$/,"3d")}function j(b,c){var d=a.makeMatrixDecomposition&&!0,e=!1;if(!b.length||!c.length){b.length||(e=!0,b=c,c=[]);for(var f=0;f<b.length;f++){var j=b[f].t,k=b[f].d,l="scale"==j.substr(0,5)?1:0;c.push({t:j,d:k.map(function(a){if("number"==typeof a)return l;var b={};for(var c in a)b[c]=l;return b})})}}var m=function(a,b){return"perspective"==a&&"perspective"==b||("matrix"==a||"matrix3d"==a)&&("matrix"==b||"matrix3d"==b)},o=[],p=[],q=[];if(b.length!=c.length){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]]}else for(var f=0;f<b.length;f++){var j,s=b[f].t,t=c[f].t,u=b[f].d,v=c[f].d,w=n[s],x=n[t];if(m(s,t)){if(!d)return;var r=g([b[f]],[c[f]]);o.push(r[0]),p.push(r[1]),q.push(["matrix",[r[2]]])}else{if(s==t)j=s;else if(w[2]&&x[2]&&h(s)==h(t))j=h(s),u=w[2](u),v=x[2](v);else{if(!w[1]||!x[1]||i(s)!=i(t)){if(!d)return;var r=g(b,c);o=[r[0]],p=[r[1]],q=[["matrix",[r[2]]]];break}j=i(s),u=w[1](u),v=x[1](v)}for(var y=[],z=[],A=[],B=0;B<u.length;B++){var C="number"==typeof u[B]?a.mergeNumbers:a.mergeDimensions,r=C(u[B],v[B]);y[B]=r[0],z[B]=r[1],A.push(r[2])}o.push(y),p.push(z),q.push([j,A])}}if(e){var D=o;o=p,p=D}return[o,p,function(a){return a.map(function(a,b){var c=a.map(function(a,c){return q[b][1][c](a)}).join(",");return"matrix"==q[b][0]&&16==c.split(",").length&&(q[b][0]="matrix3d"),q[b][0]+"("+c+")"}).join(" ")}]}var k=null,l={px:0},m={deg:0},n={matrix:["NNNNNN",[k,k,0,0,k,k,0,0,0,0,1,0,k,k,0,1],d],matrix3d:["NNNNNNNNNNNNNNNN",d],rotate:["A"],rotatex:["A"],rotatey:["A"],rotatez:["A"],rotate3d:["NNNA"],perspective:["L"],scale:["Nn",c([k,k,1]),d],scalex:["N",c([k,1,1]),c([k,1])],scaley:["N",c([1,k,1]),c([1,k])],scalez:["N",c([1,1,k])],scale3d:["NNN",d],skew:["Aa",null,d],skewx:["A",null,c([k,m])],skewy:["A",null,c([m,k])],translate:["Tt",c([k,k,l]),d],translatex:["T",c([k,l,l]),c([k,l])],translatey:["T",c([l,k,l]),c([l,k])],translatez:["L",c([l,l,k])],translate3d:["TTL",d]};a.addPropertiesHandler(e,j,["transform"])}(e,g),function(a,b){function c(a,b){b.concat([a]).forEach(function(b){b in document.documentElement.style&&(d[a]=b)})}var d={};c("transform",["webkitTransform","msTransform"]),c("transformOrigin",["webkitTransformOrigin"]),c("perspective",["webkitPerspective"]),c("perspectiveOrigin",["webkitPerspectiveOrigin"]),a.propertyName=function(a){return d[a]||a}}(e,g)}(),b["true"]=a}({},function(){return this}());
	//# sourceMappingURL=web-animations.min.js.map

/***/ },
/* 4 */
/***/ function(module, exports) {

	(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	(function (global){
	'use strict';

	var core = require('../core');
	var microtask = require('../microtask');
	var browserPatch = require('../patch/browser');
	var es6Promise = require('es6-promise');

	if (global.Zone) {
	  console.warn('Zone already exported on window the object!');
	}

	global.Zone = microtask.addMicrotaskSupport(core.Zone);
	global.zone = new global.Zone();

	// Monkey patch the Promise implementation to add support for microtasks
	global.Promise = es6Promise.Promise;

	browserPatch.apply();

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../core":2,"../microtask":4,"../patch/browser":5,"es6-promise":17}],2:[function(require,module,exports){
	(function (global){
	'use strict';

	var keys = require('./keys');

	function Zone(parentZone, data) {
	  var zone = (arguments.length) ? Object.create(parentZone) : this;

	  zone.parent = parentZone || null;

	  Object.keys(data || {}).forEach(function(property) {

	    var _property = property.substr(1);

	    // augment the new zone with a hook decorates the parent's hook
	    if (property[0] === '$') {
	      zone[_property] = data[property](parentZone[_property] || function () {});

	    // augment the new zone with a hook that runs after the parent's hook
	    } else if (property[0] === '+') {
	      if (parentZone[_property]) {
	        zone[_property] = function () {
	          var result = parentZone[_property].apply(this, arguments);
	          data[property].apply(this, arguments);
	          return result;
	        };
	      } else {
	        zone[_property] = data[property];
	      }

	    // augment the new zone with a hook that runs before the parent's hook
	    } else if (property[0] === '-') {
	      if (parentZone[_property]) {
	        zone[_property] = function () {
	          data[property].apply(this, arguments);
	          return parentZone[_property].apply(this, arguments);
	        };
	      } else {
	        zone[_property] = data[property];
	      }

	    // set the new zone's hook (replacing the parent zone's)
	    } else {
	      zone[property] = (typeof data[property] === 'object') ?
	                        JSON.parse(JSON.stringify(data[property])) :
	                        data[property];
	    }
	  });

	  zone.$id = Zone.nextId++;

	  return zone;
	}

	Zone.prototype = {
	  constructor: Zone,

	  fork: function (locals) {
	    this.onZoneCreated();
	    return new Zone(this, locals);
	  },

	  bind: function (fn, skipEnqueue) {
	    if (typeof fn !== 'function') {
	      throw new Error('Expecting function got: ' + fn);
	    }
	    skipEnqueue || this.enqueueTask(fn);
	    var zone = this.isRootZone() ? this : this.fork();
	    return function zoneBoundFn() {
	      return zone.run(fn, this, arguments);
	    };
	  },

	  bindOnce: function (fn) {
	    var boundZone = this;
	    return this.bind(function () {
	      var result = fn.apply(this, arguments);
	      boundZone.dequeueTask(fn);
	      return result;
	    });
	  },

	  isRootZone: function() {
	    return this.parent === null;
	  },

	  run: function run (fn, applyTo, applyWith) {
	    applyWith = applyWith || [];

	    var oldZone = global.zone;

	    // MAKE THIS ZONE THE CURRENT ZONE
	    global.zone = this;

	    try {
	      this.beforeTask();
	      return fn.apply(applyTo, applyWith);
	    } catch (e) {
	      if (this.onError) {
	        this.onError(e);
	      } else {
	        throw e;
	      }
	    } finally {
	      this.afterTask();
	      // REVERT THE CURRENT ZONE BACK TO THE ORIGINAL ZONE
	      global.zone = oldZone;
	    }
	  },

	  // onError is used to override error handling.
	  // When a custom error handler is provided, it should most probably rethrow the exception
	  // not to break the expected control flow:
	  //
	  // `promise.then(fnThatThrows).catch(fn);`
	  //
	  // When this code is executed in a zone with a custom onError handler that doesn't rethrow, the
	  // `.catch()` branch will not be taken as the `fnThatThrows` exception will be swallowed by the
	  // handler.
	  onError: null,
	  beforeTask: function () {},
	  onZoneCreated: function () {},
	  afterTask: function () {},
	  enqueueTask: function () {},
	  dequeueTask: function () {},
	  addEventListener: function () {
	    return this[keys.common.addEventListener].apply(this, arguments);
	  },
	  removeEventListener: function () {
	    return this[keys.common.removeEventListener].apply(this, arguments);
	  }
	};

	// Root zone ID === 1
	Zone.nextId = 1;

	Zone.bindPromiseFn = require('./patch/promise').bindPromiseFn;

	module.exports = {
	  Zone: Zone
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./keys":3,"./patch/promise":12}],3:[function(require,module,exports){
	/**
	 * Creates keys for `private` properties on exposed objects to minimize interactions with other codebases.
	 */

	function create(name) {
	  // `Symbol` implementation is broken in Chrome 39.0.2171, do not use them even if they are available
	  return '_zone$' + name;
	}

	var commonKeys = {
	  addEventListener: create('addEventListener'),
	  removeEventListener: create('removeEventListener')
	};

	module.exports = {
	  create: create,
	  common: commonKeys
	};

	},{}],4:[function(require,module,exports){
	(function (global){
	'use strict';

	// TODO(vicb): Create a benchmark for the different methods & the usage of the queue
	// see https://github.com/angular/zone.js/issues/97

	// It is required to initialize hasNativePromise before requiring es6-promise otherwise es6-promise would
	// overwrite the native Promise implementation on v8 and the check would always return false.
	// see https://github.com/jakearchibald/es6-promise/issues/140
	var hasNativePromise = typeof Promise !== "undefined" &&
	    Promise.toString().indexOf("[native code]") !== -1;

	var isFirefox = global.navigator &&
	    global.navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

	var resolvedPromise;

	// TODO(vicb): remove '!isFirefox' when the bug gets fixed:
	// https://bugzilla.mozilla.org/show_bug.cgi?id=1162013
	if (hasNativePromise && !isFirefox) {
	  // When available use a native Promise to schedule microtasks.
	  // When not available, es6-promise fallback will be used
	  resolvedPromise = Promise.resolve();
	}

	var es6Promise = require('es6-promise').Promise;

	if (resolvedPromise) {
	  es6Promise._setScheduler(function(fn) {
	    resolvedPromise.then(fn);
	  });
	}

	// es6-promise asap should schedule microtasks via zone.scheduleMicrotask so that any
	// user defined hooks are triggered
	es6Promise._setAsap(function(fn, arg) {
	  global.zone.scheduleMicrotask(function() {
	    fn(arg);
	  });
	});

	// The default implementation of scheduleMicrotask use the original es6-promise implementation
	// to schedule a microtask
	function scheduleMicrotask(fn) {
	  es6Promise._asap(this.bind(fn));
	}

	function addMicrotaskSupport(zoneClass) {
	  zoneClass.prototype.scheduleMicrotask = scheduleMicrotask;
	  return zoneClass;
	}

	module.exports = {
	  addMicrotaskSupport: addMicrotaskSupport
	};




	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"es6-promise":17}],5:[function(require,module,exports){
	(function (global){
	'use strict';

	var fnPatch = require('./functions');
	var promisePatch = require('./promise');
	var mutationObserverPatch = require('./mutation-observer');
	var definePropertyPatch = require('./define-property');
	var registerElementPatch = require('./register-element');
	var webSocketPatch = require('./websocket');
	var eventTargetPatch = require('./event-target');
	var propertyDescriptorPatch = require('./property-descriptor');
	var geolocationPatch = require('./geolocation');
	var fileReaderPatch = require('./file-reader');

	function apply() {
	  fnPatch.patchSetClearFunction(global, [
	    'timeout',
	    'interval',
	    'immediate'
	  ]);

	  fnPatch.patchRequestAnimationFrame(global, [
	    'requestAnimationFrame',
	    'mozRequestAnimationFrame',
	    'webkitRequestAnimationFrame'
	  ]);

	  fnPatch.patchFunction(global, [
	    'alert',
	    'prompt'
	  ]);

	  eventTargetPatch.apply();

	  propertyDescriptorPatch.apply();

	  promisePatch.apply();

	  mutationObserverPatch.patchClass('MutationObserver');
	  mutationObserverPatch.patchClass('WebKitMutationObserver');

	  definePropertyPatch.apply();

	  registerElementPatch.apply();

	  geolocationPatch.apply();

	  fileReaderPatch.apply();
	}

	module.exports = {
	  apply: apply
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./define-property":6,"./event-target":7,"./file-reader":8,"./functions":9,"./geolocation":10,"./mutation-observer":11,"./promise":12,"./property-descriptor":13,"./register-element":14,"./websocket":15}],6:[function(require,module,exports){
	'use strict';

	var keys = require('../keys');

	// might need similar for object.freeze
	// i regret nothing

	var _defineProperty = Object.defineProperty;
	var _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
	var _create = Object.create;
	var unconfigurablesKey = keys.create('unconfigurables');

	function apply() {
	  Object.defineProperty = function (obj, prop, desc) {
	    if (isUnconfigurable(obj, prop)) {
	      throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
	    }
	    if (prop !== 'prototype') {
	      desc = rewriteDescriptor(obj, prop, desc);
	    }
	    return _defineProperty(obj, prop, desc);
	  };

	  Object.defineProperties = function (obj, props) {
	    Object.keys(props).forEach(function (prop) {
	      Object.defineProperty(obj, prop, props[prop]);
	    });
	    return obj;
	  };

	  Object.create = function (obj, proto) {
	    if (typeof proto === 'object') {
	      Object.keys(proto).forEach(function (prop) {
	        proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
	      });
	    }
	    return _create(obj, proto);
	  };

	  Object.getOwnPropertyDescriptor = function (obj, prop) {
	    var desc = _getOwnPropertyDescriptor(obj, prop);
	    if (isUnconfigurable(obj, prop)) {
	      desc.configurable = false;
	    }
	    return desc;
	  };
	};

	function _redefineProperty(obj, prop, desc) {
	  desc = rewriteDescriptor(obj, prop, desc);
	  return _defineProperty(obj, prop, desc);
	};

	function isUnconfigurable (obj, prop) {
	  return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
	}

	function rewriteDescriptor (obj, prop, desc) {
	  desc.configurable = true;
	  if (!desc.configurable) {
	    if (!obj[unconfigurablesKey]) {
	      _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
	    }
	    obj[unconfigurablesKey][prop] = true;
	  }
	  return desc;
	}

	module.exports = {
	  apply: apply,
	  _redefineProperty: _redefineProperty
	};



	},{"../keys":3}],7:[function(require,module,exports){
	(function (global){
	'use strict';

	var utils = require('../utils');

	function apply() {
	  // patched properties depend on addEventListener, so this needs to come first
	  if (global.EventTarget) {
	    utils.patchEventTargetMethods(global.EventTarget.prototype);

	  // Note: EventTarget is not available in all browsers,
	  // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
	  } else {
	    var apis = [
	      'ApplicationCache',
	      'EventSource',
	      'FileReader',
	      'InputMethodContext',
	      'MediaController',
	      'MessagePort',
	      'Node',
	      'Performance',
	      'SVGElementInstance',
	      'SharedWorker',
	      'TextTrack',
	      'TextTrackCue',
	      'TextTrackList',
	      'WebKitNamedFlow',
	      'Worker',
	      'WorkerGlobalScope',
	      'XMLHttpRequest',
	      'XMLHttpRequestEventTarget',
	      'XMLHttpRequestUpload'
	    ];

	    apis.forEach(function(api) {
	      var proto = global[api] && global[api].prototype;

	      // Some browsers e.g. Android 4.3's don't actually implement
	      // the EventTarget methods for all of these e.g. FileReader.
	      // In this case, there is nothing to patch.
	      if (proto && proto.addEventListener) {
	        utils.patchEventTargetMethods(proto);
	      }
	    });

	    // Patch the methods on `window` instead of `Window.prototype`
	    // `Window` is not accessible on Android 4.3
	    if (typeof(window) !== 'undefined') {
	      utils.patchEventTargetMethods(window);
	    }
	  }
	}

	module.exports = {
	  apply: apply
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../utils":16}],8:[function(require,module,exports){
	'use strict';

	var utils = require('../utils');

	function apply() {
	  utils.patchClass('FileReader');
	}

	module.exports = {
	  apply: apply
	};
	},{"../utils":16}],9:[function(require,module,exports){
	(function (global){
	'use strict';

	var utils = require('../utils');

	function patchSetClearFunction(obj, fnNames) {
	  fnNames.map(function (name) {
	    return name[0].toUpperCase() + name.substr(1);
	  }).forEach(function (name) {
	    var setName = 'set' + name;
	    var delegate = obj[setName];

	    if (delegate) {
	      var clearName = 'clear' + name;
	      var ids = {};

	      var bindArgs = setName === 'setInterval' ? utils.bindArguments : utils.bindArgumentsOnce;

	      global.zone[setName] = function (fn) {
	        var id, fnRef = fn;
	        arguments[0] = function () {
	          delete ids[id];
	          return fnRef.apply(this, arguments);
	        };
	        var args = bindArgs(arguments);
	        id = delegate.apply(obj, args);
	        ids[id] = true;
	        return id;
	      };

	      obj[setName] = function () {
	        return global.zone[setName].apply(this, arguments);
	      };

	      var clearDelegate = obj[clearName];

	      global.zone[clearName] = function (id) {
	        if (ids[id]) {
	          delete ids[id];
	          global.zone.dequeueTask();
	        }
	        return clearDelegate.apply(this, arguments);
	      };

	      obj[clearName] = function () {
	        return global.zone[clearName].apply(this, arguments);
	      };
	    }
	  });
	};


	/**
	 * requestAnimationFrame is typically recursively called from within the callback function
	 * that it executes.  To handle this case, only fork a zone if this is executed
	 * within the root zone.
	 */
	function patchRequestAnimationFrame(obj, fnNames) {
	  fnNames.forEach(function (name) {
	    var delegate = obj[name];
	    if (delegate) {
	      global.zone[name] = function (fn) {
	        var callZone = global.zone.isRootZone() ? global.zone.fork() : global.zone;
	        if (fn) {
	          arguments[0] = function () {
	            return callZone.run(fn, this, arguments);
	          };
	        }
	        return delegate.apply(obj, arguments);
	      };

	      obj[name] = function () {
	        return global.zone[name].apply(this, arguments);
	      };
	    }
	  });
	};

	function patchSetFunction(obj, fnNames) {
	  fnNames.forEach(function (name) {
	    var delegate = obj[name];

	    if (delegate) {
	      global.zone[name] = function (fn) {
	        arguments[0] = function () {
	          return fn.apply(this, arguments);
	        };
	        var args = utils.bindArgumentsOnce(arguments);
	        return delegate.apply(obj, args);
	      };

	      obj[name] = function () {
	        return zone[name].apply(this, arguments);
	      };
	    }
	  });
	};

	function patchFunction(obj, fnNames) {
	  fnNames.forEach(function (name) {
	    var delegate = obj[name];
	    global.zone[name] = function () {
	      return delegate.apply(obj, arguments);
	    };

	    obj[name] = function () {
	      return global.zone[name].apply(this, arguments);
	    };
	  });
	};


	module.exports = {
	  patchSetClearFunction: patchSetClearFunction,
	  patchSetFunction: patchSetFunction,
	  patchRequestAnimationFrame: patchRequestAnimationFrame,
	  patchFunction: patchFunction
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../utils":16}],10:[function(require,module,exports){
	(function (global){
	'use strict';

	var utils = require('../utils');

	function apply() {
	  if (global.navigator && global.navigator.geolocation) {
	    utils.patchPrototype(global.navigator.geolocation, [
	      'getCurrentPosition',
	      'watchPosition'
	    ]);
	  }
	}

	module.exports = {
	  apply: apply
	}

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../utils":16}],11:[function(require,module,exports){
	(function (global){
	'use strict';

	var keys = require('../keys');

	var originalInstanceKey = keys.create('originalInstance');
	var creationZoneKey = keys.create('creationZone');
	var isActiveKey = keys.create('isActive');

	// wrap some native API on `window`
	function patchClass(className) {
	  var OriginalClass = global[className];
	  if (!OriginalClass) return;

	  global[className] = function (fn) {
	    this[originalInstanceKey] = new OriginalClass(global.zone.bind(fn, true));
	    // Remember where the class was instantiate to execute the enqueueTask and dequeueTask hooks
	    this[creationZoneKey] = global.zone;
	  };

	  var instance = new OriginalClass(function () {});

	  global[className].prototype.disconnect = function () {
	    var result = this[originalInstanceKey].disconnect.apply(this[originalInstanceKey], arguments);
	    if (this[isActiveKey]) {
	      this[creationZoneKey].dequeueTask();
	      this[isActiveKey] = false;
	    }
	    return result;
	  };

	  global[className].prototype.observe = function () {
	    if (!this[isActiveKey]) {
	      this[creationZoneKey].enqueueTask();
	      this[isActiveKey] = true;
	    }
	    return this[originalInstanceKey].observe.apply(this[originalInstanceKey], arguments);
	  };

	  var prop;
	  for (prop in instance) {
	    (function (prop) {
	      if (typeof global[className].prototype !== 'undefined') {
	        return;
	      }
	      if (typeof instance[prop] === 'function') {
	        global[className].prototype[prop] = function () {
	          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	        };
	      } else {
	        Object.defineProperty(global[className].prototype, prop, {
	          set: function (fn) {
	            if (typeof fn === 'function') {
	              this[originalInstanceKey][prop] = global.zone.bind(fn);
	            } else {
	              this[originalInstanceKey][prop] = fn;
	            }
	          },
	          get: function () {
	            return this[originalInstanceKey][prop];
	          }
	        });
	      }
	    }(prop));
	  }
	};

	module.exports = {
	  patchClass: patchClass
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../keys":3}],12:[function(require,module,exports){
	(function (global){
	'use strict';

	var utils = require('../utils');

	/*
	 * Patches a function that returns a Promise-like instance.
	 *
	 * This function must be used when either:
	 * - Native Promises are not available,
	 * - The function returns a Promise-like object.
	 *
	 * This is required because zones rely on a Promise monkey patch that could not be applied when
	 * Promise is not natively available or when the returned object is not an instance of Promise.
	 *
	 * Note that calling `bindPromiseFn` on a function that returns a native Promise will also work
	 * with minimal overhead.
	 *
	 * ```
	 * var boundFunction = bindPromiseFn(FunctionReturningAPromise);
	 *
	 * boundFunction.then(successHandler, errorHandler);
	 * ```
	 */
	var bindPromiseFn;

	if (global.Promise) {
	  bindPromiseFn = function (delegate) {
	    return function() {
	      var delegatePromise = delegate.apply(this, arguments);

	      // if the delegate returned an instance of Promise, forward it.
	      if (delegatePromise instanceof Promise) {
	        return delegatePromise;
	      }

	      // Otherwise wrap the Promise-like in a global Promise
	      return new Promise(function(resolve, reject) {
	        delegatePromise.then(resolve, reject);
	      });
	    };
	  };
	} else {
	  bindPromiseFn = function (delegate) {
	    return function () {
	      return _patchThenable(delegate.apply(this, arguments));
	    };
	  };
	}


	function _patchPromiseFnsOnObject(objectPath, fnNames) {
	  var obj = global;

	  var exists = objectPath.every(function (segment) {
	    obj = obj[segment];
	    return obj;
	  });

	  if (!exists) {
	    return;
	  }

	  fnNames.forEach(function (name) {
	    var fn = obj[name];
	    if (fn) {
	      obj[name] = bindPromiseFn(fn);
	    }
	  });
	}

	function _patchThenable(thenable) {
	  var then = thenable.then;
	  thenable.then = function () {
	    var args = utils.bindArguments(arguments);
	    var nextThenable = then.apply(thenable, args);
	    return _patchThenable(nextThenable);
	  };

	  var ocatch = thenable.catch;
	  thenable.catch = function () {
	    var args = utils.bindArguments(arguments);
	    var nextThenable = ocatch.apply(thenable, args);
	    return _patchThenable(nextThenable);
	  };

	  return thenable;
	}


	function apply() {
	  // Patch .then() and .catch() on native Promises to execute callbacks in the zone where
	  // those functions are called.
	  if (global.Promise) {
	    utils.patchPrototype(Promise.prototype, [
	      'then',
	      'catch'
	    ]);

	    // Patch browser APIs that return a Promise
	    var patchFns = [
	      // fetch
	      [[], ['fetch']],
	      [['Response', 'prototype'], ['arrayBuffer', 'blob', 'json', 'text']]
	    ];

	    patchFns.forEach(function(objPathAndFns) {
	      _patchPromiseFnsOnObject(objPathAndFns[0], objPathAndFns[1]);
	    });
	  }
	}

	module.exports = {
	  apply: apply,
	  bindPromiseFn: bindPromiseFn
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../utils":16}],13:[function(require,module,exports){
	(function (global){
	'use strict';

	var webSocketPatch = require('./websocket');
	var utils = require('../utils');
	var keys = require('../keys');

	var eventNames = 'copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror'.split(' ');

	function apply() {
	  if (utils.isWebWorker()){
	    // on WebWorker so don't apply patch
	    return;
	  }

	  var supportsWebSocket = typeof WebSocket !== 'undefined';
	  if (canPatchViaPropertyDescriptor()) {
	    // for browsers that we can patch the descriptor:  Chrome & Firefox
	    var onEventNames = eventNames.map(function (property) {
	      return 'on' + property;
	    });
	    utils.patchProperties(HTMLElement.prototype, onEventNames);
	    utils.patchProperties(XMLHttpRequest.prototype);
	    if (supportsWebSocket) {
	      utils.patchProperties(WebSocket.prototype);
	    }
	  } else {
	    // Safari, Android browsers (Jelly Bean)
	    patchViaCapturingAllTheEvents();
	    utils.patchClass('XMLHttpRequest');
	    if (supportsWebSocket) {
	      webSocketPatch.apply();
	    }
	  }
	}

	function canPatchViaPropertyDescriptor() {
	  if (!Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
	    // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
	    // IDL interface attributes are not configurable
	    var desc = Object.getOwnPropertyDescriptor(Element.prototype, 'onclick');
	    if (desc && !desc.configurable) return false;
	  }

	  Object.defineProperty(HTMLElement.prototype, 'onclick', {
	    get: function () {
	      return true;
	    }
	  });
	  var elt = document.createElement('div');
	  var result = !!elt.onclick;
	  Object.defineProperty(HTMLElement.prototype, 'onclick', {});
	  return result;
	};

	var unboundKey = keys.create('unbound');

	// Whenever any event fires, we check the event target and all parents
	// for `onwhatever` properties and replace them with zone-bound functions
	// - Chrome (for now)
	function patchViaCapturingAllTheEvents() {
	  eventNames.forEach(function (property) {
	    var onproperty = 'on' + property;
	    document.addEventListener(property, function (event) {
	      var elt = event.target, bound;
	      while (elt) {
	        if (elt[onproperty] && !elt[onproperty][unboundKey]) {
	          bound = global.zone.bind(elt[onproperty]);
	          bound[unboundKey] = elt[onproperty];
	          elt[onproperty] = bound;
	        }
	        elt = elt.parentElement;
	      }
	    }, true);
	  });
	};

	module.exports = {
	  apply: apply
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../keys":3,"../utils":16,"./websocket":15}],14:[function(require,module,exports){
	(function (global){
	'use strict';

	var _redefineProperty = require('./define-property')._redefineProperty;
	var utils = require("../utils");

	function apply() {
	  if (utils.isWebWorker() || !('registerElement' in global.document)) {
	    return;
	  }

	  var _registerElement = document.registerElement;
	  var callbacks = [
	    'createdCallback',
	    'attachedCallback',
	    'detachedCallback',
	    'attributeChangedCallback'
	  ];

	  document.registerElement = function (name, opts) {
	    if (opts && opts.prototype) {
	      callbacks.forEach(function (callback) {
	        if (opts.prototype.hasOwnProperty(callback)) {
	          var descriptor = Object.getOwnPropertyDescriptor(opts.prototype, callback);
	          if (descriptor && descriptor.value) {
	            descriptor.value = global.zone.bind(descriptor.value);
	            _redefineProperty(opts.prototype, callback, descriptor);
	          } else {
	            opts.prototype[callback] = global.zone.bind(opts.prototype[callback]);
	          }
	        } else if (opts.prototype[callback]) {
	          opts.prototype[callback] = global.zone.bind(opts.prototype[callback]);
	        }
	      });
	    }

	    return _registerElement.apply(document, [name, opts]);
	  };
	}

	module.exports = {
	  apply: apply
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../utils":16,"./define-property":6}],15:[function(require,module,exports){
	(function (global){
	'use strict';

	var utils = require('../utils');

	// we have to patch the instance since the proto is non-configurable
	function apply() {
	  var WS = global.WebSocket;
	  utils.patchEventTargetMethods(WS.prototype);
	  global.WebSocket = function(a, b) {
	    var socket = arguments.length > 1 ? new WS(a, b) : new WS(a);
	    var proxySocket;

	    // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance
	    var onmessageDesc = Object.getOwnPropertyDescriptor(socket, 'onmessage');
	    if (onmessageDesc && onmessageDesc.configurable === false) {
	      proxySocket = Object.create(socket);
	      ['addEventListener', 'removeEventListener', 'send', 'close'].forEach(function(propName) {
	        proxySocket[propName] = function() {
	          return socket[propName].apply(socket, arguments);
	        };
	      });
	    } else {
	      // we can patch the real socket
	      proxySocket = socket;
	    }

	    utils.patchProperties(proxySocket, ['onclose', 'onerror', 'onmessage', 'onopen']);

	    return proxySocket;
	  };
	}

	module.exports = {
	  apply: apply
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"../utils":16}],16:[function(require,module,exports){
	(function (global){
	'use strict';

	var keys = require('./keys');

	function bindArguments(args) {
	  for (var i = args.length - 1; i >= 0; i--) {
	    if (typeof args[i] === 'function') {
	      args[i] = global.zone.bind(args[i]);
	    }
	  }
	  return args;
	};

	function bindArgumentsOnce(args) {
	  for (var i = args.length - 1; i >= 0; i--) {
	    if (typeof args[i] === 'function') {
	      args[i] = global.zone.bindOnce(args[i]);
	    }
	  }
	  return args;
	};

	function patchPrototype(obj, fnNames) {
	  fnNames.forEach(function (name) {
	    var delegate = obj[name];
	    if (delegate) {
	      obj[name] = function () {
	        return delegate.apply(this, bindArguments(arguments));
	      };
	    }
	  });
	};

	function isWebWorker() {
	  return (typeof document === "undefined");
	}

	function patchProperty(obj, prop) {
	  var desc = Object.getOwnPropertyDescriptor(obj, prop) || {
	    enumerable: true,
	    configurable: true
	  };

	  // A property descriptor cannot have getter/setter and be writable
	  // deleting the writable and value properties avoids this error:
	  //
	  // TypeError: property descriptors must not specify a value or be writable when a
	  // getter or setter has been specified
	  delete desc.writable;
	  delete desc.value;

	  // substr(2) cuz 'onclick' -> 'click', etc
	  var eventName = prop.substr(2);
	  var _prop = '_' + prop;

	  desc.set = function (fn) {
	    if (this[_prop]) {
	      this.removeEventListener(eventName, this[_prop]);
	    }

	    if (typeof fn === 'function') {
	      this[_prop] = fn;
	      this.addEventListener(eventName, fn, false);
	    } else {
	      this[_prop] = null;
	    }
	  };

	  desc.get = function () {
	    return this[_prop];
	  };

	  Object.defineProperty(obj, prop, desc);
	};

	function patchProperties(obj, properties) {
	  (properties || (function () {
	      var props = [];
	      for (var prop in obj) {
	        props.push(prop);
	      }
	      return props;
	    }()).
	    filter(function (propertyName) {
	      return propertyName.substr(0,2) === 'on';
	    })).
	    forEach(function (eventName) {
	      patchProperty(obj, eventName);
	    });
	};

	var originalFnKey = keys.create('originalFn');
	var boundFnsKey = keys.create('boundFns');

	function patchEventTargetMethods(obj) {
	  // This is required for the addEventListener hook on the root zone.
	  obj[keys.common.addEventListener] = obj.addEventListener;
	  obj.addEventListener = function (eventName, handler, useCapturing) {
	    //Ignore special listeners of IE11 & Edge dev tools, see https://github.com/angular/zone.js/issues/150
	    if (handler && handler.toString() !== "[object FunctionWrapper]") {
	      var eventType = eventName + (useCapturing ? '$capturing' : '$bubbling');
	      var fn;
	      if (handler.handleEvent) {
	        // Have to pass in 'handler' reference as an argument here, otherwise it gets clobbered in
	        // IE9 by the arguments[1] assignment at end of this function.
	        fn = (function(handler) {
	          return function() {
	            handler.handleEvent.apply(handler, arguments);
	          };
	        })(handler);
	      } else {
	        fn = handler;
	      }

	      handler[originalFnKey] = fn;
	      handler[boundFnsKey] = handler[boundFnsKey] || {};
	      handler[boundFnsKey][eventType] = handler[boundFnsKey][eventType] || zone.bind(fn);
	      arguments[1] = handler[boundFnsKey][eventType];
	    }

	    // - Inside a Web Worker, `this` is undefined, the context is `global` (= `self`)
	    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	    // see https://github.com/angular/zone.js/issues/190
	    var target = this || global;
	    return global.zone.addEventListener.apply(target, arguments);
	  };

	  // This is required for the removeEventListener hook on the root zone.
	  obj[keys.common.removeEventListener] = obj.removeEventListener;
	  obj.removeEventListener = function (eventName, handler, useCapturing) {
	    var eventType = eventName + (useCapturing ? '$capturing' : '$bubbling');
	    if (handler && handler[boundFnsKey] && handler[boundFnsKey][eventType]) {
	      var _bound = handler[boundFnsKey];
	      arguments[1] = _bound[eventType];
	      delete _bound[eventType];
	      global.zone.dequeueTask(handler[originalFnKey]);
	    }

	    // - Inside a Web Worker, `this` is undefined, the context is `global`
	    // - When `addEventListener` is called on the global context in strict mode, `this` is undefined
	    // see https://github.com/angular/zone.js/issues/190
	    var target = this || global;
	    var result = global.zone.removeEventListener.apply(target, arguments);
	    return result;
	  };
	};

	var originalInstanceKey = keys.create('originalInstance');

	// wrap some native API on `window`
	function patchClass(className) {
	  var OriginalClass = global[className];
	  if (!OriginalClass) return;

	  global[className] = function () {
	    var a = bindArguments(arguments);
	    switch (a.length) {
	      case 0: this[originalInstanceKey] = new OriginalClass(); break;
	      case 1: this[originalInstanceKey] = new OriginalClass(a[0]); break;
	      case 2: this[originalInstanceKey] = new OriginalClass(a[0], a[1]); break;
	      case 3: this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]); break;
	      case 4: this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]); break;
	      default: throw new Error('what are you even doing?');
	    }
	  };

	  var instance = new OriginalClass();

	  var prop;
	  for (prop in instance) {
	    (function (prop) {
	      if (typeof instance[prop] === 'function') {
	        global[className].prototype[prop] = function () {
	          return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
	        };
	      } else {
	        Object.defineProperty(global[className].prototype, prop, {
	          set: function (fn) {
	            if (typeof fn === 'function') {
	              this[originalInstanceKey][prop] = global.zone.bind(fn);
	            } else {
	              this[originalInstanceKey][prop] = fn;
	            }
	          },
	          get: function () {
	            return this[originalInstanceKey][prop];
	          }
	        });
	      }
	    }(prop));
	  }

	  for (prop in OriginalClass) {
	    if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
	      global[className][prop] = OriginalClass[prop];
	    }
	  }
	};

	module.exports = {
	  bindArguments: bindArguments,
	  bindArgumentsOnce: bindArgumentsOnce,
	  patchPrototype: patchPrototype,
	  patchProperty: patchProperty,
	  patchProperties: patchProperties,
	  patchEventTargetMethods: patchEventTargetMethods,
	  patchClass: patchClass,
	  isWebWorker: isWebWorker
	};

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"./keys":3}],17:[function(require,module,exports){
	(function (process,global){
	/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
	 * @version   3.0.2
	 */

	(function() {
	    "use strict";
	    function lib$es6$promise$utils$$objectOrFunction(x) {
	      return typeof x === 'function' || (typeof x === 'object' && x !== null);
	    }

	    function lib$es6$promise$utils$$isFunction(x) {
	      return typeof x === 'function';
	    }

	    function lib$es6$promise$utils$$isMaybeThenable(x) {
	      return typeof x === 'object' && x !== null;
	    }

	    var lib$es6$promise$utils$$_isArray;
	    if (!Array.isArray) {
	      lib$es6$promise$utils$$_isArray = function (x) {
	        return Object.prototype.toString.call(x) === '[object Array]';
	      };
	    } else {
	      lib$es6$promise$utils$$_isArray = Array.isArray;
	    }

	    var lib$es6$promise$utils$$isArray = lib$es6$promise$utils$$_isArray;
	    var lib$es6$promise$asap$$len = 0;
	    var lib$es6$promise$asap$$toString = {}.toString;
	    var lib$es6$promise$asap$$vertxNext;
	    var lib$es6$promise$asap$$customSchedulerFn;

	    var lib$es6$promise$asap$$asap = function asap(callback, arg) {
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len] = callback;
	      lib$es6$promise$asap$$queue[lib$es6$promise$asap$$len + 1] = arg;
	      lib$es6$promise$asap$$len += 2;
	      if (lib$es6$promise$asap$$len === 2) {
	        // If len is 2, that means that we need to schedule an async flush.
	        // If additional callbacks are queued before the queue is flushed, they
	        // will be processed by this flush that we are scheduling.
	        if (lib$es6$promise$asap$$customSchedulerFn) {
	          lib$es6$promise$asap$$customSchedulerFn(lib$es6$promise$asap$$flush);
	        } else {
	          lib$es6$promise$asap$$scheduleFlush();
	        }
	      }
	    }

	    function lib$es6$promise$asap$$setScheduler(scheduleFn) {
	      lib$es6$promise$asap$$customSchedulerFn = scheduleFn;
	    }

	    function lib$es6$promise$asap$$setAsap(asapFn) {
	      lib$es6$promise$asap$$asap = asapFn;
	    }

	    var lib$es6$promise$asap$$browserWindow = (typeof window !== 'undefined') ? window : undefined;
	    var lib$es6$promise$asap$$browserGlobal = lib$es6$promise$asap$$browserWindow || {};
	    var lib$es6$promise$asap$$BrowserMutationObserver = lib$es6$promise$asap$$browserGlobal.MutationObserver || lib$es6$promise$asap$$browserGlobal.WebKitMutationObserver;
	    var lib$es6$promise$asap$$isNode = typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

	    // test for web worker but not in IE10
	    var lib$es6$promise$asap$$isWorker = typeof Uint8ClampedArray !== 'undefined' &&
	      typeof importScripts !== 'undefined' &&
	      typeof MessageChannel !== 'undefined';

	    // node
	    function lib$es6$promise$asap$$useNextTick() {
	      // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	      // see https://github.com/cujojs/when/issues/410 for details
	      return function() {
	        process.nextTick(lib$es6$promise$asap$$flush);
	      };
	    }

	    // vertx
	    function lib$es6$promise$asap$$useVertxTimer() {
	      return function() {
	        lib$es6$promise$asap$$vertxNext(lib$es6$promise$asap$$flush);
	      };
	    }

	    function lib$es6$promise$asap$$useMutationObserver() {
	      var iterations = 0;
	      var observer = new lib$es6$promise$asap$$BrowserMutationObserver(lib$es6$promise$asap$$flush);
	      var node = document.createTextNode('');
	      observer.observe(node, { characterData: true });

	      return function() {
	        node.data = (iterations = ++iterations % 2);
	      };
	    }

	    // web worker
	    function lib$es6$promise$asap$$useMessageChannel() {
	      var channel = new MessageChannel();
	      channel.port1.onmessage = lib$es6$promise$asap$$flush;
	      return function () {
	        channel.port2.postMessage(0);
	      };
	    }

	    function lib$es6$promise$asap$$useSetTimeout() {
	      return function() {
	        setTimeout(lib$es6$promise$asap$$flush, 1);
	      };
	    }

	    var lib$es6$promise$asap$$queue = new Array(1000);
	    function lib$es6$promise$asap$$flush() {
	      for (var i = 0; i < lib$es6$promise$asap$$len; i+=2) {
	        var callback = lib$es6$promise$asap$$queue[i];
	        var arg = lib$es6$promise$asap$$queue[i+1];

	        callback(arg);

	        lib$es6$promise$asap$$queue[i] = undefined;
	        lib$es6$promise$asap$$queue[i+1] = undefined;
	      }

	      lib$es6$promise$asap$$len = 0;
	    }

	    function lib$es6$promise$asap$$attemptVertx() {
	      try {
	        var r = require;
	        var vertx = r('vertx');
	        lib$es6$promise$asap$$vertxNext = vertx.runOnLoop || vertx.runOnContext;
	        return lib$es6$promise$asap$$useVertxTimer();
	      } catch(e) {
	        return lib$es6$promise$asap$$useSetTimeout();
	      }
	    }

	    var lib$es6$promise$asap$$scheduleFlush;
	    // Decide what async method to use to triggering processing of queued callbacks:
	    if (lib$es6$promise$asap$$isNode) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useNextTick();
	    } else if (lib$es6$promise$asap$$BrowserMutationObserver) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMutationObserver();
	    } else if (lib$es6$promise$asap$$isWorker) {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useMessageChannel();
	    } else if (lib$es6$promise$asap$$browserWindow === undefined && typeof require === 'function') {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$attemptVertx();
	    } else {
	      lib$es6$promise$asap$$scheduleFlush = lib$es6$promise$asap$$useSetTimeout();
	    }

	    function lib$es6$promise$$internal$$noop() {}

	    var lib$es6$promise$$internal$$PENDING   = void 0;
	    var lib$es6$promise$$internal$$FULFILLED = 1;
	    var lib$es6$promise$$internal$$REJECTED  = 2;

	    var lib$es6$promise$$internal$$GET_THEN_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$selfFulfillment() {
	      return new TypeError("You cannot resolve a promise with itself");
	    }

	    function lib$es6$promise$$internal$$cannotReturnOwn() {
	      return new TypeError('A promises callback cannot return that same promise.');
	    }

	    function lib$es6$promise$$internal$$getThen(promise) {
	      try {
	        return promise.then;
	      } catch(error) {
	        lib$es6$promise$$internal$$GET_THEN_ERROR.error = error;
	        return lib$es6$promise$$internal$$GET_THEN_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	      try {
	        then.call(value, fulfillmentHandler, rejectionHandler);
	      } catch(e) {
	        return e;
	      }
	    }

	    function lib$es6$promise$$internal$$handleForeignThenable(promise, thenable, then) {
	       lib$es6$promise$asap$$asap(function(promise) {
	        var sealed = false;
	        var error = lib$es6$promise$$internal$$tryThen(then, thenable, function(value) {
	          if (sealed) { return; }
	          sealed = true;
	          if (thenable !== value) {
	            lib$es6$promise$$internal$$resolve(promise, value);
	          } else {
	            lib$es6$promise$$internal$$fulfill(promise, value);
	          }
	        }, function(reason) {
	          if (sealed) { return; }
	          sealed = true;

	          lib$es6$promise$$internal$$reject(promise, reason);
	        }, 'Settle: ' + (promise._label || ' unknown promise'));

	        if (!sealed && error) {
	          sealed = true;
	          lib$es6$promise$$internal$$reject(promise, error);
	        }
	      }, promise);
	    }

	    function lib$es6$promise$$internal$$handleOwnThenable(promise, thenable) {
	      if (thenable._state === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, thenable._result);
	      } else if (thenable._state === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, thenable._result);
	      } else {
	        lib$es6$promise$$internal$$subscribe(thenable, undefined, function(value) {
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      }
	    }

	    function lib$es6$promise$$internal$$handleMaybeThenable(promise, maybeThenable) {
	      if (maybeThenable.constructor === promise.constructor) {
	        lib$es6$promise$$internal$$handleOwnThenable(promise, maybeThenable);
	      } else {
	        var then = lib$es6$promise$$internal$$getThen(maybeThenable);

	        if (then === lib$es6$promise$$internal$$GET_THEN_ERROR) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$GET_THEN_ERROR.error);
	        } else if (then === undefined) {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        } else if (lib$es6$promise$utils$$isFunction(then)) {
	          lib$es6$promise$$internal$$handleForeignThenable(promise, maybeThenable, then);
	        } else {
	          lib$es6$promise$$internal$$fulfill(promise, maybeThenable);
	        }
	      }
	    }

	    function lib$es6$promise$$internal$$resolve(promise, value) {
	      if (promise === value) {
	        lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$selfFulfillment());
	      } else if (lib$es6$promise$utils$$objectOrFunction(value)) {
	        lib$es6$promise$$internal$$handleMaybeThenable(promise, value);
	      } else {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$publishRejection(promise) {
	      if (promise._onerror) {
	        promise._onerror(promise._result);
	      }

	      lib$es6$promise$$internal$$publish(promise);
	    }

	    function lib$es6$promise$$internal$$fulfill(promise, value) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }

	      promise._result = value;
	      promise._state = lib$es6$promise$$internal$$FULFILLED;

	      if (promise._subscribers.length !== 0) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, promise);
	      }
	    }

	    function lib$es6$promise$$internal$$reject(promise, reason) {
	      if (promise._state !== lib$es6$promise$$internal$$PENDING) { return; }
	      promise._state = lib$es6$promise$$internal$$REJECTED;
	      promise._result = reason;

	      lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publishRejection, promise);
	    }

	    function lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection) {
	      var subscribers = parent._subscribers;
	      var length = subscribers.length;

	      parent._onerror = null;

	      subscribers[length] = child;
	      subscribers[length + lib$es6$promise$$internal$$FULFILLED] = onFulfillment;
	      subscribers[length + lib$es6$promise$$internal$$REJECTED]  = onRejection;

	      if (length === 0 && parent._state) {
	        lib$es6$promise$asap$$asap(lib$es6$promise$$internal$$publish, parent);
	      }
	    }

	    function lib$es6$promise$$internal$$publish(promise) {
	      var subscribers = promise._subscribers;
	      var settled = promise._state;

	      if (subscribers.length === 0) { return; }

	      var child, callback, detail = promise._result;

	      for (var i = 0; i < subscribers.length; i += 3) {
	        child = subscribers[i];
	        callback = subscribers[i + settled];

	        if (child) {
	          lib$es6$promise$$internal$$invokeCallback(settled, child, callback, detail);
	        } else {
	          callback(detail);
	        }
	      }

	      promise._subscribers.length = 0;
	    }

	    function lib$es6$promise$$internal$$ErrorObject() {
	      this.error = null;
	    }

	    var lib$es6$promise$$internal$$TRY_CATCH_ERROR = new lib$es6$promise$$internal$$ErrorObject();

	    function lib$es6$promise$$internal$$tryCatch(callback, detail) {
	      try {
	        return callback(detail);
	      } catch(e) {
	        lib$es6$promise$$internal$$TRY_CATCH_ERROR.error = e;
	        return lib$es6$promise$$internal$$TRY_CATCH_ERROR;
	      }
	    }

	    function lib$es6$promise$$internal$$invokeCallback(settled, promise, callback, detail) {
	      var hasCallback = lib$es6$promise$utils$$isFunction(callback),
	          value, error, succeeded, failed;

	      if (hasCallback) {
	        value = lib$es6$promise$$internal$$tryCatch(callback, detail);

	        if (value === lib$es6$promise$$internal$$TRY_CATCH_ERROR) {
	          failed = true;
	          error = value.error;
	          value = null;
	        } else {
	          succeeded = true;
	        }

	        if (promise === value) {
	          lib$es6$promise$$internal$$reject(promise, lib$es6$promise$$internal$$cannotReturnOwn());
	          return;
	        }

	      } else {
	        value = detail;
	        succeeded = true;
	      }

	      if (promise._state !== lib$es6$promise$$internal$$PENDING) {
	        // noop
	      } else if (hasCallback && succeeded) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      } else if (failed) {
	        lib$es6$promise$$internal$$reject(promise, error);
	      } else if (settled === lib$es6$promise$$internal$$FULFILLED) {
	        lib$es6$promise$$internal$$fulfill(promise, value);
	      } else if (settled === lib$es6$promise$$internal$$REJECTED) {
	        lib$es6$promise$$internal$$reject(promise, value);
	      }
	    }

	    function lib$es6$promise$$internal$$initializePromise(promise, resolver) {
	      try {
	        resolver(function resolvePromise(value){
	          lib$es6$promise$$internal$$resolve(promise, value);
	        }, function rejectPromise(reason) {
	          lib$es6$promise$$internal$$reject(promise, reason);
	        });
	      } catch(e) {
	        lib$es6$promise$$internal$$reject(promise, e);
	      }
	    }

	    function lib$es6$promise$enumerator$$Enumerator(Constructor, input) {
	      var enumerator = this;

	      enumerator._instanceConstructor = Constructor;
	      enumerator.promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (enumerator._validateInput(input)) {
	        enumerator._input     = input;
	        enumerator.length     = input.length;
	        enumerator._remaining = input.length;

	        enumerator._init();

	        if (enumerator.length === 0) {
	          lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	        } else {
	          enumerator.length = enumerator.length || 0;
	          enumerator._enumerate();
	          if (enumerator._remaining === 0) {
	            lib$es6$promise$$internal$$fulfill(enumerator.promise, enumerator._result);
	          }
	        }
	      } else {
	        lib$es6$promise$$internal$$reject(enumerator.promise, enumerator._validationError());
	      }
	    }

	    lib$es6$promise$enumerator$$Enumerator.prototype._validateInput = function(input) {
	      return lib$es6$promise$utils$$isArray(input);
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._validationError = function() {
	      return new Error('Array Methods must be provided an Array');
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._init = function() {
	      this._result = new Array(this.length);
	    };

	    var lib$es6$promise$enumerator$$default = lib$es6$promise$enumerator$$Enumerator;

	    lib$es6$promise$enumerator$$Enumerator.prototype._enumerate = function() {
	      var enumerator = this;

	      var length  = enumerator.length;
	      var promise = enumerator.promise;
	      var input   = enumerator._input;

	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        enumerator._eachEntry(input[i], i);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._eachEntry = function(entry, i) {
	      var enumerator = this;
	      var c = enumerator._instanceConstructor;

	      if (lib$es6$promise$utils$$isMaybeThenable(entry)) {
	        if (entry.constructor === c && entry._state !== lib$es6$promise$$internal$$PENDING) {
	          entry._onerror = null;
	          enumerator._settledAt(entry._state, i, entry._result);
	        } else {
	          enumerator._willSettleAt(c.resolve(entry), i);
	        }
	      } else {
	        enumerator._remaining--;
	        enumerator._result[i] = entry;
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._settledAt = function(state, i, value) {
	      var enumerator = this;
	      var promise = enumerator.promise;

	      if (promise._state === lib$es6$promise$$internal$$PENDING) {
	        enumerator._remaining--;

	        if (state === lib$es6$promise$$internal$$REJECTED) {
	          lib$es6$promise$$internal$$reject(promise, value);
	        } else {
	          enumerator._result[i] = value;
	        }
	      }

	      if (enumerator._remaining === 0) {
	        lib$es6$promise$$internal$$fulfill(promise, enumerator._result);
	      }
	    };

	    lib$es6$promise$enumerator$$Enumerator.prototype._willSettleAt = function(promise, i) {
	      var enumerator = this;

	      lib$es6$promise$$internal$$subscribe(promise, undefined, function(value) {
	        enumerator._settledAt(lib$es6$promise$$internal$$FULFILLED, i, value);
	      }, function(reason) {
	        enumerator._settledAt(lib$es6$promise$$internal$$REJECTED, i, reason);
	      });
	    };
	    function lib$es6$promise$promise$all$$all(entries) {
	      return new lib$es6$promise$enumerator$$default(this, entries).promise;
	    }
	    var lib$es6$promise$promise$all$$default = lib$es6$promise$promise$all$$all;
	    function lib$es6$promise$promise$race$$race(entries) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);

	      if (!lib$es6$promise$utils$$isArray(entries)) {
	        lib$es6$promise$$internal$$reject(promise, new TypeError('You must pass an array to race.'));
	        return promise;
	      }

	      var length = entries.length;

	      function onFulfillment(value) {
	        lib$es6$promise$$internal$$resolve(promise, value);
	      }

	      function onRejection(reason) {
	        lib$es6$promise$$internal$$reject(promise, reason);
	      }

	      for (var i = 0; promise._state === lib$es6$promise$$internal$$PENDING && i < length; i++) {
	        lib$es6$promise$$internal$$subscribe(Constructor.resolve(entries[i]), undefined, onFulfillment, onRejection);
	      }

	      return promise;
	    }
	    var lib$es6$promise$promise$race$$default = lib$es6$promise$promise$race$$race;
	    function lib$es6$promise$promise$resolve$$resolve(object) {
	      /*jshint validthis:true */
	      var Constructor = this;

	      if (object && typeof object === 'object' && object.constructor === Constructor) {
	        return object;
	      }

	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$resolve(promise, object);
	      return promise;
	    }
	    var lib$es6$promise$promise$resolve$$default = lib$es6$promise$promise$resolve$$resolve;
	    function lib$es6$promise$promise$reject$$reject(reason) {
	      /*jshint validthis:true */
	      var Constructor = this;
	      var promise = new Constructor(lib$es6$promise$$internal$$noop);
	      lib$es6$promise$$internal$$reject(promise, reason);
	      return promise;
	    }
	    var lib$es6$promise$promise$reject$$default = lib$es6$promise$promise$reject$$reject;

	    var lib$es6$promise$promise$$counter = 0;

	    function lib$es6$promise$promise$$needsResolver() {
	      throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	    }

	    function lib$es6$promise$promise$$needsNew() {
	      throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	    }

	    var lib$es6$promise$promise$$default = lib$es6$promise$promise$$Promise;
	    /**
	      Promise objects represent the eventual result of an asynchronous operation. The
	      primary way of interacting with a promise is through its `then` method, which
	      registers callbacks to receive either a promise's eventual value or the reason
	      why the promise cannot be fulfilled.

	      Terminology
	      -----------

	      - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	      - `thenable` is an object or function that defines a `then` method.
	      - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	      - `exception` is a value that is thrown using the throw statement.
	      - `reason` is a value that indicates why a promise was rejected.
	      - `settled` the final resting state of a promise, fulfilled or rejected.

	      A promise can be in one of three states: pending, fulfilled, or rejected.

	      Promises that are fulfilled have a fulfillment value and are in the fulfilled
	      state.  Promises that are rejected have a rejection reason and are in the
	      rejected state.  A fulfillment value is never a thenable.

	      Promises can also be said to *resolve* a value.  If this value is also a
	      promise, then the original promise's settled state will match the value's
	      settled state.  So a promise that *resolves* a promise that rejects will
	      itself reject, and a promise that *resolves* a promise that fulfills will
	      itself fulfill.


	      Basic Usage:
	      ------------

	      ```js
	      var promise = new Promise(function(resolve, reject) {
	        // on success
	        resolve(value);

	        // on failure
	        reject(reason);
	      });

	      promise.then(function(value) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Advanced Usage:
	      ---------------

	      Promises shine when abstracting away asynchronous interactions such as
	      `XMLHttpRequest`s.

	      ```js
	      function getJSON(url) {
	        return new Promise(function(resolve, reject){
	          var xhr = new XMLHttpRequest();

	          xhr.open('GET', url);
	          xhr.onreadystatechange = handler;
	          xhr.responseType = 'json';
	          xhr.setRequestHeader('Accept', 'application/json');
	          xhr.send();

	          function handler() {
	            if (this.readyState === this.DONE) {
	              if (this.status === 200) {
	                resolve(this.response);
	              } else {
	                reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	              }
	            }
	          };
	        });
	      }

	      getJSON('/posts.json').then(function(json) {
	        // on fulfillment
	      }, function(reason) {
	        // on rejection
	      });
	      ```

	      Unlike callbacks, promises are great composable primitives.

	      ```js
	      Promise.all([
	        getJSON('/posts'),
	        getJSON('/comments')
	      ]).then(function(values){
	        values[0] // => postsJSON
	        values[1] // => commentsJSON

	        return values;
	      });
	      ```

	      @class Promise
	      @param {function} resolver
	      Useful for tooling.
	      @constructor
	    */
	    function lib$es6$promise$promise$$Promise(resolver) {
	      this._id = lib$es6$promise$promise$$counter++;
	      this._state = undefined;
	      this._result = undefined;
	      this._subscribers = [];

	      if (lib$es6$promise$$internal$$noop !== resolver) {
	        if (!lib$es6$promise$utils$$isFunction(resolver)) {
	          lib$es6$promise$promise$$needsResolver();
	        }

	        if (!(this instanceof lib$es6$promise$promise$$Promise)) {
	          lib$es6$promise$promise$$needsNew();
	        }

	        lib$es6$promise$$internal$$initializePromise(this, resolver);
	      }
	    }

	    lib$es6$promise$promise$$Promise.all = lib$es6$promise$promise$all$$default;
	    lib$es6$promise$promise$$Promise.race = lib$es6$promise$promise$race$$default;
	    lib$es6$promise$promise$$Promise.resolve = lib$es6$promise$promise$resolve$$default;
	    lib$es6$promise$promise$$Promise.reject = lib$es6$promise$promise$reject$$default;
	    lib$es6$promise$promise$$Promise._setScheduler = lib$es6$promise$asap$$setScheduler;
	    lib$es6$promise$promise$$Promise._setAsap = lib$es6$promise$asap$$setAsap;
	    lib$es6$promise$promise$$Promise._asap = lib$es6$promise$asap$$asap;

	    lib$es6$promise$promise$$Promise.prototype = {
	      constructor: lib$es6$promise$promise$$Promise,

	    /**
	      The primary way of interacting with a promise is through its `then` method,
	      which registers callbacks to receive either a promise's eventual value or the
	      reason why the promise cannot be fulfilled.

	      ```js
	      findUser().then(function(user){
	        // user is available
	      }, function(reason){
	        // user is unavailable, and you are given the reason why
	      });
	      ```

	      Chaining
	      --------

	      The return value of `then` is itself a promise.  This second, 'downstream'
	      promise is resolved with the return value of the first promise's fulfillment
	      or rejection handler, or rejected if the handler throws an exception.

	      ```js
	      findUser().then(function (user) {
	        return user.name;
	      }, function (reason) {
	        return 'default name';
	      }).then(function (userName) {
	        // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	        // will be `'default name'`
	      });

	      findUser().then(function (user) {
	        throw new Error('Found user, but still unhappy');
	      }, function (reason) {
	        throw new Error('`findUser` rejected and we're unhappy');
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	        // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	      });
	      ```
	      If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.

	      ```js
	      findUser().then(function (user) {
	        throw new PedagogicalException('Upstream error');
	      }).then(function (value) {
	        // never reached
	      }).then(function (value) {
	        // never reached
	      }, function (reason) {
	        // The `PedgagocialException` is propagated all the way down to here
	      });
	      ```

	      Assimilation
	      ------------

	      Sometimes the value you want to propagate to a downstream promise can only be
	      retrieved asynchronously. This can be achieved by returning a promise in the
	      fulfillment or rejection handler. The downstream promise will then be pending
	      until the returned promise is settled. This is called *assimilation*.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // The user's comments are now available
	      });
	      ```

	      If the assimliated promise rejects, then the downstream promise will also reject.

	      ```js
	      findUser().then(function (user) {
	        return findCommentsByAuthor(user);
	      }).then(function (comments) {
	        // If `findCommentsByAuthor` fulfills, we'll have the value here
	      }, function (reason) {
	        // If `findCommentsByAuthor` rejects, we'll have the reason here
	      });
	      ```

	      Simple Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var result;

	      try {
	        result = findResult();
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js
	      findResult(function(result, err){
	        if (err) {
	          // failure
	        } else {
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findResult().then(function(result){
	        // success
	      }, function(reason){
	        // failure
	      });
	      ```

	      Advanced Example
	      --------------

	      Synchronous Example

	      ```javascript
	      var author, books;

	      try {
	        author = findAuthor();
	        books  = findBooksByAuthor(author);
	        // success
	      } catch(reason) {
	        // failure
	      }
	      ```

	      Errback Example

	      ```js

	      function foundBooks(books) {

	      }

	      function failure(reason) {

	      }

	      findAuthor(function(author, err){
	        if (err) {
	          failure(err);
	          // failure
	        } else {
	          try {
	            findBoooksByAuthor(author, function(books, err) {
	              if (err) {
	                failure(err);
	              } else {
	                try {
	                  foundBooks(books);
	                } catch(reason) {
	                  failure(reason);
	                }
	              }
	            });
	          } catch(error) {
	            failure(err);
	          }
	          // success
	        }
	      });
	      ```

	      Promise Example;

	      ```javascript
	      findAuthor().
	        then(findBooksByAuthor).
	        then(function(books){
	          // found books
	      }).catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method then
	      @param {Function} onFulfilled
	      @param {Function} onRejected
	      Useful for tooling.
	      @return {Promise}
	    */
	      then: function(onFulfillment, onRejection) {
	        var parent = this;
	        var state = parent._state;

	        if (state === lib$es6$promise$$internal$$FULFILLED && !onFulfillment || state === lib$es6$promise$$internal$$REJECTED && !onRejection) {
	          return this;
	        }

	        var child = new this.constructor(lib$es6$promise$$internal$$noop);
	        var result = parent._result;

	        if (state) {
	          var callback = arguments[state - 1];
	          lib$es6$promise$asap$$asap(function(){
	            lib$es6$promise$$internal$$invokeCallback(state, child, callback, result);
	          });
	        } else {
	          lib$es6$promise$$internal$$subscribe(parent, child, onFulfillment, onRejection);
	        }

	        return child;
	      },

	    /**
	      `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	      as the catch block of a try/catch statement.

	      ```js
	      function findAuthor(){
	        throw new Error('couldn't find that author');
	      }

	      // synchronous
	      try {
	        findAuthor();
	      } catch(reason) {
	        // something went wrong
	      }

	      // async with promises
	      findAuthor().catch(function(reason){
	        // something went wrong
	      });
	      ```

	      @method catch
	      @param {Function} onRejection
	      Useful for tooling.
	      @return {Promise}
	    */
	      'catch': function(onRejection) {
	        return this.then(null, onRejection);
	      }
	    };
	    function lib$es6$promise$polyfill$$polyfill() {
	      var local;

	      if (typeof global !== 'undefined') {
	          local = global;
	      } else if (typeof self !== 'undefined') {
	          local = self;
	      } else {
	          try {
	              local = Function('return this')();
	          } catch (e) {
	              throw new Error('polyfill failed because global object is unavailable in this environment');
	          }
	      }

	      var P = local.Promise;

	      if (P && Object.prototype.toString.call(P.resolve()) === '[object Promise]' && !P.cast) {
	        return;
	      }

	      local.Promise = lib$es6$promise$promise$$default;
	    }
	    var lib$es6$promise$polyfill$$default = lib$es6$promise$polyfill$$polyfill;

	    var lib$es6$promise$umd$$ES6Promise = {
	      'Promise': lib$es6$promise$promise$$default,
	      'polyfill': lib$es6$promise$polyfill$$default
	    };

	    /* global define:true module:true window: true */
	    if (typeof define === 'function' && define['amd']) {
	      define(function() { return lib$es6$promise$umd$$ES6Promise; });
	    } else if (typeof module !== 'undefined' && module['exports']) {
	      module['exports'] = lib$es6$promise$umd$$ES6Promise;
	    } else if (typeof this !== 'undefined') {
	      this['ES6Promise'] = lib$es6$promise$umd$$ES6Promise;
	    }

	    lib$es6$promise$polyfill$$default();
	}).call(this);


	}).call(this,{},typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}]},{},[1]);


/***/ }
/******/ ]);
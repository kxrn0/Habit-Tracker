function hE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var A={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),fE=Symbol.for("react.portal"),pE=Symbol.for("react.fragment"),mE=Symbol.for("react.strict_mode"),gE=Symbol.for("react.profiler"),yE=Symbol.for("react.provider"),vE=Symbol.for("react.context"),wE=Symbol.for("react.forward_ref"),_E=Symbol.for("react.suspense"),EE=Symbol.for("react.memo"),SE=Symbol.for("react.lazy"),Lp=Symbol.iterator;function kE(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var _y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ey=Object.assign,Sy={};function Hi(t,e,n){this.props=t,this.context=e,this.refs=Sy,this.updater=n||_y}Hi.prototype.isReactComponent={};Hi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Hi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ky(){}ky.prototype=Hi.prototype;function Ed(t,e,n){this.props=t,this.context=e,this.refs=Sy,this.updater=n||_y}var Sd=Ed.prototype=new ky;Sd.constructor=Ed;Ey(Sd,Hi.prototype);Sd.isPureReactComponent=!0;var bp=Array.isArray,Iy=Object.prototype.hasOwnProperty,kd={current:null},Ty={key:!0,ref:!0,__self:!0,__source:!0};function Cy(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Iy.call(e,r)&&!Ty.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Eo,type:t,key:s,ref:o,props:i,_owner:kd.current}}function IE(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function TE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $p=/\/+/g;function Gu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?TE(""+t.key):e.toString(36)}function Ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case fE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Gu(o,0):r,bp(i)?(n="",t!=null&&(n=t.replace($p,"$&/")+"/"),Ta(i,e,n,"",function(u){return u})):i!=null&&(Id(i)&&(i=IE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($p,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Gu(s,a);o+=Ta(s,e,n,l,i)}else if(l=kE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Gu(s,a++),o+=Ta(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Yo(t,e,n){if(t==null)return t;var r=[],i=0;return Ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function CE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Ca={transition:null},NE={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Ca,ReactCurrentOwner:kd};ee.Children={map:Yo,forEach:function(t,e,n){Yo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Yo(t,function(){e++}),e},toArray:function(t){return Yo(t,function(e){return e})||[]},only:function(t){if(!Id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=Hi;ee.Fragment=pE;ee.Profiler=gE;ee.PureComponent=Ed;ee.StrictMode=mE;ee.Suspense=_E;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=NE;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ey({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Iy.call(e,l)&&!Ty.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Eo,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:vE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yE,_context:t},t.Consumer=t};ee.createElement=Cy;ee.createFactory=function(t){var e=Cy.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:wE,render:t}};ee.isValidElement=Id;ee.lazy=function(t){return{$$typeof:SE,_payload:{_status:-1,_result:t},_init:CE}};ee.memo=function(t,e){return{$$typeof:EE,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=Ca.transition;Ca.transition={};try{t()}finally{Ca.transition=e}};ee.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ee.useCallback=function(t,e){return lt.current.useCallback(t,e)};ee.useContext=function(t){return lt.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};ee.useEffect=function(t,e){return lt.current.useEffect(t,e)};ee.useId=function(){return lt.current.useId()};ee.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return lt.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};ee.useRef=function(t){return lt.current.useRef(t)};ee.useState=function(t){return lt.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return lt.current.useTransition()};ee.version="18.2.0";(function(t){t.exports=ee})(A);const Ny=dE(A.exports),jc=hE({__proto__:null,default:Ny},[A.exports]);var Hc={},Ry={exports:{}},xt={},xy={exports:{}},Dy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var H=D.length;D.push(U);e:for(;0<H;){var ae=H-1>>>1,ce=D[ae];if(0<i(ce,U))D[ae]=U,D[H]=ce,H=ae;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var U=D[0],H=D.pop();if(H!==U){D[0]=H;e:for(var ae=0,ce=D.length,_t=ce>>>1;ae<_t;){var tt=2*(ae+1)-1,hn=D[tt],Et=tt+1,Qt=D[Et];if(0>i(hn,H))Et<ce&&0>i(Qt,hn)?(D[ae]=Qt,D[Et]=H,ae=Et):(D[ae]=hn,D[tt]=H,ae=tt);else if(Et<ce&&0>i(Qt,H))D[ae]=Qt,D[Et]=H,ae=Et;else break e}}return U}function i(D,U){var H=D.sortIndex-U.sortIndex;return H!==0?H:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(D){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=D)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function w(D){if(_=!1,p(D),!y)if(n(l)!==null)y=!0,F(E);else{var U=n(u);U!==null&&K(w,U.startTime-D)}}function E(D,U){y=!1,_&&(_=!1,g(I),I=-1),m=!0;var H=d;try{for(p(U),h=n(l);h!==null&&(!(h.expirationTime>U)||D&&!z());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var ce=ae(h.expirationTime<=U);U=t.unstable_now(),typeof ce=="function"?h.callback=ce:h===n(l)&&r(l),p(U)}else r(l);h=n(l)}if(h!==null)var _t=!0;else{var tt=n(u);tt!==null&&K(w,tt.startTime-U),_t=!1}return _t}finally{h=null,d=H,m=!1}}var S=!1,k=null,I=-1,O=5,P=-1;function z(){return!(t.unstable_now()-P<O)}function te(){if(k!==null){var D=t.unstable_now();P=D;var U=!0;try{U=k(!0,D)}finally{U?M():(S=!1,k=null)}}else S=!1}var M;if(typeof f=="function")M=function(){f(te)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,N=G.port2;G.port1.onmessage=te,M=function(){N.postMessage(null)}}else M=function(){T(te,0)};function F(D){k=D,S||(S=!0,M())}function K(D,U){I=T(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,F(E))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var H=d;d=U;try{return D()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var H=d;d=D;try{return U()}finally{d=H}},t.unstable_scheduleCallback=function(D,U,H){var ae=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ae+H:ae):H=ae,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=H+ce,D={id:c++,callback:U,priorityLevel:D,startTime:H,expirationTime:ce,sortIndex:-1},H>ae?(D.sortIndex=H,e(u,D),n(l)===null&&D===n(u)&&(_?(g(I),I=-1):_=!0,K(w,H-ae))):(D.sortIndex=ce,e(l,D),y||m||(y=!0,F(E))),D},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(D){var U=d;return function(){var H=d;d=U;try{return D.apply(this,arguments)}finally{d=H}}}})(Dy);(function(t){t.exports=Dy})(xy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ay=A.exports,Nt=xy.exports;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oy=new Set,Bs={};function Kr(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(Bs[t]=e,t=0;t<e.length;t++)Oy.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=Object.prototype.hasOwnProperty,RE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mp={},Up={};function xE(t){return qc.call(Up,t)?!0:qc.call(Mp,t)?!1:RE.test(t)?Up[t]=!0:(Mp[t]=!0,!1)}function DE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function AE(t,e,n,r){if(e===null||typeof e>"u"||DE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ut(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new ut(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new ut(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new ut(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new ut(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new ut(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new ut(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new ut(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new ut(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new ut(t,5,!1,t.toLowerCase(),null,!1,!1)});var Td=/[\-:]([a-z])/g;function Cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Td,Cd);je[e]=new ut(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Td,Cd);je[e]=new ut(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Td,Cd);je[e]=new ut(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new ut(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new ut("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new ut(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nd(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(AE(e,n,i,r)&&(n=null),r||i===null?xE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=Ay.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Jo=Symbol.for("react.element"),ni=Symbol.for("react.portal"),ri=Symbol.for("react.fragment"),Rd=Symbol.for("react.strict_mode"),Wc=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),Ly=Symbol.for("react.context"),xd=Symbol.for("react.forward_ref"),Kc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),Dd=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),by=Symbol.for("react.offscreen"),Fp=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=Fp&&t[Fp]||t["@@iterator"],typeof t=="function"?t:null)}var ve=Object.assign,Qu;function ys(t){if(Qu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Qu=e&&e[1]||""}return`
`+Qu+t}var Xu=!1;function Yu(t,e){if(!t||Xu)return"";Xu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Xu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ys(t):""}function OE(t){switch(t.tag){case 5:return ys(t.type);case 16:return ys("Lazy");case 13:return ys("Suspense");case 19:return ys("SuspenseList");case 0:case 2:case 15:return t=Yu(t.type,!1),t;case 11:return t=Yu(t.type.render,!1),t;case 1:return t=Yu(t.type,!0),t;default:return""}}function Qc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ri:return"Fragment";case ni:return"Portal";case Wc:return"Profiler";case Rd:return"StrictMode";case Kc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ly:return(t.displayName||"Context")+".Consumer";case Py:return(t._context.displayName||"Context")+".Provider";case xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Dd:return e=t.displayName||null,e!==null?e:Qc(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return Qc(t(e))}catch{}}return null}function PE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qc(e);case 8:return e===Rd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $y(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function LE(t){var e=$y(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=LE(t))}function My(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$y(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function qa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Xc(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function Vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uy(t,e){e=e.checked,e!=null&&Nd(t,"checked",e,!1)}function Yc(t,e){Uy(t,e);var n=sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jc(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Bp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jc(t,e,n){(e!=="number"||qa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var vs=Array.isArray;function gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function zp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(vs(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function Fy(t,e){var n=sr(e.value),r=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function jp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ea,By=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ea=ea||document.createElement("div"),ea.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ea.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Cs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bE=["Webkit","ms","Moz","O"];Object.keys(Cs).forEach(function(t){bE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Cs[e]=Cs[t]})});function zy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Cs.hasOwnProperty(t)&&Cs[t]?(""+e).trim():e+"px"}function jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=zy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var $E=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function th(t,e){if(e){if($E[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function nh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=null;function Ad(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ih=null,yi=null,vi=null;function Hp(t){if(t=Io(t)){if(typeof ih!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Hl(e),ih(t.stateNode,t.type,e))}}function Hy(t){yi?vi?vi.push(t):vi=[t]:yi=t}function qy(){if(yi){var t=yi,e=vi;if(vi=yi=null,Hp(t),e)for(t=0;t<e.length;t++)Hp(e[t])}}function Wy(t,e){return t(e)}function Ky(){}var Ju=!1;function Gy(t,e,n){if(Ju)return t(e,n);Ju=!0;try{return Wy(t,e,n)}finally{Ju=!1,(yi!==null||vi!==null)&&(Ky(),qy())}}function js(t,e){var n=t.stateNode;if(n===null)return null;var r=Hl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var sh=!1;if(In)try{var as={};Object.defineProperty(as,"passive",{get:function(){sh=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{sh=!1}function ME(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ns=!1,Wa=null,Ka=!1,oh=null,UE={onError:function(t){Ns=!0,Wa=t}};function FE(t,e,n,r,i,s,o,a,l){Ns=!1,Wa=null,ME.apply(UE,arguments)}function VE(t,e,n,r,i,s,o,a,l){if(FE.apply(this,arguments),Ns){if(Ns){var u=Wa;Ns=!1,Wa=null}else throw Error(R(198));Ka||(Ka=!0,oh=u)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Qy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function qp(t){if(Gr(t)!==t)throw Error(R(188))}function BE(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return qp(i),t;if(s===r)return qp(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function Xy(t){return t=BE(t),t!==null?Yy(t):null}function Yy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yy(t);if(e!==null)return e;t=t.sibling}return null}var Jy=Nt.unstable_scheduleCallback,Wp=Nt.unstable_cancelCallback,zE=Nt.unstable_shouldYield,jE=Nt.unstable_requestPaint,ke=Nt.unstable_now,HE=Nt.unstable_getCurrentPriorityLevel,Od=Nt.unstable_ImmediatePriority,Zy=Nt.unstable_UserBlockingPriority,Ga=Nt.unstable_NormalPriority,qE=Nt.unstable_LowPriority,ev=Nt.unstable_IdlePriority,Vl=null,nn=null;function WE(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Vl,t,void 0,(t.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:QE,KE=Math.log,GE=Math.LN2;function QE(t){return t>>>=0,t===0?32:31-(KE(t)/GE|0)|0}var ta=64,na=4194304;function ws(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ws(a):(s&=o,s!==0&&(r=ws(s)))}else o=n&~i,o!==0?r=ws(o):s!==0&&(r=ws(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qt(e),i=1<<n,r|=t[n],e&=~i;return r}function XE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function YE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-qt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=XE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ah(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function tv(){var t=ta;return ta<<=1,(ta&4194240)===0&&(ta=64),t}function Zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function So(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qt(e),t[e]=n}function JE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function nv(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var rv,Ld,iv,sv,ov,lh=!1,ra=[],Kn=null,Gn=null,Qn=null,Hs=new Map,qs=new Map,Un=[],ZE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kp(t,e){switch(t){case"focusin":case"focusout":Kn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Qn=null;break;case"pointerover":case"pointerout":Hs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qs.delete(e.pointerId)}}function ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Io(e),e!==null&&Ld(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function eS(t,e,n,r,i){switch(e){case"focusin":return Kn=ls(Kn,t,e,n,r,i),!0;case"dragenter":return Gn=ls(Gn,t,e,n,r,i),!0;case"mouseover":return Qn=ls(Qn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Hs.set(s,ls(Hs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qs.set(s,ls(qs.get(s)||null,t,e,n,r,i)),!0}return!1}function av(t){var e=kr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Qy(n),e!==null){t.blockedOn=e,ov(t.priority,function(){iv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Na(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rh=r,n.target.dispatchEvent(r),rh=null}else return e=Io(n),e!==null&&Ld(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){Na(t)&&n.delete(e)}function tS(){lh=!1,Kn!==null&&Na(Kn)&&(Kn=null),Gn!==null&&Na(Gn)&&(Gn=null),Qn!==null&&Na(Qn)&&(Qn=null),Hs.forEach(Gp),qs.forEach(Gp)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,lh||(lh=!0,Nt.unstable_scheduleCallback(Nt.unstable_NormalPriority,tS)))}function Ws(t){function e(i){return us(i,t)}if(0<ra.length){us(ra[0],t);for(var n=1;n<ra.length;n++){var r=ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Kn!==null&&us(Kn,t),Gn!==null&&us(Gn,t),Qn!==null&&us(Qn,t),Hs.forEach(e),qs.forEach(e),n=0;n<Un.length;n++)r=Un[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)av(n),n.blockedOn===null&&Un.shift()}var wi=Pn.ReactCurrentBatchConfig,Xa=!0;function nS(t,e,n,r){var i=oe,s=wi.transition;wi.transition=null;try{oe=1,bd(t,e,n,r)}finally{oe=i,wi.transition=s}}function rS(t,e,n,r){var i=oe,s=wi.transition;wi.transition=null;try{oe=4,bd(t,e,n,r)}finally{oe=i,wi.transition=s}}function bd(t,e,n,r){if(Xa){var i=uh(t,e,n,r);if(i===null)uc(t,e,r,Ya,n),Kp(t,r);else if(eS(i,t,e,n,r))r.stopPropagation();else if(Kp(t,r),e&4&&-1<ZE.indexOf(t)){for(;i!==null;){var s=Io(i);if(s!==null&&rv(s),s=uh(t,e,n,r),s===null&&uc(t,e,r,Ya,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else uc(t,e,r,null,n)}}var Ya=null;function uh(t,e,n,r){if(Ya=null,t=Ad(r),t=kr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Qy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ya=t,null}function lv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(HE()){case Od:return 1;case Zy:return 4;case Ga:case qE:return 16;case ev:return 536870912;default:return 16}default:return 16}}var Hn=null,$d=null,Ra=null;function uv(){if(Ra)return Ra;var t,e=$d,n=e.length,r,i="value"in Hn?Hn.value:Hn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ra=i.slice(t,1<r?1-r:void 0)}function xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function Qp(){return!1}function Dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ia:Qp,this.isPropagationStopped=Qp,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),e}var qi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Md=Dt(qi),ko=ve({},qi,{view:0,detail:0}),iS=Dt(ko),ec,tc,cs,Bl=ve({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ud,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(ec=t.screenX-cs.screenX,tc=t.screenY-cs.screenY):tc=ec=0,cs=t),ec)},movementY:function(t){return"movementY"in t?t.movementY:tc}}),Xp=Dt(Bl),sS=ve({},Bl,{dataTransfer:0}),oS=Dt(sS),aS=ve({},ko,{relatedTarget:0}),nc=Dt(aS),lS=ve({},qi,{animationName:0,elapsedTime:0,pseudoElement:0}),uS=Dt(lS),cS=ve({},qi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hS=Dt(cS),dS=ve({},qi,{data:0}),Yp=Dt(dS),fS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mS[t])?!!e[t]:!1}function Ud(){return gS}var yS=ve({},ko,{key:function(t){if(t.key){var e=fS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?pS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ud,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vS=Dt(yS),wS=ve({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Dt(wS),_S=ve({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ud}),ES=Dt(_S),SS=ve({},qi,{propertyName:0,elapsedTime:0,pseudoElement:0}),kS=Dt(SS),IS=ve({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),TS=Dt(IS),CS=[9,13,27,32],Fd=In&&"CompositionEvent"in window,Rs=null;In&&"documentMode"in document&&(Rs=document.documentMode);var NS=In&&"TextEvent"in window&&!Rs,cv=In&&(!Fd||Rs&&8<Rs&&11>=Rs),Zp=String.fromCharCode(32),em=!1;function hv(t,e){switch(t){case"keyup":return CS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ii=!1;function RS(t,e){switch(t){case"compositionend":return dv(e);case"keypress":return e.which!==32?null:(em=!0,Zp);case"textInput":return t=e.data,t===Zp&&em?null:t;default:return null}}function xS(t,e){if(ii)return t==="compositionend"||!Fd&&hv(t,e)?(t=uv(),Ra=$d=Hn=null,ii=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cv&&e.locale!=="ko"?null:e.data;default:return null}}var DS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DS[t.type]:e==="textarea"}function fv(t,e,n,r){Hy(r),e=Ja(e,"onChange"),0<e.length&&(n=new Md("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var xs=null,Ks=null;function AS(t){Iv(t,0)}function zl(t){var e=ai(t);if(My(e))return t}function OS(t,e){if(t==="change")return e}var pv=!1;if(In){var rc;if(In){var ic="oninput"in document;if(!ic){var nm=document.createElement("div");nm.setAttribute("oninput","return;"),ic=typeof nm.oninput=="function"}rc=ic}else rc=!1;pv=rc&&(!document.documentMode||9<document.documentMode)}function rm(){xs&&(xs.detachEvent("onpropertychange",mv),Ks=xs=null)}function mv(t){if(t.propertyName==="value"&&zl(Ks)){var e=[];fv(e,Ks,t,Ad(t)),Gy(AS,e)}}function PS(t,e,n){t==="focusin"?(rm(),xs=e,Ks=n,xs.attachEvent("onpropertychange",mv)):t==="focusout"&&rm()}function LS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Ks)}function bS(t,e){if(t==="click")return zl(e)}function $S(t,e){if(t==="input"||t==="change")return zl(e)}function MS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:MS;function Gs(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qc.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function sm(t,e){var n=im(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=im(n)}}function gv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yv(){for(var t=window,e=qa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=qa(t.document)}return e}function Vd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function US(t){var e=yv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gv(n.ownerDocument.documentElement,n)){if(r!==null&&Vd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=sm(n,s);var o=sm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var FS=In&&"documentMode"in document&&11>=document.documentMode,si=null,ch=null,Ds=null,hh=!1;function om(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hh||si==null||si!==qa(r)||(r=si,"selectionStart"in r&&Vd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ds&&Gs(Ds,r)||(Ds=r,r=Ja(ch,"onSelect"),0<r.length&&(e=new Md("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=si)))}function sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var oi={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionend:sa("Transition","TransitionEnd")},sc={},vv={};In&&(vv=document.createElement("div").style,"AnimationEvent"in window||(delete oi.animationend.animation,delete oi.animationiteration.animation,delete oi.animationstart.animation),"TransitionEvent"in window||delete oi.transitionend.transition);function jl(t){if(sc[t])return sc[t];if(!oi[t])return t;var e=oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vv)return sc[t]=e[n];return t}var wv=jl("animationend"),_v=jl("animationiteration"),Ev=jl("animationstart"),Sv=jl("transitionend"),kv=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function dr(t,e){kv.set(t,e),Kr(e,[t])}for(var oc=0;oc<am.length;oc++){var ac=am[oc],VS=ac.toLowerCase(),BS=ac[0].toUpperCase()+ac.slice(1);dr(VS,"on"+BS)}dr(wv,"onAnimationEnd");dr(_v,"onAnimationIteration");dr(Ev,"onAnimationStart");dr("dblclick","onDoubleClick");dr("focusin","onFocus");dr("focusout","onBlur");dr(Sv,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);Kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zS=new Set("cancel close invalid load scroll toggle".split(" ").concat(_s));function lm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,VE(r,e,void 0,t),t.currentTarget=null}function Iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;lm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;lm(i,a,u),s=l}}}if(Ka)throw t=oh,Ka=!1,oh=null,t}function he(t,e){var n=e[gh];n===void 0&&(n=e[gh]=new Set);var r=t+"__bubble";n.has(r)||(Tv(e,t,2,!1),n.add(r))}function lc(t,e,n){var r=0;e&&(r|=4),Tv(n,t,r,e)}var oa="_reactListening"+Math.random().toString(36).slice(2);function Qs(t){if(!t[oa]){t[oa]=!0,Oy.forEach(function(n){n!=="selectionchange"&&(zS.has(n)||lc(n,!1,t),lc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oa]||(e[oa]=!0,lc("selectionchange",!1,e))}}function Tv(t,e,n,r){switch(lv(e)){case 1:var i=nS;break;case 4:i=rS;break;default:i=bd}n=i.bind(null,e,n,t),i=void 0,!sh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function uc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=kr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Gy(function(){var u=s,c=Ad(n),h=[];e:{var d=kv.get(t);if(d!==void 0){var m=Md,y=t;switch(t){case"keypress":if(xa(n)===0)break e;case"keydown":case"keyup":m=vS;break;case"focusin":y="focus",m=nc;break;case"focusout":y="blur",m=nc;break;case"beforeblur":case"afterblur":m=nc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ES;break;case wv:case _v:case Ev:m=uS;break;case Sv:m=kS;break;case"scroll":m=iS;break;case"wheel":m=TS;break;case"copy":case"cut":case"paste":m=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Jp}var _=(e&4)!==0,T=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,p;f!==null;){p=f;var w=p.stateNode;if(p.tag===5&&w!==null&&(p=w,g!==null&&(w=js(f,g),w!=null&&_.push(Xs(f,w,p)))),T)break;f=f.return}0<_.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:_}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==rh&&(y=n.relatedTarget||n.fromElement)&&(kr(y)||y[Tn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?kr(y):null,y!==null&&(T=Gr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=Xp,w="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Jp,w="onPointerLeave",g="onPointerEnter",f="pointer"),T=m==null?d:ai(m),p=y==null?d:ai(y),d=new _(w,f+"leave",m,n,c),d.target=T,d.relatedTarget=p,w=null,kr(c)===u&&(_=new _(g,f+"enter",y,n,c),_.target=p,_.relatedTarget=T,w=_),T=w,m&&y)t:{for(_=m,g=y,f=0,p=_;p;p=Zr(p))f++;for(p=0,w=g;w;w=Zr(w))p++;for(;0<f-p;)_=Zr(_),f--;for(;0<p-f;)g=Zr(g),p--;for(;f--;){if(_===g||g!==null&&_===g.alternate)break t;_=Zr(_),g=Zr(g)}_=null}else _=null;m!==null&&um(h,d,m,_,!1),y!==null&&T!==null&&um(h,T,y,_,!0)}}e:{if(d=u?ai(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var E=OS;else if(tm(d))if(pv)E=$S;else{E=LS;var S=PS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=bS);if(E&&(E=E(t,u))){fv(h,E,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Jc(d,"number",d.value)}switch(S=u?ai(u):window,t){case"focusin":(tm(S)||S.contentEditable==="true")&&(si=S,ch=u,Ds=null);break;case"focusout":Ds=ch=si=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,om(h,n,c);break;case"selectionchange":if(FS)break;case"keydown":case"keyup":om(h,n,c)}var k;if(Fd)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else ii?hv(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(cv&&n.locale!=="ko"&&(ii||I!=="onCompositionStart"?I==="onCompositionEnd"&&ii&&(k=uv()):(Hn=c,$d="value"in Hn?Hn.value:Hn.textContent,ii=!0)),S=Ja(u,I),0<S.length&&(I=new Yp(I,t,null,n,c),h.push({event:I,listeners:S}),k?I.data=k:(k=dv(n),k!==null&&(I.data=k)))),(k=NS?RS(t,n):xS(t,n))&&(u=Ja(u,"onBeforeInput"),0<u.length&&(c=new Yp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}Iv(h,e)})}function Xs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=js(t,n),s!=null&&r.unshift(Xs(t,s,i)),s=js(t,e),s!=null&&r.push(Xs(t,s,i))),t=t.return}return r}function Zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function um(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=js(n,s),l!=null&&o.unshift(Xs(n,l,a))):i||(l=js(n,s),l!=null&&o.push(Xs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jS=/\r\n?/g,HS=/\u0000|\uFFFD/g;function cm(t){return(typeof t=="string"?t:""+t).replace(jS,`
`).replace(HS,"")}function aa(t,e,n){if(e=cm(e),cm(t)!==e&&n)throw Error(R(425))}function Za(){}var dh=null,fh=null;function ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mh=typeof setTimeout=="function"?setTimeout:void 0,qS=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,WS=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(t){return hm.resolve(null).then(t).catch(KS)}:mh;function KS(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ws(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ws(e)}function Xn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Wi=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Wi,Ys="__reactProps$"+Wi,Tn="__reactContainer$"+Wi,gh="__reactEvents$"+Wi,GS="__reactListeners$"+Wi,QS="__reactHandles$"+Wi;function kr(t){var e=t[Zt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Tn]||n[Zt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dm(t);t!==null;){if(n=t[Zt])return n;t=dm(t)}return e}t=n,n=t.parentNode}return null}function Io(t){return t=t[Zt]||t[Tn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ai(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Hl(t){return t[Ys]||null}var yh=[],li=-1;function fr(t){return{current:t}}function de(t){0>li||(t.current=yh[li],yh[li]=null,li--)}function le(t,e){li++,yh[li]=t.current,t.current=e}var or={},Je=fr(or),mt=fr(!1),$r=or;function xi(t,e){var n=t.type.contextTypes;if(!n)return or;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function el(){de(mt),de(Je)}function fm(t,e,n){if(Je.current!==or)throw Error(R(168));le(Je,e),le(mt,n)}function Cv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,PE(t)||"Unknown",i));return ve({},n,r)}function tl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,$r=Je.current,le(Je,t),le(mt,mt.current),!0}function pm(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=Cv(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,de(mt),de(Je),le(Je,t)):de(mt),le(mt,n)}var fn=null,ql=!1,hc=!1;function Nv(t){fn===null?fn=[t]:fn.push(t)}function XS(t){ql=!0,Nv(t)}function pr(){if(!hc&&fn!==null){hc=!0;var t=0,e=oe;try{var n=fn;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,ql=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),Jy(Od,pr),i}finally{oe=e,hc=!1}}return null}var ui=[],ci=0,nl=null,rl=0,Pt=[],Lt=0,Mr=null,mn=1,gn="";function wr(t,e){ui[ci++]=rl,ui[ci++]=nl,nl=t,rl=e}function Rv(t,e,n){Pt[Lt++]=mn,Pt[Lt++]=gn,Pt[Lt++]=Mr,Mr=t;var r=mn;t=gn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var s=32-qt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-qt(e)+i|n<<i|r,gn=s+t}else mn=1<<s|n<<i|r,gn=t}function Bd(t){t.return!==null&&(wr(t,1),Rv(t,1,0))}function zd(t){for(;t===nl;)nl=ui[--ci],ui[ci]=null,rl=ui[--ci],ui[ci]=null;for(;t===Mr;)Mr=Pt[--Lt],Pt[Lt]=null,gn=Pt[--Lt],Pt[Lt]=null,mn=Pt[--Lt],Pt[Lt]=null}var Ct=null,It=null,fe=!1,Ht=null;function xv(t,e){var n=bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ct=t,It=Xn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ct=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:mn,overflow:gn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ct=t,It=null,!0):!1;default:return!1}}function vh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wh(t){if(fe){var e=It;if(e){var n=e;if(!mm(t,e)){if(vh(t))throw Error(R(418));e=Xn(n.nextSibling);var r=Ct;e&&mm(t,e)?xv(r,n):(t.flags=t.flags&-4097|2,fe=!1,Ct=t)}}else{if(vh(t))throw Error(R(418));t.flags=t.flags&-4097|2,fe=!1,Ct=t}}}function gm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ct=t}function la(t){if(t!==Ct)return!1;if(!fe)return gm(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ph(t.type,t.memoizedProps)),e&&(e=It)){if(vh(t))throw Dv(),Error(R(418));for(;e;)xv(t,e),e=Xn(e.nextSibling)}if(gm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=Xn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=Ct?Xn(t.stateNode.nextSibling):null;return!0}function Dv(){for(var t=It;t;)t=Xn(t.nextSibling)}function Di(){It=Ct=null,fe=!1}function jd(t){Ht===null?Ht=[t]:Ht.push(t)}var YS=Pn.ReactCurrentBatchConfig;function zt(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var il=fr(null),sl=null,hi=null,Hd=null;function qd(){Hd=hi=sl=null}function Wd(t){var e=il.current;de(il),t._currentValue=e}function _h(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _i(t,e){sl=t,Hd=hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ft=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(Hd!==t)if(t={context:t,memoizedValue:e,next:null},hi===null){if(sl===null)throw Error(R(308));hi=t,sl.dependencies={lanes:0,firstContext:t}}else hi=hi.next=t;return e}var Ir=null;function Kd(t){Ir===null?Ir=[t]:Ir.push(t)}function Av(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Cn(t,r)}function Cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ov(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(re&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Cn(t,n)}return i=r.interleaved,i===null?(e.next=e,Kd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Cn(t,n)}function Da(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pd(t,n)}}function ym(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ol(t,e,n,r){var i=t.updateQueue;Mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=ve({},h,d);break e;case 2:Mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=h}}function vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var Pv=new Ay.Component().refs;function Eh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=at(),i=Zn(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Wt(e,t,i,r),Da(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=at(),i=Zn(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yn(t,s,i),e!==null&&(Wt(e,t,i,r),Da(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=at(),r=Zn(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yn(t,i,r),e!==null&&(Wt(e,t,r,n),Da(e,t,r))}};function wm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Gs(n,r)||!Gs(i,s):!0}function Lv(t,e,n){var r=!1,i=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=gt(e)?$r:Je.current,r=e.contextTypes,s=(r=r!=null)?xi(t,i):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wl.enqueueReplaceState(e,e.state,null)}function Sh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Pv,Gd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=gt(e)?$r:Je.current,i.context=xi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Eh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wl.enqueueReplaceState(i,i.state,null),ol(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Pv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function ua(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Em(t){var e=t._init;return e(t._payload)}function bv(t){function e(g,f){if(t){var p=g.deletions;p===null?(g.deletions=[f],g.flags|=16):p.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=er(g,f),g.index=0,g.sibling=null,g}function s(g,f,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<f?(g.flags|=2,f):p):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,p,w){return f===null||f.tag!==6?(f=vc(p,g.mode,w),f.return=g,f):(f=i(f,p),f.return=g,f)}function l(g,f,p,w){var E=p.type;return E===ri?c(g,f,p.props.children,w,p.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===$n&&Em(E)===f.type)?(w=i(f,p.props),w.ref=hs(g,f,p),w.return=g,w):(w=$a(p.type,p.key,p.props,null,g.mode,w),w.ref=hs(g,f,p),w.return=g,w)}function u(g,f,p,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=wc(p,g.mode,w),f.return=g,f):(f=i(f,p.children||[]),f.return=g,f)}function c(g,f,p,w,E){return f===null||f.tag!==7?(f=Ar(p,g.mode,w,E),f.return=g,f):(f=i(f,p),f.return=g,f)}function h(g,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=vc(""+f,g.mode,p),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Jo:return p=$a(f.type,f.key,f.props,null,g.mode,p),p.ref=hs(g,null,f),p.return=g,p;case ni:return f=wc(f,g.mode,p),f.return=g,f;case $n:var w=f._init;return h(g,w(f._payload),p)}if(vs(f)||os(f))return f=Ar(f,g.mode,p,null),f.return=g,f;ua(g,f)}return null}function d(g,f,p,w){var E=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(g,f,""+p,w);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Jo:return p.key===E?l(g,f,p,w):null;case ni:return p.key===E?u(g,f,p,w):null;case $n:return E=p._init,d(g,f,E(p._payload),w)}if(vs(p)||os(p))return E!==null?null:c(g,f,p,w,null);ua(g,p)}return null}function m(g,f,p,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(p)||null,a(f,g,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Jo:return g=g.get(w.key===null?p:w.key)||null,l(f,g,w,E);case ni:return g=g.get(w.key===null?p:w.key)||null,u(f,g,w,E);case $n:var S=w._init;return m(g,f,p,S(w._payload),E)}if(vs(w)||os(w))return g=g.get(p)||null,c(f,g,w,E,null);ua(f,w)}return null}function y(g,f,p,w){for(var E=null,S=null,k=f,I=f=0,O=null;k!==null&&I<p.length;I++){k.index>I?(O=k,k=null):O=k.sibling;var P=d(g,k,p[I],w);if(P===null){k===null&&(k=O);break}t&&k&&P.alternate===null&&e(g,k),f=s(P,f,I),S===null?E=P:S.sibling=P,S=P,k=O}if(I===p.length)return n(g,k),fe&&wr(g,I),E;if(k===null){for(;I<p.length;I++)k=h(g,p[I],w),k!==null&&(f=s(k,f,I),S===null?E=k:S.sibling=k,S=k);return fe&&wr(g,I),E}for(k=r(g,k);I<p.length;I++)O=m(k,g,I,p[I],w),O!==null&&(t&&O.alternate!==null&&k.delete(O.key===null?I:O.key),f=s(O,f,I),S===null?E=O:S.sibling=O,S=O);return t&&k.forEach(function(z){return e(g,z)}),fe&&wr(g,I),E}function _(g,f,p,w){var E=os(p);if(typeof E!="function")throw Error(R(150));if(p=E.call(p),p==null)throw Error(R(151));for(var S=E=null,k=f,I=f=0,O=null,P=p.next();k!==null&&!P.done;I++,P=p.next()){k.index>I?(O=k,k=null):O=k.sibling;var z=d(g,k,P.value,w);if(z===null){k===null&&(k=O);break}t&&k&&z.alternate===null&&e(g,k),f=s(z,f,I),S===null?E=z:S.sibling=z,S=z,k=O}if(P.done)return n(g,k),fe&&wr(g,I),E;if(k===null){for(;!P.done;I++,P=p.next())P=h(g,P.value,w),P!==null&&(f=s(P,f,I),S===null?E=P:S.sibling=P,S=P);return fe&&wr(g,I),E}for(k=r(g,k);!P.done;I++,P=p.next())P=m(k,g,I,P.value,w),P!==null&&(t&&P.alternate!==null&&k.delete(P.key===null?I:P.key),f=s(P,f,I),S===null?E=P:S.sibling=P,S=P);return t&&k.forEach(function(te){return e(g,te)}),fe&&wr(g,I),E}function T(g,f,p,w){if(typeof p=="object"&&p!==null&&p.type===ri&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Jo:e:{for(var E=p.key,S=f;S!==null;){if(S.key===E){if(E=p.type,E===ri){if(S.tag===7){n(g,S.sibling),f=i(S,p.props.children),f.return=g,g=f;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===$n&&Em(E)===S.type){n(g,S.sibling),f=i(S,p.props),f.ref=hs(g,S,p),f.return=g,g=f;break e}n(g,S);break}else e(g,S);S=S.sibling}p.type===ri?(f=Ar(p.props.children,g.mode,w,p.key),f.return=g,g=f):(w=$a(p.type,p.key,p.props,null,g.mode,w),w.ref=hs(g,f,p),w.return=g,g=w)}return o(g);case ni:e:{for(S=p.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(g,f.sibling),f=i(f,p.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=wc(p,g.mode,w),f.return=g,g=f}return o(g);case $n:return S=p._init,T(g,f,S(p._payload),w)}if(vs(p))return y(g,f,p,w);if(os(p))return _(g,f,p,w);ua(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,p),f.return=g,g=f):(n(g,f),f=vc(p,g.mode,w),f.return=g,g=f),o(g)):n(g,f)}return T}var Ai=bv(!0),$v=bv(!1),To={},rn=fr(To),Js=fr(To),Zs=fr(To);function Tr(t){if(t===To)throw Error(R(174));return t}function Qd(t,e){switch(le(Zs,e),le(Js,t),le(rn,To),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:eh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=eh(e,t)}de(rn),le(rn,e)}function Oi(){de(rn),de(Js),de(Zs)}function Mv(t){Tr(Zs.current);var e=Tr(rn.current),n=eh(e,t.type);e!==n&&(le(Js,t),le(rn,n))}function Xd(t){Js.current===t&&(de(rn),de(Js))}var ge=fr(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function Yd(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Aa=Pn.ReactCurrentDispatcher,fc=Pn.ReactCurrentBatchConfig,Ur=0,ye=null,Re=null,be=null,ll=!1,As=!1,eo=0,JS=0;function qe(){throw Error(R(321))}function Jd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function Zd(t,e,n,r,i,s){if(Ur=s,ye=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Aa.current=t===null||t.memoizedState===null?nk:rk,t=n(r,i),As){s=0;do{if(As=!1,eo=0,25<=s)throw Error(R(301));s+=1,be=Re=null,e.updateQueue=null,Aa.current=ik,t=n(r,i)}while(As)}if(Aa.current=ul,e=Re!==null&&Re.next!==null,Ur=0,be=Re=ye=null,ll=!1,e)throw Error(R(300));return t}function ef(){var t=eo!==0;return eo=0,t}function Jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?ye.memoizedState=be=t:be=be.next=t,be}function Vt(){if(Re===null){var t=ye.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=be===null?ye.memoizedState:be.next;if(e!==null)be=e,Re=t;else{if(t===null)throw Error(R(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},be===null?ye.memoizedState=be=t:be=be.next=t}return be}function to(t,e){return typeof e=="function"?e(t):e}function pc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ur&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ye.lanes|=c,Fr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Gt(r,e.memoizedState)||(ft=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ye.lanes|=s,Fr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function mc(t){var e=Vt(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(ft=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Uv(){}function Fv(t,e){var n=ye,r=Vt(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,ft=!0),r=r.queue,tf(zv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,no(9,Bv.bind(null,n,r,i,e),void 0,null),$e===null)throw Error(R(349));(Ur&30)!==0||Vv(n,e,i)}return i}function Vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Bv(t,e,n,r){e.value=n,e.getSnapshot=r,jv(e)&&Hv(t)}function zv(t,e,n){return n(function(){jv(e)&&Hv(t)})}function jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function Hv(t){var e=Cn(t,1);e!==null&&Wt(e,t,1,-1)}function Sm(t){var e=Jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=tk.bind(null,ye,t),[e.memoizedState,t]}function no(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ye.updateQueue,e===null?(e={lastEffect:null,stores:null},ye.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function qv(){return Vt().memoizedState}function Oa(t,e,n,r){var i=Jt();ye.flags|=t,i.memoizedState=no(1|e,n,void 0,r===void 0?null:r)}function Kl(t,e,n,r){var i=Vt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&Jd(r,o.deps)){i.memoizedState=no(e,n,s,r);return}}ye.flags|=t,i.memoizedState=no(1|e,n,s,r)}function km(t,e){return Oa(8390656,8,t,e)}function tf(t,e){return Kl(2048,8,t,e)}function Wv(t,e){return Kl(4,2,t,e)}function Kv(t,e){return Kl(4,4,t,e)}function Gv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Qv(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,Gv.bind(null,e,t),n)}function nf(){}function Xv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yv(t,e){var n=Vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Jv(t,e,n){return(Ur&21)===0?(t.baseState&&(t.baseState=!1,ft=!0),t.memoizedState=n):(Gt(n,e)||(n=tv(),ye.lanes|=n,Fr|=n,t.baseState=!0),e)}function ZS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=fc.transition;fc.transition={};try{t(!1),e()}finally{oe=n,fc.transition=r}}function Zv(){return Vt().memoizedState}function ek(t,e,n){var r=Zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},e0(t))t0(e,n);else if(n=Av(t,e,n,r),n!==null){var i=at();Wt(n,t,r,i),n0(n,e,r)}}function tk(t,e,n){var r=Zn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(t))t0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Gt(a,o)){var l=e.interleaved;l===null?(i.next=i,Kd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Av(t,e,i,r),n!==null&&(i=at(),Wt(n,t,r,i),n0(n,e,r))}}function e0(t){var e=t.alternate;return t===ye||e!==null&&e===ye}function t0(t,e){As=ll=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n0(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pd(t,n)}}var ul={readContext:Ft,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},nk={readContext:Ft,useCallback:function(t,e){return Jt().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:km,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oa(4194308,4,Gv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oa(4,2,t,e)},useMemo:function(t,e){var n=Jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ek.bind(null,ye,t),[r.memoizedState,t]},useRef:function(t){var e=Jt();return t={current:t},e.memoizedState=t},useState:Sm,useDebugValue:nf,useDeferredValue:function(t){return Jt().memoizedState=t},useTransition:function(){var t=Sm(!1),e=t[0];return t=ZS.bind(null,t[1]),Jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ye,i=Jt();if(fe){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),$e===null)throw Error(R(349));(Ur&30)!==0||Vv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,km(zv.bind(null,r,s,t),[t]),r.flags|=2048,no(9,Bv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Jt(),e=$e.identifierPrefix;if(fe){var n=gn,r=mn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=JS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rk={readContext:Ft,useCallback:Xv,useContext:Ft,useEffect:tf,useImperativeHandle:Qv,useInsertionEffect:Wv,useLayoutEffect:Kv,useMemo:Yv,useReducer:pc,useRef:qv,useState:function(){return pc(to)},useDebugValue:nf,useDeferredValue:function(t){var e=Vt();return Jv(e,Re.memoizedState,t)},useTransition:function(){var t=pc(to)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:Fv,useId:Zv,unstable_isNewReconciler:!1},ik={readContext:Ft,useCallback:Xv,useContext:Ft,useEffect:tf,useImperativeHandle:Qv,useInsertionEffect:Wv,useLayoutEffect:Kv,useMemo:Yv,useReducer:mc,useRef:qv,useState:function(){return mc(to)},useDebugValue:nf,useDeferredValue:function(t){var e=Vt();return Re===null?e.memoizedState=t:Jv(e,Re.memoizedState,t)},useTransition:function(){var t=mc(to)[0],e=Vt().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:Fv,useId:Zv,unstable_isNewReconciler:!1};function Pi(t,e){try{var n="",r=e;do n+=OE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function gc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function kh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sk=typeof WeakMap=="function"?WeakMap:Map;function r0(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hl||(hl=!0,Ph=r),kh(t,e)},n}function i0(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){kh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){kh(t,e),typeof r!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Im(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new sk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=wk.bind(null,t,e,n),e.then(t,t))}function Tm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Cm(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,Yn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var ok=Pn.ReactCurrentOwner,ft=!1;function st(t,e,n,r){e.child=t===null?$v(e,null,n,r):Ai(e,t.child,n,r)}function Nm(t,e,n,r,i){n=n.render;var s=e.ref;return _i(e,i),r=Zd(t,e,n,r,s,i),n=ef(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(fe&&n&&Bd(e),e.flags|=1,st(t,e,r,i),e.child)}function Rm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s0(t,e,s,r,i)):(t=$a(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Gs,n(o,r)&&t.ref===e.ref)return Nn(t,e,i)}return e.flags|=1,t=er(s,r),t.ref=e.ref,t.return=e,e.child=t}function s0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Gs(s,r)&&t.ref===e.ref)if(ft=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(ft=!0);else return e.lanes=t.lanes,Nn(t,e,i)}return Ih(t,e,n,r,i)}function o0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(fi,kt),kt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(fi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(fi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(fi,kt),kt|=r;return st(t,e,i,n),e.child}function a0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ih(t,e,n,r,i){var s=gt(n)?$r:Je.current;return s=xi(e,s),_i(e,i),n=Zd(t,e,n,r,s,i),r=ef(),t!==null&&!ft?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Nn(t,e,i)):(fe&&r&&Bd(e),e.flags|=1,st(t,e,n,i),e.child)}function xm(t,e,n,r,i){if(gt(n)){var s=!0;tl(e)}else s=!1;if(_i(e,i),e.stateNode===null)Pa(t,e),Lv(e,n,r),Sh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ft(u):(u=gt(n)?$r:Je.current,u=xi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_m(e,o,r,u),Mn=!1;var d=e.memoizedState;o.state=d,ol(e,r,o,i),l=e.memoizedState,a!==r||d!==l||mt.current||Mn?(typeof c=="function"&&(Eh(e,n,c,r),l=e.memoizedState),(a=Mn||wm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Ov(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ft(l):(l=gt(n)?$r:Je.current,l=xi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&_m(e,o,r,l),Mn=!1,d=e.memoizedState,o.state=d,ol(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||mt.current||Mn?(typeof m=="function"&&(Eh(e,n,m,r),y=e.memoizedState),(u=Mn||wm(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Th(t,e,n,r,s,i)}function Th(t,e,n,r,i,s){a0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&pm(e,n,!1),Nn(t,e,s);r=e.stateNode,ok.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ai(e,t.child,null,s),e.child=Ai(e,null,a,s)):st(t,e,a,s),e.memoizedState=r.state,i&&pm(e,n,!0),e.child}function l0(t){var e=t.stateNode;e.pendingContext?fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fm(t,e.context,!1),Qd(t,e.containerInfo)}function Dm(t,e,n,r,i){return Di(),jd(i),e.flags|=256,st(t,e,n,r),e.child}var Ch={dehydrated:null,treeContext:null,retryLane:0};function Nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function u0(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ge,i&1),t===null)return wh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xl(o,r,0,null),t=Ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Nh(n),e.memoizedState=Ch,t):rf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return ak(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=er(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=er(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Nh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ch,r}return s=t.child,t=s.sibling,r=er(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rf(t,e){return e=Xl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ca(t,e,n,r){return r!==null&&jd(r),Ai(e,t.child,null,n),t=rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function ak(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=gc(Error(R(422))),ca(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xl({mode:"visible",children:r.children},i,0,null),s=Ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ai(e,t.child,null,o),e.child.memoizedState=Nh(o),e.memoizedState=Ch,s);if((e.mode&1)===0)return ca(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=gc(s,r,void 0),ca(t,e,o,r)}if(a=(o&t.childLanes)!==0,ft||a){if(r=$e,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Cn(t,i),Wt(r,t,i,-1))}return cf(),r=gc(Error(R(421))),ca(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=_k.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=Xn(i.nextSibling),Ct=e,fe=!0,Ht=null,t!==null&&(Pt[Lt++]=mn,Pt[Lt++]=gn,Pt[Lt++]=Mr,mn=t.id,gn=t.overflow,Mr=e),e=rf(e,r.children),e.flags|=4096,e)}function Am(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_h(t.return,e,n)}function yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function c0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(st(t,e,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,n,e);else if(t.tag===19)Am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ge,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&al(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}yc(e,!0,n,null,s);break;case"together":yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pa(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Nn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lk(t,e,n){switch(e.tag){case 3:l0(e),Di();break;case 5:Mv(e);break;case 1:gt(e.type)&&tl(e);break;case 4:Qd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(il,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ge,ge.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?u0(t,e,n):(le(ge,ge.current&1),t=Nn(t,e,n),t!==null?t.sibling:null);le(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return c0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ge,ge.current),r)break;return null;case 22:case 23:return e.lanes=0,o0(t,e,n)}return Nn(t,e,n)}var h0,Rh,d0,f0;h0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rh=function(){};d0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(rn.current);var s=null;switch(n){case"input":i=Xc(t,i),r=Xc(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Zc(t,i),r=Zc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Za)}th(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&he("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};f0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function uk(t,e,n){var r=e.pendingProps;switch(zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return gt(e.type)&&el(),We(e),null;case 3:return r=e.stateNode,Oi(),de(mt),de(Je),Yd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(la(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ht!==null&&($h(Ht),Ht=null))),Rh(t,e),We(e),null;case 5:Xd(e);var i=Tr(Zs.current);if(n=e.type,t!==null&&e.stateNode!=null)d0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return We(e),null}if(t=Tr(rn.current),la(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Zt]=e,r[Ys]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<_s.length;i++)he(_s[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":Vp(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":zp(r,s),he("invalid",r)}th(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&aa(r.textContent,a,t),i=["children",""+a]):Bs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Zo(r),Bp(r,s,!0);break;case"textarea":Zo(r),jp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Za)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Zt]=e,t[Ys]=r,h0(t,e,!1,!1),e.stateNode=t;e:{switch(o=nh(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<_s.length;i++)he(_s[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":Vp(t,r),i=Xc(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),he("invalid",t);break;case"textarea":zp(t,r),i=Zc(t,r),he("invalid",t);break;default:i=r}th(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&By(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&zs(t,l):typeof l=="number"&&zs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&he("scroll",t):l!=null&&Nd(t,s,l,o))}switch(n){case"input":Zo(t),Bp(t,r,!1);break;case"textarea":Zo(t),jp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)f0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Tr(Zs.current),Tr(rn.current),la(e)){if(r=e.stateNode,n=e.memoizedProps,r[Zt]=e,(s=r.nodeValue!==n)&&(t=Ct,t!==null))switch(t.tag){case 3:aa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&aa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Zt]=e,e.stateNode=r}return We(e),null;case 13:if(de(ge),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&It!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Dv(),Di(),e.flags|=98560,s=!1;else if(s=la(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Zt]=e}else Di(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else Ht!==null&&($h(Ht),Ht=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ge.current&1)!==0?xe===0&&(xe=3):cf())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Oi(),Rh(t,e),t===null&&Qs(e.stateNode.containerInfo),We(e),null;case 10:return Wd(e.type._context),We(e),null;case 17:return gt(e.type)&&el(),We(e),null;case 19:if(de(ge),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ds(s,!1);else{if(xe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=al(t),o!==null){for(e.flags|=128,ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ge,ge.current&1|2),e.child}t=t.sibling}s.tail!==null&&ke()>Li&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=al(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return We(e),null}else 2*ke()-s.renderingStartTime>Li&&n!==1073741824&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ke(),e.sibling=null,n=ge.current,le(ge,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(kt&1073741824)!==0&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function ck(t,e){switch(zd(e),e.tag){case 1:return gt(e.type)&&el(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oi(),de(mt),de(Je),Yd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Xd(e),null;case 13:if(de(ge),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));Di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ge),null;case 4:return Oi(),null;case 10:return Wd(e.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var ha=!1,Ge=!1,hk=typeof WeakSet=="function"?WeakSet:Set,L=null;function di(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(t,e,r)}else n.current=null}function xh(t,e,n){try{n()}catch(r){we(t,e,r)}}var Om=!1;function dk(t,e){if(dh=Xa,t=yv(),Vd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(fh={focusedElem:t,selectionRange:n},Xa=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,T=y.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:zt(e.type,_),T);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){we(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return y=Om,Om=!1,y}function Os(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&xh(e,n,s)}i=i.next}while(i!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Dh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p0(t){var e=t.alternate;e!==null&&(t.alternate=null,p0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Zt],delete e[Ys],delete e[gh],delete e[GS],delete e[QS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function m0(t){return t.tag===5||t.tag===3||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Za));else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}function Oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Oh(t,e,n),t=t.sibling;t!==null;)Oh(t,e,n),t=t.sibling}var Ue=null,jt=!1;function Ln(t,e,n){for(n=n.child;n!==null;)g0(t,e,n),n=n.sibling}function g0(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Vl,n)}catch{}switch(n.tag){case 5:Ge||di(n,e);case 6:var r=Ue,i=jt;Ue=null,Ln(t,e,n),Ue=r,jt=i,Ue!==null&&(jt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(jt?(t=Ue,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),Ws(t)):cc(Ue,n.stateNode));break;case 4:r=Ue,i=jt,Ue=n.stateNode.containerInfo,jt=!0,Ln(t,e,n),Ue=r,jt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&xh(n,e,o),i=i.next}while(i!==r)}Ln(t,e,n);break;case 1:if(!Ge&&(di(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){we(n,e,a)}Ln(t,e,n);break;case 21:Ln(t,e,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,Ln(t,e,n),Ge=r):Ln(t,e,n);break;default:Ln(t,e,n)}}function Lm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hk),e.forEach(function(r){var i=Ek.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Bt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,jt=!1;break e;case 3:Ue=a.stateNode.containerInfo,jt=!0;break e;case 4:Ue=a.stateNode.containerInfo,jt=!0;break e}a=a.return}if(Ue===null)throw Error(R(160));g0(s,o,i),Ue=null,jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){we(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)y0(e,t),e=e.sibling}function y0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bt(e,t),Yt(t),r&4){try{Os(3,t,t.return),Gl(3,t)}catch(_){we(t,t.return,_)}try{Os(5,t,t.return)}catch(_){we(t,t.return,_)}}break;case 1:Bt(e,t),Yt(t),r&512&&n!==null&&di(n,n.return);break;case 5:if(Bt(e,t),Yt(t),r&512&&n!==null&&di(n,n.return),t.flags&32){var i=t.stateNode;try{zs(i,"")}catch(_){we(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Uy(i,s),nh(a,o);var u=nh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?jy(i,h):c==="dangerouslySetInnerHTML"?By(i,h):c==="children"?zs(i,h):Nd(i,c,h,u)}switch(a){case"input":Yc(i,s);break;case"textarea":Fy(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?gi(i,!!s.multiple,s.defaultValue,!0):gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ys]=s}catch(_){we(t,t.return,_)}}break;case 6:if(Bt(e,t),Yt(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){we(t,t.return,_)}}break;case 3:if(Bt(e,t),Yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ws(e.containerInfo)}catch(_){we(t,t.return,_)}break;case 4:Bt(e,t),Yt(t);break;case 13:Bt(e,t),Yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(af=ke())),r&4&&Lm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(u=Ge)||c,Bt(e,t),Ge=u):Bt(e,t),Yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(L=t,c=t.child;c!==null;){for(h=L=c;L!==null;){switch(d=L,m=d.child,d.tag){case 0:case 11:case 14:case 15:Os(4,d,d.return);break;case 1:di(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){we(r,n,_)}}break;case 5:di(d,d.return);break;case 22:if(d.memoizedState!==null){$m(h);continue}}m!==null?(m.return=d,L=m):$m(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=zy("display",o))}catch(_){we(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){we(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Bt(e,t),Yt(t),r&4&&Lm(t);break;case 21:break;default:Bt(e,t),Yt(t)}}function Yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(m0(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(zs(i,""),r.flags&=-33);var s=Pm(t);Oh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pm(t);Ah(t,a,o);break;default:throw Error(R(161))}}catch(l){we(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fk(t,e,n){L=t,v0(t)}function v0(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ha;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ge;a=ha;var u=Ge;if(ha=o,(Ge=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Mm(i):l!==null?(l.return=o,L=l):Mm(i);for(;s!==null;)L=s,v0(s),s=s.sibling;L=i,ha=a,Ge=u}bm(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,L=s):bm(t)}}function bm(t){for(;L!==null;){var e=L;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ge||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:zt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ws(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ge||e.flags&512&&Dh(e)}catch(d){we(e,e.return,d)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function $m(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Mm(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(l){we(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){we(e,i,l)}}var s=e.return;try{Dh(e)}catch(l){we(e,s,l)}break;case 5:var o=e.return;try{Dh(e)}catch(l){we(e,o,l)}}}catch(l){we(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var pk=Math.ceil,cl=Pn.ReactCurrentDispatcher,sf=Pn.ReactCurrentOwner,$t=Pn.ReactCurrentBatchConfig,re=0,$e=null,Ne=null,Be=0,kt=0,fi=fr(0),xe=0,ro=null,Fr=0,Ql=0,of=0,Ps=null,ht=null,af=0,Li=1/0,dn=null,hl=!1,Ph=null,Jn=null,da=!1,qn=null,dl=0,Ls=0,Lh=null,La=-1,ba=0;function at(){return(re&6)!==0?ke():La!==-1?La:La=ke()}function Zn(t){return(t.mode&1)===0?1:(re&2)!==0&&Be!==0?Be&-Be:YS.transition!==null?(ba===0&&(ba=tv()),ba):(t=oe,t!==0||(t=window.event,t=t===void 0?16:lv(t.type)),t)}function Wt(t,e,n,r){if(50<Ls)throw Ls=0,Lh=null,Error(R(185));So(t,n,r),((re&2)===0||t!==$e)&&(t===$e&&((re&2)===0&&(Ql|=n),xe===4&&Fn(t,Be)),yt(t,r),n===1&&re===0&&(e.mode&1)===0&&(Li=ke()+500,ql&&pr()))}function yt(t,e){var n=t.callbackNode;YE(t,e);var r=Qa(t,t===$e?Be:0);if(r===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?XS(Um.bind(null,t)):Nv(Um.bind(null,t)),WS(function(){(re&6)===0&&pr()}),n=null;else{switch(nv(r)){case 1:n=Od;break;case 4:n=Zy;break;case 16:n=Ga;break;case 536870912:n=ev;break;default:n=Ga}n=C0(n,w0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function w0(t,e){if(La=-1,ba=0,(re&6)!==0)throw Error(R(327));var n=t.callbackNode;if(Ei()&&t.callbackNode!==n)return null;var r=Qa(t,t===$e?Be:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=fl(t,r);else{e=r;var i=re;re|=2;var s=E0();($e!==t||Be!==e)&&(dn=null,Li=ke()+500,Dr(t,e));do try{yk();break}catch(a){_0(t,a)}while(1);qd(),cl.current=s,re=i,Ne!==null?e=0:($e=null,Be=0,e=xe)}if(e!==0){if(e===2&&(i=ah(t),i!==0&&(r=i,e=bh(t,i))),e===1)throw n=ro,Dr(t,0),Fn(t,r),yt(t,ke()),n;if(e===6)Fn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!mk(i)&&(e=fl(t,r),e===2&&(s=ah(t),s!==0&&(r=s,e=bh(t,s))),e===1))throw n=ro,Dr(t,0),Fn(t,r),yt(t,ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:_r(t,ht,dn);break;case 3:if(Fn(t,r),(r&130023424)===r&&(e=af+500-ke(),10<e)){if(Qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){at(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mh(_r.bind(null,t,ht,dn),e);break}_r(t,ht,dn);break;case 4:if(Fn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-qt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pk(r/1960))-r,10<r){t.timeoutHandle=mh(_r.bind(null,t,ht,dn),r);break}_r(t,ht,dn);break;case 5:_r(t,ht,dn);break;default:throw Error(R(329))}}}return yt(t,ke()),t.callbackNode===n?w0.bind(null,t):null}function bh(t,e){var n=Ps;return t.current.memoizedState.isDehydrated&&(Dr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=ht,ht=n,e!==null&&$h(e)),t}function $h(t){ht===null?ht=t:ht.push.apply(ht,t)}function mk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Fn(t,e){for(e&=~of,e&=~Ql,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qt(e),r=1<<n;t[n]=-1,e&=~r}}function Um(t){if((re&6)!==0)throw Error(R(327));Ei();var e=Qa(t,0);if((e&1)===0)return yt(t,ke()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var r=ah(t);r!==0&&(e=r,n=bh(t,r))}if(n===1)throw n=ro,Dr(t,0),Fn(t,e),yt(t,ke()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,ht,dn),yt(t,ke()),null}function lf(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Li=ke()+500,ql&&pr())}}function Vr(t){qn!==null&&qn.tag===0&&(re&6)===0&&Ei();var e=re;re|=1;var n=$t.transition,r=oe;try{if($t.transition=null,oe=1,t)return t()}finally{oe=r,$t.transition=n,re=e,(re&6)===0&&pr()}}function uf(){kt=fi.current,de(fi)}function Dr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,qS(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(zd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:Oi(),de(mt),de(Je),Yd();break;case 5:Xd(r);break;case 4:Oi();break;case 13:de(ge);break;case 19:de(ge);break;case 10:Wd(r.type._context);break;case 22:case 23:uf()}n=n.return}if($e=t,Ne=t=er(t.current,null),Be=kt=e,xe=0,ro=null,of=Ql=Fr=0,ht=Ps=null,Ir!==null){for(e=0;e<Ir.length;e++)if(n=Ir[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ir=null}return t}function _0(t,e){do{var n=Ne;try{if(qd(),Aa.current=ul,ll){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ll=!1}if(Ur=0,be=Re=ye=null,As=!1,eo=0,sf.current=null,n===null||n.return===null){xe=1,ro=e,Ne=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Tm(o);if(m!==null){m.flags&=-257,Cm(m,o,a,s,e),m.mode&1&&Im(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if((e&1)===0){Im(s,u,e),cf();break e}l=Error(R(426))}}else if(fe&&a.mode&1){var T=Tm(o);if(T!==null){(T.flags&65536)===0&&(T.flags|=256),Cm(T,o,a,s,e),jd(Pi(l,a));break e}}s=l=Pi(l,a),xe!==4&&(xe=2),Ps===null?Ps=[s]:Ps.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=r0(s,l,e);ym(s,g);break e;case 1:a=l;var f=s.type,p=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Jn===null||!Jn.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=i0(s,a,e);ym(s,w);break e}}s=s.return}while(s!==null)}k0(n)}catch(E){e=E,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(1)}function E0(){var t=cl.current;return cl.current=ul,t===null?ul:t}function cf(){(xe===0||xe===3||xe===2)&&(xe=4),$e===null||(Fr&268435455)===0&&(Ql&268435455)===0||Fn($e,Be)}function fl(t,e){var n=re;re|=2;var r=E0();($e!==t||Be!==e)&&(dn=null,Dr(t,e));do try{gk();break}catch(i){_0(t,i)}while(1);if(qd(),re=n,cl.current=r,Ne!==null)throw Error(R(261));return $e=null,Be=0,xe}function gk(){for(;Ne!==null;)S0(Ne)}function yk(){for(;Ne!==null&&!zE();)S0(Ne)}function S0(t){var e=T0(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?k0(t):Ne=e,sf.current=null}function k0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=uk(n,e,kt),n!==null){Ne=n;return}}else{if(n=ck(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,Ne=null;return}}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);xe===0&&(xe=5)}function _r(t,e,n){var r=oe,i=$t.transition;try{$t.transition=null,oe=1,vk(t,e,n,r)}finally{$t.transition=i,oe=r}return null}function vk(t,e,n,r){do Ei();while(qn!==null);if((re&6)!==0)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(JE(t,s),t===$e&&(Ne=$e=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||da||(da=!0,C0(Ga,function(){return Ei(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=$t.transition,$t.transition=null;var o=oe;oe=1;var a=re;re|=4,sf.current=null,dk(t,n),y0(n,t),US(fh),Xa=!!dh,fh=dh=null,t.current=n,fk(n),jE(),re=a,oe=o,$t.transition=s}else t.current=n;if(da&&(da=!1,qn=t,dl=i),s=t.pendingLanes,s===0&&(Jn=null),WE(n.stateNode),yt(t,ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hl)throw hl=!1,t=Ph,Ph=null,t;return(dl&1)!==0&&t.tag!==0&&Ei(),s=t.pendingLanes,(s&1)!==0?t===Lh?Ls++:(Ls=0,Lh=t):Ls=0,pr(),null}function Ei(){if(qn!==null){var t=nv(dl),e=$t.transition,n=oe;try{if($t.transition=null,oe=16>t?16:t,qn===null)var r=!1;else{if(t=qn,qn=null,dl=0,(re&6)!==0)throw Error(R(331));var i=re;for(re|=4,L=t.current;L!==null;){var s=L,o=s.child;if((L.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:Os(8,c,s)}var h=c.child;if(h!==null)h.return=c,L=h;else for(;L!==null;){c=L;var d=c.sibling,m=c.return;if(p0(c),c===u){L=null;break}if(d!==null){d.return=m,L=d;break}L=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var T=_.sibling;_.sibling=null,_=T}while(_!==null)}}L=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Os(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,L=g;break e}L=s.return}}var f=t.current;for(L=f;L!==null;){o=L;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,L=p;else e:for(o=f;L!==null;){if(a=L,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Gl(9,a)}}catch(E){we(a,a.return,E)}if(a===o){L=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,L=w;break e}L=a.return}}if(re=i,pr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Vl,t)}catch{}r=!0}return r}finally{oe=n,$t.transition=e}}return!1}function Fm(t,e,n){e=Pi(n,e),e=r0(t,e,1),t=Yn(t,e,1),e=at(),t!==null&&(So(t,1,e),yt(t,e))}function we(t,e,n){if(t.tag===3)Fm(t,t,n);else for(;e!==null;){if(e.tag===3){Fm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Jn===null||!Jn.has(r))){t=Pi(n,t),t=i0(e,t,1),e=Yn(e,t,1),t=at(),e!==null&&(So(e,1,t),yt(e,t));break}}e=e.return}}function wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=at(),t.pingedLanes|=t.suspendedLanes&n,$e===t&&(Be&n)===n&&(xe===4||xe===3&&(Be&130023424)===Be&&500>ke()-af?Dr(t,0):of|=n),yt(t,e)}function I0(t,e){e===0&&((t.mode&1)===0?e=1:(e=na,na<<=1,(na&130023424)===0&&(na=4194304)));var n=at();t=Cn(t,e),t!==null&&(So(t,e,n),yt(t,n))}function _k(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I0(t,n)}function Ek(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),I0(t,n)}var T0;T0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)ft=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return ft=!1,lk(t,e,n);ft=(t.flags&131072)!==0}else ft=!1,fe&&(e.flags&1048576)!==0&&Rv(e,rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pa(t,e),t=e.pendingProps;var i=xi(e,Je.current);_i(e,n),i=Zd(null,e,r,t,i,n);var s=ef();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,tl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Gd(e),i.updater=Wl,e.stateNode=i,i._reactInternals=e,Sh(e,r,t,n),e=Th(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&Bd(e),st(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=kk(r),t=zt(r,t),i){case 0:e=Ih(null,e,r,t,n);break e;case 1:e=xm(null,e,r,t,n);break e;case 11:e=Nm(null,e,r,t,n);break e;case 14:e=Rm(null,e,r,zt(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Ih(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),xm(t,e,r,i,n);case 3:e:{if(l0(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Ov(t,e),ol(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Pi(Error(R(423)),e),e=Dm(t,e,r,n,i);break e}else if(r!==i){i=Pi(Error(R(424)),e),e=Dm(t,e,r,n,i);break e}else for(It=Xn(e.stateNode.containerInfo.firstChild),Ct=e,fe=!0,Ht=null,n=$v(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Di(),r===i){e=Nn(t,e,n);break e}st(t,e,r,n)}e=e.child}return e;case 5:return Mv(e),t===null&&wh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ph(r,i)?o=null:s!==null&&ph(r,s)&&(e.flags|=32),a0(t,e),st(t,e,o,n),e.child;case 6:return t===null&&wh(e),null;case 13:return u0(t,e,n);case 4:return Qd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ai(e,null,r,n):st(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Nm(t,e,r,i,n);case 7:return st(t,e,e.pendingProps,n),e.child;case 8:return st(t,e,e.pendingProps.children,n),e.child;case 12:return st(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(il,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!mt.current){e=Nn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=_n(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_h(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_h(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}st(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_i(e,n),i=Ft(i),r=r(i),e.flags|=1,st(t,e,r,n),e.child;case 14:return r=e.type,i=zt(r,e.pendingProps),i=zt(r.type,i),Rm(t,e,r,i,n);case 15:return s0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:zt(r,i),Pa(t,e),e.tag=1,gt(r)?(t=!0,tl(e)):t=!1,_i(e,n),Lv(e,r,i),Sh(e,r,i,n),Th(null,e,r,!0,t,n);case 19:return c0(t,e,n);case 22:return o0(t,e,n)}throw Error(R(156,e.tag))};function C0(t,e){return Jy(t,e)}function Sk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bt(t,e,n,r){return new Sk(t,e,n,r)}function hf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kk(t){if(typeof t=="function")return hf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xd)return 11;if(t===Dd)return 14}return 2}function er(t,e){var n=t.alternate;return n===null?(n=bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $a(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ri:return Ar(n.children,i,s,e);case Rd:o=8,i|=8;break;case Wc:return t=bt(12,n,e,i|2),t.elementType=Wc,t.lanes=s,t;case Kc:return t=bt(13,n,e,i),t.elementType=Kc,t.lanes=s,t;case Gc:return t=bt(19,n,e,i),t.elementType=Gc,t.lanes=s,t;case by:return Xl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Py:o=10;break e;case Ly:o=9;break e;case xd:o=11;break e;case Dd:o=14;break e;case $n:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=bt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ar(t,e,n,r){return t=bt(7,t,r,e),t.lanes=n,t}function Xl(t,e,n,r){return t=bt(22,t,r,e),t.elementType=by,t.lanes=n,t.stateNode={isHidden:!1},t}function vc(t,e,n){return t=bt(6,t,null,e),t.lanes=n,t}function wc(t,e,n){return e=bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ik(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zu(0),this.expirationTimes=Zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function df(t,e,n,r,i,s,o,a,l){return t=new Ik(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gd(s),t}function Tk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function N0(t){if(!t)return or;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(gt(n))return Cv(t,n,e)}return e}function R0(t,e,n,r,i,s,o,a,l){return t=df(n,r,!0,t,i,s,o,a,l),t.context=N0(null),n=t.current,r=at(),i=Zn(n),s=_n(r,i),s.callback=e!=null?e:null,Yn(n,s,i),t.current.lanes=i,So(t,i,r),yt(t,r),t}function Yl(t,e,n,r){var i=e.current,s=at(),o=Zn(i);return n=N0(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yn(i,e,o),t!==null&&(Wt(t,i,o,s),Da(t,i,o)),o}function pl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ff(t,e){Vm(t,e),(t=t.alternate)&&Vm(t,e)}function Ck(){return null}var x0=typeof reportError=="function"?reportError:function(t){console.error(t)};function pf(t){this._internalRoot=t}Jl.prototype.render=pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Yl(t,e,null,null)};Jl.prototype.unmount=pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Yl(null,t,null,null)}),e[Tn]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=sv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Un.length&&e!==0&&e<Un[n].priority;n++);Un.splice(n,0,t),n===0&&av(t)}};function mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Bm(){}function Nk(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=pl(o);s.call(u)}}var o=R0(e,r,t,0,null,!1,!1,"",Bm);return t._reactRootContainer=o,t[Tn]=o.current,Qs(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=pl(l);a.call(u)}}var l=df(t,0,!1,null,null,!1,!1,"",Bm);return t._reactRootContainer=l,t[Tn]=l.current,Qs(t.nodeType===8?t.parentNode:t),Vr(function(){Yl(e,l,n,r)}),l}function eu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=pl(o);a.call(l)}}Yl(e,o,t,i)}else o=Nk(n,e,t,i,r);return pl(o)}rv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ws(e.pendingLanes);n!==0&&(Pd(e,n|1),yt(e,ke()),(re&6)===0&&(Li=ke()+500,pr()))}break;case 13:Vr(function(){var r=Cn(t,1);if(r!==null){var i=at();Wt(r,t,1,i)}}),ff(t,1)}};Ld=function(t){if(t.tag===13){var e=Cn(t,134217728);if(e!==null){var n=at();Wt(e,t,134217728,n)}ff(t,134217728)}};iv=function(t){if(t.tag===13){var e=Zn(t),n=Cn(t,e);if(n!==null){var r=at();Wt(n,t,e,r)}ff(t,e)}};sv=function(){return oe};ov=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};ih=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hl(r);if(!i)throw Error(R(90));My(r),Yc(r,i)}}}break;case"textarea":Fy(t,n);break;case"select":e=n.value,e!=null&&gi(t,!!n.multiple,e,!1)}};Wy=lf;Ky=Vr;var Rk={usingClientEntryPoint:!1,Events:[Io,ai,Hl,Hy,qy,lf]},fs={findFiberByHostInstance:kr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},xk={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xy(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||Ck,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{Vl=fa.inject(xk),nn=fa}catch{}}xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rk;xt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(e))throw Error(R(200));return Tk(t,e,null,n)};xt.createRoot=function(t,e){if(!mf(t))throw Error(R(299));var n=!1,r="",i=x0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=df(t,1,!1,null,null,n,!1,r,i),t[Tn]=e.current,Qs(t.nodeType===8?t.parentNode:t),new pf(e)};xt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=Xy(e),t=t===null?null:t.stateNode,t};xt.flushSync=function(t){return Vr(t)};xt.hydrate=function(t,e,n){if(!Zl(e))throw Error(R(200));return eu(null,t,e,!0,n)};xt.hydrateRoot=function(t,e,n){if(!mf(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=x0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=R0(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Tn]=e.current,Qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};xt.render=function(t,e,n){if(!Zl(e))throw Error(R(200));return eu(null,t,e,!1,n)};xt.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(R(40));return t._reactRootContainer?(Vr(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[Tn]=null})}),!0):!1};xt.unstable_batchedUpdates=lf;xt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Zl(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return eu(t,e,n,!1,r)};xt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=xt})(Ry);var zm=Ry.exports;Hc.createRoot=zm.createRoot,Hc.hydrateRoot=zm.hydrateRoot;/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ml(){return ml=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ml.apply(this,arguments)}var Wn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wn||(Wn={}));const jm="popstate";function Dk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Mh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uh(i)}return Ok(e,n,null,t)}function Ak(){return Math.random().toString(36).substr(2,8)}function Hm(t){return{usr:t.state,key:t.key}}function Mh(t,e,n,r){return n===void 0&&(n=null),ml({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ki(e):e,{state:n,key:e&&e.key||r||Ak()})}function Uh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ki(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ok(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Wn.Pop,l=null;function u(){a=Wn.Pop,l&&l({action:a,location:d.location})}function c(m,y){a=Wn.Push;let _=Mh(d.location,m,y);n&&n(_,m);let T=Hm(_),g=d.createHref(_);try{o.pushState(T,"",g)}catch{i.location.assign(g)}s&&l&&l({action:a,location:_})}function h(m,y){a=Wn.Replace;let _=Mh(d.location,m,y);n&&n(_,m);let T=Hm(_),g=d.createHref(_);o.replaceState(T,"",g),s&&l&&l({action:a,location:_})}let d={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(jm,u),l=m,()=>{i.removeEventListener(jm,u),l=null}},createHref(m){return e(i,m)},push:c,replace:h,go(m){return o.go(m)}};return d}var qm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(qm||(qm={}));function Pk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ki(e):e,i=A0(r.pathname||"/",n);if(i==null)return null;let s=D0(t);Lk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=jk(s[a],i);return o}function D0(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(wt(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=tr([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(wt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),D0(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Bk(a,i.index),routesMeta:l})}),e}function Lk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:zk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bk=/^:\w+$/,$k=3,Mk=2,Uk=1,Fk=10,Vk=-2,Wm=t=>t==="*";function Bk(t,e){let n=t.split("/"),r=n.length;return n.some(Wm)&&(r+=Vk),e&&(r+=Mk),n.filter(i=>!Wm(i)).reduce((i,s)=>i+(bk.test(s)?$k:s===""?Uk:Fk),r)}function zk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function jk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Hk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:tr([i,c.pathname]),pathnameBase:Qk(tr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=tr([i,c.pathnameBase]))}return s}function Hk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=qk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Wk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function qk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),O0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function Wk(t,e){try{return decodeURIComponent(t)}catch(n){return O0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function A0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function wt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function O0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Kk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ki(t):t;return{pathname:n?n.startsWith("/")?n:Gk(n,e):e,search:Xk(r),hash:Yk(i)}}function Gk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function P0(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?Ki(t):ml({},t),s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Kk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const tr=t=>t.join("/").replace(/\/\/+/g,"/"),Qk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Xk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Yk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class Jk{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function Zk(t){return t instanceof Jk}var tu={exports:{}},nu={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eI=A.exports,tI=Symbol.for("react.element"),nI=Symbol.for("react.fragment"),rI=Object.prototype.hasOwnProperty,iI=eI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,sI={key:!0,ref:!0,__self:!0,__source:!0};function L0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)rI.call(e,r)&&!sI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:tI,type:t,key:s,ref:o,props:i,_owner:iI.current}}nu.Fragment=nI;nu.jsx=L0;nu.jsxs=L0;(function(t){t.exports=nu})(tu);const oI=tu.exports.Fragment,v=tu.exports.jsx,b=tu.exports.jsxs;/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fh(){return Fh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fh.apply(this,arguments)}function aI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const lI=typeof Object.is=="function"?Object.is:aI,{useState:uI,useEffect:cI,useLayoutEffect:hI,useDebugValue:dI}=jc;function fI(t,e,n){const r=e(),[{inst:i},s]=uI({inst:{value:r,getSnapshot:e}});return hI(()=>{i.value=r,i.getSnapshot=e,_c(i)&&s({inst:i})},[t,r,e]),cI(()=>(_c(i)&&s({inst:i}),t(()=>{_c(i)&&s({inst:i})})),[t]),dI(r),r}function _c(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!lI(n,r)}catch{return!0}}function pI(t,e,n){return e()}const mI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gI=!mI,yI=gI?pI:fI;"useSyncExternalStore"in jc&&(t=>t.useSyncExternalStore)(jc);const vI=A.exports.createContext(null),wI=A.exports.createContext(null),b0=A.exports.createContext(null),gf=A.exports.createContext(null),ru=A.exports.createContext(null),Co=A.exports.createContext({outlet:null,matches:[]}),$0=A.exports.createContext(null);function _I(t,e){let{relative:n}=e===void 0?{}:e;No()||wt(!1);let{basename:r,navigator:i}=A.exports.useContext(gf),{hash:s,pathname:o,search:a}=U0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:tr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function No(){return A.exports.useContext(ru)!=null}function iu(){return No()||wt(!1),A.exports.useContext(ru).location}function M0(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function EI(){No()||wt(!1);let{basename:t,navigator:e}=A.exports.useContext(gf),{matches:n}=A.exports.useContext(Co),{pathname:r}=iu(),i=JSON.stringify(M0(n).map(a=>a.pathnameBase)),s=A.exports.useRef(!1);return A.exports.useEffect(()=>{s.current=!0}),A.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=P0(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:tr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function U0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=A.exports.useContext(Co),{pathname:i}=iu(),s=JSON.stringify(M0(r).map(o=>o.pathnameBase));return A.exports.useMemo(()=>P0(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function SI(t,e){No()||wt(!1);let n=A.exports.useContext(b0),{matches:r}=A.exports.useContext(Co),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=iu(),l;if(e){var u;let y=typeof e=="string"?Ki(e):e;o==="/"||((u=y.pathname)==null?void 0:u.startsWith(o))||wt(!1),l=y}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=Pk(t,{pathname:h}),m=CI(d&&d.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:tr([o,y.pathname]),pathnameBase:y.pathnameBase==="/"?o:tr([o,y.pathnameBase])})),r,n||void 0);return e?v(ru.Provider,{value:{location:Fh({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Wn.Pop},children:m}):m}function kI(){let t=RI(),e=Zk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return b(oI,{children:[v("h2",{children:"Unhandled Thrown Error!"}),v("h3",{style:{fontStyle:"italic"},children:e}),n?v("pre",{style:i,children:n}):null,v("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),b("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",v("code",{style:s,children:"errorElement"})," props on\xA0",v("code",{style:s,children:"<Route>"})]})]})}class II extends A.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?v($0.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function TI(t){let{routeContext:e,match:n,children:r}=t,i=A.exports.useContext(vI);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),v(Co.Provider,{value:e,children:r})}function CI(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||wt(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||v(kI,{}):null,c=()=>v(TI,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?v(II,{location:n.location,component:u,error:l,children:c()}):c()},null)}var Vh;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Vh||(Vh={}));function NI(t){let e=A.exports.useContext(b0);return e||wt(!1),e}function RI(){var t;let e=A.exports.useContext($0),n=NI(Vh.UseRouteError),r=A.exports.useContext(Co),i=r.matches[r.matches.length-1];return e||(r||wt(!1),i.route.id||wt(!1),(t=n.errors)==null?void 0:t[i.route.id])}function Es(t){wt(!1)}function xI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Wn.Pop,navigator:s,static:o=!1}=t;No()&&wt(!1);let a=e.replace(/^\/*/,"/"),l=A.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ki(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=A.exports.useMemo(()=>{let _=A0(u,a);return _==null?null:{pathname:_,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return y==null?null:v(gf.Provider,{value:l,children:v(ru.Provider,{children:n,value:{location:y,navigationType:i}})})}function DI(t){let{children:e,location:n}=t,r=A.exports.useContext(wI),i=r&&!e?r.router.routes:Bh(e);return SI(i,n)}var Km;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Km||(Km={}));new Promise(()=>{});function Bh(t,e){e===void 0&&(e=[]);let n=[];return A.exports.Children.forEach(t,(r,i)=>{if(!A.exports.isValidElement(r))return;if(r.type===A.exports.Fragment){n.push.apply(n,Bh(r.props.children,e));return}r.type!==Es&&wt(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Bh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function AI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function OI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function PI(t,e){return t.button===0&&(!e||e==="_self")&&!OI(t)}const LI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function bI(t){let{basename:e,children:n,window:r}=t,i=A.exports.useRef();i.current==null&&(i.current=Dk({window:r,v5Compat:!0}));let s=i.current,[o,a]=A.exports.useState({action:s.action,location:s.location});return A.exports.useLayoutEffect(()=>s.listen(a),[s]),v(xI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const F0=A.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=AI(e,LI),d=_I(u,{relative:i}),m=$I(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(_){r&&r(_),_.defaultPrevented||m(_)}return v("a",{...h,href:d,onClick:s?r:y,ref:n,target:l})});function $I(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=EI(),l=iu(),u=U0(t,{relative:o});return A.exports.useCallback(c=>{if(PI(c,n)){c.preventDefault();let h=r!==void 0?r:Uh(l)===Uh(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function MI(){return v("div",{className:"info",children:"info"})}function UI(t,e){return new Date(t.valueOf()-e*864e5)}function bi(t,e){const n=t.valueOf();let r,i;return e.from==="free"?r=Number.NEGATIVE_INFINITY:r=new Date(e.from).valueOf(),e.to==="free"?i=Number.POSITIVE_INFINITY:i=new Date(e.to).valueOf(),r<=n&&n<i}function FI(t){return new Date(t.valueOf()-864e5*(t.getDay()+1))}function VI(t,e){let i;return t===0?i=new Date(new Date().valueOf()+864e5):(i=FI(new Date(new Date().valueOf()-t*e*7*864e5)),i=new Date(i.valueOf()+864e5)),i}function V0({mainContent:t,toolContent:e,state:n,id:r,currentActiveCell:i,activate_cell:s}){return b("div",{className:"cell-container",children:[v("p",{className:`main-content ${n}`,onClick:()=>s(r),children:t}),b("div",{className:`tooltip ${r===i?"active":"inactive"}`,children:[v("span",{className:"tip"}),v("div",{className:"content",children:e})]})]})}function B0({habitId:t,cell:e,update:n}){const{date:r,tasks:i,stringDate:s}=e;return b("div",{className:"content",children:[v("p",{className:"date",children:e.date}),v("ul",{children:i.map(o=>b("li",{className:"cell-input",children:[v("input",{className:"custom-checkbox",id:`task-${o.id}-${r}`,type:"checkbox",checked:o.checked,onChange:()=>n(t,o.refId,s)}),v("label",{htmlFor:`task-${o.id}-${r}`,children:o.name?o.name:o.checked?"Uncheck!":"Check!"})]},`item-${o.id}-${r}`))})]},`cell-${r}`)}function BI({update:t,habit:e}){const[n,r]=A.exports.useState(20),[i,s]=A.exports.useState(0),[o,a]=A.exports.useState("");let l;function u(h,d){const _=VI(d,h),T=(h+(d!==0))*7+_.getDay()*(d===0),g=UI(_,T),f=[];let p;p=g;for(let w=0;w<T;w++){const E=`${p.getFullYear()}-${String(p.getMonth()+1).padStart(2,"0")}-${String(p.getDate()).padStart(2,"0")}`,S={stringDate:E,date:p.toDateString(),number:p.getDate()};S.tasks=[];for(let k of e.todos){let I;I=!0,k.name===null&&e.todos.some(O=>!!(O.name!==null&&bi(p,O.range)))&&(I=!1),I&&bi(p,k.range)&&S.tasks.push({refId:k.refId,id:k.id,checked:k.dates.includes(E),name:k.name})}S.tasks.every(k=>k.checked)?S.state="blue":S.tasks.some(k=>k.checked)?S.state="pink":S.state="black",f.push(S),p=new Date(p.valueOf()+864e5)}return f}function c(h){a(o===h?"":h)}return l=u(n,i),A.exports.useEffect(()=>{function h(){window.innerWidth<600?r(8):r(20)}return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),A.exports.useEffect(()=>{function h(d){if(d.target.closest(".tooltip"))return;d.target.closest(".cell-container")||a("")}return document.addEventListener("click",h),()=>document.removeEventListener("click",h)}),v("div",{className:"grid",children:b("div",{className:"days",children:[b("div",{className:"names",children:[v("p",{children:"Sun"}),v("p",{children:"Mon"}),v("p",{children:"Tue"}),v("p",{children:"Wed"}),v("p",{children:"Thu"}),v("p",{children:"Fri"}),v("p",{children:"Sat"})]}),b("div",{className:"cells",children:[v("div",{className:"cells-container",children:l.map(h=>v(V0,{mainContent:h.number,toolContent:v(B0,{habitId:e.refId,cell:h,update:t}),state:h.state,id:h.stringDate,currentActiveCell:o,activate_cell:c},h.date))}),b("div",{className:"navigation",children:[v("button",{className:"left",onClick:()=>s(h=>h+1)}),v("button",{className:`right ${i?"":"disabled"}`,onClick:()=>{i>0&&s(h=>h-1)}})]})]})]})})}function z0({src:t,alt:e,left:n,right:r}){return b("div",{className:"image",children:[v("span",{className:"background",style:{backgroundImage:`url(${t})`}}),v("img",{src:t,alt:e}),n,r]})}function j0({difficulty:t,update:e}){return b("div",{className:"difficulty-controls",children:[b("div",{className:"labels",children:[v("label",{htmlFor:"hard",children:"Hard"}),v("label",{htmlFor:"medium",children:"Medium"}),v("label",{htmlFor:"easy",children:"Easy"})]}),b("div",{className:"boxes",children:[v("input",{type:"checkbox",id:"hard",checked:t===2,onChange:e}),v("input",{type:"checkbox",id:"medium",checked:t>=1,onChange:e}),v("input",{type:"checkbox",id:"easy",checked:!0,onChange:e})]})]})}function H0({add_tag:t,tags:e,remove_tag:n}){const r=A.exports.useRef(null);function i(){const s=r.current.value.trim();s&&!e.includes(s)&&t(s),r.current.value=""}return b("div",{className:"tags-content",children:[b("div",{className:"tag-input",children:[v("input",{type:"text",ref:r}),v("button",{className:"add-tag",type:"button",onClick:i,children:"#Add tag"})]}),v("div",{className:"tags",children:e.map(s=>b("div",{className:"tag",children:[v("button",{type:"button",className:"remove-tag",onClick:()=>n(s)}),v("p",{children:s})]},s))})]})}function zh({checked:t,change:e,left:n,right:r,changeOnLabelClick:i}){function s(a){e(a.target.checked)}function o(a){i&&e(a)}return b("div",{className:"logic-toggle",children:[v("span",{onClick:()=>o(!1),children:n}),b("span",{className:"track",children:[v("input",{type:"checkbox",checked:t,onChange:s}),v("span",{className:"ball"})]}),v("span",{onClick:()=>o(!0),children:r})]})}function q0({todo:t,delete_todo:e,change_name:n,toggle_range:r,change_date:i,onlyLocal:s}){const[o,a]=A.exports.useState(t.name),[l,u]=A.exports.useState(!1),[c,h]=A.exports.useState(()=>s?t.id:t.refId),d=A.exports.useRef(null);function m(g){a(g.target.value)}function y(){const g=o.trim();g&&g!==t.name?(n(c,g),a(g)):a(t.name),u(!1)}function _(){u(!0),setTimeout(()=>d.current.focus(),33)}function T(){e(c)}return b("div",{className:"todo",children:[v("button",{className:"delete-todo",type:"button",onClick:T}),b("div",{className:"todo-name",children:[v("p",{className:"label",children:"Name: "}),l?b("div",{className:"container-of-change",children:[v("input",{type:"text",value:o,onChange:m,ref:d}),b("div",{className:"controls-of-change",children:[v("button",{type:"button",className:"save",onClick:y,children:"Save"}),v("button",{type:"button",className:"cancel",onClick:()=>u(!1),children:"Cancel"})]})]}):v("p",{className:"name",onClick:_,children:t.name})]}),b("div",{className:"range",children:[v("div",{className:"range-label",children:"Range:"}),b("div",{className:"range-controls",children:[b("div",{className:"from section",children:[v("p",{className:"from-label",children:"From"}),v(zh,{checked:t.range.from!=="free",change:()=>r(c,t.range.from!=="free","from"),left:"-\u221E",right:v("input",{type:"date",value:t.range.from==="free"?"":t.range.from,onChange:g=>i(c,"from",g.target.value),disabled:t.range.from==="free"}),changeOnLabelClick:!1})]}),b("div",{className:"to section",children:[v("p",{className:"to-label",children:"To"}),v(zh,{checked:t.range.to==="free",change:()=>r(c,t.range.to==="free","to"),left:v("input",{type:"date",value:t.range.to==="free"?"":t.range.to,onChange:g=>i(c,"to",g.target.value),disabled:t.range.to==="free"}),right:"\u221E",changeOnLabelClick:!1})]})]})]})]})}function jh({content:t,close:e,shown:n}){function r(i){i.target.closest(".screen-content")===null&&e()}return b("div",{className:`slide-screen ${n?"shown":"hidden"}`,onClick:r,children:[v("button",{className:"close-screen",onClick:e}),v("div",{className:"screen-content",children:t})]})}const zI=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"];function W0(t){return zI.includes(t.type)}let Si=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");function jI(t,e,n,r,i){return r+(i-r)*(t-e)/(n-e)}function K0(t,e){const n=Date.now()/33,r=Date.now()/100,i=20,s=45,o=Math.PI*2/i,a=1,l=6,u=e.getContext("2d");let c;c=0,u.clearRect(0,0,e.width,e.height);for(let h=0;h<i;h++,c+=o){const d=a+Math.abs(l*Math.sin(jI(r%i,0,i,0,Math.PI*2)+h*Math.PI*3/i));u.beginPath(),u.fillStyle=`hsl(${(h*10+n)%360}, 100%, 65%)`,u.arc(s*Math.cos(c)+e.width/2,s*Math.sin(c)+e.height/2,d,0,Math.PI*2),u.fill()}t.id=requestAnimationFrame(()=>K0(t,e))}function gl(){return A.exports.useEffect(()=>{const t=document.querySelector(".loading-icon"),e={id:null};return K0(e,t),()=>cancelAnimationFrame(e.id)}),v("canvas",{width:"200",height:"200",className:"loading-icon"})}function HI({habit:t,update_cell:e,update_detail:n,change_image:r,delete_habit:i,toggle_habit_range:s,add_todo_to_habit:o,delete_todo:a,rename_todo:l}){const[u,c]=A.exports.useState(!1),[h,d]=A.exports.useState(!1),[m,y]=A.exports.useState(t.name),_=A.exports.useRef(null),[T,g]=A.exports.useState(!1),[f,p]=A.exports.useState(t.description),w=A.exports.useRef(null),[E,S]=A.exports.useState(!1),[k,I]=A.exports.useState(!1);function O(Y){const Ie=Y.target.id;let Pe;Ie==="hard"?Pe=2:Ie==="medium"?Pe=1:Pe=0,n(t.refId,{label:"difficulty",value:Pe})}function P(Y){t.tags.includes(Y)||n(t.refId,{label:"tags",value:[...t.tags,Y]})}function z(Y){n(t.refId,{label:"tags",value:t.tags.filter(Ie=>Ie!==Y)})}function te(){c(!1)}function M(Y){const Ie=Y.target.files[0];W0(Ie)&&r(t,Ie)}function G(Y){y(Y.target.value)}function N(){const Y=m.trim();Y&&Y!==t.name?(n(t.refId,{label:"name",value:Y}),y(Y)):y(t.name),d(!1)}function F(){d(!0),setTimeout(()=>_.current.focus(),33)}function K(Y){p(Y.target.value)}function D(){g(!0),setTimeout(()=>w.current.focus(),33)}function U(){const Y=f.trim();Y&&Y!==t.description?(n(t.refId,{label:"description",value:Y}),p(Y)):p(t.description),g(!1)}function H(){S(!1)}function ae(Y,Ie,Pe){const{todos:ns}=t,zu=ns.findIndex(Xt=>Xt.refId===Y),St={...ns[zu].range};let vr;if(vr=!1,Pe==="to"&&(Ie=!Ie),Ie)St[Pe]="free";else{const Xt=new Date,rs=Xt.valueOf(),Hu=24*1e3*3600,Xo=Pe==="from"?"to":"from",is=new Date(new Date(St[Xo]).valueOf()+Hu).valueOf(),ss=Pe==="from"?(Wu,Ku)=>Wu>=Ku:(Wu,Ku)=>Wu<=Ku;let qu;ss(rs,is)?qu=St[Xo]:qu=`${Xt.getFullYear()}-${Xt.getMonth()+1}-${Xt.getDate()}`,St[Pe]=qu}vr=_t(St),s(t.refId,Y,St,vr)}function ce(Y,Ie,Pe){const{todos:ns}=t,zu=ns.findIndex(rs=>rs.refId===Y),ju=ns[zu],St={...ju.range},vr=Ie==="from"?"to":"from";let Xt;if(Xt=!1,St[vr]!=="free"){const rs=Ie==="from"?(is,ss)=>is<=ss:(is,ss)=>is>=ss,Hu=new Date(Pe),Xo=new Date(St[vr]).valueOf();rs(Xo,Hu)&&(Pe=St[vr])}St[Ie]=Pe,Xt=_t(St),s(t.refId,ju.refId,St,Xt)}function _t(Y){return!!t.todos[0].dates.some(Pe=>bi(new Date(Pe),Y))}function tt(){const Y=new Date,Ie=`${Y.getFullYear()}-${String(Y.getMonth()+1).padStart(2,"0")}-${String(Y.getDate()).padStart(2,"0")}`,Pe={name:`TODO ${t.todos.length}`,range:{from:Ie,to:"free"},id:Si(),dates:[],index:t.todos.length};o(t.refId,Pe)}function hn(Y){a(t.refId,Y)}function Et(Y,Ie){l(t.refId,Y,Ie)}function Qt(){I(!0),i(t.refId)}return b("div",{className:"habit",children:[v(jh,{content:k?v(gl,{}):b("div",{className:"delete-message",children:[v("p",{children:"Do you really wish to delete"}),v("p",{className:"element-name",children:t.name}),b("div",{className:"delete-controls",children:[v("button",{className:"delete",onClick:Qt,children:"Delete"}),v("button",{className:"cancel",onClick:H,children:"Cancel"})]})]}),shown:E,close:H}),v("button",{className:"delete-habit",onClick:()=>S(!0)}),v(jh,{content:v("img",{src:t.image,className:"image-on-display",alt:"habit image"}),shown:u,close:te}),b("div",{className:"info",children:[t.image?v(z0,{src:t.image,alt:t.name,left:b("label",{htmlFor:"image-input",className:"image-label-input",children:[v("input",{type:"file",id:"image-input",onChange:M}),v("span",{className:"icon"})]}),right:v("button",{className:"expand",onClick:()=>c(!0)})}):v(gl,{}),b("div",{className:"name-and-description",children:[v("div",{className:"name-wrapper",children:h?b("div",{className:"name-change",children:[v("input",{type:"text",value:m,onChange:G,ref:_}),v("button",{className:"button-of-change",onClick:N,children:"Save"})]}):v("p",{className:"name",onClick:F,children:t.name})}),v("div",{className:"description-wrapper",children:T?b("div",{className:"description-chan",children:[v("textarea",{value:f,onChange:K,ref:w}),v("button",{className:"button-of-change",onClick:U,children:"Save"})]}):v("p",{className:"description",onClick:D,children:t.description})})]}),b("div",{className:"settings",children:[v(j0,{difficulty:t.difficulty,update:O}),v(H0,{add_tag:P,tags:t.tags,remove_tag:z})]})]}),v(BI,{habit:t,update:e}),b("div",{className:"todos",children:[v("p",{className:"title",children:"TODO"}),v("button",{className:"add-todo",onClick:tt}),v("div",{className:"todo-list",children:t.todos.map(Y=>Y.name?v(q0,{todo:Y,toggle_range:ae,change_date:ce,delete_todo:hn,change_name:Et,onlyLocal:!1},Y.id):null)})]})]})}function qI(t){return new Date(t.valueOf()-864e5*t.getDay())}function WI({habit:t,update:e}){const[n,r]=A.exports.useState(""),i=3600*24*1e3,s=[],o=new Date,a=qI(o);let l;l=a;for(let c=0;c<7;c++){const h=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`,d={date:null,stringDate:h,day:l.getDate()};if(l<=o){d.date=l.toDateString(),d.tasks=[];for(let m of t.todos){let y;y=!0,m.name===null&&t.todos.some(_=>!!(_.name!==null&&bi(l,_.range)))&&(y=!1),y&&bi(l,m.range)&&d.tasks.push({id:m.id,refId:m.refId,checked:m.dates.includes(h),name:m.name})}d.tasks.every(m=>m.checked)?d.state="blue":d.tasks.some(m=>m.checked)?d.state="pink":d.state="black"}l=new Date(l.valueOf()+i),s.push(d)}function u(c){r(n===c?"":c)}return A.exports.useEffect(()=>{function c(h){if(h.target.closest(".tooltip"))return;const d=h.target.closest(".cell-container"),m=h.target.closest(".stick");(!d||m&&m.id!==`stick-id-${t.id}`)&&r("")}return document.addEventListener("click",c),()=>document.removeEventListener("click",c)}),b("div",{className:"stick",id:`stick-id-${t.id}`,children:[b(F0,{to:`/Habit-Tracker/habits/${t.id}`,className:"link",href:"https://ol.reddit.com",children:[t.image?v("img",{src:t.image,alt:"habit image"}):v(gl,{}),v("p",{className:"habit-name",children:t.name})]}),v("div",{className:"days",children:v("ul",{className:"days-list",children:s.map(c=>{if(c.date){const h=c.tasks[0];return h.name===null?b("li",{className:"day",children:[v("input",{className:"custom-checkbox plain-checkbox",type:"checkbox",checked:c.tasks[0].checked,onChange:()=>e(t.refId,h.refId,c.stringDate)}),v("span",{children:c.day})]},`stickbox-${c.stringDate}`):v(V0,{mainContent:c.day,toolContent:v(B0,{habitId:t.refId,cell:c,update:e}),state:c.state,id:c.stringDate,currentActiveCell:n,activate_cell:u},`stickbox-${c.stringDate}`)}else return v("li",{className:"day",children:v("input",{type:"checkbox",disabled:!0})},`stickbox-${c.stringDate}`)})})}),b("div",{className:"difficulty",children:[v("span",{className:`hard ${t.difficulty===2?"active":""}`}),v("span",{className:`medium ${t.difficulty>=1?"active":""}`}),v("span",{className:"easy active"})]})]})}function KI(){const[t,e]=A.exports.useState(()=>new Date);return A.exports.useEffect(()=>{const n=setInterval(()=>e(new Date),1e3);return()=>clearInterval(n)},[]),b("div",{className:"clock",children:[v("p",{className:"hours",children:`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`}),v("p",{className:"clock-date",children:t.toDateString()})]})}const Gm=[{bg:"rgb(20, 5, 10)",right:"rgb(255, 10, 50)",left:"rgb(10, 255, 50)"},{bg:"rgb(50, 150, 255)",right:"rgb(25, 7, 10)",left:"rgb(250, 255, 253)"},{bg:"rgb(255, 100, 200)",right:"rgb(255, 200, 250)",left:"rgb(100, 24, 150)"},{bg:"rgb(25, 255, 50)",right:"rgb(255, 10, 54)",left:"rgb(175, 190, 255)"},{bg:"rgb(255, 220, 250)",right:"rgb(10, 12, 255)",left:"rgb(200, 10, 20)"}];function GI(t,e){const n=document.createElement("canvas"),r=n.getContext("2d");let i,s,o,a;n.width=t,n.height=e,i=~~(Math.random()*20+20),s=n.width/i,o=n.height/i,a=Gm[~~(Math.random()*Gm.length)],r.fillStyle=a.bg,r.fillRect(0,0,n.width,n.height),r.lineWidth=2;for(let l=0;l<s;l++)for(let u=0;u<o;u++)r.beginPath(),Math.random()<.5?(r.strokeStyle=a.right,r.moveTo(l*i,u*i),r.lineTo((l+1)*i,(u+1)*i)):(r.strokeStyle=a.left,r.moveTo((l+1)*i,u*i),r.lineTo(l*i,(u+1)*i)),r.stroke();return new Promise(l=>{const u=`${Math.random().toString(16).slice(-10)}.png`;n.toBlob(c=>l(new File([c],u,{type:"image/png"})))})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Q0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(G0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},XI=function(t){const e=G0(t);return Q0.encodeByteArray(e,!0)},yl=function(t){return XI(t).replace(/\./g,"")},X0=function(t){try{return Q0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function JI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ZI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function eT(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tT(){return typeof indexedDB=="object"}function nT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function rT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=()=>rT().__FIREBASE_DEFAULTS__,sT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&X0(t[1]);return e&&JSON.parse(e)},yf=()=>{try{return iT()||sT()||oT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Y0=t=>{var e,n;return(n=(e=yf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},J0=t=>{const e=Y0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aT=()=>{var t;return(t=yf())===null||t===void 0?void 0:t.config},Z0=t=>{var e;return(e=yf())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uT,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function cT(t,e){return t.replace(hT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hT=/\{\$([^}]+)}/g;function dT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qm(s)&&Qm(o)){if(!vl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fT(t,e){const n=new pT(t,e);return n.subscribe.bind(n)}class pT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){return t&&t._delegate?t._delegate:t}class ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vT(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yT(t){return t===Er?void 0:t}function vT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const _T={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},ET=ie.INFO,ST={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},kT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ST[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vf{constructor(e){this.name=e,this._logLevel=ET,this._logHandler=kT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_T[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const IT=(t,e)=>e.some(n=>t instanceof n);let Xm,Ym;function TT(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CT(){return Ym||(Ym=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tw=new WeakMap,Hh=new WeakMap,nw=new WeakMap,Sc=new WeakMap,wf=new WeakMap;function NT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(nr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&tw.set(n,t)}).catch(()=>{}),wf.set(e,t),e}function RT(t){if(Hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Hh.set(t,e)}let qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xT(t){qh=t(qh)}function DT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kc(this),e,...n);return nw.set(r,e.sort?e.sort():[e]),nr(r)}:CT().includes(t)?function(...e){return t.apply(kc(this),e),nr(tw.get(this))}:function(...e){return nr(t.apply(kc(this),e))}}function AT(t){return typeof t=="function"?DT(t):(t instanceof IDBTransaction&&RT(t),IT(t,TT())?new Proxy(t,qh):t)}function nr(t){if(t instanceof IDBRequest)return NT(t);if(Sc.has(t))return Sc.get(t);const e=AT(t);return e!==t&&(Sc.set(t,e),wf.set(e,t)),e}const kc=t=>wf.get(t);function OT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=nr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(nr(o.result),l.oldVersion,l.newVersion,nr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const PT=["get","getKey","getAll","getAllKeys","count"],LT=["put","add","delete","clear"],Ic=new Map;function Jm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ic.get(e))return Ic.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||PT.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Ic.set(e,s),s}xT(t=>({...t,get:(e,n,r)=>Jm(e,n)||t.get(e,n,r),has:(e,n)=>!!Jm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($T(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $T(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wh="@firebase/app",Zm="0.8.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new vf("@firebase/app"),MT="@firebase/app-compat",UT="@firebase/analytics-compat",FT="@firebase/analytics",VT="@firebase/app-check-compat",BT="@firebase/app-check",zT="@firebase/auth",jT="@firebase/auth-compat",HT="@firebase/database",qT="@firebase/database-compat",WT="@firebase/functions",KT="@firebase/functions-compat",GT="@firebase/installations",QT="@firebase/installations-compat",XT="@firebase/messaging",YT="@firebase/messaging-compat",JT="@firebase/performance",ZT="@firebase/performance-compat",eC="@firebase/remote-config",tC="@firebase/remote-config-compat",nC="@firebase/storage",rC="@firebase/storage-compat",iC="@firebase/firestore",sC="@firebase/firestore-compat",oC="firebase",aC="9.12.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kh="[DEFAULT]",lC={[Wh]:"fire-core",[MT]:"fire-core-compat",[FT]:"fire-analytics",[UT]:"fire-analytics-compat",[BT]:"fire-app-check",[VT]:"fire-app-check-compat",[zT]:"fire-auth",[jT]:"fire-auth-compat",[HT]:"fire-rtdb",[qT]:"fire-rtdb-compat",[WT]:"fire-fn",[KT]:"fire-fn-compat",[GT]:"fire-iid",[QT]:"fire-iid-compat",[XT]:"fire-fcm",[YT]:"fire-fcm-compat",[JT]:"fire-perf",[ZT]:"fire-perf-compat",[eC]:"fire-rc",[tC]:"fire-rc-compat",[nC]:"fire-gcs",[rC]:"fire-gcs-compat",[iC]:"fire-fst",[sC]:"fire-fst-compat","fire-js":"fire-js",[oC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new Map,Gh=new Map;function uC(t,e){try{t.container.addComponent(e)}catch(n){Br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function zr(t){const e=t.name;if(Gh.has(e))return Br.debug(`There were multiple attempts to register component ${e}.`),!1;Gh.set(e,t);for(const n of wl.values())uC(n,t);return!0}function su(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},rr=new Ro("app","Firebase",cC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gi=aC;function rw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw rr.create("bad-app-name",{appName:String(i)});if(n||(n=aT()),!n)throw rr.create("no-options");const s=wl.get(i);if(s){if(vl(n,s.options)&&vl(r,s.config))return s;throw rr.create("duplicate-app",{appName:i})}const o=new wT(i);for(const l of Gh.values())o.addComponent(l);const a=new hC(n,r,o);return wl.set(i,a),a}function _f(t=Kh){const e=wl.get(t);if(!e&&t===Kh)return rw();if(!e)throw rr.create("no-app",{appName:t});return e}function sn(t,e,n){var r;let i=(r=lC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Br.warn(a.join(" "));return}zr(new ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="firebase-heartbeat-database",fC=1,io="firebase-heartbeat-store";let Tc=null;function iw(){return Tc||(Tc=OT(dC,fC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(io)}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),Tc}async function pC(t){var e;try{return(await iw()).transaction(io).objectStore(io).get(sw(t))}catch(n){if(n instanceof cn)Br.warn(n.message);else{const r=rr.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});Br.warn(r.message)}}}async function eg(t,e){var n;try{const i=(await iw()).transaction(io,"readwrite");return await i.objectStore(io).put(e,sw(t)),i.done}catch(r){if(r instanceof cn)Br.warn(r.message);else{const i=rr.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});Br.warn(i.message)}}}function sw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=1024,gC=30*24*60*60*1e3;class yC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=gC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tg(),{heartbeatsToSend:n,unsentEntries:r}=vC(this._heartbeatsCache.heartbeats),i=yl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tg(){return new Date().toISOString().substring(0,10)}function vC(t,e=mC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ng(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tT()?nT().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ng(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){zr(new ar("platform-logger",e=>new bT(e),"PRIVATE")),zr(new ar("heartbeat",e=>new yC(e),"PRIVATE")),sn(Wh,Zm,t),sn(Wh,Zm,"esm2017"),sn("fire-js","")}_C("");var EC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$,Ef=Ef||{},W=EC||self;function _l(){}function ou(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Do(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function SC(t){return Object.prototype.hasOwnProperty.call(t,Cc)&&t[Cc]||(t[Cc]=++kC)}var Cc="closure_uid_"+(1e9*Math.random()>>>0),kC=0;function IC(t,e,n){return t.call.apply(t.bind,arguments)}function TC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Xe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Xe=IC:Xe=TC,Xe.apply(null,arguments)}function pa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function mr(){this.s=this.s,this.o=this.o}var CC=0;mr.prototype.s=!1;mr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),CC!=0)&&SC(this)};mr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ow=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Sf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function rg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ou(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var NC=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",_l,e),W.removeEventListener("test",_l,e)}catch{}return t}();function El(t){return/^[\s\xa0]*$/.test(t)}var ig=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Nc(t,e){return t<e?-1:t>e?1:0}function au(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function en(t){return au().indexOf(t)!=-1}function kf(t){return kf[" "](t),t}kf[" "]=_l;function RC(t){var e=AC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var xC=en("Opera"),$i=en("Trident")||en("MSIE"),aw=en("Edge"),Qh=aw||$i,lw=en("Gecko")&&!(au().toLowerCase().indexOf("webkit")!=-1&&!en("Edge"))&&!(en("Trident")||en("MSIE"))&&!en("Edge"),DC=au().toLowerCase().indexOf("webkit")!=-1&&!en("Edge");function uw(){var t=W.document;return t?t.documentMode:void 0}var Sl;e:{var Rc="",xc=function(){var t=au();if(lw)return/rv:([^\);]+)(\)|;)/.exec(t);if(aw)return/Edge\/([\d\.]+)/.exec(t);if($i)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(DC)return/WebKit\/(\S+)/.exec(t);if(xC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xc&&(Rc=xc?xc[1]:""),$i){var Dc=uw();if(Dc!=null&&Dc>parseFloat(Rc)){Sl=String(Dc);break e}}Sl=Rc}var AC={};function OC(){return RC(function(){let t=0;const e=ig(String(Sl)).split("."),n=ig("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Nc(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Nc(i[2].length==0,s[2].length==0)||Nc(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Xh;if(W.document&&$i){var sg=uw();Xh=sg||parseInt(Sl,10)||void 0}else Xh=void 0;var PC=Xh;function so(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(lw){e:{try{kf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:LC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&so.X.h.call(this)}}He(so,Ye);var LC={2:"touch",3:"pen",4:"mouse"};so.prototype.h=function(){so.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ao="closure_listenable_"+(1e6*Math.random()|0),bC=0;function $C(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++bC,this.ba=this.ea=!1}function lu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function If(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function cw(t){const e={};for(const n in t)e[n]=t[n];return e}const og="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function hw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<og.length;s++)n=og[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function uu(t){this.src=t,this.g={},this.h=0}uu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Jh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new $C(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Yh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ow(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(lu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Tf="closure_lm_"+(1e6*Math.random()|0),Ac={};function dw(t,e,n,r,i){if(r&&r.once)return pw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dw(t,e[s],n,r,i);return null}return n=Rf(n),t&&t[Ao]?t.N(e,n,Do(r)?!!r.capture:!!r,i):fw(t,e,n,!1,r,i)}function fw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Do(i)?!!i.capture:!!i,a=Nf(t);if(a||(t[Tf]=a=new uu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=MC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)NC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function MC(){function t(n){return e.call(t.src,t.listener,n)}const e=UC;return t}function pw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)pw(t,e[s],n,r,i);return null}return n=Rf(n),t&&t[Ao]?t.O(e,n,Do(r)?!!r.capture:!!r,i):fw(t,e,n,!0,r,i)}function mw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mw(t,e[s],n,r,i);else r=Do(r)?!!r.capture:!!r,n=Rf(n),t&&t[Ao]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Jh(s,n,r,i),-1<n&&(lu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Nf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jh(e,n,r,i)),(n=-1<t?e[t]:null)&&Cf(n))}function Cf(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ao])Yh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Nf(e))?(Yh(n,t),n.h==0&&(n.src=null,e[Tf]=null)):lu(t)}}}function gw(t){return t in Ac?Ac[t]:Ac[t]="on"+t}function UC(t,e){if(t.ba)t=!0;else{e=new so(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Cf(t),t=n.call(r,e)}return t}function Nf(t){return t=t[Tf],t instanceof uu?t:null}var Oc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rf(t){return typeof t=="function"?t:(t[Oc]||(t[Oc]=function(e){return t.handleEvent(e)}),t[Oc])}function Me(){mr.call(this),this.i=new uu(this),this.P=this,this.I=null}He(Me,mr);Me.prototype[Ao]=!0;Me.prototype.removeEventListener=function(t,e,n,r){mw(this,t,e,n,r)};function ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var i=e;e=new Ye(r,t),hw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ma(o,r,!0,e)&&i}if(o=e.g=t,i=ma(o,r,!0,e)&&i,i=ma(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ma(o,r,!1,e)&&i}Me.prototype.M=function(){if(Me.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)lu(n[r]);delete t.g[e],t.h--}}this.I=null};Me.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Me.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ma(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Yh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var xf=W.JSON.stringify;function FC(){var t=ww;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class VC{constructor(){this.h=this.g=null}add(e,n){const r=yw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var yw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new BC,t=>t.reset());class BC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function zC(t){W.setTimeout(()=>{throw t},0)}function vw(t,e){Zh||jC(),ed||(Zh(),ed=!0),ww.add(t,e)}var Zh;function jC(){var t=W.Promise.resolve(void 0);Zh=function(){t.then(HC)}}var ed=!1,ww=new VC;function HC(){for(var t;t=FC();){try{t.h.call(t.g)}catch(n){zC(n)}var e=yw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ed=!1}function cu(t,e){Me.call(this),this.h=t||1,this.g=e||W,this.j=Xe(this.lb,this),this.l=Date.now()}He(cu,Me);$=cu.prototype;$.ca=!1;$.R=null;$.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ze(this,"tick"),this.ca&&(Df(this),this.start()))}};$.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Df(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}$.M=function(){cu.X.M.call(this),Df(this),delete this.g};function Af(t,e,n){if(typeof t=="function")n&&(t=Xe(t,n));else if(t&&typeof t.handleEvent=="function")t=Xe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function _w(t){t.g=Af(()=>{t.g=null,t.i&&(t.i=!1,_w(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class qC extends mr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_w(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function oo(t){mr.call(this),this.h=t,this.g={}}He(oo,mr);var ag=[];function Ew(t,e,n,r){Array.isArray(n)||(n&&(ag[0]=n.toString()),n=ag);for(var i=0;i<n.length;i++){var s=dw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Sw(t){If(t.g,function(e,n){this.g.hasOwnProperty(n)&&Cf(e)},t),t.g={}}oo.prototype.M=function(){oo.X.M.call(this),Sw(this)};oo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hu(){this.g=!0}hu.prototype.Aa=function(){this.g=!1};function WC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function KC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function pi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+QC(t,n)+(r?" "+r:"")})}function GC(t,e){t.info(function(){return"TIMEOUT: "+e})}hu.prototype.info=function(){};function QC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return xf(n)}catch{return e}}var Qr={},lg=null;function du(){return lg=lg||new Me}Qr.Pa="serverreachability";function kw(t){Ye.call(this,Qr.Pa,t)}He(kw,Ye);function ao(t){const e=du();ze(e,new kw(e))}Qr.STAT_EVENT="statevent";function Iw(t,e){Ye.call(this,Qr.STAT_EVENT,t),this.stat=e}He(Iw,Ye);function ot(t){const e=du();ze(e,new Iw(e,t))}Qr.Qa="timingevent";function Tw(t,e){Ye.call(this,Qr.Qa,t),this.size=e}He(Tw,Ye);function Oo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var fu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Cw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Of(){}Of.prototype.h=null;function ug(t){return t.h||(t.h=t.i())}function Nw(){}var Po={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Pf(){Ye.call(this,"d")}He(Pf,Ye);function Lf(){Ye.call(this,"c")}He(Lf,Ye);var td;function pu(){}He(pu,Of);pu.prototype.g=function(){return new XMLHttpRequest};pu.prototype.i=function(){return{}};td=new pu;function Lo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new oo(this),this.O=XC,t=Qh?125:void 0,this.T=new cu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Rw}function Rw(){this.i=null,this.g="",this.h=!1}var XC=45e3,nd={},kl={};$=Lo.prototype;$.setTimeout=function(t){this.O=t};function rd(t,e,n){t.K=1,t.v=gu(Rn(e)),t.s=n,t.P=!0,xw(t,null)}function xw(t,e){t.F=Date.now(),bo(t),t.A=Rn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Mw(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Rw,t.g=i_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new qC(Xe(t.La,t,t.g),t.N)),Ew(t.S,t.g,"readystatechange",t.ib),e=t.H?cw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ao(),WC(t.j,t.u,t.A,t.m,t.U,t.s)}$.ib=function(t){t=t.target;const e=this.L;e&&yn(t)==3?e.l():this.La(t)};$.La=function(t){try{if(t==this.g)e:{const c=yn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Qh||this.g&&(this.h.h||this.g.fa()||fg(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ao(3):ao(2)),mu(this);var n=this.g.aa();this.Y=n;t:if(Dw(this)){var r=fg(this.g);t="";var i=r.length,s=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Cr(this),bs(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,KC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!El(a)){var u=a;break t}}u=null}if(n=u)pi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,id(this,n);else{this.i=!1,this.o=3,ot(12),Cr(this),bs(this);break e}}this.P?(Aw(this,c,o),Qh&&this.i&&c==3&&(Ew(this.S,this.T,"tick",this.hb),this.T.start())):(pi(this.j,this.m,o,null),id(this,o)),c==4&&Cr(this),this.i&&!this.I&&(c==4?e_(this.l,this):(this.i=!1,bo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ot(12)):(this.o=0,ot(13)),Cr(this),bs(this)}}}catch{}finally{}};function Dw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Aw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=YC(t,n),i==kl){e==4&&(t.o=4,ot(14),r=!1),pi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==nd){t.o=4,ot(15),pi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else pi(t.j,t.m,i,null),id(t,i);Dw(t)&&i!=kl&&i!=nd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Bf(e),e.K=!0,ot(11))):(pi(t.j,t.m,n,"[Invalid Chunked Response]"),Cr(t),bs(t))}$.hb=function(){if(this.g){var t=yn(this.g),e=this.g.fa();this.C<e.length&&(mu(this),Aw(this,t,e),this.i&&t!=4&&bo(this))}};function YC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?kl:(n=Number(e.substring(n,r)),isNaN(n)?nd:(r+=1,r+n>e.length?kl:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,Cr(this)};function bo(t){t.V=Date.now()+t.O,Ow(t,t.O)}function Ow(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Oo(Xe(t.gb,t),e)}function mu(t){t.B&&(W.clearTimeout(t.B),t.B=null)}$.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(GC(this.j,this.A),this.K!=2&&(ao(),ot(17)),Cr(this),this.o=2,bs(this)):Ow(this,this.V-t)};function bs(t){t.l.G==0||t.I||e_(t.l,t)}function Cr(t){mu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Df(t.T),Sw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function id(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||sd(n.h,t))){if(!t.J&&sd(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Cl(n),wu(n);else break e;Vf(n),ot(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Oo(Xe(n.cb,n),6e3));if(1>=Vw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Nr(n,11)}else if((t.J||n.g==t)&&Cl(n),!El(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(bf(s,s.h),s.h=null))}if(r.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,pe(r.F,r.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=r_(r,r.H?r.ka:null,r.V),o.J){Bw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(mu(a),bo(a)),r.g=o}else Jw(r);0<n.i.length&&_u(n)}else u[0]!="stop"&&u[0]!="close"||Nr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Nr(n,7):Ff(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ao(4)}catch{}}function JC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ou(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ZC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ou(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Pw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ou(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=ZC(t),r=JC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Lw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function eN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Or(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Or){this.h=e!==void 0?e:t.h,Il(this,t.j),this.s=t.s,this.g=t.g,Tl(this,t.m),this.l=t.l,e=t.i;var n=new lo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cg(this,n),this.o=t.o}else t&&(n=String(t).match(Lw))?(this.h=!!e,Il(this,n[1]||"",!0),this.s=Ss(n[2]||""),this.g=Ss(n[3]||"",!0),Tl(this,n[4]),this.l=Ss(n[5]||"",!0),cg(this,n[6]||"",!0),this.o=Ss(n[7]||"")):(this.h=!!e,this.i=new lo(null,this.h))}Or.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ks(e,hg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ks(e,hg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ks(n,n.charAt(0)=="/"?rN:nN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ks(n,sN)),t.join("")};function Rn(t){return new Or(t)}function Il(t,e,n){t.j=n?Ss(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Tl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cg(t,e,n){e instanceof lo?(t.i=e,oN(t.i,t.h)):(n||(e=ks(e,iN)),t.i=new lo(e,t.h))}function pe(t,e,n){t.i.set(e,n)}function gu(t){return pe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ss(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,tN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function tN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hg=/[#\/\?@]/g,nN=/[#\?:]/g,rN=/[#\?]/g,iN=/[#\?@]/g,sN=/#/g;function lo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function gr(t){t.g||(t.g=new Map,t.h=0,t.i&&eN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=lo.prototype;$.add=function(t,e){gr(this),this.i=null,t=Qi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function bw(t,e){gr(t),e=Qi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $w(t,e){return gr(t),e=Qi(t,e),t.g.has(e)}$.forEach=function(t,e){gr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};$.oa=function(){gr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};$.W=function(t){gr(this);let e=[];if(typeof t=="string")$w(this,t)&&(e=e.concat(this.g.get(Qi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};$.set=function(t,e){return gr(this),this.i=null,t=Qi(this,t),$w(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Mw(t,e,n){bw(t,e),0<n.length&&(t.i=null,t.g.set(Qi(t,e),Sf(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Qi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function oN(t,e){e&&!t.j&&(gr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(bw(this,r),Mw(this,i,n))},t)),t.j=e}var aN=class{constructor(t,e){this.h=t,this.g=e}};function Uw(t){this.l=t||lN,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var lN=10;function Fw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Vw(t){return t.h?1:t.g?t.g.size:0}function sd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function bf(t,e){t.g?t.g.add(e):t.h=e}function Bw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Uw.prototype.cancel=function(){if(this.i=zw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function zw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Sf(t.i)}function $f(){}$f.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};$f.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function uN(){this.g=new $f}function cN(t,e,n){const r=n||"";try{Pw(t,function(i,s){let o=i;Do(i)&&(o=xf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function hN(t,e){const n=new hu;if(W.Image){const r=new Image;r.onload=pa(ga,n,r,"TestLoadImage: loaded",!0,e),r.onerror=pa(ga,n,r,"TestLoadImage: error",!1,e),r.onabort=pa(ga,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=pa(ga,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ga(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function $o(t){this.l=t.ac||null,this.j=t.jb||!1}He($o,Of);$o.prototype.g=function(){return new yu(this.l,this.j)};$o.prototype.i=function(t){return function(){return t}}({});function yu(t,e){Me.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Mf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(yu,Me);var Mf=0;$=yu.prototype;$.open=function(t,e){if(this.readyState!=Mf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,uo(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mo(this)),this.readyState=Mf};$.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;jw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function jw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}$.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Mo(this):uo(this),this.readyState==3&&jw(this)}};$.Va=function(t){this.g&&(this.response=this.responseText=t,Mo(this))};$.Ua=function(t){this.g&&(this.response=t,Mo(this))};$.ga=function(){this.g&&Mo(this)};function Mo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,uo(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function uo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(yu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dN=W.JSON.parse;function Ee(t){Me.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Hw,this.K=this.L=!1}He(Ee,Me);var Hw="",fN=/^https?$/i,pN=["POST","PUT"];$=Ee.prototype;$.Ka=function(t){this.L=t};$.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():td.g(),this.C=this.u?ug(this.u):ug(td),this.g.onreadystatechange=Xe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){dg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=ow(pN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Kw(this),0<this.B&&((this.K=mN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Xe(this.qa,this)):this.A=Af(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){dg(this,s)}};function mN(t){return $i&&OC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}$.qa=function(){typeof Ef<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function dg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,qw(t),vu(t)}function qw(t){t.D||(t.D=!0,ze(t,"complete"),ze(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),vu(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vu(this,!0)),Ee.X.M.call(this)};$.Ha=function(){this.s||(this.F||this.v||this.l?Ww(this):this.fb())};$.fb=function(){Ww(this)};function Ww(t){if(t.h&&typeof Ef<"u"&&(!t.C[1]||yn(t)!=4||t.aa()!=2)){if(t.v&&yn(t)==4)Af(t.Ha,0,t);else if(ze(t,"readystatechange"),yn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Lw)[1]||null;if(!i&&W.self&&W.self.location){var s=W.self.location.protocol;i=s.substr(0,s.length-1)}r=!fN.test(i?i.toLowerCase():"")}n=r}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var o=2<yn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",qw(t)}}finally{vu(t)}}}}function vu(t,e){if(t.g){Kw(t);const n=t.g,r=t.C[0]?_l:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function Kw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function yn(t){return t.g?t.g.readyState:0}$.aa=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}};$.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dN(e)}};function fg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Hw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Ea=function(){return this.m};$.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Gw(t){let e="";return If(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Uf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Gw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):pe(t,e,n))}function ps(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Qw(t){this.Ca=0,this.i=[],this.j=new hu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=ps("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=ps("baseRetryDelayMs",5e3,t),this.bb=ps("retryDelaySeedMs",1e4,t),this.$a=ps("forwardChannelMaxRetries",2,t),this.ta=ps("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Uw(t&&t.concurrentRequestLimit),this.Fa=new uN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}$=Qw.prototype;$.ma=8;$.G=1;function Ff(t){if(Xw(t),t.G==3){var e=t.U++,n=Rn(t.F);pe(n,"SID",t.I),pe(n,"RID",e),pe(n,"TYPE","terminate"),Uo(t,n),e=new Lo(t,t.j,e,void 0),e.K=2,e.v=gu(Rn(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=i_(e.l,null),e.g.da(e.v)),e.F=Date.now(),bo(e)}n_(t)}function wu(t){t.g&&(Bf(t),t.g.cancel(),t.g=null)}function Xw(t){wu(t),t.u&&(W.clearTimeout(t.u),t.u=null),Cl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function _u(t){Fw(t.h)||t.m||(t.m=!0,vw(t.Ja,t),t.C=0)}function gN(t,e){return Vw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Oo(Xe(t.Ja,t,e),t_(t,t.C)),t.C++,!0)}$.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Lo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=cw(s),hw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Yw(this,i,e),n=Rn(this.F),pe(n,"RID",t),pe(n,"CVER",22),this.D&&pe(n,"X-HTTP-Session-Id",this.D),Uo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Gw(s)))+"&"+e:this.o&&Uf(n,this.o,s)),bf(this.h,i),this.Ya&&pe(n,"TYPE","init"),this.O?(pe(n,"$req",e),pe(n,"SID","null"),i.Z=!0,rd(i,n,null)):rd(i,n,e),this.G=2}}else this.G==3&&(t?pg(this,t):this.i.length==0||Fw(this.h)||pg(this))};function pg(t,e){var n;e?n=e.m:n=t.U++;const r=Rn(t.F);pe(r,"SID",t.I),pe(r,"RID",n),pe(r,"AID",t.T),Uo(t,r),t.o&&t.s&&Uf(r,t.o,t.s),n=new Lo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Yw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),bf(t.h,n),rd(n,r,e)}function Uo(t,e){t.ia&&If(t.ia,function(n,r){pe(e,r,n)}),t.l&&Pw({},function(n,r){pe(e,r,n)})}function Yw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Xe(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{cN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Jw(t){t.g||t.u||(t.Z=1,vw(t.Ia,t),t.A=0)}function Vf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Oo(Xe(t.Ia,t),t_(t,t.A)),t.A++,!0)}$.Ia=function(){if(this.u=null,Zw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Oo(Xe(this.eb,this),t)}};$.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ot(10),wu(this),Zw(this))};function Bf(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Zw(t){t.g=new Lo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Rn(t.sa);pe(e,"RID","rpc"),pe(e,"SID",t.I),pe(e,"CI",t.L?"0":"1"),pe(e,"AID",t.T),pe(e,"TYPE","xmlhttp"),Uo(t,e),t.o&&t.s&&Uf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=gu(Rn(e)),n.s=null,n.P=!0,xw(n,t)}$.cb=function(){this.v!=null&&(this.v=null,wu(this),Vf(this),ot(19))};function Cl(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function e_(t,e){var n=null;if(t.g==e){Cl(t),Bf(t),t.g=null;var r=2}else if(sd(t.h,e))n=e.D,Bw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=du(),ze(r,new Tw(r,n)),_u(t)}else Jw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&gN(t,e)||r==2&&Vf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Nr(t,5);break;case 4:Nr(t,10);break;case 3:Nr(t,6);break;default:Nr(t,2)}}}function t_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Nr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Xe(t.kb,t);n||(n=new Or("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||Il(n,"https"),gu(n)),hN(n.toString(),r)}else ot(2);t.G=0,t.l&&t.l.va(e),n_(t),Xw(t)}$.kb=function(t){t?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function n_(t){if(t.G=0,t.la=[],t.l){const e=zw(t.h);(e.length!=0||t.i.length!=0)&&(rg(t.la,e),rg(t.la,t.i),t.h.i.length=0,Sf(t.i),t.i.length=0),t.l.ua()}}function r_(t,e,n){var r=n instanceof Or?Rn(n):new Or(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Tl(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Or(null,void 0);r&&Il(s,r),e&&(s.g=e),i&&Tl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&pe(r,n,e),pe(r,"VER",t.ma),Uo(t,r),r}function i_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ee(new $o({jb:!0})):new Ee(t.ra),e.Ka(t.H),e}function s_(){}$=s_.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Ra=function(){};function Nl(){if($i&&!(10<=Number(PC)))throw Error("Environmental error: no available transport.")}Nl.prototype.g=function(t,e){return new Rt(t,e)};function Rt(t,e){Me.call(this),this.g=new Qw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!El(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!El(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Xi(this)}He(Rt,Me);Rt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;ot(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=r_(t,null,t.V),_u(t)};Rt.prototype.close=function(){Ff(this.g)};Rt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=xf(t),t=n);e.i.push(new aN(e.ab++,t)),e.G==3&&_u(e)};Rt.prototype.M=function(){this.g.l=null,delete this.j,Ff(this.g),delete this.g,Rt.X.M.call(this)};function o_(t){Pf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(o_,Pf);function a_(){Lf.call(this),this.status=1}He(a_,Lf);function Xi(t){this.g=t}He(Xi,s_);Xi.prototype.xa=function(){ze(this.g,"a")};Xi.prototype.wa=function(t){ze(this.g,new o_(t))};Xi.prototype.va=function(t){ze(this.g,new a_)};Xi.prototype.ua=function(){ze(this.g,"b")};Nl.prototype.createWebChannel=Nl.prototype.g;Rt.prototype.send=Rt.prototype.u;Rt.prototype.open=Rt.prototype.m;Rt.prototype.close=Rt.prototype.close;fu.NO_ERROR=0;fu.TIMEOUT=8;fu.HTTP_ERROR=6;Cw.COMPLETE="complete";Nw.EventType=Po;Po.OPEN="a";Po.CLOSE="b";Po.ERROR="c";Po.MESSAGE="d";Me.prototype.listen=Me.prototype.N;Ee.prototype.listenOnce=Ee.prototype.O;Ee.prototype.getLastError=Ee.prototype.Oa;Ee.prototype.getLastErrorCode=Ee.prototype.Ea;Ee.prototype.getStatus=Ee.prototype.aa;Ee.prototype.getResponseJson=Ee.prototype.Sa;Ee.prototype.getResponseText=Ee.prototype.fa;Ee.prototype.send=Ee.prototype.da;Ee.prototype.setWithCredentials=Ee.prototype.Ka;var yN=function(){return new Nl},vN=function(){return du()},Pc=fu,wN=Cw,_N=Qr,mg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},EN=$o,ya=Nw,SN=Ee;const gg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yi="9.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new vf("@firebase/firestore");function yg(){return jr.logLevel}function V(t,...e){if(jr.logLevel<=ie.DEBUG){const n=e.map(zf);jr.debug(`Firestore (${Yi}): ${t}`,...n)}}function xn(t,...e){if(jr.logLevel<=ie.ERROR){const n=e.map(zf);jr.error(`Firestore (${Yi}): ${t}`,...n)}}function od(t,...e){if(jr.logLevel<=ie.WARN){const n=e.map(zf);jr.warn(`Firestore (${Yi}): ${t}`,...n)}}function zf(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Yi}) INTERNAL ASSERTION FAILED: `+t;throw xn(e),new Error(e)}function ue(t,e){t||Q()}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class IN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TN{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new En;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new En,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new En)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ue(typeof r.accessToken=="string"),new l_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ue(e===null||typeof e=="string"),new Ke(e)}}class CN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ue(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class NN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new CN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ue(typeof n.token=="string"),this.A=n.token,new RN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=DN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new De(0,0))}static max(){return new J(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return co.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof co?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class me extends co{construct(e,n,r){return new me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new me(n)}static emptyPath(){return new me([])}}const AN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends co{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return AN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(me.fromString(e))}static fromName(e){return new j(me.fromString(e).popFirst(5))}static empty(){return new j(me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new me(e.slice()))}}function ON(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new lr(i,j.empty(),e)}function PN(t){return new lr(t.readTime,t.key,-1)}class lr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new lr(J.min(),j.empty(),-1)}static max(){return new lr(J.max(),j.empty(),-1)}}function LN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $N{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fo(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==bN)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Xr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function c_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jf.at=-1;class Oe{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Oe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Oe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new va(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new va(this.root,e,this.comparator,!1)}getReverseIterator(){return new va(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new va(this.root,e,this.comparator,!0)}}class va{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Fe.RED,this.left=i!=null?i:Fe.EMPTY,this.right=s!=null?s:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new Oe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new wg(this.data.getIterator())}getIteratorFrom(e){return new wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ae(this.comparator);return n.data=e,n}}class wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Mt([])}unionWith(e){let n=new Ae(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Mt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new et(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const MN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ur(t){if(ue(!!t),typeof t=="string"){let e=0;const n=MN.exec(t);if(ue(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ui(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function d_(t){const e=t.mapValue.fields.__previous_value__;return h_(e)?d_(e):e}function ho(t){const e=ur(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class fo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new fo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof fo&&e.projectId===this.projectId&&e.database===this.database}}function Eu(t){return t==null}function Rl(t){return t===0&&1/t==-1/0}function FN(t){return typeof t=="number"&&Number.isInteger(t)&&!Rl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Hr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?h_(t)?4:VN(t)?9007199254740991:10:Q()}function ln(t,e){if(t===e)return!0;const n=Hr(t);if(n!==Hr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ho(t).isEqual(ho(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ur(r.timestampValue),o=ur(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ui(r.bytesValue).isEqual(Ui(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ce(r.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(r.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ce(r.integerValue)===Ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ce(r.doubleValue),o=Ce(i.doubleValue);return s===o?Rl(s)===Rl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Mi(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(vg(s)!==vg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!ln(s[a],o[a])))return!1;return!0}(t,e);default:return Q()}}function po(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Hr(t),r=Hr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ce(i.integerValue||i.doubleValue),a=Ce(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return _g(t.timestampValue,e.timestampValue);case 4:return _g(ho(t),ho(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ui(i),a=Ui(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=se(o[l],a[l]);if(u!==0)return u}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=se(Ce(i.latitude),Ce(s.latitude));return o!==0?o:se(Ce(i.longitude),Ce(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Fi(o[l],a[l]);if(u)return u}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===wa.mapValue&&s===wa.mapValue)return 0;if(i===wa.mapValue)return 1;if(s===wa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=se(a[c],u[c]);if(h!==0)return h;const d=Fi(o[a[c]],l[u[c]]);if(d!==0)return d}return se(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Q()}}function _g(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=ur(t),r=ur(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function ki(t){return ad(t)}function ad(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ur(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ui(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ad(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ad(r.fields[a])}`;return s+"}"}(t.mapValue):Q();var e,n}function ld(t){return!!t&&"integerValue"in t}function Hf(t){return!!t&&"arrayValue"in t}function Eg(t){return!!t&&"nullValue"in t}function Sg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ma(t){return!!t&&"mapValue"in t}function $s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Xr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=$s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=$s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function VN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ma(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=$s(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ma(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ma(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Xr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt($s(this.value))}}function f_(t){const e=[];return Xr(t.fields,(n,r)=>{const i=new Qe([n]);if(Ma(r)){const s=f_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Mt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ve(e,0,J.min(),J.min(),dt.empty(),0)}static newFoundDocument(e,n,r){return new Ve(e,1,n,J.min(),r,0)}static newNoDocument(e,n){return new Ve(e,2,n,J.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,J.min(),dt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function kg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new BN(t,e,n,r,i,s,o)}function qf(t){const e=X(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+ki(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Eu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ki(r)).join(",")),e.ht=n}return e.ht}function zN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${ki(r.value)}`;var r}).join(", ")}]`),Eu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>ki(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>ki(n)).join(",")),`Target(${e})`}function Wf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!XN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ln(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tg(t.startAt,e.startAt)&&Tg(t.endAt,e.endAt)}function ud(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class pt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new jN(e,n,r):n==="array-contains"?new WN(e,r):n==="in"?new KN(e,r):n==="not-in"?new GN(e,r):n==="array-contains-any"?new QN(e,r):new pt(e,n,r)}static lt(e,n,r){return n==="in"?new HN(e,r):new qN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Fi(n,this.value)):n!==null&&Hr(this.value)===Hr(n)&&this.ft(Fi(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class jN extends pt{constructor(e,n,r){super(e,n,r),this.key=j.fromName(r.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.ft(n)}}class HN extends pt{constructor(e,n){super(e,"in",n),this.keys=p_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class qN extends pt{constructor(e,n){super(e,"not-in",n),this.keys=p_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function p_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>j.fromName(r.referenceValue))}class WN extends pt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hf(n)&&po(n.arrayValue,this.value)}}class KN extends pt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&po(this.value.arrayValue,n)}}class GN extends pt{constructor(e,n){super(e,"not-in",n)}matches(e){if(po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!po(this.value.arrayValue,n)}}class QN extends pt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>po(this.value.arrayValue,r))}}class xl{constructor(e,n){this.position=e,this.inclusive=n}}class Ii{constructor(e,n="asc"){this.field=e,this.dir=n}}function XN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ig(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=j.comparator(j.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function YN(t,e,n,r,i,s,o,a){return new Bo(t,e,n,r,i,s,o,a)}function Su(t){return new Bo(t)}function Cg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function m_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function g_(t){for(const e of t.filters)if(e.dt())return e.field;return null}function JN(t){return t.collectionGroup!==null}function mo(t){const e=X(t);if(e._t===null){e._t=[];const n=g_(e),r=m_(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new Ii(n)),e._t.push(new Ii(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new Ii(Qe.keyField(),s))}}}return e._t}function Dn(t){const e=X(t);if(!e.wt)if(e.limitType==="F")e.wt=kg(e.path,e.collectionGroup,mo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of mo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ii(s.field,o))}const r=e.endAt?new xl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new xl(e.startAt.position,e.startAt.inclusive):null;e.wt=kg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function cd(t,e,n){return new Bo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ku(t,e){return Wf(Dn(t),Dn(e))&&t.limitType===e.limitType}function y_(t){return`${qf(Dn(t))}|lt:${t.limitType}`}function hd(t){return`Query(target=${zN(Dn(t))}; limitType=${t.limitType})`}function Kf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ig(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,mo(n),r)||n.endAt&&!function(i,s,o){const a=Ig(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,mo(n),r))}(t,e)}function ZN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function v_(t){return(e,n)=>{let r=!1;for(const i of mo(t)){const s=eR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function eR(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Fi(a,l):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w_(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rl(e)?"-0":e}}function __(t){return{integerValue:""+t}}function tR(t,e){return FN(e)?__(e):w_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this._=void 0}}function nR(t,e,n){return t instanceof go?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof yo?S_(t,e):t instanceof vo?k_(t,e):function(r,i){const s=E_(r,i),o=Ng(s)+Ng(r.yt);return ld(s)&&ld(r.yt)?__(o):w_(r.It,o)}(t,e)}function rR(t,e,n){return t instanceof yo?S_(t,e):t instanceof vo?k_(t,e):n}function E_(t,e){return t instanceof Dl?ld(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class go extends Iu{}class yo extends Iu{constructor(e){super(),this.elements=e}}function S_(t,e){const n=I_(e);for(const r of t.elements)n.some(i=>ln(i,r))||n.push(r);return{arrayValue:{values:n}}}class vo extends Iu{constructor(e){super(),this.elements=e}}function k_(t,e){let n=I_(e);for(const r of t.elements)n=n.filter(i=>!ln(i,r));return{arrayValue:{values:n}}}class Dl extends Iu{constructor(e,n){super(),this.It=e,this.yt=n}}function Ng(t){return Ce(t.integerValue||t.doubleValue)}function I_(t){return Hf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,n){this.field=e,this.transform=n}}function sR(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof yo&&r instanceof yo||n instanceof vo&&r instanceof vo?Mi(n.elements,r.elements,ln):n instanceof Dl&&r instanceof Dl?ln(n.yt,r.yt):n instanceof go&&r instanceof go}(t.transform,e.transform)}class oR{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Tu{}function T_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gf(t.key,Kt.none()):new zo(t.key,t.data,Kt.none());{const n=t.data,r=dt.empty();let i=new Ae(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new yr(t.key,r,new Mt(i.toArray()),Kt.none())}}function aR(t,e,n){t instanceof zo?function(r,i,s){const o=r.value.clone(),a=xg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof yr?function(r,i,s){if(!Ua(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=xg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(C_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ms(t,e,n,r){return t instanceof zo?function(i,s,o,a){if(!Ua(i.precondition,s))return o;const l=i.value.clone(),u=Dg(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof yr?function(i,s,o,a){if(!Ua(i.precondition,s))return o;const l=Dg(i.fieldTransforms,a,s),u=s.data;return u.setAll(C_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Ua(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function lR(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=E_(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function Rg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Mi(n,r,(i,s)=>sR(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class zo extends Tu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class yr extends Tu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function C_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xg(t,e,n){const r=new Map;ue(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,rR(o,a,n[i]))}return r}function Dg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nR(s,o,e))}return r}class Gf extends Tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uR extends Tu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,ne;function hR(t){switch(t){default:return Q();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function N_(t){if(t===void 0)return xn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Te.OK:return C.OK;case Te.CANCELLED:return C.CANCELLED;case Te.UNKNOWN:return C.UNKNOWN;case Te.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Te.INTERNAL:return C.INTERNAL;case Te.UNAVAILABLE:return C.UNAVAILABLE;case Te.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Te.NOT_FOUND:return C.NOT_FOUND;case Te.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Te.ABORTED:return C.ABORTED;case Te.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Te.DATA_LOSS:return C.DATA_LOSS;default:return Q()}}(ne=Te||(Te={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Xr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return c_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=new Oe(j.comparator);function An(){return dR}const R_=new Oe(j.comparator);function Is(...t){let e=R_;for(const n of t)e=e.insert(n.key,n);return e}function x_(t){let e=R_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Rr(){return Us()}function D_(){return Us()}function Us(){return new Ji(t=>t.toString(),(t,e)=>t.isEqual(e))}const fR=new Oe(j.comparator),pR=new Ae(j.comparator);function Z(...t){let e=pR;for(const n of t)e=e.add(n);return e}const mR=new Ae(se);function A_(){return mR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cu(J.min(),i,A_(),An(),Z())}}class jo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new jo(r,n,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class O_{constructor(e,n){this.targetId=e,this.At=n}}class P_{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ag{constructor(){this.Rt=0,this.bt=Pg(),this.Pt=et.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=Z(),n=Z(),r=Z();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new jo(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Pg()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class gR{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=An(),this.qt=Og(),this.Kt=new Ae(se)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(ud(s))if(r===0){const o=new j(s.path);this.jt(n,o,Ve.newNoDocument(o,J.min()))}else ue(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&ud(a.target)){const l=new j(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Ve.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=Z();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Cu(e,n,this.Kt,this.Ut,r);return this.Ut=An(),this.qt=Og(),this.Kt=new Ae(se),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Ag,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Ae(se),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Ag),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Og(){return new Oe(j.comparator)}function Pg(){return new Oe(j.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class wR{constructor(e,n){this.databaseId=e,this.gt=n}}function Al(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L_(t,e){return t.gt?e.toBase64():e.toUint8Array()}function _R(t,e){return Al(t,e.toTimestamp())}function Sn(t){return ue(!!t),J.fromTimestamp(function(e){const n=ur(e);return new De(n.seconds,n.nanos)}(t))}function Qf(t,e){return function(n){return new me(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function b_(t){const e=me.fromString(t);return ue(U_(e)),e}function dd(t,e){return Qf(t.databaseId,e.path)}function Lc(t,e){const n=b_(e);if(n.get(1)!==t.databaseId.projectId)throw new B(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j($_(n))}function fd(t,e){return Qf(t.databaseId,e)}function ER(t){const e=b_(t);return e.length===4?me.emptyPath():$_(e)}function pd(t){return new me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function $_(t){return ue(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lg(t,e,n){return{name:dd(t,e),fields:n.value.mapValue.fields}}function SR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ue(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(ue(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:N_(l.code);return new B(u,l.message||"")}(o);n=new P_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Lc(t,r.document.name),s=Sn(r.document.updateTime),o=new dt({mapValue:{fields:r.document.fields}}),a=Ve.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Fa(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Lc(t,r.document),s=r.readTime?Sn(r.readTime):J.min(),o=Ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Lc(t,r.document),s=r.removedTargetIds||[];n=new Fa([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new cR(i),o=r.targetId;n=new O_(o,s)}}return n}function kR(t,e){let n;if(e instanceof zo)n={update:Lg(t,e.key,e.value)};else if(e instanceof Gf)n={delete:dd(t,e.key)};else if(e instanceof yr)n={update:Lg(t,e.key,e.data),updateMask:PR(e.fieldMask)};else{if(!(e instanceof uR))return Q();n={verify:dd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof go)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof yo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vo)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Dl)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:_R(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Q()}(t,e.precondition)),n}function IR(t,e){return t&&t.length>0?(ue(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Sn(r.updateTime):Sn(i);return s.isEqual(J.min())&&(s=Sn(i)),new oR(s,r.transformResults||[])}(n,e))):[]}function TR(t,e){return{documents:[fd(t,e.path)]}}function CR(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=fd(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=fd(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(Sg(h.value))return{unaryFilter:{field:ei(h.field),op:"IS_NAN"}};if(Eg(h.value))return{unaryFilter:{field:ei(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(Sg(h.value))return{unaryFilter:{field:ei(h.field),op:"IS_NOT_NAN"}};if(Eg(h.value))return{unaryFilter:{field:ei(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(h.field),op:DR(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ei(c.field),direction:xR(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||Eu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function NR(t){let e=ER(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ue(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=M_(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ii(mi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Eu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new xl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new xl(d,h)}(n.endAt)),YN(e,i,o,s,a,"F",l,u)}function RR(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function M_(t){return t?t.unaryFilter!==void 0?[OR(t)]:t.fieldFilter!==void 0?[AR(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>M_(e)).reduce((e,n)=>e.concat(n)):Q():[]}function xR(t){return yR[t]}function DR(t){return vR[t]}function ei(t){return{fieldPath:t.canonicalString()}}function mi(t){return Qe.fromServerFormat(t.fieldPath)}function AR(t){return pt.create(mi(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}function OR(t){switch(t.unaryFilter.op){case"IS_NAN":const e=mi(t.unaryFilter.field);return pt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=mi(t.unaryFilter.field);return pt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=mi(t.unaryFilter.field);return pt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=mi(t.unaryFilter.field);return pt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}function PR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function U_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&aR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ms(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ms(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=D_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=T_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Z())}isEqual(e){return this.batchId===e.batchId&&Mi(this.mutations,e.mutations,(n,r)=>Rg(n,r))&&Mi(this.baseMutations,e.baseMutations,(n,r)=>Rg(n,r))}}class Xf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ue(e.mutations.length===r.length);let i=fR;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Xf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,n,r,i,s=J.min(),o=J.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Pr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Pr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.re=e}}function MR(t){const e=NR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.Ye=new FR}addToCollectionParentIndex(e,n){return this.Ye.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(lr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(lr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class FR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ae(me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Vi(0)}static vn(){return new Vi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VR{constructor(){this.changes=new Ji(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Ms(r.mutation,i,Mt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Z()){const i=Rr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Is();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Rr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Z()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=An();const o=Us(),a=Us();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof yr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ms(c.mutation,u,c.mutation.getFieldMask(),De.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new BR(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Us();let i=new Oe((o,a)=>o-a),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Mt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||Z()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=D_();c.forEach(d=>{if(!s.has(d)){const m=T_(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):JN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Rr());let a=-1,l=s;return o.next(u=>x.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?x.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,Z())).next(c=>({batchId:a,changes:x_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(r=>{let i=Is();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Is();return this.indexManager.getCollectionParents(e,i).next(o=>x.forEach(o,a=>{const l=function(u,c){return new Bo(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Ve.newInvalidDocument(u)))});let o=Is();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Ms(u.mutation,l,Mt.empty(),De.now()),Kf(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):x.resolve(Ve.newInvalidDocument(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return x.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Sn(r.createTime)}),x.resolve()}getNamedQuery(e,n){return x.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:MR(r.bundledQuery),readTime:Sn(r.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(){this.overlays=new Oe(j.comparator),this.es=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Rr();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Rr(),s=n.length+1,o=new j(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Oe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Rr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Rr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return x.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new bR(n,r));let s=this.es.get(n);s===void 0&&(s=Z(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.ns=new Ae(Le.ss),this.rs=new Ae(Le.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Le(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Le(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new j(new me([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new j(new me([])),r=new Le(n,e),i=new Le(n,e+1);let s=Z();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return j.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||j.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Ae(Le.ss)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new LR(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Le(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ae(se);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),x.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;j.isDocumentKey(s)||(s=s.child(""));const o=new Le(new j(s),0);let a=new Ae(se);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),x.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ue(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return x.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Le(n,0),i=this.gs.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.Es=e,this.docs=new Oe(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=An();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),x.resolve(r)}getAllFromCollection(e,n,r){let i=An();const s=new j(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||LN(PN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return x.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Q()}As(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new KR(this)}getSize(e){return x.resolve(this.size)}}class KR extends VR{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.persistence=e,this.Rs=new Ji(n=>qf(n),Wf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Yf,this.targetCount=0,this.vs=Vi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),x.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Vi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Dn(n),x.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new jf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new GR(this),this.indexManager=new UR,this.remoteDocumentCache=function(r){return new WR(r)}(r=>this.referenceDelegate.xs(r)),this.It=new $R(n),this.Ns=new jR(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new HR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new qR(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const i=new XR(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return x.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class XR extends $N{constructor(e){super(),this.currentSequenceNumber=e}}class Jf{constructor(e){this.persistence=e,this.Fs=new Yf,this.$s=null}static Bs(e){return new Jf(e)}get Ls(){if(this.$s)return this.$s;throw Q()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),x.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.Ls,r=>{const i=j.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return x.or([()=>x.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=Z(),i=Z();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Cg(n))return x.resolve(null);let r=Dn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cd(n,null,"F"),r=Dn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Z(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,cd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Cg(n)||i.isEqual(J.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(yg()<=ie.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hd(n)),this.Bi(e,o,n,ON(i,-1)))})}Fi(e,n){let r=new Ae(v_(e));return n.forEach((i,s)=>{Kf(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return yg()<=ie.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",hd(n)),this.Ni.getDocumentsMatchingQuery(e,n,lr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Oe(se),this.qi=new Ji(s=>qf(s),Wf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zR(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function ZR(t,e,n,r){return new JR(t,e,n,r)}async function F_(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=Z();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function ex(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=x.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const _=l.docVersions.get(m);ue(_!==null),y.version.compareTo(_)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=Z();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function V_(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function tx(t,e){const n=X(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(et.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,_,T){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=An(),u=Z();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(nx(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(J.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return x.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function nx(t,e,n){let r=Z(),i=Z();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=An();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function rx(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ix(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Pr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function md(t,e,n){const r=X(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vo(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function bg(t,e,n){const r=X(t);let i=J.min(),s=Z();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=X(a),h=c.qi.get(u);return h!==void 0?x.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Dn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:Z())).next(a=>(sx(r,ZN(e),a),{documents:a,Hi:s})))}function sx(t,e,n){let r=t.Ki.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class $g{constructor(){this.activeTargetIds=A_()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ox{constructor(){this.Lr=new $g,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new $g,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ax{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cx extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);V("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(V("RestConnection","Received: ",l),l),l=>{throw od("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Yi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=lx[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new SN;a.setWithCredentials(!0),a.listenOnce(wN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Pc.NO_ERROR:const u=a.getResponseJson();V("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Pc.TIMEOUT:V("Connection",'RPC "'+e+'" timed out'),o(new B(C.DEADLINE_EXCEEDED,"Request time out"));break;case Pc.HTTP_ERROR:const c=a.getStatus();if(V("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(h.status);o(new B(d,h.message))}else o(new B(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new B(C.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{V("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=yN(),o=vN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new EN({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");V("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new ux({Hr:y=>{h?V("Connection","Not sending because WebChannel is closed:",y):(c||(V("Connection","Opening WebChannel transport."),u.open(),c=!0),V("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),m=(y,_,T)=>{y.listen(_,g=>{try{T(g)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,ya.EventType.OPEN,()=>{h||V("Connection","WebChannel transport opened.")}),m(u,ya.EventType.CLOSE,()=>{h||(h=!0,V("Connection","WebChannel transport closed"),d.io())}),m(u,ya.EventType.ERROR,y=>{h||(h=!0,od("Connection","WebChannel transport errored:",y),d.io(new B(C.UNAVAILABLE,"The operation could not be completed")))}),m(u,ya.EventType.MESSAGE,y=>{var _;if(!h){const T=y.data[0];ue(!!T);const g=T,f=g.error||((_=g[0])===null||_===void 0?void 0:_.error);if(f){V("Connection","WebChannel received error:",f);const p=f.status;let w=function(S){const k=Te[S];if(k!==void 0)return N_(k)}(p),E=f.message;w===void 0&&(w=C.INTERNAL,E="Unknown error status: "+p+" with message "+f.message),h=!0,d.io(new B(w,E)),u.close()}else V("Connection","WebChannel received:",T),d.ro(T)}}),m(o,_N.STAT_EVENT,y=>{y.stat===mg.PROXY?V("Connection","Detected buffering proxy"):y.stat===mg.NOPROXY&&V("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function bc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new wR(t,!0)}class B_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&V("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new B_(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(xn(n.toString()),xn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new B(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hx extends z_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=SR(this.It,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?Sn(s.readTime):J.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=pd(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=ud(a)?{documents:TR(i,a)}:{query:CR(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=L_(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Al(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=RR(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=pd(this.It),n.removeTarget=e,this.Lo(n)}}class dx extends z_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(ue(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=IR(e.writeResults,e.commitTime),r=Sn(e.commitTime);return this.listener.tu(r,n)}return ue(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=pd(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>kR(this.It,r))};this.Lo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new B(C.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(C.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(C.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class px{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(xn(n),this.uu=!1):V("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Yr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=X(a);l.wu.add(4),await Ho(l),l.yu.set("Unknown"),l.wu.delete(4),await Ru(l)}(this))})}),this.yu=new px(r,i)}}async function Ru(t){if(Yr(t))for(const e of t.mu)await e(!0)}async function Ho(t){for(const e of t.mu)await e(!1)}function j_(t,e){const n=X(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),np(n)?tp(n):Zi(n).Oo()&&ep(n,e))}function H_(t,e){const n=X(t),r=Zi(n);n._u.delete(e),r.Oo()&&q_(n,e),n._u.size===0&&(r.Oo()?r.$o():Yr(n)&&n.yu.set("Unknown"))}function ep(t,e){t.pu.Mt(e.targetId),Zi(t).Ho(e)}function q_(t,e){t.pu.Mt(e),Zi(t).Jo(e)}function tp(t){t.pu=new gR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Zi(t).start(),t.yu.cu()}function np(t){return Yr(t)&&!Zi(t).ko()&&t._u.size>0}function Yr(t){return X(t).wu.size===0}function W_(t){t.pu=void 0}async function gx(t){t._u.forEach((e,n)=>{ep(t,e)})}async function yx(t,e){W_(t),np(t)?(t.yu.lu(e),tp(t)):t.yu.set("Unknown")}async function vx(t,e,n){if(t.yu.set("Online"),e instanceof P_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ol(t,r)}else if(e instanceof Fa?t.pu.Gt(e):e instanceof O_?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(J.min()))try{const r=await V_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(et.EMPTY_BYTE_STRING,l.snapshotVersion)),q_(i,a);const u=new Pr(l.target,a,1,l.sequenceNumber);ep(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ol(t,r)}}async function Ol(t,e,n){if(!Vo(e))throw e;t.wu.add(1),await Ho(t),t.yu.set("Offline"),n||(n=()=>V_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Ru(t)})}function K_(t,e){return e().catch(n=>Ol(t,n,e))}async function xu(t){const e=X(t),n=cr(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;wx(e);)try{const i=await rx(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,_x(e,i)}catch(i){await Ol(e,i)}G_(e)&&Q_(e)}function wx(t){return Yr(t)&&t.du.length<10}function _x(t,e){t.du.push(e);const n=cr(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function G_(t){return Yr(t)&&!cr(t).ko()&&t.du.length>0}function Q_(t){cr(t).start()}async function Ex(t){cr(t).nu()}async function Sx(t){const e=cr(t);for(const n of t.du)e.Zo(n.mutations)}async function kx(t,e,n){const r=t.du.shift(),i=Xf.from(r,e,n);await K_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await xu(t)}async function Ix(t,e){e&&cr(t).Xo&&await async function(n,r){if(i=r.code,hR(i)&&i!==C.ABORTED){const s=n.du.shift();cr(n).Fo(),await K_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await xu(n)}var i}(t,e),G_(t)&&Q_(t)}async function Ug(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Yr(n);n.wu.add(3),await Ho(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Ru(n)}async function Tx(t,e){const n=X(t);e?(n.wu.delete(2),await Ru(n)):e||(n.wu.add(2),await Ho(n),n.yu.set("Unknown"))}function Zi(t){return t.Iu||(t.Iu=function(e,n,r){const i=X(e);return i.iu(),new hx(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:gx.bind(null,t),Zr:yx.bind(null,t),zo:vx.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),np(t)?tp(t):t.yu.set("Unknown")):(await t.Iu.stop(),W_(t))})),t.Iu}function cr(t){return t.Tu||(t.Tu=function(e,n,r){const i=X(e);return i.iu(),new dx(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:Ex.bind(null,t),Zr:Ix.bind(null,t),eu:Sx.bind(null,t),tu:kx.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await xu(t)):(await t.Tu.stop(),t.du.length>0&&(V("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new rp(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ip(t,e){if(xn("AsyncQueue",`${e}: ${t}`),Vo(t))return new B(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.comparator=e?(n,r)=>e(n,r)||j.comparator(n.key,r.key):(n,r)=>j.comparator(n.key,r.key),this.keyedMap=Is(),this.sortedSet=new Oe(this.comparator)}static emptySet(e){return new Ti(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ti)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ti;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(){this.Eu=new Oe(j.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):Q():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bi(e,n,Ti.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ku(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.Ru=void 0,this.listeners=[]}}class Nx{constructor(){this.queries=new Ji(e=>y_(e),ku),this.onlineState="Unknown",this.bu=new Set}}async function sp(t,e){const n=X(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Cx),i)try{s.Ru=await n.onListen(r)}catch(o){const a=ip(o,`Initialization of query '${hd(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&ap(n)}async function op(t,e){const n=X(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Rx(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&ap(n)}function xx(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ap(t){t.bu.forEach(e=>{e.next()})}class lp{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Bi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.key=e}}class Y_{constructor(e){this.key=e}}class Dx{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Z(),this.mutatedKeys=Z(),this.Gu=v_(e),this.Qu=new Ti(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Fg,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Kf(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let T=!1;d&&m?d.data.isEqual(m.data)?y!==_&&(r.track({type:3,doc:m}),T=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),T=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),T=!0):d&&!m&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return m(h)-m(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Bi(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Fg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=Z(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new Y_(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new X_(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=Z();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Bi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Ax{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ox{constructor(e){this.key=e,this.nc=!1}}class Px{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ji(a=>y_(a),ku),this.rc=new Map,this.oc=new Set,this.uc=new Oe(j.comparator),this.cc=new Map,this.ac=new Yf,this.hc={},this.lc=new Map,this.fc=Vi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function Lx(t,e){const n=Hx(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await ix(n.localStore,Dn(e));n.isPrimaryClient&&j_(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await bx(n,e,r,a==="current",o.resumeToken)}return i}async function bx(t,e,n,r,i){t._c=(h,d,m)=>async function(y,_,T,g){let f=_.view.Wu(T);f.$i&&(f=await bg(y.localStore,_.query,!1).then(({documents:E})=>_.view.Wu(E,f)));const p=g&&g.targetChanges.get(_.targetId),w=_.view.applyChanges(f,y.isPrimaryClient,p);return Bg(y,_.targetId,w.Xu),w.snapshot}(t,h,d,m);const s=await bg(t.localStore,e,!0),o=new Dx(e,s.Hi),a=o.Wu(s.documents),l=jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Bg(t,n,u.Xu);const c=new Ax(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function $x(t,e){const n=X(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!ku(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await md(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),H_(n.remoteStore,r.targetId),gd(n,r.targetId)}).catch(Fo)):(gd(n,r.targetId),await md(n.localStore,r.targetId,!0))}async function Mx(t,e,n){const r=qx(t);try{const i=await function(s,o){const a=X(s),l=De.now(),u=o.reduce((d,m)=>d.add(m.key),Z());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=An(),y=Z();return a.Gi.getEntries(d,u).next(_=>{m=_,m.forEach((T,g)=>{g.isValidDocument()||(y=y.add(T))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(_=>{c=_;const T=[];for(const g of o){const f=lR(g,c.get(g.key).overlayedDocument);f!=null&&T.push(new yr(g.key,f,f_(f.value.mapValue),Kt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,T,o)}).next(_=>{h=_;const T=_.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,_.batchId,T)})}).then(()=>({batchId:h.batchId,changes:x_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Oe(se)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await qo(r,i.changes),await xu(r.remoteStore)}catch(i){const s=ip(i,"Failed to persist write");n.reject(s)}}async function J_(t,e){const n=X(t);try{const r=await tx(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ue(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ue(o.nc):i.removedDocuments.size>0&&(ue(o.nc),o.nc=!1))}),await qo(n,r,e)}catch(r){await Fo(r)}}function Vg(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=X(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&ap(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ux(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Oe(j.comparator);o=o.insert(s,Ve.newNoDocument(s,J.min()));const a=Z().add(s),l=new Cu(J.min(),new Map,new Ae(se),o,a);await J_(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),up(r)}else await md(r.localStore,e,!1).then(()=>gd(r,e,n)).catch(Fo)}async function Fx(t,e){const n=X(t),r=e.batch.batchId;try{const i=await ex(n.localStore,e);e1(n,r,null),Z_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await qo(n,i)}catch(i){await Fo(i)}}async function Vx(t,e,n){const r=X(t);try{const i=await function(s,o){const a=X(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ue(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);e1(r,e,n),Z_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await qo(r,i)}catch(i){await Fo(i)}}function Z_(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function e1(t,e,n){const r=X(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function gd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||t1(t,r)})}function t1(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(H_(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),up(t))}function Bg(t,e,n){for(const r of n)r instanceof X_?(t.ac.addReference(r.key,e),Bx(t,r)):r instanceof Y_?(V("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||t1(t,r.key)):Q()}function Bx(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(V("SyncEngine","New document in limbo: "+n),t.oc.add(r),up(t))}function up(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new j(me.fromString(e)),r=t.fc.next();t.cc.set(r,new Ox(n)),t.uc=t.uc.insert(n,r),j_(t.remoteStore,new Pr(Dn(Su(n.path)),r,2,jf.at))}}async function qo(t,e,n){const r=X(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Zf.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=X(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>x.forEach(l,h=>x.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>x.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Vo(c))throw c;V("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function zx(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await F_(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new B(C.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await qo(n,r.ji)}}function jx(t,e){const n=X(t),r=n.cc.get(e);if(r&&r.nc)return Z().add(r.key);{let i=Z();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function Hx(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=J_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ux.bind(null,e),e.sc.zo=Rx.bind(null,e.eventManager),e.sc.wc=xx.bind(null,e.eventManager),e}function qx(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fx.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Vx.bind(null,e),e}class Wx{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return ZR(this.persistence,new YR,e.initialUser,this.It)}yc(e){return new QR(Jf.Bs,this.It)}gc(e){return new ox}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kx{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zx.bind(null,this.syncEngine),await Tx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Nx}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new cx(i));var i;return function(s,o,a,l){return new fx(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Vg(this.syncEngine,a,0),o=Mg.C()?new Mg:new ax,new mx(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Px(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=X(e);V("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Ho(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n1(t,e,n){if(!n)throw new B(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Gx(t,e,n,r){if(e===!0&&r===!0)throw new B(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function zg(t){if(!j.isDocumentKey(t))throw new B(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function jg(t){if(j.isDocumentKey(t))throw new B(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function cp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function Ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cp(t);throw new B(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hg=new Map;class qg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new B(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Gx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kN;switch(n.type){case"gapi":const r=n.client;return new NN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new B(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Hg.get(e);n&&(V("ComponentProvider","Removing Datastore"),Hg.delete(e),n.terminate())}(this),Promise.resolve()}}function Qx(t,e,n,r={}){var i;const s=(t=Ut(t,Du))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&od("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ke.MOCK_USER;else{o=ew(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new B(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(l)}t._authCredentials=new IN(new l_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class es{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new es(this.firestore,e,this._query)}}class ir extends es{constructor(e,n,r){super(e,n,Su(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new j(e))}withConverter(e){return new ir(this.firestore,e,this._path)}}function ms(t,e,...n){if(t=_e(t),n1("collection","path",e),t instanceof Du){const r=me.fromString(e,...n);return jg(r),new ir(t,null,r)}{if(!(t instanceof vt||t instanceof ir))throw new B(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return jg(r),new ir(t.firestore,null,r)}}function Ot(t,e,...n){if(t=_e(t),arguments.length===1&&(e=u_.R()),n1("doc","path",e),t instanceof Du){const r=me.fromString(e,...n);return zg(r),new vt(t,null,new j(r))}{if(!(t instanceof vt||t instanceof ir))throw new B(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(me.fromString(e,...n));return zg(r),new vt(t.firestore,t instanceof ir?t.converter:null,new j(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):xn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=u_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{V("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(V("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ip(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yx(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await F_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Jx(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Zx(t);V("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Ug(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Ug(e.remoteStore,s)),t.onlineComponents=e}async function Zx(t){return t.offlineComponents||(V("FirestoreClient","Using default OfflineComponentProvider"),await Yx(t,new Wx)),t.offlineComponents}async function r1(t){return t.onlineComponents||(V("FirestoreClient","Using default OnlineComponentProvider"),await Jx(t,new Kx)),t.onlineComponents}function eD(t){return r1(t).then(e=>e.syncEngine)}async function Pl(t){const e=await r1(t),n=e.eventManager;return n.onListen=Lx.bind(null,e.syncEngine),n.onUnlisten=$x.bind(null,e.syncEngine),n}function tD(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new hp({next:h=>{s.enqueueAndForget(()=>op(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new B(C.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new B(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new lp(Su(o.path),u,{includeMetadataChanges:!0,ku:!0});return sp(i,c)}(await Pl(t),t.asyncQueue,e,n,r)),r.promise}function nD(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new hp({next:h=>{s.enqueueAndForget(()=>op(i,c)),h.fromCache&&a.source==="server"?l.reject(new B(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new lp(o,u,{includeMetadataChanges:!0,ku:!0});return sp(i,c)}(await Pl(t),t.asyncQueue,e,n,r)),r.promise}class rD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new B_(this,"async_queue_retry"),this.Wc=()=>{const n=bc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new En;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!Vo(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw xn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=rp.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&Q()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Wg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class hr extends Du{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new rD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||i1(this),this._firestoreClient.terminate()}}function nt(t,e){const n=typeof t=="object"?t:_f(),r=typeof t=="string"?t:e||"(default)",i=su(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=J0("firestore");s&&Qx(i,...s)}return i}function Au(t){return t._firestoreClient||i1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function i1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new UN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Xx(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zi(et.fromBase64String(e))}catch(n){throw new B(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zi(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=/^__.*__$/;class sD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new yr(e,this.data,this.fieldMask,n,this.fieldTransforms):new zo(e,this.data,n,this.fieldTransforms)}}class s1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new yr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function o1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class fp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new fp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Ll(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(o1(this.sa)&&iD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class oD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Nu(e)}da(e,n,r,i=!1){return new fp({sa:e,methodName:n,fa:r,path:Qe.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function a1(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new oD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function aD(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);mp("Data must be an object, but it was:",o,r);const a=l1(r,o);let l,u;if(s.merge)l=new Mt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=yd(e,h,n);if(!o.contains(d))throw new B(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);c1(c,d)||c.push(d)}l=new Mt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new sD(new dt(a),l,u)}class Lu extends Pu{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Lu}}class pp extends Pu{_toFieldTransform(e){return new iR(e.path,new go)}isEqual(e){return e instanceof pp}}function lD(t,e,n,r){const i=t.da(1,e,n);mp("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();Xr(r,(l,u)=>{const c=gp(e,l,n);u=_e(u);const h=i.ca(c);if(u instanceof Lu)s.push(c);else{const d=bu(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Mt(s);return new s1(o,a,i.fieldTransforms)}function uD(t,e,n,r,i,s){const o=t.da(1,e,n),a=[yd(e,r,n)],l=[i];if(s.length%2!=0)throw new B(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(yd(e,s[d])),l.push(s[d+1]);const u=[],c=dt.empty();for(let d=a.length-1;d>=0;--d)if(!c1(u,a[d])){const m=a[d];let y=l[d];y=_e(y);const _=o.ca(m);if(y instanceof Lu)u.push(m);else{const T=bu(y,_);T!=null&&(u.push(m),c.set(m,T))}}const h=new Mt(u);return new s1(c,h,o.fieldTransforms)}function bu(t,e){if(u1(t=_e(t)))return mp("Unsupported field value:",e,t),l1(t,e);if(t instanceof Pu)return function(n,r){if(!o1(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=bu(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=_e(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return tR(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=De.fromDate(n);return{timestampValue:Al(r.It,i)}}if(n instanceof De){const i=new De(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Al(r.It,i)}}if(n instanceof dp)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof zi)return{bytesValue:L_(r.It,n._byteString)};if(n instanceof vt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Qf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${cp(n)}`)}(t,e)}function l1(t,e){const n={};return c_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Xr(t,(r,i)=>{const s=bu(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function u1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof dp||t instanceof zi||t instanceof vt||t instanceof Pu)}function mp(t,e,n){if(!u1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=cp(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function yd(t,e,n){if((e=_e(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return gp(t,e);throw Ll("Field path arguments must be of type string or ",t,!1,void 0,n)}const cD=new RegExp("[~\\*/\\[\\]]");function gp(t,e,n){if(e.search(cD)>=0)throw Ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ou(...e.split("."))._internalPath}catch{throw Ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ll(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(C.INVALID_ARGUMENT,a+t+l)}function c1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class hD extends h1{data(){return super.data()}}function yp(t,e){return typeof e=="string"?gp(t,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dD{}function fD(t,...e){for(const n of e)t=n._apply(t);return t}class pD extends dD{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new B(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new B(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ii(i,s);return function(a,l){if(m_(a)===null){const u=g_(a);u!==null&&gD(a,u,l.field)}}(r,o),o}(e._query,this.ma,this.pa);return new es(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Bo(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function mD(t,e="asc"){const n=e,r=yp("orderBy",t);return new pD(r,n)}function gD(t,e,n){if(!n.isEqual(e))throw new B(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yD{convertValue(e,n="none"){switch(Hr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ui(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){const r={};return Xr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new dp(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=d_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ho(e));default:return null}}convertTimestamp(e){const n=ur(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=me.fromString(e);ue(U_(r));const i=new fo(r.get(1),r.get(3)),s=new j(r.popFirst(5));return i.isEqual(n)||xn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class f1 extends h1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Va(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(yp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Va extends f1{data(e={}){return super.data(e)}}class p1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ts(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Va(this._firestore,this._userDataWriter,r.key,r,new Ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Va(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ts(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Va(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ts(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:wD(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function wD(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _D(t){t=Ut(t,vt);const e=Ut(t.firestore,hr);return tD(Au(e),t._key).then(n=>m1(e,t,n))}class vp extends yD{constructor(e){super(),this.firestore=e}convertBytes(e){return new zi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function ED(t){t=Ut(t,es);const e=Ut(t.firestore,hr),n=Au(e),r=new vp(e);return d1(t._query),nD(n,t._query).then(i=>new p1(e,r,t,i))}function At(t,e,n,...r){t=Ut(t,vt);const i=Ut(t.firestore,hr),s=a1(i);let o;return o=typeof(e=_e(e))=="string"||e instanceof Ou?uD(s,"updateDoc",t._key,e,n,r):lD(s,"updateDoc",t._key,e),wp(i,[o.toMutation(t._key,Kt.exists(!0))])}function $c(t){return wp(Ut(t.firestore,hr),[new Gf(t._key,Kt.none())])}function Mc(t,e){const n=Ut(t.firestore,hr),r=Ot(t),i=vD(t.converter,e);return wp(n,[aD(a1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function SD(t,...e){var n,r,i;t=_e(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Wg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Wg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof vt)u=Ut(t.firestore,hr),c=Su(t._key.path),l={next:h=>{e[o]&&e[o](m1(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Ut(t,es);u=Ut(h.firestore,hr),c=h._query;const d=new vp(u);l={next:m=>{e[o]&&e[o](new p1(u,d,h,m))},error:e[o+1],complete:e[o+2]},d1(t._query)}return function(h,d,m,y){const _=new hp(y),T=new lp(d,_,m);return h.asyncQueue.enqueueAndForget(async()=>sp(await Pl(h),T)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>op(await Pl(h),T))}}(Au(u),c,a,l)}function wp(t,e){return function(n,r){const i=new En;return n.asyncQueue.enqueueAndForget(async()=>Mx(await eD(n),r,i)),i.promise}(Au(t),e)}function m1(t,e,n){const r=n.docs.get(e._key),i=new vp(t);return new f1(t,i,e._key,r,new Ts(n.hasPendingWrites,n.fromCache),e.converter)}function kD(){return new pp("serverTimestamp")}(function(t,e=!0){(function(n){Yi=n})(Gi),zr(new ar("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new hr(new TN(n.getProvider("auth-internal")),new xN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new B(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),sn(gg,"3.7.1",t),sn(gg,"3.7.1","esm2017")})();function ID({add_habit:t}){const[e,n]=A.exports.useState([]),[r,i]=A.exports.useState([{name:null,id:Si(),range:{from:"free",to:"free"},dates:[],index:0}]),[s,o]=A.exports.useState(null),[a,l]=A.exports.useState(null),[u,c]=A.exports.useState(0),[h,d]=A.exports.useState(""),[m,y]=A.exports.useState(""),_=A.exports.useRef(null);function T(M){const G=M.target.files[0];if(W0(G)){const N=new FileReader;N.readAsDataURL(G),N.addEventListener("load",F=>o(F.target.result)),l(G),o(URL.createObjectURL(G))}}function g(M){const G=M.target.id;let N;G==="hard"?N=2:G==="medium"?N=1:N=0,c(N)}function f(M){d(M.target.value)}function p(M){y(M.target.value)}function w(M){n(G=>[...G,M])}function E(M){n(G=>G.filter(N=>N!==M))}function S(){const M={name:`TODO ${r.length}`,range:{from:"free",to:"free"},id:Si(),dates:[],index:r.length};i(G=>[...G,M]),setTimeout(()=>_.current.scrollIntoView(),33)}function k(M){i(G=>G.filter(N=>N.id!==M).map((N,F)=>({...N,index:F})))}function I(M,G){const N=r.findIndex(K=>K.id===M),F=r[N];i(K=>K.slice(0,N).concat({...F,name:G}).concat(r.slice(N+1)))}function O(M,G,N){const F=r.findIndex(U=>U.id===M),K=r[F],D={...K.range};if(N==="to"&&(G=!G),G)D[N]="free";else{const U=new Date,H=U.valueOf(),ae=24*1e3*3600,ce=N==="from"?"to":"from",_t=new Date(new Date(D[ce]).valueOf()+ae).valueOf(),tt=N==="from"?(Et,Qt)=>Et>=Qt:(Et,Qt)=>Et<=Qt;let hn;tt(H,_t)?hn=D[ce]:hn=`${U.getFullYear()}-${U.getMonth()+1}-${U.getDate()}`,D[N]=hn}i(U=>U.slice(0,F).concat({...K,range:D}).concat(U.slice(F+1)))}function P(M,G,N){const F=r.findIndex(H=>H.id===M),K=r[F],D={...K.range},U=G==="from"?"to":"from";if(D[U]!=="free"){const H=G==="from"?(_t,tt)=>_t<=tt:(_t,tt)=>_t>=tt,ae=new Date(N),ce=new Date(D[U]).valueOf();H(ce,ae)&&(N=D[U])}D[G]=N,i(H=>H.slice(0,F).concat({...K,range:D}).concat(H.slice(F+1)))}async function z(){const M=await GI(500,500);l(M),o(()=>{const G=new FileReader;G.readAsDataURL(M),G.addEventListener("load",N=>o(N.target.result))})}function te(M){M.preventDefault(),t({name:h,description:m,id:Si(),difficulty:u,tags:e,timestamp:kD(),image:null},a,r)}return A.exports.useEffect(()=>{z()},[]),b("form",{onSubmit:te,className:"creation-content",children:[b("div",{className:"head",children:[v(z0,{src:s,alt:"image",left:b("label",{htmlFor:"image-input",className:"image-label-input",children:[v("input",{type:"file",accept:".jpg, .jpeg, .png, .gif",id:"image-input",onChange:T}),v("span",{className:"icon"})]}),right:v("button",{className:"delete-image",type:"button",onClick:z})}),b("div",{className:"details",children:[b("label",{htmlFor:"name-input",children:[v("span",{children:"Name: "}),v("input",{id:"name-input",required:!0,type:"text",value:h,onChange:f})]}),b("label",{htmlFor:"description-input",children:[v("span",{children:"Description: "}),v("textarea",{required:!0,name:"description-input",id:"description-input",value:m,onChange:p})]})]})]}),b("div",{className:"difficulty-wrapper",children:[v("p",{className:"difficulty-label",children:"Difficulty:"}),v(j0,{difficulty:u,update:g})]}),b("div",{className:"tags-wrapper",children:[v("p",{className:"tags-label",children:"Tags:"}),v(H0,{tags:e,add_tag:w,remove_tag:E})]}),b("div",{className:"todos-wrapper",children:[v("p",{className:"title",children:"TODO"}),v("button",{className:"add-todo",type:"button",onClick:S}),v("div",{className:"todos",children:r.map(M=>M.name&&v(q0,{todo:M,delete_todo:k,change_name:I,toggle_range:O,change_date:P,onlyLocal:!0},M.id))})]}),v("button",{ref:_,type:"submit",className:"button-of-creation",children:"Create"})]})}function TD(t,e){for(let n=0;n<e.length;n++)if(e[n]==t[0]){for(let r=0;r<t.length&&t[r]==e[n+r];r++)if(r==t.length-1)return!0}return!1}function CD({habits:t,update:e,add_habit:n}){const r="_storage_or_key",[i,s]=A.exports.useState(()=>{let N;return N=sessionStorage.getItem(r),N?N=JSON.parse(N):N=!1,sessionStorage.setItem(r,JSON.stringify(N)),N}),o="_current_tags_",a="_inactive_tags_",[l,u]=A.exports.useState(()=>{const N=sessionStorage.getItem(o);if(!N)return[];const F=JSON.parse(N).filter(K=>t.some(D=>D.tags.includes(K)));return sessionStorage.setItem(o,JSON.stringify(F)),F}),[c,h]=A.exports.useState(()=>{const N=sessionStorage.getItem(a);let F;F=[],N&&(F=JSON.parse(N).filter(K=>t.some(D=>D.tags.includes(K))));for(let K of t)for(let D of K.tags)!F.includes(D)&&!l.includes(D)&&F.push(D);return sessionStorage.setItem(a,JSON.stringify(F)),F}),[d,m]=A.exports.useState([...c]),[y,_]=A.exports.useState(!1),T=t.map(N=>N.todos.length&&(l[i?"some":"every"](K=>N.tags.includes(K))||!l.length)?v(WI,{habit:N,update:e},N.id):null).filter(N=>N!==null),[g,f]=A.exports.useState(!1),[p,w]=A.exports.useState(""),E=A.exports.useRef(null);function S(N){s(N),sessionStorage.setItem(r,JSON.stringify(N))}function k(N){u(F=>{const K=[...F,N];return sessionStorage.setItem(o,JSON.stringify(K)),K}),h(F=>{const K=F.filter(D=>D!==N);return sessionStorage.setItem(a,JSON.stringify(K)),K}),m(F=>F.filter(K=>K!==N))}function I(N){u(F=>{const K=F.filter(D=>D!==N);return sessionStorage.setItem(o,JSON.stringify(K)),K}),h(F=>{const K=[...F,N];return sessionStorage.setItem(h,JSON.stringify(K)),K}),m(()=>(E.current.value="",[...O().filter(F=>!l.includes(F)),N]))}function O(){const N=[];for(let F of t)for(let K of F.tags)N.includes(K)||N.push(K);return N}function P(N){let F;N?F=[...O(),...N]:F=O(),sessionStorage.setItem(o,""),sessionStorage.setItem(a,JSON.stringify(F)),u([]),h(F),m([...F])}async function z(N,F,K){P(N.tags),w(v(gl,{})),await n(N,F,K),M()}function te(){w(v(ID,{add_habit:z})),f(!0)}function M(){f(!1),setTimeout(()=>w(""),330)}function G(N){N.target.value.trim()?m(c.filter(F=>TD(N.target.value,F))):m([...c])}return A.exports.useEffect(P,[t]),b("div",{className:"homepage",children:[v(jh,{shown:g,content:p,close:M}),v(KI,{}),T.length?T:b("div",{className:"mep",children:[v("p",{className:"icon",children:"\\\uFF08\uFF1Ew\uFF1C\uFF09/"}),v("p",{className:"message",children:"Nothing found, create a new habit, or reset your filters"})]}),v("button",{className:"add-habit",onClick:te}),b("aside",{className:"aside",style:{right:y?"0":"calc(-1 * var(--width))"},children:[v("input",{type:"checkbox",className:"open-aside",value:y,onChange:N=>_(N.target.checked)}),b("div",{className:"filters",children:[b("label",{htmlFor:"filter-search-bar",children:[v("span",{}),v("input",{id:"filter-search-bar",placeholder:"search tag...",type:"text",ref:E,onChange:G})]}),v("div",{className:"current-filters",children:l.map(N=>b("div",{className:"tag",onClick:()=>I(N),children:[v("button",{className:"remove-tag"}),v("p",{children:N})]},`current-thing-${N}`))}),v("div",{className:"controls",children:v("button",{className:"clear-filters",onClick:()=>P(null),children:"Clear all tags"})}),v(zh,{checked:i,change:S,left:"AND",right:"OR",changeOnLabelClick:!0}),v("div",{className:"divider"}),v("div",{className:"tags",children:d.length?d.map(N=>b("div",{className:"tag",onClick:()=>k(N),children:[v("button",{className:"add-tag"}),v("p",{children:N})]},`tag-${N}`)):v("p",{className:"no-pan",children:"No tags found!"})})]})]})]})}function Kg({path:t,icon:e,alt:n}){return b("span",{className:"underlink",children:[v(F0,{to:t,children:v("img",{src:e,alt:n})}),v("span",{})]})}const ND="/Habit-Tracker/assets/home-circle.76c9ce06.svg",RD="/Habit-Tracker/assets/information.ef867515.svg",xD={apiKey:"AIzaSyDDhGCX2_jnpycekYzMDz6R7GJD8Cm4Vps",authDomain:"habit-tracker-b36e7.firebaseapp.com",projectId:"habit-tracker-b36e7",storageBucket:"habit-tracker-b36e7.appspot.com",messagingSenderId:"96592229665",appId:"1:96592229665:web:2557ae25281c8f4f3c3a60",measurementId:"G-PB7ZRWD8SC"};var DD="firebase",AD="9.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn(DD,AD,"app");function _p(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function g1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OD=g1,y1=new Ro("auth","Firebase",g1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new vf("@firebase/auth");function Ba(t,...e){Gg.logLevel<=ie.ERROR&&Gg.error(`Auth (${Gi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Ep(t,...e)}function on(t,...e){return Ep(t,...e)}function v1(t,e,n){const r=Object.assign(Object.assign({},OD()),{[e]:n});return new Ro("auth","Firebase",r).create(e,{appName:t.name})}function PD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&un(t,"argument-error"),v1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ep(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return y1.create(t,...e)}function q(t,e,...n){if(!t)throw Ep(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ba(e),new Error(e)}function On(t,e){t||vn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg=new Map;function wn(t){On(t instanceof Function,"Expected a class definition");let e=Qg.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qg.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LD(t,e){const n=su(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(vl(s,e!=null?e:{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function bD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $D(){return Xg()==="http:"||Xg()==="https:"}function Xg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($D()||JI()||"connection"in navigator)?navigator.onLine:!0}function UD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=YI()||ZI()}get(){return MD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD=new Wo(3e4,6e4);function BD(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $u(t,e,n,r,i={}){return _1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=xo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),w1.fetch()(E1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function _1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FD),e);try{const i=new jD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw _a(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw _a(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw _a(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw _a(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw v1(t,c,u);un(t,c)}}catch(i){if(i instanceof cn)throw i;un(t,"network-request-failed")}}async function zD(t,e,n,r,i={}){const s=await $u(t,e,n,r,i);return"mfaPendingCredential"in s&&un(t,"multi-factor-auth-required",{_serverResponse:s}),s}function E1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sp(t.config,i):`${t.config.apiScheme}://${i}`}class jD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),VD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _a(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HD(t,e){return $u(t,"POST","/v1/accounts:delete",e)}async function qD(t,e){return $u(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WD(t,e=!1){const n=_e(t),r=await n.getIdToken(e),i=kp(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Fs(Uc(i.auth_time)),issuedAtTime:Fs(Uc(i.iat)),expirationTime:Fs(Uc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Uc(t){return Number(t)*1e3}function kp(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Ba("JWT malformed, contained fewer than 3 sections"),null;try{const s=X0(r);return s?JSON.parse(s):(Ba("Failed to decode base64 JWT payload"),null)}catch(s){return Ba("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function KD(t){const e=kp(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&GD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await wo(t,qD(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?JD(s.providerUserInfo):[],a=YD(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new S1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function XD(t){const e=_e(t);await bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YD(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function JD(t){return t.map(e=>{var{providerId:n}=e,r=_p(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZD(t,e){const n=await _1(t,{},async()=>{const r=xo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=E1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",w1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):KD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZD(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _o;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Lr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=_p(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new QD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new S1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WD(this,e)}reload(){return XD(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Lr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await wo(this,HD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:w,isAnonymous:E,providerData:S,stsTokenManager:k}=n;q(p&&k,e,"internal-error");const I=_o.fromJSON(this.name,k);q(typeof p=="string",e,"internal-error"),bn(h,e.name),bn(d,e.name),q(typeof w=="boolean",e,"internal-error"),q(typeof E=="boolean",e,"internal-error"),bn(m,e.name),bn(y,e.name),bn(_,e.name),bn(T,e.name),bn(g,e.name),bn(f,e.name);const O=new Lr({uid:p,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:I,createdAt:g,lastLoginAt:f});return S&&Array.isArray(S)&&(O.providerData=S.map(P=>Object.assign({},P))),T&&(O._redirectEventId=T),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new _o;i.updateFromServerResponse(n);const s=new Lr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await bl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}k1.type="NONE";const Yg=k1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function za(t,e,n){return`firebase:${t}:${e}:${n}`}class Ci{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=za(this.userKey,i.apiKey,s),this.fullPersistenceKey=za("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Lr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ci(wn(Yg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||wn(Yg);const o=za(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Lr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ci(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ci(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(C1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(I1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R1(e))return"Blackberry";if(x1(e))return"Webos";if(Ip(e))return"Safari";if((e.includes("chrome/")||T1(e))&&!e.includes("edge/"))return"Chrome";if(N1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function I1(t=Ze()){return/firefox\//i.test(t)}function Ip(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function T1(t=Ze()){return/crios\//i.test(t)}function C1(t=Ze()){return/iemobile/i.test(t)}function N1(t=Ze()){return/android/i.test(t)}function R1(t=Ze()){return/blackberry/i.test(t)}function x1(t=Ze()){return/webos/i.test(t)}function Mu(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eA(t=Ze()){var e;return Mu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tA(){return eT()&&document.documentMode===10}function D1(t=Ze()){return Mu(t)||N1(t)||x1(t)||R1(t)||/windows phone/i.test(t)||C1(t)}function nA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t,e=[]){let n;switch(t){case"Browser":n=Jg(Ze());break;case"Worker":n=`${Jg(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new rA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ci.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await bl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?_e(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ci.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=A1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Uu(t){return _e(t)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=fT(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function sA(t,e,n){const r=Uu(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=O1(e),{host:o,port:a}=oA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||aA()}function O1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oA(t){const e=O1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ey(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ey(o)}}}function ey(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ni(t,e){return zD(t,"POST","/v1/accounts:signInWithIdp",BD(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lA="http://localhost";class qr extends P1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=_p(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new qr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:lA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko extends Tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends Ko{constructor(){super("facebook.com")}static credential(e){return qr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends Ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pn.credential(n,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ko{constructor(){super("github.com")}static credential(e){return qr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bn.credential(e.oauthAccessToken)}catch{return null}}}Bn.GITHUB_SIGN_IN_METHOD="github.com";Bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Ko{constructor(){super("twitter.com")}static credential(e,n){return qr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Lr._fromIdTokenResponse(e,r,i),o=ty(r);return new ji({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ty(r);return new ji({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ty(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,$l.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new $l(e,n,r,i)}}function L1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?$l._fromErrorAndOperation(t,s,e,r):s})}async function uA(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ji._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cA(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await wo(t,L1(i,s,e,t),n);q(o.idToken,i,"internal-error");const a=kp(o.idToken);q(a,i,"internal-error");const{sub:l}=a;return q(t.uid===l,i,"user-mismatch"),ji._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&un(i,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hA(t,e,n=!1){const r="signIn",i=await L1(t,r,e),s=await ji._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function dA(t,e,n,r){return _e(t).onIdTokenChanged(e,n,r)}function fA(t,e,n){return _e(t).beforeAuthStateChanged(e,n)}function pA(t,e,n,r){return _e(t).onAuthStateChanged(e,n,r)}function mA(t){return _e(t).signOut()}const Ml="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ml,"1"),this.storage.removeItem(Ml),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){const t=Ze();return Ip(t)||Mu(t)}const yA=1e3,vA=10;class $1 extends b1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gA()&&nA(),this.fallbackToPolling=D1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);tA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$1.type="LOCAL";const wA=$1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1 extends b1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}M1.type="SESSION";const U1=M1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _A(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Cp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function SA(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function kA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function IA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function TA(){return F1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="firebaseLocalStorageDb",CA=1,Ul="firebaseLocalStorage",B1="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Vu(t,e){return t.transaction([Ul],e?"readwrite":"readonly").objectStore(Ul)}function NA(){const t=indexedDB.deleteDatabase(V1);return new Go(t).toPromise()}function wd(){const t=indexedDB.open(V1,CA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ul,{keyPath:B1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ul)?e(r):(r.close(),await NA(),e(await wd()))})})}async function ny(t,e,n){const r=Vu(t,!0).put({[B1]:e,value:n});return new Go(r).toPromise()}async function RA(t,e){const n=Vu(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function ry(t,e){const n=Vu(t,!0).delete(e);return new Go(n).toPromise()}const xA=800,DA=3;class z1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return F1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fu._getInstance(TA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kA(),!this.activeServiceWorker)return;this.sender=new EA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||IA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wd();return await ny(e,Ml,"1"),await ry(e,Ml),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ny(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ry(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Vu(i,!1).getAll();return new Go(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z1.type="LOCAL";const AA=z1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function PA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",OA().appendChild(r)})}function LA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e){return e?wn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np extends P1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bA(t){return hA(t.auth,new Np(t),t.bypassAuthState)}function $A(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),cA(n,new Np(t),t.bypassAuthState)}async function MA(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),uA(n,new Np(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bA;case"linkViaPopup":case"linkViaRedirect":return MA;case"reauthViaPopup":case"reauthViaRedirect":return $A;default:un(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UA=new Wo(2e3,1e4);async function FA(t,e,n){const r=Uu(t);PD(t,e,Tp);const i=j1(r,n);return new xr(r,"signInViaPopup",e,i).executeNotNull()}class xr extends H1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=Cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,UA.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA="pendingRedirect",ja=new Map;class BA extends H1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ja.get(this.auth._key());if(!e){try{const r=await zA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ja.set(this.auth._key(),e)}return this.bypassAuthState||ja.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zA(t,e){const n=qA(e),r=HA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jA(t,e){ja.set(t._key(),e)}function HA(t){return wn(t._redirectPersistence)}function qA(t){return za(VA,t.config.apiKey,t.name)}async function WA(t,e,n=!1){const r=Uu(t),i=j1(r,e),o=await new BA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=10*60*1e3;class GA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!q1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KA&&this.cachedEventUids.clear(),this.cachedEventUids.has(iy(e))}saveEventToCache(e){this.cachedEventUids.add(iy(e)),this.lastProcessedEventTime=Date.now()}}function iy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,e={}){return $u(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,JA=/^https?/;async function ZA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XA(t);for(const n of e)try{if(eO(n))return}catch{}un(t,"unauthorized-domain")}function eO(t){const e=vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!JA.test(n))return!1;if(YA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tO=new Wo(3e4,6e4);function sy(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function nO(t){return new Promise((e,n)=>{var r,i,s;function o(){sy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sy(),n(on(t,"network-request-failed"))},timeout:tO.get()})}if(!((i=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=an().gapi)===null||s===void 0)&&s.load)o();else{const a=LA("iframefcb");return an()[a]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},PA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ha=null,e})}let Ha=null;function rO(t){return Ha=Ha||nO(t),Ha}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new Wo(5e3,15e3),sO="__/auth/iframe",oO="emulator/auth/iframe",aO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},lO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uO(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sp(e,oO):`https://${t.config.authDomain}/${sO}`,r={apiKey:e.apiKey,appName:t.name,v:Gi},i=lO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${xo(r).slice(1)}`}async function cO(t){const e=await rO(t),n=an().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:uO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),a=an().setTimeout(()=>{s(o)},iO.get());function l(){an().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dO=500,fO=600,pO="_blank",mO="http://localhost";class oy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(t,e,n,r=dO,i=fO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ze().toLowerCase();n&&(a=T1(u)?pO:n),I1(u)&&(e=e||mO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(eA(u)&&a!=="_self")return yO(e||"",a),new oy(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new oy(h)}function yO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vO="__/auth/handler",wO="emulator/auth/handler";function ay(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gi,eventId:i};if(e instanceof Tp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ko){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${_O(t)}?${xo(a).slice(1)}`}function _O({config:t}){return t.emulator?Sp(t,wO):`https://${t.authDomain}/${vO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="webStorageSupport";class EO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U1,this._completeRedirectFn=WA,this._overrideRedirectResult=jA}async _openPopup(e,n,r,i){var s;On((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=ay(e,n,r,vd(),i);return gO(e,o,Cp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),SA(ay(e,n,r,vd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(On(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await cO(e),r=new GA(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Fc,{type:Fc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Fc];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D1()||Ip()||Mu()}}const SO=EO;var ly="@firebase/auth",uy="0.20.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TO(t){zr(new ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:A1(t)},c=new iA(a,l,u);return bD(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),zr(new ar("auth-internal",e=>{const n=Uu(e.getProvider("auth").getImmediate());return(r=>new kO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sn(ly,uy,IO(t)),sn(ly,uy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=5*60,NO=Z0("authIdTokenMaxAge")||CO;let cy=null;const RO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>NO)return;const i=n==null?void 0:n.token;cy!==i&&(cy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function rt(t=_f()){const e=su(t,"auth");if(e.isInitialized())return e.getImmediate();const n=LD(t,{popupRedirectResolver:SO,persistence:[AA,wA,U1]}),r=Z0("authTokenSyncURL");if(r){const s=RO(r);fA(n,s,()=>s(n.currentUser)),dA(n,o=>s(o))}const i=Y0("auth");return i&&sA(n,`http://${i}`),n}TO("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="firebasestorage.googleapis.com",K1="storageBucket",xO=2*60*1e3,DO=10*60*1e3,AO=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se extends cn{constructor(e,n,r=0){super(Vc(e),`Firebase Storage: ${n} (${Vc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Se.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Vc(t){return"storage/"+t}function Rp(){const t="An unknown error occurred, please check the error payload for server response.";return new Se("unknown",t)}function OO(t){return new Se("object-not-found","Object '"+t+"' does not exist.")}function PO(t){return new Se("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LO(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Se("unauthenticated",t)}function bO(){return new Se("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function $O(t){return new Se("unauthorized","User does not have permission to access '"+t+"'.")}function G1(){return new Se("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Q1(){return new Se("canceled","User canceled the upload/download.")}function MO(t){return new Se("invalid-url","Invalid URL '"+t+"'.")}function UO(t){return new Se("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function FO(){return new Se("no-default-bucket","No default bucket found. Did you set the '"+K1+"' property when initializing the app?")}function X1(){return new Se("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function VO(){return new Se("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function BO(){return new Se("no-download-url","The given file does not have any download URLs.")}function _d(t){return new Se("invalid-argument",t)}function Y1(){return new Se("app-deleted","The Firebase app was deleted.")}function zO(t){return new Se("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vs(t,e){return new Se("invalid-format","String does not match format '"+t+"': "+e)}function gs(t){throw new Se("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw UO(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(w){w.path_=decodeURIComponent(w.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===W1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,T="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${T}`,"i"),p=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let w=0;w<p.length;w++){const E=p[w],S=E.regex.exec(e);if(S){const k=S[E.indices.bucket];let I=S[E.indices.path];I||(I=""),r=new Tt(k,I),E.postModify(r);break}}if(r==null)throw MO(e);return r}}class jO{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...T){u||(u=!0,e.apply(null,T))}function h(T){i=setTimeout(()=>{i=null,t(m,l())},T)}function d(){s&&clearTimeout(s)}function m(T,...g){if(u){d();return}if(T){d(),c.call(null,T,...g);return}if(l()||o){d(),c.call(null,T,...g);return}r<64&&(r*=2);let p;a===1?(a=2,p=0):p=(r+Math.random())*1e3,h(p)}let y=!1;function _(T){y||(y=!0,d(),!u&&(i!==null?(T||(a=2),clearTimeout(i),h(0)):T||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function qO(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WO(t){return t!==void 0}function KO(t){return typeof t=="function"}function GO(t){return typeof t=="object"&&!Array.isArray(t)}function Bu(t){return typeof t=="string"||t instanceof String}function hy(t){return xp()&&t instanceof Blob}function xp(){return typeof Blob<"u"}function dy(t,e,n,r){if(r<e)throw _d(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw _d(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function J1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(br||(br={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QO{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ea(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===br.NO_ERROR,l=s.getStatus();if((!a||Z1(l,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===br.ABORT;r(!1,new Ea(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ea(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());WO(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Rp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Y1():Q1();o(l)}else{const l=G1();o(l)}};this.canceled_?n(!1,new Ea(!1,null,!0)):this.backoffId_=HO(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&qO(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ea{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function XO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function JO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eP(t,e,n,r,i,s,o=!0){const a=J1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return JO(u,e),XO(u,n),YO(u,s),ZO(u,r),new QO(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nP(...t){const e=tP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xp())return new Blob(t);throw new Se("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function rP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iP(t){return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Bc{constructor(e,n){this.data=e,this.contentType=n||null}}function sP(t,e){switch(t){case tn.RAW:return new Bc(eE(e));case tn.BASE64:case tn.BASE64URL:return new Bc(tE(t,e));case tn.DATA_URL:return new Bc(aP(e),lP(e))}throw Rp()}function eE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oP(t){let e;try{e=decodeURIComponent(t)}catch{throw Vs(tn.DATA_URL,"Malformed data URL.")}return eE(e)}function tE(t,e){switch(t){case tn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Vs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Vs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iP(e)}catch{throw Vs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class nE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Vs(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function aP(t){const e=new nE(t);return e.base64?tE(tn.BASE64,e.rest):oP(e.rest)}function lP(t){return new nE(t).contentType}function uP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,n){let r=0,i="";hy(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(hy(this.data_)){const r=this.data_,i=rP(r,e,n);return i===null?null:new jn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new jn(r,!0)}}static getBlob(...e){if(xp()){const n=e.map(r=>r instanceof jn?r.data_:r);return new jn(nP.apply(null,n))}else{const n=e.map(o=>Bu(o)?sP(tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new jn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(t){let e;try{e=JSON.parse(t)}catch{return null}return GO(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function iE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dP(t,e){return e}class it{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||dP}}let Sa=null;function fP(t){return!Bu(t)||t.length<2?t:iE(t)}function sE(){if(Sa)return Sa;const t=[];t.push(new it("bucket")),t.push(new it("generation")),t.push(new it("metageneration")),t.push(new it("name","fullPath",!0));function e(s,o){return fP(o)}const n=new it("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new it("size");return i.xform=r,t.push(i),t.push(new it("timeCreated")),t.push(new it("updated")),t.push(new it("md5Hash",null,!0)),t.push(new it("cacheControl",null,!0)),t.push(new it("contentDisposition",null,!0)),t.push(new it("contentEncoding",null,!0)),t.push(new it("contentLanguage",null,!0)),t.push(new it("contentType",null,!0)),t.push(new it("metadata","customMetadata",!0)),Sa=t,Sa}function pP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function mP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pP(r,t),r}function oE(t,e,n){const r=rE(e);return r===null?null:mP(t,r,n)}function gP(t,e,n,r){const i=rE(e);if(i===null||!Bu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=ts(d,n,r),y=J1({alt:"media",token:u});return m+y})[0]}function aE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Jr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kn(t){if(!t)throw Rp()}function Dp(t,e){function n(r,i){const s=oE(t,i,e);return kn(s!==null),s}return n}function yP(t,e){function n(r,i){const s=oE(t,i,e);return kn(s!==null),gP(s,i,t.host,t._protocol)}return n}function Qo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=bO():i=LO():n.getStatus()===402?i=PO(t.bucket):n.getStatus()===403?i=$O(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Ap(t){const e=Qo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=OO(t.path)),s.serverResponse=i.serverResponse,s}return n}function vP(t,e,n){const r=e.fullServerUrl(),i=ts(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Jr(i,s,Dp(t,n),o);return a.errorHandler=Ap(e),a}function wP(t,e,n){const r=e.fullServerUrl(),i=ts(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Jr(i,s,yP(t,n),o);return a.errorHandler=Ap(e),a}function _P(t,e){const n=e.fullServerUrl(),r=ts(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new Jr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Ap(e),a}function EP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function lE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=EP(null,e)),r}function SP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let p="";for(let w=0;w<2;w++)p=p+Math.random().toString().slice(2);return p}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=lE(e,r,i),c=aE(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=jn.getBlob(h,r,d);if(m===null)throw X1();const y={name:u.fullPath},_=ts(s,t.host,t._protocol),T="POST",g=t.maxUploadRetryTime,f=new Jr(_,T,Dp(t,n),g);return f.urlParams=y,f.headers=o,f.body=m.uploadData(),f.errorHandler=Qo(e),f}class Fl{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Op(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{kn(!1)}return kn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function kP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=lE(e,r,i),a={name:o.fullPath},l=ts(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=aE(o,n),d=t.maxUploadRetryTime;function m(_){Op(_);let T;try{T=_.getResponseHeader("X-Goog-Upload-URL")}catch{kn(!1)}return kn(Bu(T)),T}const y=new Jr(l,u,m,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Qo(e),y}function IP(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Op(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{kn(!1)}h||kn(!1);const d=Number(h);return kn(!isNaN(d)),new Fl(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Jr(n,o,s,a);return l.headers=i,l.errorHandler=Qo(e),l}const fy=256*1024;function TP(t,e,n,r,i,s,o,a){const l=new Fl(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw VO();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const y={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(h,d);if(_===null)throw X1();function T(w,E){const S=Op(w,["active","final"]),k=l.current+c,I=r.size();let O;return S==="final"?O=Dp(e,s)(w,E):O=null,new Fl(k,I,S==="final",O)}const g="POST",f=e.maxUploadRetryTime,p=new Jr(n,g,T,f);return p.headers=y,p.body=_.uploadData(),p.progressCallback=a||null,p.errorHandler=Qo(t),p}const ct={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function zc(t){switch(t){case"running":case"pausing":case"canceling":return ct.RUNNING;case"paused":return ct.PAUSED;case"success":return ct.SUCCESS;case"canceled":return ct.CANCELED;case"error":return ct.ERROR;default:return ct.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(e,n,r){if(KO(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class NP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class RP extends NP{initXhr(){this.xhr_.responseType="text"}}function Sr(){return new RP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=sE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(Z1(i.status,[]))if(s)i=G1();else{this.sleepTime=Math.max(this.sleepTime*2,AO),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=kP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Sr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=IP(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Sr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=fy*this._chunkMultiplier,n=new Fl(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=TP(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Sr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){fy*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=vP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Sr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=SP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Sr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Q1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=zc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new CP(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(zc(this._state)){case ct.SUCCESS:ti(this._resolve.bind(null,this.snapshot))();break;case ct.CANCELED:case ct.ERROR:const n=this._reject;ti(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(zc(this._state)){case ct.RUNNING:case ct.PAUSED:e.next&&ti(e.next.bind(e,this.snapshot))();break;case ct.SUCCESS:e.complete&&ti(e.complete.bind(e))();break;case ct.CANCELED:case ct.ERROR:e.error&&ti(e.error.bind(e,this._error))();break;default:e.error&&ti(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Wr(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iE(this._location.path)}get storage(){return this._service}get parent(){const e=cP(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new Wr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zO(e)}}function DP(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new xP(t,new jn(e),n)}function AP(t){t._throwIfRoot("getDownloadURL");const e=wP(t.storage,t._location,sE());return t.storage.makeRequestWithTokens(e,Sr).then(n=>{if(n===null)throw BO();return n})}function OP(t){t._throwIfRoot("deleteObject");const e=_P(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Sr)}function PP(t,e){const n=hP(t._location.path,e),r=new Tt(t._location.bucket,n);return new Wr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){return/^[A-Za-z]+:\/\//.test(t)}function bP(t,e){return new Wr(t,e)}function uE(t,e){if(t instanceof Pp){const n=t;if(n._bucket==null)throw FO();const r=new Wr(n,n._bucket);return e!=null?uE(r,e):r}else return e!==void 0?PP(t,e):t}function $P(t,e){if(e&&LP(e)){if(t instanceof Pp)return bP(t,e);throw _d("To use ref(service, url), the first argument must be a Storage instance.")}else return uE(t,e)}function py(t,e){const n=e==null?void 0:e[K1];return n==null?null:Tt.makeFromBucketSpec(n,t)}function MP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ew(i,t.app.options.projectId))}class Pp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=W1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=xO,this._maxUploadRetryTime=DO,this._requests=new Set,i!=null?this._bucket=Tt.makeFromBucketSpec(i,this._host):this._bucket=py(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=py(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){dy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){dy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Wr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new jO(Y1());{const o=eP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const my="@firebase/storage",gy="0.9.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE="storage";function yy(t,e,n){return t=_e(t),DP(t,e,n)}function vy(t){return t=_e(t),AP(t)}function wy(t){return t=_e(t),OP(t)}function ka(t,e){return t=_e(t),$P(t,e)}function Ia(t=_f(),e){t=_e(t);const r=su(t,cE).getImmediate({identifier:e}),i=J0("storage");return i&&UP(r,...i),r}function UP(t,e,n,r={}){MP(t,e,n,r)}function FP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Pp(n,r,i,e,Gi)}function VP(){zr(new ar(cE,FP,"PUBLIC").setMultipleInstances(!0)),sn(my,gy,""),sn(my,gy,"esm2017")}VP();function BP(){const[t,e]=A.exports.useState(!1),[n,r]=A.exports.useState([]);async function i(){const f=new pn;await FA(rt(),f)}function s(){mA(rt())}async function o(f,p,w){try{const E=rt().currentUser.uid,S=await Mc(ms(nt(),`users/${E}/habits`),f),k=ms(S,"todos"),I=`users/${E}/${p.name}`,O=ka(Ia(),I),P=await yy(O,p),z=await vy(O),te=P.metadata.fullPath;for(let M=0;M<w.length;M++){const G=await Mc(k,w[M]);await At(G,{refId:G.id})}await At(S,{image:z,storageURI:te,refId:S.id})}catch(E){console.log(`ERROR : ${E}`)}}async function a(f,p){try{const w=rt().currentUser.uid,E=ka(Ia(),f.storageURI),S=Ot(nt(),`users/${w}/habits`,f.refId),k=`users/${w}/${f.refId}/${p.name}`,I=ka(Ia(),k);let O,P,z;At(S,{image:null}),O=await yy(I,p),P=await vy(I),z=O.metadata.fullPath,await At(S,{image:P,storageURI:z}),await wy(E)}catch(w){console.log(`ERROR WHILE ATTEMPMTING TO REPLACE IMAGE: ${w}`)}}async function l(f,p){try{const w=rt().currentUser.uid,E=Ot(nt(),`users/${w}/habits/${f}`);await At(E,{[p.label]:p.value})}catch(w){console.log(`ERROR UPDATING DETAIL: ${w}`)}}function u(f,p,w,E){const S=n.findIndex(M=>M.refId===p),k=n[S],I=k.todos.findIndex(M=>M.refId===w),O=k.todos[I];let P,z,te;return P=[...O.dates],P.includes(E)?P=P.filter(M=>M!==E):P.push(E),z={...O,dates:P},te=k.todos.slice(0,I).concat(z).concat(k.todos.slice(I+1)),f.slice(0,S).concat({...k,todos:te}).concat(f.slice(S+1))}async function c(f,p,w){try{const E=rt().currentUser.uid,S=Ot(nt(),`users/${E}/habits/${f}/todos/${p}`),k=await _D(S);let I;r(O=>u(O,f,p,w)),I=k.data().dates,I.includes(w)?I=I.filter(O=>O!==w):I.push(w),await At(S,{dates:I})}catch(E){console.log(E)}}async function h(f){try{const p=rt().currentUser.uid,w=Ot(nt(),`users/${p}/habits/${f}`),E=n.find(I=>I.refId===f),S=E.todos.map(I=>I.refId),k=ka(Ia(),E.storageURI);await wy(k);for(let I of S){const O=Ot(nt(),`user/${p}/habits/${f}/todos/${I}`);console.log(`deleting ${I}`),await $c(O)}await $c(w),window.location.href="/"}catch(p){console.log(`ERROR, COULDN'T DELETE HABIT : ${p}`)}}async function d(f,p,w,E){const S=rt().currentUser.uid,k=Ot(nt(),`users/${S}/habits/${f}/todos/${p}`),I=n.findIndex(N=>N.refId===f),O=n[I],P=O.todos.findIndex(N=>N.refId===p),z=O.todos[P],te=z.dates.filter(N=>bi(new Date(N),w)),M=O.todos.slice(0,P).concat({...z,range:w,dates:te}).concat(O.todos.slice(P+1));let G;if(G=n.slice(0,I).concat({...O,todos:M}).concat(n.slice(I+1)),await At(k,{range:w,dates:te}),r(G),E){const N=m(G,O.refId),F=Ot(nt(),`users/${S}/habits/${f}/todos/${O.todos[0].refId}`),K={name:O.name,id:Si(),range:{from:"free",to:"free"},dates:[...O.todos[0].dates],index:O.todos.length};G=N.data,await At(F,{dates:[]}),y(f,K)}}function m(f,p){const w=f.findIndex(I=>I.refId===p),E=f[w],S={name:E.name,id:Si(),range:{from:"free",to:"free"},dates:[...E.todos[0].dates]},k=[...E.todos.slice(1),S];return k.unshift({...E.todos[0],dates:[]}),{data:f.slice(0,w).concat({...E,todos:k}).concat(f.slice(w+1)),todo:S}}async function y(f,p){const w=n.findIndex(z=>z.refId===f),E=n[w],S=E.todos[0].dates.filter(z=>z!=p.range.from),k=[{...E.todos[0],dates:S},...E.todos.slice(1),p],I=rt().currentUser.uid,O=ms(nt(),`users/${I}/habits/${f}/todos`),P=await Mc(O,p);if(p.refId=P.id,r(z=>z.slice(0,w).concat({...E,todos:k}).concat(z.slice(w+1))),E.todos[0].dates.some(z=>z===p.range.from)){const z=Ot(nt(),`users/${I}/habits/${f}/todos/${E.todos[0].refId}`),te=E.todos[0].dates.filter(M=>M!==p.range.from);await At(z,{dates:te})}await At(P,{refId:P.id})}async function _(f,p){try{const w=rt().currentUser.uid,E=Ot(nt(),`users/${w}/habits/${f}/todos/${p}`),S=n.findIndex(O=>O.refId===f),k=n[S],I=k.todos.filter(O=>O.refId!==p);I.forEach(async(O,P)=>{if(!!P)try{const z=Ot(nt(),`users/${w}/habits/${f}/todos/${O.refId}`);await At(z,{index:P})}catch(z){console.log(`ERROR UPDATING INDEX: ${z}`)}}),r(O=>O.slice(0,S).concat({...k,todos:I}).concat(O.slice(S+1))),await $c(E)}catch(w){console.log(`ERROR DELETING TODO: ${w}`)}}async function T(f,p,w){try{const E=rt().currentUser.uid,S=Ot(nt(),`users/${E}/habits/${f}/todos/${p}`),k=n.findIndex(te=>te.refId===f),I=n[k],O=I.todos.findIndex(te=>te.refId===p),P=I.todos[O],z=I.todos.slice(0,O).concat({...P,name:w}).concat(I.todos.slice(O+1));r(te=>te.slice(0,k).concat({...I,todos:z}).concat(te.slice(k+1))),await At(S,{name:w})}catch(E){console.log(`ERROR UPDATING TODO NAME: ${E}`)}}function g(){const f=rt().currentUser.uid,p=fD(ms(nt(),`users/${f}/habits`),mD("timestamp","asc"));return SD(p,E=>E.docChanges().forEach(async S=>{if(S.type==="removed")r(k=>k.filter(I=>I.id!==S.doc.id));else{const k=S.doc.data(),I=ms(nt(),`users/${f}/habits/${k.refId}/todos`),O=await ED(I),P=[];O.forEach(z=>P.push(z.data())),P.sort((z,te)=>z.index-te.index),r(z=>{const te=z.findIndex(M=>M.id===k.id);return~te?z.slice(0,te).concat({...k,todos:P}).concat(z.slice(te+1)):[...z,k]})}}))}return A.exports.useEffect(()=>{rw(xD)},[]),A.exports.useEffect(()=>{let f;return pA(rt(),()=>{e(()=>!!rt().currentUser),rt().currentUser&&(f=g())}),()=>f?f():null},[]),v("div",{className:"App",children:b(bI,{children:[b("nav",{className:"navbar",children:[v("div",{className:"logo",children:"Kerosene"}),b("ul",{className:"links",children:[v("li",{children:v(Kg,{path:"/Habit-Tracker",icon:ND})}),v("li",{children:v(Kg,{path:"/Habit-Tracker/info",icon:RD})}),t?v("li",{children:v("button",{className:"log-out-button",onClick:s})}):null]})]}),t?b(DI,{children:[v(Es,{element:v(CD,{habits:n,update:c,add_habit:o}),path:"/Habit-Tracker"}),v(Es,{element:v(MI,{}),path:"/Habit-Tracker/info"}),n.map(f=>v(Es,{path:`/Habit-Tracker/habits/${f.id}`,element:v(HI,{habit:f,update_cell:c,update_detail:l,change_image:a,delete_habit:h,toggle_habit_range:d,add_todo_to_habit:y,delete_todo:_,rename_todo:T})},f.id)),v(Es,{path:"*",element:v("p",{children:"Not found"})})]}):v("div",{className:"sign-in-content",children:v("button",{onClick:i,children:"Log In"})}),b("footer",{className:"footer",children:["A project by"," ",v("a",{href:"https://ol.reddit.com/u/_by_me",target:"_blank",children:"u/_by_me"}),", \xA9 2022"]})]})})}Hc.createRoot(document.getElementById("root")).render(v(Ny.StrictMode,{children:v(BP,{})}));
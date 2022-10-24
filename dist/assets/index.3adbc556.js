function sE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function oE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var O={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yo=Symbol.for("react.element"),aE=Symbol.for("react.portal"),lE=Symbol.for("react.fragment"),uE=Symbol.for("react.strict_mode"),cE=Symbol.for("react.profiler"),hE=Symbol.for("react.provider"),dE=Symbol.for("react.context"),fE=Symbol.for("react.forward_ref"),pE=Symbol.for("react.suspense"),mE=Symbol.for("react.memo"),gE=Symbol.for("react.lazy"),Rp=Symbol.iterator;function yE(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var my={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gy=Object.assign,yy={};function Fi(t,e,n){this.props=t,this.context=e,this.refs=yy,this.updater=n||my}Fi.prototype.isReactComponent={};Fi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vy(){}vy.prototype=Fi.prototype;function gd(t,e,n){this.props=t,this.context=e,this.refs=yy,this.updater=n||my}var yd=gd.prototype=new vy;yd.constructor=gd;gy(yd,Fi.prototype);yd.isPureReactComponent=!0;var Dp=Array.isArray,wy=Object.prototype.hasOwnProperty,vd={current:null},_y={key:!0,ref:!0,__self:!0,__source:!0};function Ey(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)wy.call(e,r)&&!_y.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:yo,type:t,key:s,ref:o,props:i,_owner:vd.current}}function vE(t,e){return{$$typeof:yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===yo}function wE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xp=/\/+/g;function zu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?wE(""+t.key):e.toString(36)}function Ea(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case yo:case aE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+zu(o,0):r,Dp(i)?(n="",t!=null&&(n=t.replace(xp,"$&/")+"/"),Ea(i,e,n,"",function(u){return u})):i!=null&&(wd(i)&&(i=vE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dp(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+zu(s,a);o+=Ea(s,e,n,l,i)}else if(l=yE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+zu(s,a++),o+=Ea(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Go(t,e,n){if(t==null)return t;var r=[],i=0;return Ea(t,r,"","",function(s){return e.call(n,s,i++)}),r}function _E(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Sa={transition:null},EE={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Sa,ReactCurrentOwner:vd};Z.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=Fi;Z.Fragment=lE;Z.Profiler=cE;Z.PureComponent=gd;Z.StrictMode=uE;Z.Suspense=pE;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=EE;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=vd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)wy.call(e,l)&&!_y.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:yo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:dE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:hE,_context:t},t.Consumer=t};Z.createElement=Ey;Z.createFactory=function(t){var e=Ey.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:fE,render:t}};Z.isValidElement=wd;Z.lazy=function(t){return{$$typeof:gE,_payload:{_status:-1,_result:t},_init:_E}};Z.memo=function(t,e){return{$$typeof:mE,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=Sa.transition;Sa.transition={};try{t()}finally{Sa.transition=e}};Z.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Z.useCallback=function(t,e){return ot.current.useCallback(t,e)};Z.useContext=function(t){return ot.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};Z.useEffect=function(t,e){return ot.current.useEffect(t,e)};Z.useId=function(){return ot.current.useId()};Z.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return ot.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};Z.useRef=function(t){return ot.current.useRef(t)};Z.useState=function(t){return ot.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return ot.current.useTransition()};Z.version="18.2.0";(function(t){t.exports=Z})(O);const Sy=oE(O.exports),Uc=sE({__proto__:null,default:Sy},[O.exports]);var Fc={},ky={exports:{}},It={},Ty={exports:{}},Iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,U){var j=R.length;R.push(U);e:for(;0<j;){var ae=j-1>>>1,he=R[ae];if(0<i(he,U))R[ae]=U,R[j]=he,j=ae;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var U=R[0],j=R.pop();if(j!==U){R[0]=j;e:for(var ae=0,he=R.length,Nt=he>>>1;ae<Nt;){var tt=2*(ae+1)-1,H=R[tt],re=tt+1,le=R[re];if(0>i(H,j))re<he&&0>i(le,H)?(R[ae]=le,R[re]=j,ae=re):(R[ae]=H,R[tt]=j,ae=tt);else if(re<he&&0>i(le,j))R[ae]=le,R[re]=j,ae=re;else break e}}return U}function i(R,U){var j=R.sortIndex-U.sortIndex;return j!==0?j:R.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,y=!1,_=!1,I=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=R)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function v(R){if(_=!1,p(R),!y)if(n(l)!==null)y=!0,B(E);else{var U=n(u);U!==null&&G(v,U.startTime-R)}}function E(R,U){y=!1,_&&(_=!1,g(T),T=-1),m=!0;var j=d;try{for(p(U),h=n(l);h!==null&&(!(h.expirationTime>U)||R&&!te());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var he=ae(h.expirationTime<=U);U=t.unstable_now(),typeof he=="function"?h.callback=he:h===n(l)&&r(l),p(U)}else r(l);h=n(l)}if(h!==null)var Nt=!0;else{var tt=n(u);tt!==null&&G(v,tt.startTime-U),Nt=!1}return Nt}finally{h=null,d=j,m=!1}}var S=!1,k=null,T=-1,b=5,x=-1;function te(){return!(t.unstable_now()-x<b)}function pe(){if(k!==null){var R=t.unstable_now();x=R;var U=!0;try{U=k(!0,R)}finally{U?$():(S=!1,k=null)}}else S=!1}var $;if(typeof f=="function")$=function(){f(pe)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,D=Y.port2;Y.port1.onmessage=pe,$=function(){D.postMessage(null)}}else $=function(){I(pe,0)};function B(R){k=R,S||(S=!0,$())}function G(R,U){T=I(function(){R(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,B(E))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var j=d;d=U;try{return R()}finally{d=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,U){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var j=d;d=R;try{return U()}finally{d=j}},t.unstable_scheduleCallback=function(R,U,j){var ae=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ae+j:ae):j=ae,R){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=j+he,R={id:c++,callback:U,priorityLevel:R,startTime:j,expirationTime:he,sortIndex:-1},j>ae?(R.sortIndex=j,e(u,R),n(l)===null&&R===n(u)&&(_?(g(T),T=-1):_=!0,G(v,j-ae))):(R.sortIndex=he,e(l,R),y||m||(y=!0,B(E))),R},t.unstable_shouldYield=te,t.unstable_wrapCallback=function(R){var U=d;return function(){var j=d;d=U;try{return R.apply(this,arguments)}finally{d=j}}}})(Iy);(function(t){t.exports=Iy})(Ty);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cy=O.exports,kt=Ty.exports;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ny=new Set,$s={};function jr(t,e){Ti(t,e),Ti(t+"Capture",e)}function Ti(t,e){for($s[t]=e,t=0;t<e.length;t++)Ny.add(e[t])}var vn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=Object.prototype.hasOwnProperty,SE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Pp={};function kE(t){return Vc.call(Pp,t)?!0:Vc.call(Op,t)?!1:SE.test(t)?Pp[t]=!0:(Op[t]=!0,!1)}function TE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function IE(t,e,n,r){if(e===null||typeof e>"u"||TE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var _d=/[\-:]([a-z])/g;function Ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_d,Ed);je[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_d,Ed);je[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_d,Ed);je[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sd(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(IE(e,n,i,r)&&(n=null),r||i===null?kE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=Cy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qo=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Bc=Symbol.for("react.profiler"),Ay=Symbol.for("react.provider"),Ry=Symbol.for("react.context"),Td=Symbol.for("react.forward_ref"),zc=Symbol.for("react.suspense"),jc=Symbol.for("react.suspense_list"),Id=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),Dy=Symbol.for("react.offscreen"),Lp=Symbol.iterator;function ns(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var _e=Object.assign,ju;function ds(t){if(ju===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ju=e&&e[1]||""}return`
`+ju+t}var Hu=!1;function qu(t,e){if(!t||Hu)return"";Hu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ds(t):""}function CE(t){switch(t.tag){case 5:return ds(t.type);case 16:return ds("Lazy");case 13:return ds("Suspense");case 19:return ds("SuspenseList");case 0:case 2:case 15:return t=qu(t.type,!1),t;case 11:return t=qu(t.type.render,!1),t;case 1:return t=qu(t.type,!0),t;default:return""}}function Hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case Bc:return"Profiler";case kd:return"StrictMode";case zc:return"Suspense";case jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ry:return(t.displayName||"Context")+".Consumer";case Ay:return(t._context.displayName||"Context")+".Provider";case Td:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Id:return e=t.displayName||null,e!==null?e:Hc(t.type)||"Memo";case Dn:e=t._payload,t=t._init;try{return Hc(t(e))}catch{}}return null}function NE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hc(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function AE(t){var e=xy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=AE(t))}function Oy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qc(t,e){var n=e.checked;return _e({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Py(t,e){e=e.checked,e!=null&&Sd(t,"checked",e,!1)}function Wc(t,e){Py(t,e);var n=Zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kc(t,e.type,Zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kc(t,e,n){(e!=="number"||Ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fs=Array.isArray;function fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Gc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return _e({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $p(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(fs(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Zn(n)}}function Ly(t,e){var n=Zn(e.value),r=Zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Up(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function by(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?by(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,My=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Us(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ss={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},RE=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(t){RE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ss[e]=Ss[t]})});function $y(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ss.hasOwnProperty(t)&&Ss[t]?(""+e).trim():e+"px"}function Uy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$y(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var DE=_e({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yc(t,e){if(e){if(DE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Xc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jc=null;function Cd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zc=null,pi=null,mi=null;function Fp(t){if(t=_o(t)){if(typeof Zc!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Fl(e),Zc(t.stateNode,t.type,e))}}function Fy(t){pi?mi?mi.push(t):mi=[t]:pi=t}function Vy(){if(pi){var t=pi,e=mi;if(mi=pi=null,Fp(t),e)for(t=0;t<e.length;t++)Fp(e[t])}}function By(t,e){return t(e)}function zy(){}var Wu=!1;function jy(t,e,n){if(Wu)return t(e,n);Wu=!0;try{return By(t,e,n)}finally{Wu=!1,(pi!==null||mi!==null)&&(zy(),Vy())}}function Fs(t,e){var n=t.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var eh=!1;if(vn)try{var rs={};Object.defineProperty(rs,"passive",{get:function(){eh=!0}}),window.addEventListener("test",rs,rs),window.removeEventListener("test",rs,rs)}catch{eh=!1}function xE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ks=!1,za=null,ja=!1,th=null,OE={onError:function(t){ks=!0,za=t}};function PE(t,e,n,r,i,s,o,a,l){ks=!1,za=null,xE.apply(OE,arguments)}function LE(t,e,n,r,i,s,o,a,l){if(PE.apply(this,arguments),ks){if(ks){var u=za;ks=!1,za=null}else throw Error(N(198));ja||(ja=!0,th=u)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vp(t){if(Hr(t)!==t)throw Error(N(188))}function bE(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vp(i),t;if(s===r)return Vp(i),e;s=s.sibling}throw Error(N(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function qy(t){return t=bE(t),t!==null?Wy(t):null}function Wy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wy(t);if(e!==null)return e;t=t.sibling}return null}var Ky=kt.unstable_scheduleCallback,Bp=kt.unstable_cancelCallback,ME=kt.unstable_shouldYield,$E=kt.unstable_requestPaint,Ie=kt.unstable_now,UE=kt.unstable_getCurrentPriorityLevel,Nd=kt.unstable_ImmediatePriority,Gy=kt.unstable_UserBlockingPriority,Ha=kt.unstable_NormalPriority,FE=kt.unstable_LowPriority,Qy=kt.unstable_IdlePriority,bl=null,Xt=null;function VE(t){if(Xt&&typeof Xt.onCommitFiberRoot=="function")try{Xt.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:jE,BE=Math.log,zE=Math.LN2;function jE(t){return t>>>=0,t===0?32:31-(BE(t)/zE|0)|0}var Jo=64,Zo=4194304;function ps(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ps(a):(s&=o,s!==0&&(r=ps(s)))}else o=n&~i,o!==0?r=ps(o):s!==0&&(r=ps(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function HE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=HE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Yy(){var t=Jo;return Jo<<=1,(Jo&4194240)===0&&(Jo=64),t}function Ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function vo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function WE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Xy(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Jy,Rd,Zy,ev,tv,rh=!1,ea=[],Bn=null,zn=null,jn=null,Vs=new Map,Bs=new Map,On=[],KE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zp(t,e){switch(t){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":zn=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bs.delete(e.pointerId)}}function is(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=_o(e),e!==null&&Rd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function GE(t,e,n,r,i){switch(e){case"focusin":return Bn=is(Bn,t,e,n,r,i),!0;case"dragenter":return zn=is(zn,t,e,n,r,i),!0;case"mouseover":return jn=is(jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Vs.set(s,is(Vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Bs.set(s,is(Bs.get(s)||null,t,e,n,r,i)),!0}return!1}function nv(t){var e=vr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=Hy(n),e!==null){t.blockedOn=e,tv(t.priority,function(){Zy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ih(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Jc=r,n.target.dispatchEvent(r),Jc=null}else return e=_o(n),e!==null&&Rd(e),t.blockedOn=n,!1;e.shift()}return!0}function jp(t,e,n){ka(t)&&n.delete(e)}function QE(){rh=!1,Bn!==null&&ka(Bn)&&(Bn=null),zn!==null&&ka(zn)&&(zn=null),jn!==null&&ka(jn)&&(jn=null),Vs.forEach(jp),Bs.forEach(jp)}function ss(t,e){t.blockedOn===e&&(t.blockedOn=null,rh||(rh=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,QE)))}function zs(t){function e(i){return ss(i,t)}if(0<ea.length){ss(ea[0],t);for(var n=1;n<ea.length;n++){var r=ea[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bn!==null&&ss(Bn,t),zn!==null&&ss(zn,t),jn!==null&&ss(jn,t),Vs.forEach(e),Bs.forEach(e),n=0;n<On.length;n++)r=On[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)nv(n),n.blockedOn===null&&On.shift()}var gi=Nn.ReactCurrentBatchConfig,Wa=!0;function YE(t,e,n,r){var i=oe,s=gi.transition;gi.transition=null;try{oe=1,Dd(t,e,n,r)}finally{oe=i,gi.transition=s}}function XE(t,e,n,r){var i=oe,s=gi.transition;gi.transition=null;try{oe=4,Dd(t,e,n,r)}finally{oe=i,gi.transition=s}}function Dd(t,e,n,r){if(Wa){var i=ih(t,e,n,r);if(i===null)rc(t,e,r,Ka,n),zp(t,r);else if(GE(i,t,e,n,r))r.stopPropagation();else if(zp(t,r),e&4&&-1<KE.indexOf(t)){for(;i!==null;){var s=_o(i);if(s!==null&&Jy(s),s=ih(t,e,n,r),s===null&&rc(t,e,r,Ka,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else rc(t,e,r,null,n)}}var Ka=null;function ih(t,e,n,r){if(Ka=null,t=Cd(r),t=vr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ka=t,null}function rv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(UE()){case Nd:return 1;case Gy:return 4;case Ha:case FE:return 16;case Qy:return 536870912;default:return 16}default:return 16}}var Un=null,xd=null,Ta=null;function iv(){if(Ta)return Ta;var t,e=xd,n=e.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ta=i.slice(t,1<r?1-r:void 0)}function Ia(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ta(){return!0}function Hp(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ta:Hp,this.isPropagationStopped=Hp,this}return _e(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ta)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ta)},persist:function(){},isPersistent:ta}),e}var Vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=Ct(Vi),wo=_e({},Vi,{view:0,detail:0}),JE=Ct(wo),Gu,Qu,os,Ml=_e({},wo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==os&&(os&&t.type==="mousemove"?(Gu=t.screenX-os.screenX,Qu=t.screenY-os.screenY):Qu=Gu=0,os=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Qu}}),qp=Ct(Ml),ZE=_e({},Ml,{dataTransfer:0}),eS=Ct(ZE),tS=_e({},wo,{relatedTarget:0}),Yu=Ct(tS),nS=_e({},Vi,{animationName:0,elapsedTime:0,pseudoElement:0}),rS=Ct(nS),iS=_e({},Vi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),sS=Ct(iS),oS=_e({},Vi,{data:0}),Wp=Ct(oS),aS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=uS[t])?!!e[t]:!1}function Pd(){return cS}var hS=_e({},wo,{key:function(t){if(t.key){var e=aS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ia(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?lS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pd,charCode:function(t){return t.type==="keypress"?Ia(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ia(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dS=Ct(hS),fS=_e({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=Ct(fS),pS=_e({},wo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pd}),mS=Ct(pS),gS=_e({},Vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=Ct(gS),vS=_e({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wS=Ct(vS),_S=[9,13,27,32],Ld=vn&&"CompositionEvent"in window,Ts=null;vn&&"documentMode"in document&&(Ts=document.documentMode);var ES=vn&&"TextEvent"in window&&!Ts,sv=vn&&(!Ld||Ts&&8<Ts&&11>=Ts),Gp=String.fromCharCode(32),Qp=!1;function ov(t,e){switch(t){case"keyup":return _S.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function av(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function SS(t,e){switch(t){case"compositionend":return av(e);case"keypress":return e.which!==32?null:(Qp=!0,Gp);case"textInput":return t=e.data,t===Gp&&Qp?null:t;default:return null}}function kS(t,e){if(ti)return t==="compositionend"||!Ld&&ov(t,e)?(t=iv(),Ta=xd=Un=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sv&&e.locale!=="ko"?null:e.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!TS[t.type]:e==="textarea"}function lv(t,e,n,r){Fy(r),e=Ga(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Is=null,js=null;function IS(t){wv(t,0)}function $l(t){var e=ii(t);if(Oy(e))return t}function CS(t,e){if(t==="change")return e}var uv=!1;if(vn){var Xu;if(vn){var Ju="oninput"in document;if(!Ju){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Ju=typeof Xp.oninput=="function"}Xu=Ju}else Xu=!1;uv=Xu&&(!document.documentMode||9<document.documentMode)}function Jp(){Is&&(Is.detachEvent("onpropertychange",cv),js=Is=null)}function cv(t){if(t.propertyName==="value"&&$l(js)){var e=[];lv(e,js,t,Cd(t)),jy(IS,e)}}function NS(t,e,n){t==="focusin"?(Jp(),Is=e,js=n,Is.attachEvent("onpropertychange",cv)):t==="focusout"&&Jp()}function AS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(js)}function RS(t,e){if(t==="click")return $l(e)}function DS(t,e){if(t==="input"||t==="change")return $l(e)}function xS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ht=typeof Object.is=="function"?Object.is:xS;function Hs(t,e){if(Ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Vc.call(e,i)||!Ht(t[i],e[i]))return!1}return!0}function Zp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,e){var n=Zp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zp(n)}}function hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function dv(){for(var t=window,e=Ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ba(t.document)}return e}function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OS(t){var e=dv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&hv(n.ownerDocument.documentElement,n)){if(r!==null&&bd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=em(n,s);var o=em(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var PS=vn&&"documentMode"in document&&11>=document.documentMode,ni=null,sh=null,Cs=null,oh=!1;function tm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;oh||ni==null||ni!==Ba(r)||(r=ni,"selectionStart"in r&&bd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Cs&&Hs(Cs,r)||(Cs=r,r=Ga(sh,"onSelect"),0<r.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:na("Animation","AnimationEnd"),animationiteration:na("Animation","AnimationIteration"),animationstart:na("Animation","AnimationStart"),transitionend:na("Transition","TransitionEnd")},Zu={},fv={};vn&&(fv=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function Ul(t){if(Zu[t])return Zu[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fv)return Zu[t]=e[n];return t}var pv=Ul("animationend"),mv=Ul("animationiteration"),gv=Ul("animationstart"),yv=Ul("transitionend"),vv=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){vv.set(t,e),jr(e,[t])}for(var ec=0;ec<nm.length;ec++){var tc=nm[ec],LS=tc.toLowerCase(),bS=tc[0].toUpperCase()+tc.slice(1);or(LS,"on"+bS)}or(pv,"onAnimationEnd");or(mv,"onAnimationIteration");or(gv,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(yv,"onTransitionEnd");Ti("onMouseEnter",["mouseout","mouseover"]);Ti("onMouseLeave",["mouseout","mouseover"]);Ti("onPointerEnter",["pointerout","pointerover"]);Ti("onPointerLeave",["pointerout","pointerover"]);jr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));jr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));jr("onBeforeInput",["compositionend","keypress","textInput","paste"]);jr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));jr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MS=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function rm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,LE(r,e,void 0,t),t.currentTarget=null}function wv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;rm(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;rm(i,a,u),s=l}}}if(ja)throw t=th,ja=!1,th=null,t}function de(t,e){var n=e[hh];n===void 0&&(n=e[hh]=new Set);var r=t+"__bubble";n.has(r)||(_v(e,t,2,!1),n.add(r))}function nc(t,e,n){var r=0;e&&(r|=4),_v(n,t,r,e)}var ra="_reactListening"+Math.random().toString(36).slice(2);function qs(t){if(!t[ra]){t[ra]=!0,Ny.forEach(function(n){n!=="selectionchange"&&(MS.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ra]||(e[ra]=!0,nc("selectionchange",!1,e))}}function _v(t,e,n,r){switch(rv(e)){case 1:var i=YE;break;case 4:i=XE;break;default:i=Dd}n=i.bind(null,e,n,t),i=void 0,!eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function rc(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}jy(function(){var u=s,c=Cd(n),h=[];e:{var d=vv.get(t);if(d!==void 0){var m=Od,y=t;switch(t){case"keypress":if(Ia(n)===0)break e;case"keydown":case"keyup":m=dS;break;case"focusin":y="focus",m=Yu;break;case"focusout":y="blur",m=Yu;break;case"beforeblur":case"afterblur":m=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=eS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=mS;break;case pv:case mv:case gv:m=rS;break;case yv:m=yS;break;case"scroll":m=JE;break;case"wheel":m=wS;break;case"copy":case"cut":case"paste":m=sS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Kp}var _=(e&4)!==0,I=!_&&t==="scroll",g=_?d!==null?d+"Capture":null:d;_=[];for(var f=u,p;f!==null;){p=f;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,g!==null&&(v=Fs(f,g),v!=null&&_.push(Ws(f,v,p)))),I)break;f=f.return}0<_.length&&(d=new m(d,y,null,n,c),h.push({event:d,listeners:_}))}}if((e&7)===0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Jc&&(y=n.relatedTarget||n.fromElement)&&(vr(y)||y[wn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?vr(y):null,y!==null&&(I=Hr(y),y!==I||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(_=qp,v="onMouseLeave",g="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(_=Kp,v="onPointerLeave",g="onPointerEnter",f="pointer"),I=m==null?d:ii(m),p=y==null?d:ii(y),d=new _(v,f+"leave",m,n,c),d.target=I,d.relatedTarget=p,v=null,vr(c)===u&&(_=new _(g,f+"enter",y,n,c),_.target=p,_.relatedTarget=I,v=_),I=v,m&&y)t:{for(_=m,g=y,f=0,p=_;p;p=Qr(p))f++;for(p=0,v=g;v;v=Qr(v))p++;for(;0<f-p;)_=Qr(_),f--;for(;0<p-f;)g=Qr(g),p--;for(;f--;){if(_===g||g!==null&&_===g.alternate)break t;_=Qr(_),g=Qr(g)}_=null}else _=null;m!==null&&im(h,d,m,_,!1),y!==null&&I!==null&&im(h,I,y,_,!0)}}e:{if(d=u?ii(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var E=CS;else if(Yp(d))if(uv)E=DS;else{E=AS;var S=NS}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=RS);if(E&&(E=E(t,u))){lv(h,E,n,c);break e}S&&S(t,d,u),t==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&Kc(d,"number",d.value)}switch(S=u?ii(u):window,t){case"focusin":(Yp(S)||S.contentEditable==="true")&&(ni=S,sh=u,Cs=null);break;case"focusout":Cs=sh=ni=null;break;case"mousedown":oh=!0;break;case"contextmenu":case"mouseup":case"dragend":oh=!1,tm(h,n,c);break;case"selectionchange":if(PS)break;case"keydown":case"keyup":tm(h,n,c)}var k;if(Ld)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else ti?ov(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(sv&&n.locale!=="ko"&&(ti||T!=="onCompositionStart"?T==="onCompositionEnd"&&ti&&(k=iv()):(Un=c,xd="value"in Un?Un.value:Un.textContent,ti=!0)),S=Ga(u,T),0<S.length&&(T=new Wp(T,t,null,n,c),h.push({event:T,listeners:S}),k?T.data=k:(k=av(n),k!==null&&(T.data=k)))),(k=ES?SS(t,n):kS(t,n))&&(u=Ga(u,"onBeforeInput"),0<u.length&&(c=new Wp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=k))}wv(h,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ga(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fs(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=Fs(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function im(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Fs(n,s),l!=null&&o.unshift(Ws(n,l,a))):i||(l=Fs(n,s),l!=null&&o.push(Ws(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var $S=/\r\n?/g,US=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace($S,`
`).replace(US,"")}function ia(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(N(425))}function Qa(){}var ah=null,lh=null;function uh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ch=typeof setTimeout=="function"?setTimeout:void 0,FS=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(BS)}:ch;function BS(t){setTimeout(function(){throw t})}function ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zs(e)}function Hn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bi=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Bi,Ks="__reactProps$"+Bi,wn="__reactContainer$"+Bi,hh="__reactEvents$"+Bi,zS="__reactListeners$"+Bi,jS="__reactHandles$"+Bi;function vr(t){var e=t[Gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wn]||n[Gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[Gt])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[Gt]||t[wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Fl(t){return t[Ks]||null}var dh=[],si=-1;function ar(t){return{current:t}}function fe(t){0>si||(t.current=dh[si],dh[si]=null,si--)}function ue(t,e){si++,dh[si]=t.current,t.current=e}var er={},Je=ar(er),ft=ar(!1),xr=er;function Ii(t,e){var n=t.type.contextTypes;if(!n)return er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function pt(t){return t=t.childContextTypes,t!=null}function Ya(){fe(ft),fe(Je)}function lm(t,e,n){if(Je.current!==er)throw Error(N(168));ue(Je,e),ue(ft,n)}function Ev(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(N(108,NE(t)||"Unknown",i));return _e({},n,r)}function Xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,xr=Je.current,ue(Je,t),ue(ft,ft.current),!0}function um(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=Ev(t,e,xr),r.__reactInternalMemoizedMergedChildContext=t,fe(ft),fe(Je),ue(Je,t)):fe(ft),ue(ft,n)}var an=null,Vl=!1,sc=!1;function Sv(t){an===null?an=[t]:an.push(t)}function HS(t){Vl=!0,Sv(t)}function lr(){if(!sc&&an!==null){sc=!0;var t=0,e=oe;try{var n=an;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}an=null,Vl=!1}catch(i){throw an!==null&&(an=an.slice(t+1)),Ky(Nd,lr),i}finally{oe=e,sc=!1}}return null}var oi=[],ai=0,Ja=null,Za=0,At=[],Rt=0,Or=null,un=1,cn="";function pr(t,e){oi[ai++]=Za,oi[ai++]=Ja,Ja=t,Za=e}function kv(t,e,n){At[Rt++]=un,At[Rt++]=cn,At[Rt++]=Or,Or=t;var r=un;t=cn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,un=1<<32-Bt(e)+i|n<<i|r,cn=s+t}else un=1<<s|n<<i|r,cn=t}function Md(t){t.return!==null&&(pr(t,1),kv(t,1,0))}function $d(t){for(;t===Ja;)Ja=oi[--ai],oi[ai]=null,Za=oi[--ai],oi[ai]=null;for(;t===Or;)Or=At[--Rt],At[Rt]=null,cn=At[--Rt],At[Rt]=null,un=At[--Rt],At[Rt]=null}var St=null,_t=null,me=!1,Vt=null;function Tv(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function cm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,_t=Hn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:un,overflow:cn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,_t=null,!0):!1;default:return!1}}function fh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ph(t){if(me){var e=_t;if(e){var n=e;if(!cm(t,e)){if(fh(t))throw Error(N(418));e=Hn(n.nextSibling);var r=St;e&&cm(t,e)?Tv(r,n):(t.flags=t.flags&-4097|2,me=!1,St=t)}}else{if(fh(t))throw Error(N(418));t.flags=t.flags&-4097|2,me=!1,St=t}}}function hm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function sa(t){if(t!==St)return!1;if(!me)return hm(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!uh(t.type,t.memoizedProps)),e&&(e=_t)){if(fh(t))throw Iv(),Error(N(418));for(;e;)Tv(t,e),e=Hn(e.nextSibling)}if(hm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=Hn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=St?Hn(t.stateNode.nextSibling):null;return!0}function Iv(){for(var t=_t;t;)t=Hn(t.nextSibling)}function Ci(){_t=St=null,me=!1}function Ud(t){Vt===null?Vt=[t]:Vt.push(t)}var qS=Nn.ReactCurrentBatchConfig;function Ut(t,e){if(t&&t.defaultProps){e=_e({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var el=ar(null),tl=null,li=null,Fd=null;function Vd(){Fd=li=tl=null}function Bd(t){var e=el.current;fe(el),t._currentValue=e}function mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function yi(t,e){tl=t,Fd=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ht=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(Fd!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(tl===null)throw Error(N(308));li=t,tl.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var wr=null;function zd(t){wr===null?wr=[t]:wr.push(t)}function Cv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,_n(t,r)}function _n(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function jd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Nv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ne&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_n(t,n)}return i=r.interleaved,i===null?(e.next=e,zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,_n(t,n)}function Ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ad(t,n)}}function dm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nl(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(d=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(m,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(m,h,d):y,d==null)break e;h=_e({},h,d);break e;case 2:xn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=h}}function fm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(N(191,i));i.call(r)}}}var Av=new Cy.Component().refs;function gh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:_e({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bl={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=st(),i=Kn(t),s=pn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(zt(e,t,i,r),Ca(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=st(),i=Kn(t),s=pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(zt(e,t,i,r),Ca(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=st(),r=Kn(t),i=pn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(zt(e,t,r,n),Ca(e,t,r))}};function pm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Hs(n,r)||!Hs(i,s):!0}function Rv(t,e,n){var r=!1,i=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=pt(e)?xr:Je.current,r=e.contextTypes,s=(r=r!=null)?Ii(t,i):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function mm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bl.enqueueReplaceState(e,e.state,null)}function yh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Av,jd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=pt(e)?xr:Je.current,i.context=Ii(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Bl.enqueueReplaceState(i,i.state,null),nl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function as(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Av&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function oa(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gm(t){var e=t._init;return e(t._payload)}function Dv(t){function e(g,f){if(t){var p=g.deletions;p===null?(g.deletions=[f],g.flags|=16):p.push(f)}}function n(g,f){if(!t)return null;for(;f!==null;)e(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=Gn(g,f),g.index=0,g.sibling=null,g}function s(g,f,p){return g.index=p,t?(p=g.alternate,p!==null?(p=p.index,p<f?(g.flags|=2,f):p):(g.flags|=2,f)):(g.flags|=1048576,f)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,f,p,v){return f===null||f.tag!==6?(f=dc(p,g.mode,v),f.return=g,f):(f=i(f,p),f.return=g,f)}function l(g,f,p,v){var E=p.type;return E===ei?c(g,f,p.props.children,v,p.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Dn&&gm(E)===f.type)?(v=i(f,p.props),v.ref=as(g,f,p),v.return=g,v):(v=Oa(p.type,p.key,p.props,null,g.mode,v),v.ref=as(g,f,p),v.return=g,v)}function u(g,f,p,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=fc(p,g.mode,v),f.return=g,f):(f=i(f,p.children||[]),f.return=g,f)}function c(g,f,p,v,E){return f===null||f.tag!==7?(f=Cr(p,g.mode,v,E),f.return=g,f):(f=i(f,p),f.return=g,f)}function h(g,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=dc(""+f,g.mode,p),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Qo:return p=Oa(f.type,f.key,f.props,null,g.mode,p),p.ref=as(g,null,f),p.return=g,p;case Zr:return f=fc(f,g.mode,p),f.return=g,f;case Dn:var v=f._init;return h(g,v(f._payload),p)}if(fs(f)||ns(f))return f=Cr(f,g.mode,p,null),f.return=g,f;oa(g,f)}return null}function d(g,f,p,v){var E=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return E!==null?null:a(g,f,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qo:return p.key===E?l(g,f,p,v):null;case Zr:return p.key===E?u(g,f,p,v):null;case Dn:return E=p._init,d(g,f,E(p._payload),v)}if(fs(p)||ns(p))return E!==null?null:c(g,f,p,v,null);oa(g,p)}return null}function m(g,f,p,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return g=g.get(p)||null,a(f,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qo:return g=g.get(v.key===null?p:v.key)||null,l(f,g,v,E);case Zr:return g=g.get(v.key===null?p:v.key)||null,u(f,g,v,E);case Dn:var S=v._init;return m(g,f,p,S(v._payload),E)}if(fs(v)||ns(v))return g=g.get(p)||null,c(f,g,v,E,null);oa(f,v)}return null}function y(g,f,p,v){for(var E=null,S=null,k=f,T=f=0,b=null;k!==null&&T<p.length;T++){k.index>T?(b=k,k=null):b=k.sibling;var x=d(g,k,p[T],v);if(x===null){k===null&&(k=b);break}t&&k&&x.alternate===null&&e(g,k),f=s(x,f,T),S===null?E=x:S.sibling=x,S=x,k=b}if(T===p.length)return n(g,k),me&&pr(g,T),E;if(k===null){for(;T<p.length;T++)k=h(g,p[T],v),k!==null&&(f=s(k,f,T),S===null?E=k:S.sibling=k,S=k);return me&&pr(g,T),E}for(k=r(g,k);T<p.length;T++)b=m(k,g,T,p[T],v),b!==null&&(t&&b.alternate!==null&&k.delete(b.key===null?T:b.key),f=s(b,f,T),S===null?E=b:S.sibling=b,S=b);return t&&k.forEach(function(te){return e(g,te)}),me&&pr(g,T),E}function _(g,f,p,v){var E=ns(p);if(typeof E!="function")throw Error(N(150));if(p=E.call(p),p==null)throw Error(N(151));for(var S=E=null,k=f,T=f=0,b=null,x=p.next();k!==null&&!x.done;T++,x=p.next()){k.index>T?(b=k,k=null):b=k.sibling;var te=d(g,k,x.value,v);if(te===null){k===null&&(k=b);break}t&&k&&te.alternate===null&&e(g,k),f=s(te,f,T),S===null?E=te:S.sibling=te,S=te,k=b}if(x.done)return n(g,k),me&&pr(g,T),E;if(k===null){for(;!x.done;T++,x=p.next())x=h(g,x.value,v),x!==null&&(f=s(x,f,T),S===null?E=x:S.sibling=x,S=x);return me&&pr(g,T),E}for(k=r(g,k);!x.done;T++,x=p.next())x=m(k,g,T,x.value,v),x!==null&&(t&&x.alternate!==null&&k.delete(x.key===null?T:x.key),f=s(x,f,T),S===null?E=x:S.sibling=x,S=x);return t&&k.forEach(function(pe){return e(g,pe)}),me&&pr(g,T),E}function I(g,f,p,v){if(typeof p=="object"&&p!==null&&p.type===ei&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qo:e:{for(var E=p.key,S=f;S!==null;){if(S.key===E){if(E=p.type,E===ei){if(S.tag===7){n(g,S.sibling),f=i(S,p.props.children),f.return=g,g=f;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Dn&&gm(E)===S.type){n(g,S.sibling),f=i(S,p.props),f.ref=as(g,S,p),f.return=g,g=f;break e}n(g,S);break}else e(g,S);S=S.sibling}p.type===ei?(f=Cr(p.props.children,g.mode,v,p.key),f.return=g,g=f):(v=Oa(p.type,p.key,p.props,null,g.mode,v),v.ref=as(g,f,p),v.return=g,g=v)}return o(g);case Zr:e:{for(S=p.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){n(g,f.sibling),f=i(f,p.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else e(g,f);f=f.sibling}f=fc(p,g.mode,v),f.return=g,g=f}return o(g);case Dn:return S=p._init,I(g,f,S(p._payload),v)}if(fs(p))return y(g,f,p,v);if(ns(p))return _(g,f,p,v);oa(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,p),f.return=g,g=f):(n(g,f),f=dc(p,g.mode,v),f.return=g,g=f),o(g)):n(g,f)}return I}var Ni=Dv(!0),xv=Dv(!1),Eo={},Jt=ar(Eo),Gs=ar(Eo),Qs=ar(Eo);function _r(t){if(t===Eo)throw Error(N(174));return t}function Hd(t,e){switch(ue(Qs,e),ue(Gs,t),ue(Jt,Eo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Qc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Qc(e,t)}fe(Jt),ue(Jt,e)}function Ai(){fe(Jt),fe(Gs),fe(Qs)}function Ov(t){_r(Qs.current);var e=_r(Jt.current),n=Qc(e,t.type);e!==n&&(ue(Gs,t),ue(Jt,n))}function qd(t){Gs.current===t&&(fe(Jt),fe(Gs))}var ve=ar(0);function rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function Wd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Na=Nn.ReactCurrentDispatcher,ac=Nn.ReactCurrentBatchConfig,Pr=0,we=null,Re=null,be=null,il=!1,Ns=!1,Ys=0,WS=0;function qe(){throw Error(N(321))}function Kd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ht(t[n],e[n]))return!1;return!0}function Gd(t,e,n,r,i,s){if(Pr=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?YS:XS,t=n(r,i),Ns){s=0;do{if(Ns=!1,Ys=0,25<=s)throw Error(N(301));s+=1,be=Re=null,e.updateQueue=null,Na.current=JS,t=n(r,i)}while(Ns)}if(Na.current=sl,e=Re!==null&&Re.next!==null,Pr=0,be=Re=we=null,il=!1,e)throw Error(N(300));return t}function Qd(){var t=Ys!==0;return Ys=0,t}function Kt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?we.memoizedState=be=t:be=be.next=t,be}function bt(){if(Re===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=be===null?we.memoizedState:be.next;if(e!==null)be=e,Re=t;else{if(t===null)throw Error(N(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},be===null?we.memoizedState=be=t:be=be.next=t}return be}function Xs(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=bt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,we.lanes|=c,Lr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ht(r,e.memoizedState)||(ht=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,Lr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=bt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ht(s,e.memoizedState)||(ht=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Pv(){}function Lv(t,e){var n=we,r=bt(),i=e(),s=!Ht(r.memoizedState,i);if(s&&(r.memoizedState=i,ht=!0),r=r.queue,Yd($v.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Js(9,Mv.bind(null,n,r,i,e),void 0,null),Me===null)throw Error(N(349));(Pr&30)!==0||bv(n,e,i)}return i}function bv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Mv(t,e,n,r){e.value=n,e.getSnapshot=r,Uv(e)&&Fv(t)}function $v(t,e,n){return n(function(){Uv(e)&&Fv(t)})}function Uv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ht(t,n)}catch{return!0}}function Fv(t){var e=_n(t,1);e!==null&&zt(e,t,1,-1)}function ym(t){var e=Kt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=QS.bind(null,we,t),[e.memoizedState,t]}function Js(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vv(){return bt().memoizedState}function Aa(t,e,n,r){var i=Kt();we.flags|=t,i.memoizedState=Js(1|e,n,void 0,r===void 0?null:r)}function zl(t,e,n,r){var i=bt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&Kd(r,o.deps)){i.memoizedState=Js(e,n,s,r);return}}we.flags|=t,i.memoizedState=Js(1|e,n,s,r)}function vm(t,e){return Aa(8390656,8,t,e)}function Yd(t,e){return zl(2048,8,t,e)}function Bv(t,e){return zl(4,2,t,e)}function zv(t,e){return zl(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,jv.bind(null,e,t),n)}function Xd(){}function qv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Wv(t,e){var n=bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Kd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Kv(t,e,n){return(Pr&21)===0?(t.baseState&&(t.baseState=!1,ht=!0),t.memoizedState=n):(Ht(n,e)||(n=Yy(),we.lanes|=n,Lr|=n,t.baseState=!0),e)}function KS(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=ac.transition;ac.transition={};try{t(!1),e()}finally{oe=n,ac.transition=r}}function Gv(){return bt().memoizedState}function GS(t,e,n){var r=Kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qv(t))Yv(e,n);else if(n=Cv(t,e,n,r),n!==null){var i=st();zt(n,t,r,i),Xv(n,e,r)}}function QS(t,e,n){var r=Kn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qv(t))Yv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ht(a,o)){var l=e.interleaved;l===null?(i.next=i,zd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Cv(t,e,i,r),n!==null&&(i=st(),zt(n,t,r,i),Xv(n,e,r))}}function Qv(t){var e=t.alternate;return t===we||e!==null&&e===we}function Yv(t,e){Ns=il=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xv(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ad(t,n)}}var sl={readContext:Lt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},YS={readContext:Lt,useCallback:function(t,e){return Kt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:vm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Aa(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Aa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Aa(4,2,t,e)},useMemo:function(t,e){var n=Kt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Kt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=GS.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=Kt();return t={current:t},e.memoizedState=t},useState:ym,useDebugValue:Xd,useDeferredValue:function(t){return Kt().memoizedState=t},useTransition:function(){var t=ym(!1),e=t[0];return t=KS.bind(null,t[1]),Kt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=Kt();if(me){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),Me===null)throw Error(N(349));(Pr&30)!==0||bv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,vm($v.bind(null,r,s,t),[t]),r.flags|=2048,Js(9,Mv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Kt(),e=Me.identifierPrefix;if(me){var n=cn,r=un;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=WS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},XS={readContext:Lt,useCallback:qv,useContext:Lt,useEffect:Yd,useImperativeHandle:Hv,useInsertionEffect:Bv,useLayoutEffect:zv,useMemo:Wv,useReducer:lc,useRef:Vv,useState:function(){return lc(Xs)},useDebugValue:Xd,useDeferredValue:function(t){var e=bt();return Kv(e,Re.memoizedState,t)},useTransition:function(){var t=lc(Xs)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Pv,useSyncExternalStore:Lv,useId:Gv,unstable_isNewReconciler:!1},JS={readContext:Lt,useCallback:qv,useContext:Lt,useEffect:Yd,useImperativeHandle:Hv,useInsertionEffect:Bv,useLayoutEffect:zv,useMemo:Wv,useReducer:uc,useRef:Vv,useState:function(){return uc(Xs)},useDebugValue:Xd,useDeferredValue:function(t){var e=bt();return Re===null?e.memoizedState=t:Kv(e,Re.memoizedState,t)},useTransition:function(){var t=uc(Xs)[0],e=bt().memoizedState;return[t,e]},useMutableSource:Pv,useSyncExternalStore:Lv,useId:Gv,unstable_isNewReconciler:!1};function Ri(t,e){try{var n="",r=e;do n+=CE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function vh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ZS=typeof WeakMap=="function"?WeakMap:Map;function Jv(t,e,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){al||(al=!0,Ah=r),vh(t,e)},n}function Zv(t,e,n){n=pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){vh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vh(t,e),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function wm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ZS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=fk.bind(null,t,e,n),e.then(t,t))}function _m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=pn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var ek=Nn.ReactCurrentOwner,ht=!1;function rt(t,e,n,r){e.child=t===null?xv(e,null,n,r):Ni(e,t.child,n,r)}function Sm(t,e,n,r,i){n=n.render;var s=e.ref;return yi(e,i),r=Gd(t,e,n,r,s,i),n=Qd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(me&&n&&Md(e),e.flags|=1,rt(t,e,r,i),e.child)}function km(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e0(t,e,s,r,i)):(t=Oa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Hs,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Gn(s,r),t.ref=e.ref,t.return=e,e.child=t}function e0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Hs(s,r)&&t.ref===e.ref)if(ht=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(ht=!0);else return e.lanes=t.lanes,En(t,e,i)}return wh(t,e,n,r,i)}function t0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(ci,wt),wt|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(ci,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(ci,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(ci,wt),wt|=r;return rt(t,e,i,n),e.child}function n0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wh(t,e,n,r,i){var s=pt(n)?xr:Je.current;return s=Ii(e,s),yi(e,i),n=Gd(t,e,n,r,s,i),r=Qd(),t!==null&&!ht?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(me&&r&&Md(e),e.flags|=1,rt(t,e,n,i),e.child)}function Tm(t,e,n,r,i){if(pt(n)){var s=!0;Xa(e)}else s=!1;if(yi(e,i),e.stateNode===null)Ra(t,e),Rv(e,n,r),yh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=pt(n)?xr:Je.current,u=Ii(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&mm(e,o,r,u),xn=!1;var d=e.memoizedState;o.state=d,nl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ft.current||xn?(typeof c=="function"&&(gh(e,n,c,r),l=e.memoizedState),(a=xn||pm(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Nv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ut(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=pt(n)?xr:Je.current,l=Ii(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&mm(e,o,r,l),xn=!1,d=e.memoizedState,o.state=d,nl(e,r,o,i);var y=e.memoizedState;a!==h||d!==y||ft.current||xn?(typeof m=="function"&&(gh(e,n,m,r),y=e.memoizedState),(u=xn||pm(e,n,u,r,d,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return _h(t,e,n,r,s,i)}function _h(t,e,n,r,i,s){n0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&um(e,n,!1),En(t,e,s);r=e.stateNode,ek.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ni(e,t.child,null,s),e.child=Ni(e,null,a,s)):rt(t,e,a,s),e.memoizedState=r.state,i&&um(e,n,!0),e.child}function r0(t){var e=t.stateNode;e.pendingContext?lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lm(t,e.context,!1),Hd(t,e.containerInfo)}function Im(t,e,n,r,i){return Ci(),Ud(i),e.flags|=256,rt(t,e,n,r),e.child}var Eh={dehydrated:null,treeContext:null,retryLane:0};function Sh(t){return{baseLanes:t,cachePool:null,transitions:null}}function i0(t,e,n){var r=e.pendingProps,i=ve.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(ve,i&1),t===null)return ph(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ql(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Sh(n),e.memoizedState=Eh,t):Jd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return tk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Gn(a,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Sh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Eh,r}return s=t.child,t=s.sibling,r=Gn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jd(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function aa(t,e,n,r){return r!==null&&Ud(r),Ni(e,t.child,null,n),t=Jd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=cc(Error(N(422))),aa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ql({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Ni(e,t.child,null,o),e.child.memoizedState=Sh(o),e.memoizedState=Eh,s);if((e.mode&1)===0)return aa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(N(419)),r=cc(s,r,void 0),aa(t,e,o,r)}if(a=(o&t.childLanes)!==0,ht||a){if(r=Me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_n(t,i),zt(r,t,i,-1))}return sf(),r=cc(Error(N(421))),aa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=pk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=Hn(i.nextSibling),St=e,me=!0,Vt=null,t!==null&&(At[Rt++]=un,At[Rt++]=cn,At[Rt++]=Or,un=t.id,cn=t.overflow,Or=e),e=Jd(e,r.children),e.flags|=4096,e)}function Cm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),mh(t.return,e,n)}function hc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function s0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=ve.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,n,e);else if(t.tag===19)Cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(ve,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&rl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),hc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&rl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}hc(e,!0,n,null,s);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ra(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nk(t,e,n){switch(e.tag){case 3:r0(e),Ci();break;case 5:Ov(e);break;case 1:pt(e.type)&&Xa(e);break;case 4:Hd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(el,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(ve,ve.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?i0(t,e,n):(ue(ve,ve.current&1),t=En(t,e,n),t!==null?t.sibling:null);ue(ve,ve.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return s0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(ve,ve.current),r)break;return null;case 22:case 23:return e.lanes=0,t0(t,e,n)}return En(t,e,n)}var o0,kh,a0,l0;o0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kh=function(){};a0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,_r(Jt.current);var s=null;switch(n){case"input":i=qc(t,i),r=qc(t,r),s=[];break;case"select":i=_e({},i,{value:void 0}),r=_e({},r,{value:void 0}),s=[];break;case"textarea":i=Gc(t,i),r=Gc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Qa)}Yc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($s.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($s.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&de("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};l0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ls(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function rk(t,e,n){var r=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return pt(e.type)&&Ya(),We(e),null;case 3:return r=e.stateNode,Ai(),fe(ft),fe(Je),Wd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(sa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Vt!==null&&(xh(Vt),Vt=null))),kh(t,e),We(e),null;case 5:qd(e);var i=_r(Qs.current);if(n=e.type,t!==null&&e.stateNode!=null)a0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return We(e),null}if(t=_r(Jt.current),sa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Gt]=e,r[Ks]=s,t=(e.mode&1)!==0,n){case"dialog":de("cancel",r),de("close",r);break;case"iframe":case"object":case"embed":de("load",r);break;case"video":case"audio":for(i=0;i<ms.length;i++)de(ms[i],r);break;case"source":de("error",r);break;case"img":case"image":case"link":de("error",r),de("load",r);break;case"details":de("toggle",r);break;case"input":bp(r,s),de("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},de("invalid",r);break;case"textarea":$p(r,s),de("invalid",r)}Yc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ia(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ia(r.textContent,a,t),i=["children",""+a]):$s.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&de("scroll",r)}switch(n){case"input":Yo(r),Mp(r,s,!0);break;case"textarea":Yo(r),Up(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=by(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Gt]=e,t[Ks]=r,o0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xc(n,r),n){case"dialog":de("cancel",t),de("close",t),i=r;break;case"iframe":case"object":case"embed":de("load",t),i=r;break;case"video":case"audio":for(i=0;i<ms.length;i++)de(ms[i],t);i=r;break;case"source":de("error",t),i=r;break;case"img":case"image":case"link":de("error",t),de("load",t),i=r;break;case"details":de("toggle",t),i=r;break;case"input":bp(t,r),i=qc(t,r),de("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=_e({},r,{value:void 0}),de("invalid",t);break;case"textarea":$p(t,r),i=Gc(t,r),de("invalid",t);break;default:i=r}Yc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Uy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&My(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Us(t,l):typeof l=="number"&&Us(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&($s.hasOwnProperty(s)?l!=null&&s==="onScroll"&&de("scroll",t):l!=null&&Sd(t,s,l,o))}switch(n){case"input":Yo(t),Mp(t,r,!1);break;case"textarea":Yo(t),Up(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Qa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)l0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=_r(Qs.current),_r(Jt.current),sa(e)){if(r=e.stateNode,n=e.memoizedProps,r[Gt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:ia(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ia(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=e,e.stateNode=r}return We(e),null;case 13:if(fe(ve),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&_t!==null&&(e.mode&1)!==0&&(e.flags&128)===0)Iv(),Ci(),e.flags|=98560,s=!1;else if(s=sa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(N(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(N(317));s[Gt]=e}else Ci(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else Vt!==null&&(xh(Vt),Vt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(ve.current&1)!==0?De===0&&(De=3):sf())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Ai(),kh(t,e),t===null&&qs(e.stateNode.containerInfo),We(e),null;case 10:return Bd(e.type._context),We(e),null;case 17:return pt(e.type)&&Ya(),We(e),null;case 19:if(fe(ve),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ls(s,!1);else{if(De!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=rl(t),o!==null){for(e.flags|=128,ls(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(ve,ve.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>Di&&(e.flags|=128,r=!0,ls(s,!1),e.lanes=4194304)}else{if(!r)if(t=rl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ls(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!me)return We(e),null}else 2*Ie()-s.renderingStartTime>Di&&n!==1073741824&&(e.flags|=128,r=!0,ls(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=ve.current,ue(ve,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(wt&1073741824)!==0&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function ik(t,e){switch($d(e),e.tag){case 1:return pt(e.type)&&Ya(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),fe(ft),fe(Je),Wd(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return qd(e),null;case 13:if(fe(ve),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));Ci()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return fe(ve),null;case 4:return Ai(),null;case 10:return Bd(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var la=!1,Ge=!1,sk=typeof WeakSet=="function"?WeakSet:Set,P=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Th(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var Nm=!1;function ok(t,e){if(ah=Wa,t=dv(),bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(lh={focusedElem:t,selectionRange:n},Wa=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,I=y.memoizedState,g=e.stateNode,f=g.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ut(e.type,_),I);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(v){Ee(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=Nm,Nm=!1,y}function As(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Th(e,n,s)}i=i.next}while(i!==r)}}function jl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ih(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u0(t){var e=t.alternate;e!==null&&(t.alternate=null,u0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Gt],delete e[Ks],delete e[hh],delete e[zS],delete e[jS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c0(t){return t.tag===5||t.tag===3||t.tag===4}function Am(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ch(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qa));else if(r!==4&&(t=t.child,t!==null))for(Ch(t,e,n),t=t.sibling;t!==null;)Ch(t,e,n),t=t.sibling}function Nh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var Ue=null,Ft=!1;function An(t,e,n){for(n=n.child;n!==null;)h0(t,e,n),n=n.sibling}function h0(t,e,n){if(Xt&&typeof Xt.onCommitFiberUnmount=="function")try{Xt.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Ge||ui(n,e);case 6:var r=Ue,i=Ft;Ue=null,An(t,e,n),Ue=r,Ft=i,Ue!==null&&(Ft?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(Ft?(t=Ue,n=n.stateNode,t.nodeType===8?ic(t.parentNode,n):t.nodeType===1&&ic(t,n),zs(t)):ic(Ue,n.stateNode));break;case 4:r=Ue,i=Ft,Ue=n.stateNode.containerInfo,Ft=!0,An(t,e,n),Ue=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&Th(n,e,o),i=i.next}while(i!==r)}An(t,e,n);break;case 1:if(!Ge&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ee(n,e,a)}An(t,e,n);break;case 21:An(t,e,n);break;case 22:n.mode&1?(Ge=(r=Ge)||n.memoizedState!==null,An(t,e,n),Ge=r):An(t,e,n);break;default:An(t,e,n)}}function Rm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sk),e.forEach(function(r){var i=mk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,Ft=!1;break e;case 3:Ue=a.stateNode.containerInfo,Ft=!0;break e;case 4:Ue=a.stateNode.containerInfo,Ft=!0;break e}a=a.return}if(Ue===null)throw Error(N(160));h0(s,o,i),Ue=null,Ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)d0(e,t),e=e.sibling}function d0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Wt(t),r&4){try{As(3,t,t.return),jl(3,t)}catch(_){Ee(t,t.return,_)}try{As(5,t,t.return)}catch(_){Ee(t,t.return,_)}}break;case 1:Mt(e,t),Wt(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(Mt(e,t),Wt(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{Us(i,"")}catch(_){Ee(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Py(i,s),Xc(a,o);var u=Xc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Uy(i,h):c==="dangerouslySetInnerHTML"?My(i,h):c==="children"?Us(i,h):Sd(i,c,h,u)}switch(a){case"input":Wc(i,s);break;case"textarea":Ly(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?fi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?fi(i,!!s.multiple,s.defaultValue,!0):fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ks]=s}catch(_){Ee(t,t.return,_)}}break;case 6:if(Mt(e,t),Wt(t),r&4){if(t.stateNode===null)throw Error(N(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ee(t,t.return,_)}}break;case 3:if(Mt(e,t),Wt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zs(e.containerInfo)}catch(_){Ee(t,t.return,_)}break;case 4:Mt(e,t),Wt(t);break;case 13:Mt(e,t),Wt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(tf=Ie())),r&4&&Rm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ge=(u=Ge)||c,Mt(e,t),Ge=u):Mt(e,t),Wt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(P=t,c=t.child;c!==null;){for(h=P=c;P!==null;){switch(d=P,m=d.child,d.tag){case 0:case 11:case 14:case 15:As(4,d,d.return);break;case 1:ui(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){Ee(r,n,_)}}break;case 5:ui(d,d.return);break;case 22:if(d.memoizedState!==null){xm(h);continue}}m!==null?(m.return=d,P=m):xm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=$y("display",o))}catch(_){Ee(t,t.return,_)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){Ee(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Mt(e,t),Wt(t),r&4&&Rm(t);break;case 21:break;default:Mt(e,t),Wt(t)}}function Wt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c0(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Us(i,""),r.flags&=-33);var s=Am(t);Nh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Am(t);Ch(t,a,o);break;default:throw Error(N(161))}}catch(l){Ee(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ak(t,e,n){P=t,f0(t)}function f0(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var i=P,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||la;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ge;a=la;var u=Ge;if(la=o,(Ge=l)&&!u)for(P=i;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Om(i):l!==null?(l.return=o,P=l):Om(i);for(;s!==null;)P=s,f0(s),s=s.sibling;P=i,la=a,Ge=u}Dm(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,P=s):Dm(t)}}function Dm(t){for(;P!==null;){var e=P;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Ge||jl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ge)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&fm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}fm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&zs(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}Ge||e.flags&512&&Ih(e)}catch(d){Ee(e,e.return,d)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function xm(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Om(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jl(4,e)}catch(l){Ee(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ee(e,i,l)}}var s=e.return;try{Ih(e)}catch(l){Ee(e,s,l)}break;case 5:var o=e.return;try{Ih(e)}catch(l){Ee(e,o,l)}}}catch(l){Ee(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var lk=Math.ceil,ol=Nn.ReactCurrentDispatcher,Zd=Nn.ReactCurrentOwner,xt=Nn.ReactCurrentBatchConfig,ne=0,Me=null,Ae=null,Be=0,wt=0,ci=ar(0),De=0,Zs=null,Lr=0,Hl=0,ef=0,Rs=null,ut=null,tf=0,Di=1/0,on=null,al=!1,Ah=null,Wn=null,ua=!1,Fn=null,ll=0,Ds=0,Rh=null,Da=-1,xa=0;function st(){return(ne&6)!==0?Ie():Da!==-1?Da:Da=Ie()}function Kn(t){return(t.mode&1)===0?1:(ne&2)!==0&&Be!==0?Be&-Be:qS.transition!==null?(xa===0&&(xa=Yy()),xa):(t=oe,t!==0||(t=window.event,t=t===void 0?16:rv(t.type)),t)}function zt(t,e,n,r){if(50<Ds)throw Ds=0,Rh=null,Error(N(185));vo(t,n,r),((ne&2)===0||t!==Me)&&(t===Me&&((ne&2)===0&&(Hl|=n),De===4&&Pn(t,Be)),mt(t,r),n===1&&ne===0&&(e.mode&1)===0&&(Di=Ie()+500,Vl&&lr()))}function mt(t,e){var n=t.callbackNode;qE(t,e);var r=qa(t,t===Me?Be:0);if(r===0)n!==null&&Bp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Bp(n),e===1)t.tag===0?HS(Pm.bind(null,t)):Sv(Pm.bind(null,t)),VS(function(){(ne&6)===0&&lr()}),n=null;else{switch(Xy(r)){case 1:n=Nd;break;case 4:n=Gy;break;case 16:n=Ha;break;case 536870912:n=Qy;break;default:n=Ha}n=E0(n,p0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p0(t,e){if(Da=-1,xa=0,(ne&6)!==0)throw Error(N(327));var n=t.callbackNode;if(vi()&&t.callbackNode!==n)return null;var r=qa(t,t===Me?Be:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=ul(t,r);else{e=r;var i=ne;ne|=2;var s=g0();(Me!==t||Be!==e)&&(on=null,Di=Ie()+500,Ir(t,e));do try{hk();break}catch(a){m0(t,a)}while(1);Vd(),ol.current=s,ne=i,Ae!==null?e=0:(Me=null,Be=0,e=De)}if(e!==0){if(e===2&&(i=nh(t),i!==0&&(r=i,e=Dh(t,i))),e===1)throw n=Zs,Ir(t,0),Pn(t,r),mt(t,Ie()),n;if(e===6)Pn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!uk(i)&&(e=ul(t,r),e===2&&(s=nh(t),s!==0&&(r=s,e=Dh(t,s))),e===1))throw n=Zs,Ir(t,0),Pn(t,r),mt(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:mr(t,ut,on);break;case 3:if(Pn(t,r),(r&130023424)===r&&(e=tf+500-Ie(),10<e)){if(qa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){st(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ch(mr.bind(null,t,ut,on),e);break}mr(t,ut,on);break;case 4:if(Pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*lk(r/1960))-r,10<r){t.timeoutHandle=ch(mr.bind(null,t,ut,on),r);break}mr(t,ut,on);break;case 5:mr(t,ut,on);break;default:throw Error(N(329))}}}return mt(t,Ie()),t.callbackNode===n?p0.bind(null,t):null}function Dh(t,e){var n=Rs;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=ul(t,e),t!==2&&(e=ut,ut=n,e!==null&&xh(e)),t}function xh(t){ut===null?ut=t:ut.push.apply(ut,t)}function uk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ht(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Pn(t,e){for(e&=~ef,e&=~Hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function Pm(t){if((ne&6)!==0)throw Error(N(327));vi();var e=qa(t,0);if((e&1)===0)return mt(t,Ie()),null;var n=ul(t,e);if(t.tag!==0&&n===2){var r=nh(t);r!==0&&(e=r,n=Dh(t,r))}if(n===1)throw n=Zs,Ir(t,0),Pn(t,e),mt(t,Ie()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,mr(t,ut,on),mt(t,Ie()),null}function nf(t,e){var n=ne;ne|=1;try{return t(e)}finally{ne=n,ne===0&&(Di=Ie()+500,Vl&&lr())}}function br(t){Fn!==null&&Fn.tag===0&&(ne&6)===0&&vi();var e=ne;ne|=1;var n=xt.transition,r=oe;try{if(xt.transition=null,oe=1,t)return t()}finally{oe=r,xt.transition=n,ne=e,(ne&6)===0&&lr()}}function rf(){wt=ci.current,fe(ci)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,FS(n)),Ae!==null)for(n=Ae.return;n!==null;){var r=n;switch($d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ya();break;case 3:Ai(),fe(ft),fe(Je),Wd();break;case 5:qd(r);break;case 4:Ai();break;case 13:fe(ve);break;case 19:fe(ve);break;case 10:Bd(r.type._context);break;case 22:case 23:rf()}n=n.return}if(Me=t,Ae=t=Gn(t.current,null),Be=wt=e,De=0,Zs=null,ef=Hl=Lr=0,ut=Rs=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wr=null}return t}function m0(t,e){do{var n=Ae;try{if(Vd(),Na.current=sl,il){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}il=!1}if(Pr=0,be=Re=we=null,Ns=!1,Ys=0,Zd.current=null,n===null||n.return===null){De=1,Zs=e,Ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if((c.mode&1)===0&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=_m(o);if(m!==null){m.flags&=-257,Em(m,o,a,s,e),m.mode&1&&wm(s,u,e),e=m,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if((e&1)===0){wm(s,u,e),sf();break e}l=Error(N(426))}}else if(me&&a.mode&1){var I=_m(o);if(I!==null){(I.flags&65536)===0&&(I.flags|=256),Em(I,o,a,s,e),Ud(Ri(l,a));break e}}s=l=Ri(l,a),De!==4&&(De=2),Rs===null?Rs=[s]:Rs.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=Jv(s,l,e);dm(s,g);break e;case 1:a=l;var f=s.type,p=s.stateNode;if((s.flags&128)===0&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Wn===null||!Wn.has(p)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=Zv(s,a,e);dm(s,v);break e}}s=s.return}while(s!==null)}v0(n)}catch(E){e=E,Ae===n&&n!==null&&(Ae=n=n.return);continue}break}while(1)}function g0(){var t=ol.current;return ol.current=sl,t===null?sl:t}function sf(){(De===0||De===3||De===2)&&(De=4),Me===null||(Lr&268435455)===0&&(Hl&268435455)===0||Pn(Me,Be)}function ul(t,e){var n=ne;ne|=2;var r=g0();(Me!==t||Be!==e)&&(on=null,Ir(t,e));do try{ck();break}catch(i){m0(t,i)}while(1);if(Vd(),ne=n,ol.current=r,Ae!==null)throw Error(N(261));return Me=null,Be=0,De}function ck(){for(;Ae!==null;)y0(Ae)}function hk(){for(;Ae!==null&&!ME();)y0(Ae)}function y0(t){var e=_0(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?v0(t):Ae=e,Zd.current=null}function v0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=rk(n,e,wt),n!==null){Ae=n;return}}else{if(n=ik(n,e),n!==null){n.flags&=32767,Ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{De=6,Ae=null;return}}if(e=e.sibling,e!==null){Ae=e;return}Ae=e=t}while(e!==null);De===0&&(De=5)}function mr(t,e,n){var r=oe,i=xt.transition;try{xt.transition=null,oe=1,dk(t,e,n,r)}finally{xt.transition=i,oe=r}return null}function dk(t,e,n,r){do vi();while(Fn!==null);if((ne&6)!==0)throw Error(N(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(WE(t,s),t===Me&&(Ae=Me=null,Be=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ua||(ua=!0,E0(Ha,function(){return vi(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=xt.transition,xt.transition=null;var o=oe;oe=1;var a=ne;ne|=4,Zd.current=null,ok(t,n),d0(n,t),OS(lh),Wa=!!ah,lh=ah=null,t.current=n,ak(n),$E(),ne=a,oe=o,xt.transition=s}else t.current=n;if(ua&&(ua=!1,Fn=t,ll=i),s=t.pendingLanes,s===0&&(Wn=null),VE(n.stateNode),mt(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(al)throw al=!1,t=Ah,Ah=null,t;return(ll&1)!==0&&t.tag!==0&&vi(),s=t.pendingLanes,(s&1)!==0?t===Rh?Ds++:(Ds=0,Rh=t):Ds=0,lr(),null}function vi(){if(Fn!==null){var t=Xy(ll),e=xt.transition,n=oe;try{if(xt.transition=null,oe=16>t?16:t,Fn===null)var r=!1;else{if(t=Fn,Fn=null,ll=0,(ne&6)!==0)throw Error(N(331));var i=ne;for(ne|=4,P=t.current;P!==null;){var s=P,o=s.child;if((P.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(P=u;P!==null;){var c=P;switch(c.tag){case 0:case 11:case 15:As(8,c,s)}var h=c.child;if(h!==null)h.return=c,P=h;else for(;P!==null;){c=P;var d=c.sibling,m=c.return;if(u0(c),c===u){P=null;break}if(d!==null){d.return=m,P=d;break}P=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var I=_.sibling;_.sibling=null,_=I}while(_!==null)}}P=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,P=o;else e:for(;P!==null;){if(s=P,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:As(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,P=g;break e}P=s.return}}var f=t.current;for(P=f;P!==null;){o=P;var p=o.child;if((o.subtreeFlags&2064)!==0&&p!==null)p.return=o,P=p;else e:for(o=f;P!==null;){if(a=P,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:jl(9,a)}}catch(E){Ee(a,a.return,E)}if(a===o){P=null;break e}var v=a.sibling;if(v!==null){v.return=a.return,P=v;break e}P=a.return}}if(ne=i,lr(),Xt&&typeof Xt.onPostCommitFiberRoot=="function")try{Xt.onPostCommitFiberRoot(bl,t)}catch{}r=!0}return r}finally{oe=n,xt.transition=e}}return!1}function Lm(t,e,n){e=Ri(n,e),e=Jv(t,e,1),t=qn(t,e,1),e=st(),t!==null&&(vo(t,1,e),mt(t,e))}function Ee(t,e,n){if(t.tag===3)Lm(t,t,n);else for(;e!==null;){if(e.tag===3){Lm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){t=Ri(n,t),t=Zv(e,t,1),e=qn(e,t,1),t=st(),e!==null&&(vo(e,1,t),mt(e,t));break}}e=e.return}}function fk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=st(),t.pingedLanes|=t.suspendedLanes&n,Me===t&&(Be&n)===n&&(De===4||De===3&&(Be&130023424)===Be&&500>Ie()-tf?Ir(t,0):ef|=n),mt(t,e)}function w0(t,e){e===0&&((t.mode&1)===0?e=1:(e=Zo,Zo<<=1,(Zo&130023424)===0&&(Zo=4194304)));var n=st();t=_n(t,e),t!==null&&(vo(t,e,n),mt(t,n))}function pk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),w0(t,n)}function mk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),w0(t,n)}var _0;_0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ft.current)ht=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return ht=!1,nk(t,e,n);ht=(t.flags&131072)!==0}else ht=!1,me&&(e.flags&1048576)!==0&&kv(e,Za,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ra(t,e),t=e.pendingProps;var i=Ii(e,Je.current);yi(e,n),i=Gd(null,e,r,t,i,n);var s=Qd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pt(r)?(s=!0,Xa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,jd(e),i.updater=Bl,e.stateNode=i,i._reactInternals=e,yh(e,r,t,n),e=_h(null,e,r,!0,s,n)):(e.tag=0,me&&s&&Md(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ra(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=yk(r),t=Ut(r,t),i){case 0:e=wh(null,e,r,t,n);break e;case 1:e=Tm(null,e,r,t,n);break e;case 11:e=Sm(null,e,r,t,n);break e;case 14:e=km(null,e,r,Ut(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),wh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Tm(t,e,r,i,n);case 3:e:{if(r0(e),t===null)throw Error(N(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Nv(t,e),nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ri(Error(N(423)),e),e=Im(t,e,r,n,i);break e}else if(r!==i){i=Ri(Error(N(424)),e),e=Im(t,e,r,n,i);break e}else for(_t=Hn(e.stateNode.containerInfo.firstChild),St=e,me=!0,Vt=null,n=xv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ci(),r===i){e=En(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return Ov(e),t===null&&ph(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,uh(r,i)?o=null:s!==null&&uh(r,s)&&(e.flags|=32),n0(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&ph(e),null;case 13:return i0(t,e,n);case 4:return Hd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ni(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Sm(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(el,r._currentValue),r._currentValue=o,s!==null)if(Ht(s.value,o)){if(s.children===i.children&&!ft.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=pn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),mh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,yi(e,n),i=Lt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),km(t,e,r,i,n);case 15:return e0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Ra(t,e),e.tag=1,pt(r)?(t=!0,Xa(e)):t=!1,yi(e,n),Rv(e,r,i),yh(e,r,i,n),_h(null,e,r,!0,t,n);case 19:return s0(t,e,n);case 22:return t0(t,e,n)}throw Error(N(156,e.tag))};function E0(t,e){return Ky(t,e)}function gk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new gk(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function yk(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Td)return 11;if(t===Id)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Oa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Cr(n.children,i,s,e);case kd:o=8,i|=8;break;case Bc:return t=Dt(12,n,e,i|2),t.elementType=Bc,t.lanes=s,t;case zc:return t=Dt(13,n,e,i),t.elementType=zc,t.lanes=s,t;case jc:return t=Dt(19,n,e,i),t.elementType=jc,t.lanes=s,t;case Dy:return ql(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ay:o=10;break e;case Ry:o=9;break e;case Td:o=11;break e;case Id:o=14;break e;case Dn:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function ql(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=Dy,t.lanes=n,t.stateNode={isHidden:!1},t}function dc(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function fc(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function vk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ku(0),this.expirationTimes=Ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ku(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function af(t,e,n,r,i,s,o,a,l){return t=new vk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},jd(s),t}function wk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S0(t){if(!t)return er;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(pt(n))return Ev(t,n,e)}return e}function k0(t,e,n,r,i,s,o,a,l){return t=af(n,r,!0,t,i,s,o,a,l),t.context=S0(null),n=t.current,r=st(),i=Kn(n),s=pn(r,i),s.callback=e!=null?e:null,qn(n,s,i),t.current.lanes=i,vo(t,i,r),mt(t,r),t}function Wl(t,e,n,r){var i=e.current,s=st(),o=Kn(i);return n=S0(n),e.context===null?e.context=n:e.pendingContext=n,e=pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(zt(t,i,o,s),Ca(t,i,o)),o}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lf(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function _k(){return null}var T0=typeof reportError=="function"?reportError:function(t){console.error(t)};function uf(t){this._internalRoot=t}Kl.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Wl(t,e,null,null)};Kl.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){Wl(null,t,null,null)}),e[wn]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&nv(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Gl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function Ek(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=cl(o);s.call(u)}}var o=k0(e,r,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[wn]=o.current,qs(t.nodeType===8?t.parentNode:t),br(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=cl(l);a.call(u)}}var l=af(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=l,t[wn]=l.current,qs(t.nodeType===8?t.parentNode:t),br(function(){Wl(e,l,n,r)}),l}function Ql(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=cl(o);a.call(l)}}Wl(e,o,t,i)}else o=Ek(n,e,t,i,r);return cl(o)}Jy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ps(e.pendingLanes);n!==0&&(Ad(e,n|1),mt(e,Ie()),(ne&6)===0&&(Di=Ie()+500,lr()))}break;case 13:br(function(){var r=_n(t,1);if(r!==null){var i=st();zt(r,t,1,i)}}),lf(t,1)}};Rd=function(t){if(t.tag===13){var e=_n(t,134217728);if(e!==null){var n=st();zt(e,t,134217728,n)}lf(t,134217728)}};Zy=function(t){if(t.tag===13){var e=Kn(t),n=_n(t,e);if(n!==null){var r=st();zt(n,t,e,r)}lf(t,e)}};ev=function(){return oe};tv=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Zc=function(t,e,n){switch(e){case"input":if(Wc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Fl(r);if(!i)throw Error(N(90));Oy(r),Wc(r,i)}}}break;case"textarea":Ly(t,n);break;case"select":e=n.value,e!=null&&fi(t,!!n.multiple,e,!1)}};By=nf;zy=br;var Sk={usingClientEntryPoint:!1,Events:[_o,ii,Fl,Fy,Vy,nf]},us={findFiberByHostInstance:vr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},kk={bundleType:us.bundleType,version:us.version,rendererPackageName:us.rendererPackageName,rendererConfig:us.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qy(t),t===null?null:t.stateNode},findFiberByHostInstance:us.findFiberByHostInstance||_k,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ca.isDisabled&&ca.supportsFiber)try{bl=ca.inject(kk),Xt=ca}catch{}}It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sk;It.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(N(200));return wk(t,e,null,n)};It.createRoot=function(t,e){if(!cf(t))throw Error(N(299));var n=!1,r="",i=T0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=af(t,1,!1,null,null,n,!1,r,i),t[wn]=e.current,qs(t.nodeType===8?t.parentNode:t),new uf(e)};It.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=qy(e),t=t===null?null:t.stateNode,t};It.flushSync=function(t){return br(t)};It.hydrate=function(t,e,n){if(!Gl(e))throw Error(N(200));return Ql(null,t,e,!0,n)};It.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=T0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=k0(e,null,t,1,n!=null?n:null,i,!1,s,o),t[wn]=e.current,qs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Kl(e)};It.render=function(t,e,n){if(!Gl(e))throw Error(N(200));return Ql(null,t,e,!1,n)};It.unmountComponentAtNode=function(t){if(!Gl(t))throw Error(N(40));return t._reactRootContainer?(br(function(){Ql(null,null,t,!1,function(){t._reactRootContainer=null,t[wn]=null})}),!0):!1};It.unstable_batchedUpdates=nf;It.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Gl(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return Ql(t,e,n,!1,r)};It.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=It})(ky);var $m=ky.exports;Fc.createRoot=$m.createRoot,Fc.hydrateRoot=$m.hydrateRoot;const Tk="/Habit-Tracker/assets/rare_pepe.e14599b7.jpg",Ik="data:image/gif;base64,R0lGODlhZABkAPIAAGGz/wICAv+uyf///9br/2xkc/vP0c+HiCH/C05FVFNDQVBFMi4wAwEAAAAh+QQEAgD/ACwAAAAAZABkAAAD/zi63P4wykmrvTjrzbv/YCiOZGmeaKqubOu+cCzPdD0GOG7vQ1AUh0OAR8P9gMEhEeY7BpPLV/P3hEZZU2pVeU1lkduu9+isCsWnLziMzuRyDbXCfJa+ue678aiXM554KntkcBV3ZIiJhD8PBz0uAQeKP4UPOZOYim+WkFWYlT1qmaN8oIFedJKab6StmYWnKJGpqomDrri2Q7FptEEDk7e5w6CCtAOOwMPLozots79PDczUwbwm0MkQ1dylz2bb3eLOxr/h4uPXIjjScegFosvkshDx1MLM873u76XWrvpKzLPXjSBBQiu4EFRQjZWmVgEF4iPTw1auXYf8NUu4sP/ioouW9kwkpA7EyAIKhB20FUHPxjGTFqhZiaikTIOCMKV8CNKCQZsd4snkiQtPsZuvYCJiIOqkppubHJwEukHozn8AU/ax9ElWzKurimrdKjWY10RMrYWCOFYP16dpFKXVBRVn26hxmp5dOrRmrJED8b71GxctWG+hAn+hWhauQLmH4WG8kxchB73YIHukNNntXMlBHZMQ1Rd0Ys9zGRtYvToypcJ8Nyvs85fXKda4N1t+bLhiJdr1JATCzVo35zR+EuelXJUB8eIzGbvpbftoS6nOnxswDk/pEZlB42DPnpu79OmGz4MXz/QBcdfqL+DT2rw9c0MsvTNKGaH4eP7/oZGUU2y3aZcXgAHywVF6DWjX2nIm1YQFg+Q9511EEvE1nINKYYjNF6FU+B5sHiJH0SMiPvghZ/F5AGIs5WWIGBNZoBjDIS1+cIuNHJWVo4uSffejIdWVeNYgPI5WonUJaYTSbILJYiRvkjnUUpQ3DDmdYlqaZIdtRExpUpdYkHldG1KZ+V8U6ohZ3xUluYmBnExQoGaSbNpp5pR3+mTTnoYUYec6f9ZAFn2ETtAneizSSaRwPMyUhnCLMqogNpCGSZiSVy4hKachVaqBShKliaehn65j6qlFqESmPrCwic+rRpkmalWzhkCOEQrBad6QTVzyGoJhcmdaVWat56mxE91dliyxkTLbYjyn3OoGs81OkAAAIfkEBAIA/wAsKgA+AAEAAQAAAgJEAQAh+QQFAgADACwqADoACgAGAAACD5xvgRiyJppiIr6ADXinAAAh+QQFAgADACwqAD0ACgAFAAACD5w/IYEmHwA4ag2JArsNFQAh+QQFAgABACwpAEAAAwADAAACA4QfVgAh+QQFAgAEACwpADoACwALAAADHki6O/wkwElrtEEExzLRHKBk5CJGQioBJ6pJULANCQAh+QQEAgD/ACwqADoADwALAAACK8yOYTmbIZQ6rsFYp711AAldgoAcQDOKUolG4/t6LcYZwKnAsHluK9tjCQsAIfkEBAIA/wAsJwA6ABIADwAAAz84GhvuasXxhBXssRiu3dPkfBgYUl2JnQpBeSvLkZY8uGlaT0SP06WNz4UCnnoc3YNHTOoEPNsoZpvsqicoKwEAIfkEBQIAAAAsIgAzABYAFgAAA2QYuqygI8rBhL1izbmwhxulXE1gadt4etkZUqcZZ3IQ1pho1unqSrKfqvUDlmAYmw34EpGUy+XrkYygmlQLpTndCbYDAlcCALQiYnR6CrCqCXA49hWvx8eTOp4r3zf7foFXgREJACH5BAUCAAAALCIAKQAYAB4AAAOQWLoV/iIKB6q9VmpJsb9BBEVfGXJnWW6noH6OmL4fR9Ke7XqEqrUBTM+kmzwChIFyEFBYgKhHcsl0VooOQpaqdCx1wQpySg1QdReCmluGhpNqMjtmnFTgciYVZL/H9z5hFQNwgE8vBnhKOBiJa0mMjYmEQ5EVBpOElhaYeQObjmyLkYSin5uehpamrK2ur60JADs=",Ck="/Habit-Tracker/assets/science.d9cb0490.png",Nk="/Habit-Tracker/assets/k.c899fee7.png";function Mr(t,e){const n=t.valueOf();let r,i;return e.from==="free"?r=Number.NEGATIVE_INFINITY:r=new Date(e.from).valueOf(),e.to==="free"?i=Number.POSITIVE_INFINITY:i=new Date(e.to).valueOf(),r<=n&&n<i}let So=[{name:"0 push up sets, this is a string",description:"this is a string, there are many like it, but this one is mine",id:"123",difficulty:0,tags:["one","three","four","two","five","six","seven","eight"],image:Tk,todos:[{name:null,id:"0_zero",range:{from:"free",to:"free"},dates:["2022-08-05","2022-08-06","2022-08-15","2022-08-20","2022-08-24"]}]},{name:"1 push up sets, this is a string",description:"Sets of push ups, what else is there to say?",id:"456",difficulty:2,tags:["one","four"],image:Ik,todos:[{name:null,id:"0_zero",range:{from:"free",to:"free"},dates:["2022-08-05","2022-08-06","2022-08-15","2022-08-20","2022-08-24"]},{name:"first set, 25 reps",id:"1_one",range:{from:"2022-08-25",to:"free"},dates:["2022-08-25","2022-08-26","2022-08-27","2022-08-28","2022-08-29","2022-09-03","2022-09-04","2022-09-06","2022-09-07","2022-09-08","2022-09-09"]},{name:"second set, 25 reps",id:"1_two",range:{from:"2022-08-25",to:"free"},dates:["2022-08-25","2022-08-26","2022-08-27","2022-08-28","2022-08-29","2022-09-03","2022-09-04","2022-09-06","2022-09-07","2022-09-08","2022-09-09"]}]},{name:"2 read a book for at least 20 minutes",description:"I want to get into the habit of reading more.",id:"789",difficulty:1,tags:["three","four","five","six","seven","eight"],image:Ck,todos:[{name:null,id:"0_zero",range:{from:"free",to:"free"},dates:["2022-08-05","2022-08-06","2022-08-15","2022-08-20","2022-08-24"]},{name:"first set, 25 reps",id:"2_one",range:{from:"2022-08-25",to:"free"},dates:["2022-08-25","2022-08-26","2022-08-27","2022-08-28","2022-08-29","2022-09-03","2022-09-04","2022-09-06","2022-09-07","2022-09-08","2022-09-09"]},{name:"second set, 25 reps",id:"2_two",range:{from:"2022-08-25",to:"free"},dates:["2022-08-25","2022-08-26","2022-08-27","2022-08-28","2022-08-29","2022-09-03","2022-09-04","2022-09-06","2022-09-07","2022-09-08","2022-09-09"]},{name:"third set, 15 reps or more",id:"2_three",range:{from:"2022-09-03",to:"free"},dates:["2022-09-03","2022-09-04","2022-09-06","2022-09-07","2022-09-09"]},{name:"fourth set, 15 reps or more, preferably many more, this is a string",id:"2_four",range:{from:"2022-09-03",to:"free"},dates:["2022-09-03","2022-09-04","2022-09-06","2022-09-07","2022-09-09"]}]},{name:"3 push up sets, this is a string",description:"Find a way to stuff it all in one basket so that at the end we may all come and find it.",id:"101112",difficulty:0,tags:["church","exercise","school","cooking"],image:Nk,todos:[{name:null,id:"0_zero",range:{from:"free",to:"free"},dates:["2022-08-05","2022-08-06","2022-08-15","2022-08-20","2022-08-24"]},{name:"third set, 15 reps or more",id:"3_three",range:{from:"2022-09-03",to:"free"},dates:["2022-09-03","2022-09-04","2022-09-06","2022-09-07","2022-09-09"]},{name:"fourth set, 15 reps or more",id:"3_four",range:{from:"2022-09-03",to:"free"},dates:["2022-09-03","2022-09-04","2022-09-06","2022-09-07","2022-09-09"]}]}];function Ak(t,e,n){const i=So.find(s=>s.id===t).todos.find(s=>s.id===e);i.range=n,i.dates=i.dates.filter(s=>Mr(new Date(s),n))}function Rk(t,e){const n=So.find(r=>r.id===t);n.todos[0].dates=[],n.todos.push(e)}function Dk(t,e){So.find(r=>r.id===t).todos.push(e)}function xk(t,e){const n=So.find(r=>r.id===t);n.todos=n.todos.filter(r=>r.id!==e)}function Ok(t,e,n){const i=So.find(s=>s.id===t).todos.find(s=>s.id===e);i.name=n}/**
 * @remix-run/router v1.0.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hl(){return hl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hl.apply(this,arguments)}var Vn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vn||(Vn={}));const Um="popstate";function Pk(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Oh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ph(i)}return bk(e,n,null,t)}function Lk(){return Math.random().toString(36).substr(2,8)}function Fm(t){return{usr:t.state,key:t.key}}function Oh(t,e,n,r){return n===void 0&&(n=null),hl({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?zi(e):e,{state:n,key:e&&e.key||r||Lk()})}function Ph(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function zi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function bk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Vn.Pop,l=null;function u(){a=Vn.Pop,l&&l({action:a,location:d.location})}function c(m,y){a=Vn.Push;let _=Oh(d.location,m,y);n&&n(_,m);let I=Fm(_),g=d.createHref(_);try{o.pushState(I,"",g)}catch{i.location.assign(g)}s&&l&&l({action:a,location:_})}function h(m,y){a=Vn.Replace;let _=Oh(d.location,m,y);n&&n(_,m);let I=Fm(_),g=d.createHref(_);o.replaceState(I,"",g),s&&l&&l({action:a,location:_})}let d={get action(){return a},get location(){return t(i,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Um,u),l=m,()=>{i.removeEventListener(Um,u),l=null}},createHref(m){return e(i,m)},push:c,replace:h,go(m){return o.go(m)}};return d}var Vm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vm||(Vm={}));function Mk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?zi(e):e,i=C0(r.pathname||"/",n);if(i==null)return null;let s=I0(t);$k(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=Wk(s[a],i);return o}function I0(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(yt(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let a=Qn([r,o.relativePath]),l=n.concat(o);i.children&&i.children.length>0&&(yt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+a+'".')),I0(i.children,e,l,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:Hk(a,i.index),routesMeta:l})}),e}function $k(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:qk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Uk=/^:\w+$/,Fk=3,Vk=2,Bk=1,zk=10,jk=-2,Bm=t=>t==="*";function Hk(t,e){let n=t.split("/"),r=n.length;return n.some(Bm)&&(r+=jk),e&&(r+=Vk),n.filter(i=>!Bm(i)).reduce((i,s)=>i+(Uk.test(s)?Fk:s===""?Bk:zk),r)}function qk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Wk(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Kk({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Qn([i,c.pathname]),pathnameBase:Jk(Qn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Qn([i,c.pathnameBase]))}return s}function Kk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Gk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=Qk(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function Gk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),N0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:(?=[@.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function Qk(t,e){try{return decodeURIComponent(t)}catch(n){return N0(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function C0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function yt(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function N0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Yk(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?zi(t):t;return{pathname:n?n.startsWith("/")?n:Xk(n,e):e,search:Zk(r),hash:eT(i)}}function Xk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function A0(t,e,n,r){r===void 0&&(r=!1);let i=typeof t=="string"?zi(t):hl({},t),s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=Yk(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Qn=t=>t.join("/").replace(/\/\/+/g,"/"),Jk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Zk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,eT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class tT{constructor(e,n,r){this.status=e,this.statusText=n||"",this.data=r}}function nT(t){return t instanceof tT}var Yl={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rT=O.exports,iT=Symbol.for("react.element"),sT=Symbol.for("react.fragment"),oT=Object.prototype.hasOwnProperty,aT=rT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lT={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)oT.call(e,r)&&!lT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iT,type:t,key:s,ref:o,props:i,_owner:aT.current}}Xl.Fragment=sT;Xl.jsx=R0;Xl.jsxs=R0;(function(t){t.exports=Xl})(Yl);const uT=Yl.exports.Fragment,w=Yl.exports.jsx,L=Yl.exports.jsxs;/**
 * React Router v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lh(){return Lh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Lh.apply(this,arguments)}function cT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const hT=typeof Object.is=="function"?Object.is:cT,{useState:dT,useEffect:fT,useLayoutEffect:pT,useDebugValue:mT}=Uc;function gT(t,e,n){const r=e(),[{inst:i},s]=dT({inst:{value:r,getSnapshot:e}});return pT(()=>{i.value=r,i.getSnapshot=e,pc(i)&&s({inst:i})},[t,r,e]),fT(()=>(pc(i)&&s({inst:i}),t(()=>{pc(i)&&s({inst:i})})),[t]),mT(r),r}function pc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!hT(n,r)}catch{return!0}}function yT(t,e,n){return e()}const vT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wT=!vT,_T=wT?yT:gT;"useSyncExternalStore"in Uc&&(t=>t.useSyncExternalStore)(Uc);const ET=O.exports.createContext(null),ST=O.exports.createContext(null),D0=O.exports.createContext(null),hf=O.exports.createContext(null),Jl=O.exports.createContext(null),ko=O.exports.createContext({outlet:null,matches:[]}),x0=O.exports.createContext(null);function kT(t,e){let{relative:n}=e===void 0?{}:e;To()||yt(!1);let{basename:r,navigator:i}=O.exports.useContext(hf),{hash:s,pathname:o,search:a}=P0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Qn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function To(){return O.exports.useContext(Jl)!=null}function Zl(){return To()||yt(!1),O.exports.useContext(Jl).location}function O0(t){return t.filter((e,n)=>n===0||!e.route.index&&e.pathnameBase!==t[n-1].pathnameBase)}function TT(){To()||yt(!1);let{basename:t,navigator:e}=O.exports.useContext(hf),{matches:n}=O.exports.useContext(ko),{pathname:r}=Zl(),i=JSON.stringify(O0(n).map(a=>a.pathnameBase)),s=O.exports.useRef(!1);return O.exports.useEffect(()=>{s.current=!0}),O.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=A0(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Qn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function P0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=O.exports.useContext(ko),{pathname:i}=Zl(),s=JSON.stringify(O0(r).map(o=>o.pathnameBase));return O.exports.useMemo(()=>A0(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function IT(t,e){To()||yt(!1);let n=O.exports.useContext(D0),{matches:r}=O.exports.useContext(ko),i=r[r.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let a=Zl(),l;if(e){var u;let y=typeof e=="string"?zi(e):e;o==="/"||((u=y.pathname)==null?void 0:u.startsWith(o))||yt(!1),l=y}else l=a;let c=l.pathname||"/",h=o==="/"?c:c.slice(o.length)||"/",d=Mk(t,{pathname:h}),m=RT(d&&d.map(y=>Object.assign({},y,{params:Object.assign({},s,y.params),pathname:Qn([o,y.pathname]),pathnameBase:y.pathnameBase==="/"?o:Qn([o,y.pathnameBase])})),r,n||void 0);return e?w(Jl.Provider,{value:{location:Lh({pathname:"/",search:"",hash:"",state:null,key:"default"},l),navigationType:Vn.Pop},children:m}):m}function CT(){let t=xT(),e=nT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return L(uT,{children:[w("h2",{children:"Unhandled Thrown Error!"}),w("h3",{style:{fontStyle:"italic"},children:e}),n?w("pre",{style:i,children:n}):null,w("p",{children:"\u{1F4BF} Hey developer \u{1F44B}"}),L("p",{children:["You can provide a way better UX than this when your app throws errors by providing your own\xA0",w("code",{style:s,children:"errorElement"})," props on\xA0",w("code",{style:s,children:"<Route>"})]})]})}class NT extends O.exports.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?w(x0.Provider,{value:this.state.error,children:this.props.component}):this.props.children}}function AT(t){let{routeContext:e,match:n,children:r}=t,i=O.exports.useContext(ET);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),w(ko.Provider,{value:e,children:r})}function RT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||yt(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||w(CT,{}):null,c=()=>w(AT,{match:o,routeContext:{outlet:s,matches:e.concat(r.slice(0,a+1))},children:l?u:o.route.element!==void 0?o.route.element:s});return n&&(o.route.errorElement||a===0)?w(NT,{location:n.location,component:u,error:l,children:c()}):c()},null)}var bh;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(bh||(bh={}));function DT(t){let e=O.exports.useContext(D0);return e||yt(!1),e}function xT(){var t;let e=O.exports.useContext(x0),n=DT(bh.UseRouteError),r=O.exports.useContext(ko),i=r.matches[r.matches.length-1];return e||(r||yt(!1),i.route.id||yt(!1),(t=n.errors)==null?void 0:t[i.route.id])}function gs(t){yt(!1)}function OT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vn.Pop,navigator:s,static:o=!1}=t;To()&&yt(!1);let a=e.replace(/^\/*/,"/"),l=O.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=zi(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,y=O.exports.useMemo(()=>{let _=C0(u,a);return _==null?null:{pathname:_,search:c,hash:h,state:d,key:m}},[a,u,c,h,d,m]);return y==null?null:w(hf.Provider,{value:l,children:w(Jl.Provider,{children:n,value:{location:y,navigationType:i}})})}function PT(t){let{children:e,location:n}=t,r=O.exports.useContext(ST),i=r&&!e?r.router.routes:Mh(e);return IT(i,n)}var zm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(zm||(zm={}));new Promise(()=>{});function Mh(t,e){e===void 0&&(e=[]);let n=[];return O.exports.Children.forEach(t,(r,i)=>{if(!O.exports.isValidElement(r))return;if(r.type===O.exports.Fragment){n.push.apply(n,Mh(r.props.children,e));return}r.type!==gs&&yt(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Mh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function LT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function MT(t,e){return t.button===0&&(!e||e==="_self")&&!bT(t)}const $T=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function UT(t){let{basename:e,children:n,window:r}=t,i=O.exports.useRef();i.current==null&&(i.current=Pk({window:r,v5Compat:!0}));let s=i.current,[o,a]=O.exports.useState({action:s.action,location:s.location});return O.exports.useLayoutEffect(()=>s.listen(a),[s]),w(OT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const L0=O.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=LT(e,$T),d=kT(u,{relative:i}),m=FT(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function y(_){r&&r(_),_.defaultPrevented||m(_)}return w("a",{...h,href:d,onClick:s?r:y,ref:n,target:l})});function FT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=TT(),l=Zl(),u=P0(t,{relative:o});return O.exports.useCallback(c=>{if(MT(c,n)){c.preventDefault();let h=r!==void 0?r:Ph(l)===Ph(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}function VT(){return w("div",{className:"info",children:"info"})}function BT(t,e){return new Date(t.valueOf()-e*864e5)}function zT(t){return new Date(t.valueOf()-864e5*(t.getDay()+1))}function jT(t,e){let i;return t===0?i=new Date(new Date().valueOf()+864e5):(i=zT(new Date(new Date().valueOf()-t*e*7*864e5)),i=new Date(i.valueOf()+864e5)),i}function b0({mainContent:t,toolContent:e,state:n,id:r,currentActiveCell:i,activate_cell:s}){return L("div",{className:"cell-container",children:[w("p",{className:`main-content ${n}`,onClick:()=>s(r),children:t}),L("div",{className:`tooltip ${r===i?"active":"inactive"}`,children:[w("span",{className:"tip"}),w("div",{className:"content",children:e})]})]})}function M0({habitId:t,cell:e,update:n}){const{date:r,tasks:i,stringDate:s}=e;return L("div",{className:"content",children:[w("p",{className:"date",children:e.date}),w("ul",{children:i.map(o=>L("li",{className:"cell-input",children:[w("input",{className:"custom-checkbox",id:`task-${o.id}-${r}`,type:"checkbox",checked:o.checked,onChange:()=>n(t,o.refId,s)}),w("label",{htmlFor:`task-${o.id}-${r}`,children:o.name?o.name:o.checked?"Uncheck!":"Check!"})]},`item-${o.id}-${r}`))})]},`cell-${r}`)}function HT({update:t,habit:e}){const[n,r]=O.exports.useState(20),[i,s]=O.exports.useState(0),[o,a]=O.exports.useState("");let l;function u(h,d){const _=jT(d,h),I=(h+(d!==0))*7+_.getDay()*(d===0),g=BT(_,I),f=[];let p;p=g;for(let v=0;v<I;v++){const E=`${p.getFullYear()}-${String(p.getMonth()+1).padStart(2,"0")}-${String(p.getDate()).padStart(2,"0")}`,S={stringDate:E,date:p.toDateString(),number:p.getDate()};S.tasks=[];for(let k of e.todos){let T;T=!0,k.name===null&&e.todos.some(b=>!!(b.name!==null&&Mr(p,b.range)))&&(T=!1),T&&Mr(p,k.range)&&S.tasks.push({refId:k.refId,id:k.id,checked:k.dates.includes(E),name:k.name})}S.tasks.every(k=>k.checked)?S.state="blue":S.tasks.some(k=>k.checked)?S.state="pink":S.state="black",f.push(S),p=new Date(p.valueOf()+864e5)}return f}function c(h){a(o===h?"":h)}return l=u(n,i),O.exports.useEffect(()=>{function h(){window.innerWidth<600?r(8):r(20)}return h(),window.addEventListener("resize",h),()=>window.removeEventListener("resize",h)},[]),O.exports.useEffect(()=>{function h(d){if(d.target.closest(".tooltip"))return;d.target.closest(".cell-container")||a("")}return document.addEventListener("click",h),()=>document.removeEventListener("click",h)}),w("div",{className:"grid",children:L("div",{className:"days",children:[L("div",{className:"names",children:[w("p",{children:"Sun"}),w("p",{children:"Mon"}),w("p",{children:"Tue"}),w("p",{children:"Wed"}),w("p",{children:"Thu"}),w("p",{children:"Fri"}),w("p",{children:"Sat"})]}),L("div",{className:"cells",children:[w("div",{className:"cells-container",children:l.map(h=>w(b0,{mainContent:h.number,toolContent:w(M0,{habitId:e.refId,cell:h,update:t}),state:h.state,id:h.stringDate,currentActiveCell:o,activate_cell:c},h.date))}),L("div",{className:"navigation",children:[w("button",{className:"left",onClick:()=>s(h=>h+1)}),w("button",{className:`right ${i?"":"disabled"}`,onClick:()=>{i>0&&s(h=>h-1)}})]})]})]})})}function $0({src:t,alt:e,left:n,right:r}){return L("div",{className:"image",children:[w("span",{className:"background",style:{backgroundImage:`url(${t})`}}),w("img",{src:t,alt:e}),n,r]})}function U0({difficulty:t,update:e}){return L("div",{className:"difficulty-controls",children:[L("div",{className:"labels",children:[w("label",{htmlFor:"hard",children:"Hard"}),w("label",{htmlFor:"medium",children:"Medium"}),w("label",{htmlFor:"easy",children:"Easy"})]}),L("div",{className:"boxes",children:[w("input",{type:"checkbox",id:"hard",checked:t===2,onChange:e}),w("input",{type:"checkbox",id:"medium",checked:t>=1,onChange:e}),w("input",{type:"checkbox",id:"easy",checked:!0,onChange:e})]})]})}function F0({add_tag:t,tags:e,remove_tag:n}){const r=O.exports.useRef(null);function i(){const s=r.current.value.trim();s&&!e.includes(s)&&t(s),r.current.value=""}return L("div",{className:"tags-content",children:[L("div",{className:"tag-input",children:[w("input",{type:"text",ref:r}),w("button",{className:"add-tag",type:"button",onClick:i,children:"#Add tag"})]}),w("div",{className:"tags",children:e.map(s=>L("div",{className:"tag",children:[w("button",{type:"button",className:"remove-tag",onClick:()=>n(s)}),w("p",{children:s})]},s))})]})}function $h({checked:t,change:e,left:n,right:r,changeOnLabelClick:i}){function s(a){e(a.target.checked)}function o(a){i&&e(a)}return L("div",{className:"logic-toggle",children:[w("span",{onClick:()=>o(!1),children:n}),L("span",{className:"track",children:[w("input",{type:"checkbox",checked:t,onChange:s}),w("span",{className:"ball"})]}),w("span",{onClick:()=>o(!0),children:r})]})}function V0({todo:t,delete_todo:e,change_name:n,toggle_range:r,change_date:i}){const[s,o]=O.exports.useState(t.name),[a,l]=O.exports.useState(!1),u=O.exports.useRef(null);function c(m){o(m.target.value)}function h(){const m=s.trim();m&&m!==t.name?(n(t.id,m),o(m)):o(t.name),l(!1)}function d(){l(!0),setTimeout(()=>u.current.focus(),33)}return L("div",{className:"todo",children:[w("button",{className:"delete-todo",type:"button",onClick:()=>e(t.id)}),L("div",{className:"todo-name",children:[w("p",{className:"label",children:"Name: "}),a?L("div",{className:"container-of-change",children:[w("input",{type:"text",value:s,onChange:c,ref:u}),L("div",{className:"controls-of-change",children:[w("button",{type:"button",className:"save",onClick:h,children:"Save"}),w("button",{type:"button",className:"cancel",onClick:()=>l(!1),children:"Cancel"})]})]}):w("p",{className:"name",onClick:d,children:t.name})]}),L("div",{className:"range",children:[w("div",{className:"range-label",children:"Range:"}),L("div",{className:"range-controls",children:[L("div",{className:"from section",children:[w("p",{className:"from-label",children:"From"}),w($h,{checked:t.range.from!=="free",change:()=>r(t.id,t.range.from!=="free","from"),left:"-\u221E",right:w("input",{type:"date",value:t.range.from==="free"?"":t.range.from,onChange:m=>i(t.id,"from",m.target.value),disabled:t.range.from==="free"}),changeOnLabelClick:!1})]}),L("div",{className:"to section",children:[w("p",{className:"to-label",children:"To"}),w($h,{checked:t.range.to==="free",change:()=>r(t.id,t.range.to==="free","to"),left:w("input",{type:"date",value:t.range.to==="free"?"":t.range.to,onChange:m=>i(t.id,"to",m.target.value),disabled:t.range.to==="free"}),right:"\u221E",changeOnLabelClick:!1})]})]})]})]})}function Uh({content:t,close:e,shown:n}){function r(i){i.target.closest(".screen-content")===null&&e()}return L("div",{className:`slide-screen ${n?"shown":"hidden"}`,onClick:r,children:[w("button",{className:"close-screen",onClick:e}),w("div",{className:"screen-content",children:t})]})}const qT=["image/apng","image/bmp","image/gif","image/jpeg","image/pjpeg","image/png","image/svg+xml","image/tiff","image/webp","image/x-icon"];function B0(t){return qT.includes(t.type)}function WT({habit:t,update_cell:e,update_detail:n,change_image:r,delete_habit:i,toggle_habit_range:s,add_todo_to_habit:o,delete_todo:a,rename_todo:l}){const[u,c]=O.exports.useState(!1),[h,d]=O.exports.useState(!1),[m,y]=O.exports.useState(t.name),_=O.exports.useRef(null),[I,g]=O.exports.useState(!1),[f,p]=O.exports.useState(t.description),v=O.exports.useRef(null),[E,S]=O.exports.useState(!1);function k(H){const re=H.target.id;let le;re==="hard"?le=2:re==="medium"?le=1:le=0,n(t.refId,{label:"difficulty",value:le})}function T(H){t.tags.includes(H)||n(t.refId,{label:"tags",value:[...t.tags,H]})}function b(H){n(t.refId,{label:"tags",value:t.tags.filter(re=>re!==H)})}function x(){c(!1)}function te(H){const re=H.target.files[0];B0(re)&&r(t,re)}function pe(H){y(H.target.value)}function $(){const H=m.trim();H&&H!==t.name?(n(t.refId,{label:"name",value:H}),y(H)):y(t.name),d(!1)}function Y(){d(!0),setTimeout(()=>_.current.focus(),33)}function D(H){p(H.target.value)}function B(){g(!0),setTimeout(()=>v.current.focus(),33)}function G(){const H=f.trim();H&&H!==t.description?(n(t.refId,{label:"description",value:H}),p(H)):p(t.description),g(!1)}function R(){S(!1)}function U(H,re,le){const{todos:Xi}=t,$u=Xi.findIndex(qt=>qt.id===H),Ji=Xi[$u],vt={...Ji.range};let dr;if(dr=null,le==="to"&&(re=!re),re)vt[le]="free";else{const qt=new Date,Zi=qt.valueOf(),Uu=24*1e3*3600,Ko=le==="from"?"to":"from",es=new Date(new Date(vt[Ko]).valueOf()+Uu).valueOf(),ts=le==="from"?(Vu,Bu)=>Vu>=Bu:(Vu,Bu)=>Vu<=Bu;let Fu;ts(Zi,es)?Fu=vt[Ko]:Fu=`${qt.getFullYear()}-${qt.getMonth()+1}-${qt.getDate()}`,vt[le]=Fu}ae(vt)&&(dr=t.id),s(t.id,Ji.id,vt,dr)}function j(H,re,le){const{todos:Xi}=t,$u=Xi.findIndex(Zi=>Zi.id===H),Ji=Xi[$u],vt={...Ji.range},dr=re==="from"?"to":"from";let qt;if(qt=null,vt[dr]!=="free"){const Zi=re==="from"?(es,ts)=>es<=ts:(es,ts)=>es>=ts,Uu=new Date(le),Ko=new Date(vt[dr]).valueOf();Zi(Ko,Uu)&&(le=vt[dr])}vt[re]=le,ae(vt)&&(qt=t.id),s(t.id,Ji.id,vt,qt)}function ae(H){return!!t.todos[0].dates.some(le=>Mr(new Date(le),H))}function he(){const H=new Date,re=`${H.getFullYear()}-${String(H.getMonth()+1).padStart(2,"0")}-${String(H.getDate()).padStart(2,"0")}`,le={name:`TODO ${t.todos.length}`,range:{from:re,to:"free"},id:Math.random().toString(16).slice(-10),dates:[]};o(t.id,le)}function Nt(H){a(t.id,H)}function tt(H,re){l(t.id,H,re)}return L("div",{className:"habit",children:[w(Uh,{content:L("div",{className:"delete-message",children:[w("p",{children:"Do you really wish to delete"}),w("p",{className:"element-name",children:t.name}),L("div",{className:"delete-controls",children:[w("button",{className:"delete",onClick:()=>i(t.refId),children:"Delete"}),w("button",{className:"cancel",onClick:R,children:"Cancel"})]})]}),shown:E,close:R}),w("button",{className:"delete-habit",onClick:()=>S(!0)}),w(Uh,{content:w("img",{src:t.image,className:"image-on-display",alt:"habit image"}),shown:u,close:x}),L("div",{className:"info",children:[w($0,{src:t.image,alt:t.name,left:L("label",{htmlFor:"image-input",className:"image-label-input",children:[w("input",{type:"file",id:"image-input",onChange:te}),w("span",{className:"icon"})]}),right:w("button",{className:"expand",onClick:()=>c(!0)})}),L("div",{className:"name-and-description",children:[w("div",{className:"name-wrapper",children:h?L("div",{className:"name-change",children:[w("input",{type:"text",value:m,onChange:pe,ref:_}),w("button",{className:"button-of-change",onClick:$,children:"Save"})]}):w("p",{className:"name",onClick:Y,children:t.name})}),w("div",{className:"description-wrapper",children:I?L("div",{className:"description-chan",children:[w("textarea",{value:f,onChange:D,ref:v}),w("button",{className:"button-of-change",onClick:G,children:"Save"})]}):w("p",{className:"description",onClick:B,children:t.description})})]}),L("div",{className:"settings",children:[w(U0,{difficulty:t.difficulty,update:k}),w(F0,{add_tag:T,tags:t.tags,remove_tag:b})]})]}),w(HT,{habit:t,update:e}),L("div",{className:"todos",children:[w("p",{className:"title",children:"TODO"}),w("button",{className:"add-todo",onClick:he}),w("div",{className:"todo-list",children:t.todos.map(H=>H.name?w(V0,{todo:H,toggle_range:U,change_date:j,delete_todo:Nt,change_name:tt},H.id):null)})]})]})}function KT(t){return new Date(t.valueOf()-864e5*t.getDay())}function GT({habit:t,update:e}){const[n,r]=O.exports.useState(""),i=3600*24*1e3,s=[],o=new Date,a=KT(o);let l;l=a;for(let c=0;c<7;c++){const h=`${l.getFullYear()}-${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`,d={date:null,stringDate:h,day:l.getDate()};if(l<=o){d.date=l.toDateString(),d.tasks=[];for(let m of t.todos){let y;y=!0,m.name===null&&t.todos.some(_=>!!(_.name!==null&&Mr(l,_.range)))&&(y=!1),y&&Mr(l,m.range)&&d.tasks.push({id:m.id,refId:m.refId,checked:m.dates.includes(h),name:m.name})}d.tasks.every(m=>m.checked)?d.state="blue":d.tasks.some(m=>m.checked)?d.state="pink":d.state="black"}l=new Date(l.valueOf()+i),s.push(d)}function u(c){r(n===c?"":c)}return O.exports.useEffect(()=>{function c(h){if(h.target.closest(".tooltip"))return;const d=h.target.closest(".cell-container"),m=h.target.closest(".stick");(!d||m&&m.id!==`stick-id-${t.id}`)&&r("")}return document.addEventListener("click",c),()=>document.removeEventListener("click",c)}),L("div",{className:"stick",id:`stick-id-${t.id}`,children:[L(L0,{to:`/Habit-Tracker/habits/${t.id}`,className:"link",href:"https://ol.reddit.com",children:[w("img",{src:t.image,alt:"habit image"}),w("p",{className:"habit-name",children:t.name})]}),w("div",{className:"days",children:w("ul",{className:"days-list",children:s.map(c=>{if(c.date){const h=c.tasks[0];return h.name===null?L("li",{className:"day",children:[w("input",{className:"custom-checkbox plain-checkbox",type:"checkbox",checked:c.tasks[0].checked,onChange:()=>e(t.refId,h.refId,c.stringDate)}),w("span",{children:c.day})]},`stickbox-${c.stringDate}`):w(b0,{mainContent:c.day,toolContent:w(M0,{habitId:t.refId,cell:c,update:e}),state:c.state,id:c.stringDate,currentActiveCell:n,activate_cell:u},`stickbox-${c.stringDate}`)}else return w("li",{className:"day",children:w("input",{type:"checkbox",disabled:!0})},`stickbox-${c.stringDate}`)})})}),L("div",{className:"difficulty",children:[w("span",{className:`hard ${t.difficulty===2?"active":""}`}),w("span",{className:`medium ${t.difficulty>=1?"active":""}`}),w("span",{className:"easy active"})]})]})}function QT(){const[t,e]=O.exports.useState(()=>new Date);return O.exports.useEffect(()=>{const n=setInterval(()=>e(new Date),1e3);return()=>clearInterval(n)},[]),L("div",{className:"clock",children:[w("p",{className:"hours",children:`${String(t.getHours()).padStart(2,"0")}:${String(t.getMinutes()).padStart(2,"0")}:${String(t.getSeconds()).padStart(2,"0")}`}),w("p",{className:"clock-date",children:t.toDateString()})]})}const jm=[{bg:"rgb(20, 5, 10)",right:"rgb(255, 10, 50)",left:"rgb(10, 255, 50)"},{bg:"rgb(50, 150, 255)",right:"rgb(25, 7, 10)",left:"rgb(250, 255, 253)"},{bg:"rgb(255, 100, 200)",right:"rgb(255, 200, 250)",left:"rgb(100, 24, 150)"},{bg:"rgb(25, 255, 50)",right:"rgb(255, 10, 54)",left:"rgb(175, 190, 255)"},{bg:"rgb(255, 220, 250)",right:"rgb(10, 12, 255)",left:"rgb(200, 10, 20)"}];function YT(t,e){const n=document.createElement("canvas"),r=n.getContext("2d");let i,s,o,a;n.width=t,n.height=e,i=~~(Math.random()*20+20),s=n.width/i,o=n.height/i,a=jm[~~(Math.random()*jm.length)],r.fillStyle=a.bg,r.fillRect(0,0,n.width,n.height),r.lineWidth=2;for(let l=0;l<s;l++)for(let u=0;u<o;u++)r.beginPath(),Math.random()<.5?(r.strokeStyle=a.right,r.moveTo(l*i,u*i),r.lineTo((l+1)*i,(u+1)*i)):(r.strokeStyle=a.left,r.moveTo((l+1)*i,u*i),r.lineTo(l*i,(u+1)*i)),r.stroke();return new Promise(l=>{const u=`${Math.random().toString(16).slice(-10)}.png`;n.toBlob(c=>l(new File([c],u,{type:"image/png"})))})}/**
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
 */const z0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},j0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(z0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const y=u<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},JT=function(t){const e=z0(t);return j0.encodeByteArray(e,!0)},dl=function(t){return JT(t).replace(/\./g,"")},H0=function(t){try{return j0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ZT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function eI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nI(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rI(){return typeof indexedDB=="object"}function iI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function sI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const oI=()=>sI().__FIREBASE_DEFAULTS__,aI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&H0(t[1]);return e&&JSON.parse(e)},df=()=>{try{return oI()||aI()||lI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},q0=t=>{var e,n;return(n=(e=df())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},W0=t=>{const e=q0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uI=()=>{var t;return(t=df())===null||t===void 0?void 0:t.config},K0=t=>{var e;return(e=df())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class cI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function G0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[dl(JSON.stringify(n)),dl(JSON.stringify(o)),a].join(".")}/**
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
 */const hI="FirebaseError";class sn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=hI,Object.setPrototypeOf(this,sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Io.prototype.create)}}class Io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?dI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new sn(i,a,r)}}function dI(t,e){return t.replace(fI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const fI=/\{\$([^}]+)}/g;function pI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function fl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Hm(s)&&Hm(o)){if(!fl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Hm(t){return t!==null&&typeof t=="object"}/**
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
 */function Co(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mI(t,e){const n=new gI(t,e);return n.subscribe.bind(n)}class gI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");yI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mc),i.error===void 0&&(i.error=mc),i.complete===void 0&&(i.complete=mc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function yI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mc(){}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gr="[DEFAULT]";/**
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
 */class vI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new cI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_I(e))try{this.getOrInitializeService({instanceIdentifier:gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gr){return this.instances.has(e)}getOptions(e=gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gr){return this.component?this.component.multipleInstances?e:gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wI(t){return t===gr?void 0:t}function _I(t){return t.instantiationMode==="EAGER"}/**
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
 */class EI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const SI={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},kI=ie.INFO,TI={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},II=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=TI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ff{constructor(e){this.name=e,this._logLevel=kI,this._logHandler=II,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?SI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const CI=(t,e)=>e.some(n=>t instanceof n);let qm,Wm;function NI(){return qm||(qm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AI(){return Wm||(Wm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Q0=new WeakMap,Fh=new WeakMap,Y0=new WeakMap,gc=new WeakMap,pf=new WeakMap;function RI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Yn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Q0.set(n,t)}).catch(()=>{}),pf.set(e,t),e}function DI(t){if(Fh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fh.set(t,e)}let Vh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Y0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xI(t){Vh=t(Vh)}function OI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yc(this),e,...n);return Y0.set(r,e.sort?e.sort():[e]),Yn(r)}:AI().includes(t)?function(...e){return t.apply(yc(this),e),Yn(Q0.get(this))}:function(...e){return Yn(t.apply(yc(this),e))}}function PI(t){return typeof t=="function"?OI(t):(t instanceof IDBTransaction&&DI(t),CI(t,NI())?new Proxy(t,Vh):t)}function Yn(t){if(t instanceof IDBRequest)return RI(t);if(gc.has(t))return gc.get(t);const e=PI(t);return e!==t&&(gc.set(t,e),pf.set(e,t)),e}const yc=t=>pf.get(t);function LI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Yn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Yn(o.result),l.oldVersion,l.newVersion,Yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const bI=["get","getKey","getAll","getAllKeys","count"],MI=["put","add","delete","clear"],vc=new Map;function Km(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vc.get(e))return vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=MI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vc.set(e,s),s}xI(t=>({...t,get:(e,n,r)=>Km(e,n)||t.get(e,n,r),has:(e,n)=>!!Km(e,n)||t.has(e,n)}));/**
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
 */class $I{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bh="@firebase/app",Gm="0.8.2";/**
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
 */const $r=new ff("@firebase/app"),FI="@firebase/app-compat",VI="@firebase/analytics-compat",BI="@firebase/analytics",zI="@firebase/app-check-compat",jI="@firebase/app-check",HI="@firebase/auth",qI="@firebase/auth-compat",WI="@firebase/database",KI="@firebase/database-compat",GI="@firebase/functions",QI="@firebase/functions-compat",YI="@firebase/installations",XI="@firebase/installations-compat",JI="@firebase/messaging",ZI="@firebase/messaging-compat",eC="@firebase/performance",tC="@firebase/performance-compat",nC="@firebase/remote-config",rC="@firebase/remote-config-compat",iC="@firebase/storage",sC="@firebase/storage-compat",oC="@firebase/firestore",aC="@firebase/firestore-compat",lC="firebase",uC="9.12.1";/**
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
 */const zh="[DEFAULT]",cC={[Bh]:"fire-core",[FI]:"fire-core-compat",[BI]:"fire-analytics",[VI]:"fire-analytics-compat",[jI]:"fire-app-check",[zI]:"fire-app-check-compat",[HI]:"fire-auth",[qI]:"fire-auth-compat",[WI]:"fire-rtdb",[KI]:"fire-rtdb-compat",[GI]:"fire-fn",[QI]:"fire-fn-compat",[YI]:"fire-iid",[XI]:"fire-iid-compat",[JI]:"fire-fcm",[ZI]:"fire-fcm-compat",[eC]:"fire-perf",[tC]:"fire-perf-compat",[nC]:"fire-rc",[rC]:"fire-rc-compat",[iC]:"fire-gcs",[sC]:"fire-gcs-compat",[oC]:"fire-fst",[aC]:"fire-fst-compat","fire-js":"fire-js",[lC]:"fire-js-all"};/**
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
 */const pl=new Map,jh=new Map;function hC(t,e){try{t.container.addComponent(e)}catch(n){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(jh.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of pl.values())hC(n,t);return!0}function eu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const dC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Xn=new Io("app","Firebase",dC);/**
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
 */class fC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Xn.create("app-deleted",{appName:this._name})}}/**
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
 */const ji=uC;function X0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Xn.create("bad-app-name",{appName:String(i)});if(n||(n=uI()),!n)throw Xn.create("no-options");const s=pl.get(i);if(s){if(fl(n,s.options)&&fl(r,s.config))return s;throw Xn.create("duplicate-app",{appName:i})}const o=new EI(i);for(const l of jh.values())o.addComponent(l);const a=new fC(n,r,o);return pl.set(i,a),a}function mf(t=zh){const e=pl.get(t);if(!e&&t===zh)return X0();if(!e)throw Xn.create("no-app",{appName:t});return e}function Zt(t,e,n){var r;let i=(r=cC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(a.join(" "));return}Ur(new tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const pC="firebase-heartbeat-database",mC=1,eo="firebase-heartbeat-store";let wc=null;function J0(){return wc||(wc=LI(pC,mC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(eo)}}}).catch(t=>{throw Xn.create("idb-open",{originalErrorMessage:t.message})})),wc}async function gC(t){var e;try{return(await J0()).transaction(eo).objectStore(eo).get(Z0(t))}catch(n){if(n instanceof sn)$r.warn(n.message);else{const r=Xn.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});$r.warn(r.message)}}}async function Qm(t,e){var n;try{const i=(await J0()).transaction(eo,"readwrite");return await i.objectStore(eo).put(e,Z0(t)),i.done}catch(r){if(r instanceof sn)$r.warn(r.message);else{const i=Xn.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});$r.warn(i.message)}}}function Z0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yC=1024,vC=30*24*60*60*1e3;class wC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new EC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ym();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ym(),{heartbeatsToSend:n,unsentEntries:r}=_C(this._heartbeatsCache.heartbeats),i=dl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ym(){return new Date().toISOString().substring(0,10)}function _C(t,e=yC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Xm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class EC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rI()?iI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await gC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Qm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Xm(t){return dl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function SC(t){Ur(new tr("platform-logger",e=>new $I(e),"PRIVATE")),Ur(new tr("heartbeat",e=>new wC(e),"PRIVATE")),Zt(Bh,Gm,t),Zt(Bh,Gm,"esm2017"),Zt("fire-js","")}SC("");var kC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,gf=gf||{},W=kC||self;function ml(){}function tu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function No(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TC(t){return Object.prototype.hasOwnProperty.call(t,_c)&&t[_c]||(t[_c]=++IC)}var _c="closure_uid_"+(1e9*Math.random()>>>0),IC=0;function CC(t,e,n){return t.call.apply(t.bind,arguments)}function NC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Ye(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ye=CC:Ye=NC,Ye.apply(null,arguments)}function ha(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function He(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function ur(){this.s=this.s,this.o=this.o}var AC=0;ur.prototype.s=!1;ur.prototype.na=function(){!this.s&&(this.s=!0,this.M(),AC!=0)&&TC(this)};ur.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ew=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function yf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Jm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(tu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var RC=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",ml,e),W.removeEventListener("test",ml,e)}catch{}return t}();function gl(t){return/^[\s\xa0]*$/.test(t)}var Zm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ec(t,e){return t<e?-1:t>e?1:0}function nu(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function Qt(t){return nu().indexOf(t)!=-1}function vf(t){return vf[" "](t),t}vf[" "]=ml;function DC(t){var e=PC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var xC=Qt("Opera"),xi=Qt("Trident")||Qt("MSIE"),tw=Qt("Edge"),Hh=tw||xi,nw=Qt("Gecko")&&!(nu().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge"))&&!(Qt("Trident")||Qt("MSIE"))&&!Qt("Edge"),OC=nu().toLowerCase().indexOf("webkit")!=-1&&!Qt("Edge");function rw(){var t=W.document;return t?t.documentMode:void 0}var yl;e:{var Sc="",kc=function(){var t=nu();if(nw)return/rv:([^\);]+)(\)|;)/.exec(t);if(tw)return/Edge\/([\d\.]+)/.exec(t);if(xi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(OC)return/WebKit\/(\S+)/.exec(t);if(xC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(kc&&(Sc=kc?kc[1]:""),xi){var Tc=rw();if(Tc!=null&&Tc>parseFloat(Sc)){yl=String(Tc);break e}}yl=Sc}var PC={};function LC(){return DC(function(){let t=0;const e=Zm(String(yl)).split("."),n=Zm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ec(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ec(i[2].length==0,s[2].length==0)||Ec(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var qh;if(W.document&&xi){var eg=rw();qh=eg||parseInt(yl,10)||void 0}else qh=void 0;var bC=qh;function to(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(nw){e:{try{vf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&to.X.h.call(this)}}He(to,Xe);var MC={2:"touch",3:"pen",4:"mouse"};to.prototype.h=function(){to.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ao="closure_listenable_"+(1e6*Math.random()|0),$C=0;function UC(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++$C,this.ba=this.ea=!1}function ru(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function wf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function iw(t){const e={};for(const n in t)e[n]=t[n];return e}const tg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sw(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<tg.length;s++)n=tg[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function iu(t){this.src=t,this.g={},this.h=0}iu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Kh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new UC(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Wh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=ew(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ru(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var _f="closure_lm_"+(1e6*Math.random()|0),Ic={};function ow(t,e,n,r,i){if(r&&r.once)return lw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ow(t,e[s],n,r,i);return null}return n=kf(n),t&&t[Ao]?t.N(e,n,No(r)?!!r.capture:!!r,i):aw(t,e,n,!1,r,i)}function aw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=No(i)?!!i.capture:!!i,a=Sf(t);if(a||(t[_f]=a=new iu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=FC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(cw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FC(){function t(n){return e.call(t.src,t.listener,n)}const e=VC;return t}function lw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)lw(t,e[s],n,r,i);return null}return n=kf(n),t&&t[Ao]?t.O(e,n,No(r)?!!r.capture:!!r,i):aw(t,e,n,!0,r,i)}function uw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)uw(t,e[s],n,r,i);else r=No(r)?!!r.capture:!!r,n=kf(n),t&&t[Ao]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Kh(s,n,r,i),-1<n&&(ru(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Sf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kh(e,n,r,i)),(n=-1<t?e[t]:null)&&Ef(n))}function Ef(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ao])Wh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(cw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Sf(e))?(Wh(n,t),n.h==0&&(n.src=null,e[_f]=null)):ru(t)}}}function cw(t){return t in Ic?Ic[t]:Ic[t]="on"+t}function VC(t,e){if(t.ba)t=!0;else{e=new to(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Ef(t),t=n.call(r,e)}return t}function Sf(t){return t=t[_f],t instanceof iu?t:null}var Cc="__closure_events_fn_"+(1e9*Math.random()>>>0);function kf(t){return typeof t=="function"?t:(t[Cc]||(t[Cc]=function(e){return t.handleEvent(e)}),t[Cc])}function $e(){ur.call(this),this.i=new iu(this),this.P=this,this.I=null}He($e,ur);$e.prototype[Ao]=!0;$e.prototype.removeEventListener=function(t,e,n,r){uw(this,t,e,n,r)};function ze(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(r,t),sw(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=da(o,r,!0,e)&&i}if(o=e.g=t,i=da(o,r,!0,e)&&i,i=da(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=da(o,r,!1,e)&&i}$e.prototype.M=function(){if($e.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ru(n[r]);delete t.g[e],t.h--}}this.I=null};$e.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$e.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function da(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Wh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Tf=W.JSON.stringify;function BC(){var t=fw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class zC{constructor(){this.h=this.g=null}add(e,n){const r=hw.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var hw=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new jC,t=>t.reset());class jC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HC(t){W.setTimeout(()=>{throw t},0)}function dw(t,e){Gh||qC(),Qh||(Gh(),Qh=!0),fw.add(t,e)}var Gh;function qC(){var t=W.Promise.resolve(void 0);Gh=function(){t.then(WC)}}var Qh=!1,fw=new zC;function WC(){for(var t;t=BC();){try{t.h.call(t.g)}catch(n){HC(n)}var e=hw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qh=!1}function su(t,e){$e.call(this),this.h=t||1,this.g=e||W,this.j=Ye(this.lb,this),this.l=Date.now()}He(su,$e);M=su.prototype;M.ca=!1;M.R=null;M.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ze(this,"tick"),this.ca&&(If(this),this.start()))}};M.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function If(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}M.M=function(){su.X.M.call(this),If(this),delete this.g};function Cf(t,e,n){if(typeof t=="function")n&&(t=Ye(t,n));else if(t&&typeof t.handleEvent=="function")t=Ye(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function pw(t){t.g=Cf(()=>{t.g=null,t.i&&(t.i=!1,pw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KC extends ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:pw(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function no(t){ur.call(this),this.h=t,this.g={}}He(no,ur);var ng=[];function mw(t,e,n,r){Array.isArray(n)||(n&&(ng[0]=n.toString()),n=ng);for(var i=0;i<n.length;i++){var s=ow(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function gw(t){wf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ef(e)},t),t.g={}}no.prototype.M=function(){no.X.M.call(this),gw(this)};no.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ou(){this.g=!0}ou.prototype.Aa=function(){this.g=!1};function GC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function hi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XC(t,n)+(r?" "+r:"")})}function YC(t,e){t.info(function(){return"TIMEOUT: "+e})}ou.prototype.info=function(){};function XC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Tf(n)}catch{return e}}var qr={},rg=null;function au(){return rg=rg||new $e}qr.Pa="serverreachability";function yw(t){Xe.call(this,qr.Pa,t)}He(yw,Xe);function ro(t){const e=au();ze(e,new yw(e))}qr.STAT_EVENT="statevent";function vw(t,e){Xe.call(this,qr.STAT_EVENT,t),this.stat=e}He(vw,Xe);function it(t){const e=au();ze(e,new vw(e,t))}qr.Qa="timingevent";function ww(t,e){Xe.call(this,qr.Qa,t),this.size=e}He(ww,Xe);function Ro(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var lu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},_w={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Nf(){}Nf.prototype.h=null;function ig(t){return t.h||(t.h=t.i())}function Ew(){}var Do={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Af(){Xe.call(this,"d")}He(Af,Xe);function Rf(){Xe.call(this,"c")}He(Rf,Xe);var Yh;function uu(){}He(uu,Nf);uu.prototype.g=function(){return new XMLHttpRequest};uu.prototype.i=function(){return{}};Yh=new uu;function xo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new no(this),this.O=JC,t=Hh?125:void 0,this.T=new su(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Sw}function Sw(){this.i=null,this.g="",this.h=!1}var JC=45e3,Xh={},vl={};M=xo.prototype;M.setTimeout=function(t){this.O=t};function Jh(t,e,n){t.K=1,t.v=hu(Sn(e)),t.s=n,t.P=!0,kw(t,null)}function kw(t,e){t.F=Date.now(),Oo(t),t.A=Sn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),xw(n.i,"t",r),t.C=0,n=t.l.H,t.h=new Sw,t.g=Jw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new KC(Ye(t.La,t,t.g),t.N)),mw(t.S,t.g,"readystatechange",t.ib),e=t.H?iw(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ro(),GC(t.j,t.u,t.A,t.m,t.U,t.s)}M.ib=function(t){t=t.target;const e=this.L;e&&hn(t)==3?e.l():this.La(t)};M.La=function(t){try{if(t==this.g)e:{const c=hn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||Hh||this.g&&(this.h.h||this.g.fa()||lg(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?ro(3):ro(2)),cu(this);var n=this.g.aa();this.Y=n;t:if(Tw(this)){var r=lg(this.g);t="";var i=r.length,s=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Er(this),xs(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,QC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!gl(a)){var u=a;break t}}u=null}if(n=u)hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zh(this,n);else{this.i=!1,this.o=3,it(12),Er(this),xs(this);break e}}this.P?(Iw(this,c,o),Hh&&this.i&&c==3&&(mw(this.S,this.T,"tick",this.hb),this.T.start())):(hi(this.j,this.m,o,null),Zh(this,o)),c==4&&Er(this),this.i&&!this.I&&(c==4?Gw(this.l,this):(this.i=!1,Oo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Er(this),xs(this)}}}catch{}finally{}};function Tw(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Iw(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=ZC(t,n),i==vl){e==4&&(t.o=4,it(14),r=!1),hi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xh){t.o=4,it(15),hi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else hi(t.j,t.m,i,null),Zh(t,i);Tw(t)&&i!=vl&&i!=Xh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Mf(e),e.K=!0,it(11))):(hi(t.j,t.m,n,"[Invalid Chunked Response]"),Er(t),xs(t))}M.hb=function(){if(this.g){var t=hn(this.g),e=this.g.fa();this.C<e.length&&(cu(this),Iw(this,t,e),this.i&&t!=4&&Oo(this))}};function ZC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?vl:(n=Number(e.substring(n,r)),isNaN(n)?Xh:(r+=1,r+n>e.length?vl:(e=e.substr(r,n),t.C=r+n,e)))}M.cancel=function(){this.I=!0,Er(this)};function Oo(t){t.V=Date.now()+t.O,Cw(t,t.O)}function Cw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Ro(Ye(t.gb,t),e)}function cu(t){t.B&&(W.clearTimeout(t.B),t.B=null)}M.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(YC(this.j,this.A),this.K!=2&&(ro(),it(17)),Er(this),this.o=2,xs(this)):Cw(this,this.V-t)};function xs(t){t.l.G==0||t.I||Gw(t.l,t)}function Er(t){cu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,If(t.T),gw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ed(n.h,t))){if(!t.J&&ed(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)El(n),pu(n);else break e;bf(n),it(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Ro(Ye(n.cb,n),6e3));if(1>=Lw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Sr(n,11)}else if((t.J||n.g==t)&&El(n),!gl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Df(s,s.h),s.h=null))}if(r.D){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.za=_,ge(r.F,r.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Xw(r,r.H?r.ka:null,r.V),o.J){bw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(cu(a),Oo(a)),r.g=o}else Ww(r);0<n.i.length&&mu(n)}else u[0]!="stop"&&u[0]!="close"||Sr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Sr(n,7):Lf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ro(4)}catch{}}function eN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(tu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(tu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Nw(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(tu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tN(t),r=eN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Aw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Nr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Nr){this.h=e!==void 0?e:t.h,wl(this,t.j),this.s=t.s,this.g=t.g,_l(this,t.m),this.l=t.l,e=t.i;var n=new io;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),sg(this,n),this.o=t.o}else t&&(n=String(t).match(Aw))?(this.h=!!e,wl(this,n[1]||"",!0),this.s=ys(n[2]||""),this.g=ys(n[3]||"",!0),_l(this,n[4]),this.l=ys(n[5]||"",!0),sg(this,n[6]||"",!0),this.o=ys(n[7]||"")):(this.h=!!e,this.i=new io(null,this.h))}Nr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(vs(e,og,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(vs(e,og,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(vs(n,n.charAt(0)=="/"?sN:iN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",vs(n,aN)),t.join("")};function Sn(t){return new Nr(t)}function wl(t,e,n){t.j=n?ys(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function _l(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function sg(t,e,n){e instanceof io?(t.i=e,lN(t.i,t.h)):(n||(e=vs(e,oN)),t.i=new io(e,t.h))}function ge(t,e,n){t.i.set(e,n)}function hu(t){return ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ys(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function vs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var og=/[#\/\?@]/g,iN=/[#\?:]/g,sN=/[#\?]/g,oN=/[#\?@]/g,aN=/#/g;function io(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cr(t){t.g||(t.g=new Map,t.h=0,t.i&&nN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=io.prototype;M.add=function(t,e){cr(this),this.i=null,t=Hi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Rw(t,e){cr(t),e=Hi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Dw(t,e){return cr(t),e=Hi(t,e),t.g.has(e)}M.forEach=function(t,e){cr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};M.oa=function(){cr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};M.W=function(t){cr(this);let e=[];if(typeof t=="string")Dw(this,t)&&(e=e.concat(this.g.get(Hi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return cr(this),this.i=null,t=Hi(this,t),Dw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function xw(t,e,n){Rw(t,e),0<n.length&&(t.i=null,t.g.set(Hi(t,e),yf(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Hi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lN(t,e){e&&!t.j&&(cr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Rw(this,r),xw(this,i,n))},t)),t.j=e}var uN=class{constructor(t,e){this.h=t,this.g=e}};function Ow(t){this.l=t||cN,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cN=10;function Pw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Lw(t){return t.h?1:t.g?t.g.size:0}function ed(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Df(t,e){t.g?t.g.add(e):t.h=e}function bw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Ow.prototype.cancel=function(){if(this.i=Mw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Mw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return yf(t.i)}function xf(){}xf.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};xf.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function hN(){this.g=new xf}function dN(t,e,n){const r=n||"";try{Nw(t,function(i,s){let o=i;No(i)&&(o=Tf(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function fN(t,e){const n=new ou;if(W.Image){const r=new Image;r.onload=ha(fa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=ha(fa,n,r,"TestLoadImage: error",!1,e),r.onabort=ha(fa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=ha(fa,n,r,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function fa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Po(t){this.l=t.ac||null,this.j=t.jb||!1}He(Po,Nf);Po.prototype.g=function(){return new du(this.l,this.j)};Po.prototype.i=function(t){return function(){return t}}({});function du(t,e){$e.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Of,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}He(du,$e);var Of=0;M=du.prototype;M.open=function(t,e){if(this.readyState!=Of)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,so(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lo(this)),this.readyState=Of};M.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,so(this)),this.g&&(this.readyState=3,so(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$w(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function $w(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}M.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Lo(this):so(this),this.readyState==3&&$w(this)}};M.Va=function(t){this.g&&(this.response=this.responseText=t,Lo(this))};M.Ua=function(t){this.g&&(this.response=t,Lo(this))};M.ga=function(){this.g&&Lo(this)};function Lo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,so(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function so(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(du.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pN=W.JSON.parse;function ke(t){$e.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Uw,this.K=this.L=!1}He(ke,$e);var Uw="",mN=/^https?$/i,gN=["POST","PUT"];M=ke.prototype;M.Ka=function(t){this.L=t};M.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Yh.g(),this.C=this.u?ig(this.u):ig(Yh),this.g.onreadystatechange=Ye(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){ag(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=ew(gN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Bw(this),0<this.B&&((this.K=yN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ye(this.qa,this)):this.A=Cf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){ag(this,s)}};function yN(t){return xi&&LC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.qa=function(){typeof gf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ze(this,"timeout"),this.abort(8))};function ag(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Fw(t),fu(t)}function Fw(t){t.D||(t.D=!0,ze(t,"complete"),ze(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ze(this,"complete"),ze(this,"abort"),fu(this))};M.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),fu(this,!0)),ke.X.M.call(this)};M.Ha=function(){this.s||(this.F||this.v||this.l?Vw(this):this.fb())};M.fb=function(){Vw(this)};function Vw(t){if(t.h&&typeof gf<"u"&&(!t.C[1]||hn(t)!=4||t.aa()!=2)){if(t.v&&hn(t)==4)Cf(t.Ha,0,t);else if(ze(t,"readystatechange"),hn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Aw)[1]||null;if(!i&&W.self&&W.self.location){var s=W.self.location.protocol;i=s.substr(0,s.length-1)}r=!mN.test(i?i.toLowerCase():"")}n=r}if(n)ze(t,"complete"),ze(t,"success");else{t.m=6;try{var o=2<hn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Fw(t)}}finally{fu(t)}}}}function fu(t,e){if(t.g){Bw(t);const n=t.g,r=t.C[0]?ml:null;t.g=null,t.C=null,e||ze(t,"ready");try{n.onreadystatechange=r}catch{}}}function Bw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function hn(t){return t.g?t.g.readyState:0}M.aa=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}};M.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pN(e)}};function lg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Uw:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}M.Ea=function(){return this.m};M.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function zw(t){let e="";return wf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Pf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=zw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ge(t,e,n))}function cs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function jw(t){this.Ca=0,this.i=[],this.j=new ou,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=cs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=cs("baseRetryDelayMs",5e3,t),this.bb=cs("retryDelaySeedMs",1e4,t),this.$a=cs("forwardChannelMaxRetries",2,t),this.ta=cs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Ow(t&&t.concurrentRequestLimit),this.Fa=new hN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}M=jw.prototype;M.ma=8;M.G=1;function Lf(t){if(Hw(t),t.G==3){var e=t.U++,n=Sn(t.F);ge(n,"SID",t.I),ge(n,"RID",e),ge(n,"TYPE","terminate"),bo(t,n),e=new xo(t,t.j,e,void 0),e.K=2,e.v=hu(Sn(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=Jw(e.l,null),e.g.da(e.v)),e.F=Date.now(),Oo(e)}Yw(t)}function pu(t){t.g&&(Mf(t),t.g.cancel(),t.g=null)}function Hw(t){pu(t),t.u&&(W.clearTimeout(t.u),t.u=null),El(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function mu(t){Pw(t.h)||t.m||(t.m=!0,dw(t.Ja,t),t.C=0)}function vN(t,e){return Lw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Ro(Ye(t.Ja,t,e),Qw(t,t.C)),t.C++,!0)}M.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new xo(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=iw(s),sw(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=qw(this,i,e),n=Sn(this.F),ge(n,"RID",t),ge(n,"CVER",22),this.D&&ge(n,"X-HTTP-Session-Id",this.D),bo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(zw(s)))+"&"+e:this.o&&Pf(n,this.o,s)),Df(this.h,i),this.Ya&&ge(n,"TYPE","init"),this.O?(ge(n,"$req",e),ge(n,"SID","null"),i.Z=!0,Jh(i,n,null)):Jh(i,n,e),this.G=2}}else this.G==3&&(t?ug(this,t):this.i.length==0||Pw(this.h)||ug(this))};function ug(t,e){var n;e?n=e.m:n=t.U++;const r=Sn(t.F);ge(r,"SID",t.I),ge(r,"RID",n),ge(r,"AID",t.T),bo(t,r),t.o&&t.s&&Pf(r,t.o,t.s),n=new xo(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=qw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Df(t.h,n),Jh(n,r,e)}function bo(t,e){t.ia&&wf(t.ia,function(n,r){ge(e,r,n)}),t.l&&Nw({},function(n,r){ge(e,r,n)})}function qw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Ye(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{dN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Ww(t){t.g||t.u||(t.Z=1,dw(t.Ia,t),t.A=0)}function bf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Ro(Ye(t.Ia,t),Qw(t,t.A)),t.A++,!0)}M.Ia=function(){if(this.u=null,Kw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Ro(Ye(this.eb,this),t)}};M.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,it(10),pu(this),Kw(this))};function Mf(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function Kw(t){t.g=new xo(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Sn(t.sa);ge(e,"RID","rpc"),ge(e,"SID",t.I),ge(e,"CI",t.L?"0":"1"),ge(e,"AID",t.T),ge(e,"TYPE","xmlhttp"),bo(t,e),t.o&&t.s&&Pf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=hu(Sn(e)),n.s=null,n.P=!0,kw(n,t)}M.cb=function(){this.v!=null&&(this.v=null,pu(this),bf(this),it(19))};function El(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function Gw(t,e){var n=null;if(t.g==e){El(t),Mf(t),t.g=null;var r=2}else if(ed(t.h,e))n=e.D,bw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=au(),ze(r,new ww(r,n)),mu(t)}else Ww(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&vN(t,e)||r==2&&bf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Sr(t,5);break;case 4:Sr(t,10);break;case 3:Sr(t,6);break;default:Sr(t,2)}}}function Qw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Sr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Ye(t.kb,t);n||(n=new Nr("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||wl(n,"https"),hu(n)),fN(n.toString(),r)}else it(2);t.G=0,t.l&&t.l.va(e),Yw(t),Hw(t)}M.kb=function(t){t?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function Yw(t){if(t.G=0,t.la=[],t.l){const e=Mw(t.h);(e.length!=0||t.i.length!=0)&&(Jm(t.la,e),Jm(t.la,t.i),t.h.i.length=0,yf(t.i),t.i.length=0),t.l.ua()}}function Xw(t,e,n){var r=n instanceof Nr?Sn(n):new Nr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),_l(r,r.m);else{var i=W.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Nr(null,void 0);r&&wl(s,r),e&&(s.g=e),i&&_l(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ge(r,n,e),ge(r,"VER",t.ma),bo(t,r),r}function Jw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ke(new Po({jb:!0})):new ke(t.ra),e.Ka(t.H),e}function Zw(){}M=Zw.prototype;M.xa=function(){};M.wa=function(){};M.va=function(){};M.ua=function(){};M.Ra=function(){};function Sl(){if(xi&&!(10<=Number(bC)))throw Error("Environmental error: no available transport.")}Sl.prototype.g=function(t,e){return new Tt(t,e)};function Tt(t,e){$e.call(this),this.g=new jw(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!gl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!gl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new qi(this)}He(Tt,$e);Tt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Xw(t,null,t.V),mu(t)};Tt.prototype.close=function(){Lf(this.g)};Tt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Tf(t),t=n);e.i.push(new uN(e.ab++,t)),e.G==3&&mu(e)};Tt.prototype.M=function(){this.g.l=null,delete this.j,Lf(this.g),delete this.g,Tt.X.M.call(this)};function e_(t){Af.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}He(e_,Af);function t_(){Rf.call(this),this.status=1}He(t_,Rf);function qi(t){this.g=t}He(qi,Zw);qi.prototype.xa=function(){ze(this.g,"a")};qi.prototype.wa=function(t){ze(this.g,new e_(t))};qi.prototype.va=function(t){ze(this.g,new t_)};qi.prototype.ua=function(){ze(this.g,"b")};Sl.prototype.createWebChannel=Sl.prototype.g;Tt.prototype.send=Tt.prototype.u;Tt.prototype.open=Tt.prototype.m;Tt.prototype.close=Tt.prototype.close;lu.NO_ERROR=0;lu.TIMEOUT=8;lu.HTTP_ERROR=6;_w.COMPLETE="complete";Ew.EventType=Do;Do.OPEN="a";Do.CLOSE="b";Do.ERROR="c";Do.MESSAGE="d";$e.prototype.listen=$e.prototype.N;ke.prototype.listenOnce=ke.prototype.O;ke.prototype.getLastError=ke.prototype.Oa;ke.prototype.getLastErrorCode=ke.prototype.Ea;ke.prototype.getStatus=ke.prototype.aa;ke.prototype.getResponseJson=ke.prototype.Sa;ke.prototype.getResponseText=ke.prototype.fa;ke.prototype.send=ke.prototype.da;ke.prototype.setWithCredentials=ke.prototype.Ka;var wN=function(){return new Sl},_N=function(){return au()},Nc=lu,EN=_w,SN=qr,cg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kN=Po,pa=Ew,TN=ke;const hg="@firebase/firestore";/**
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
 */let Wi="9.12.1";/**
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
 */const Fr=new ff("@firebase/firestore");function dg(){return Fr.logLevel}function F(t,...e){if(Fr.logLevel<=ie.DEBUG){const n=e.map($f);Fr.debug(`Firestore (${Wi}): ${t}`,...n)}}function kn(t,...e){if(Fr.logLevel<=ie.ERROR){const n=e.map($f);Fr.error(`Firestore (${Wi}): ${t}`,...n)}}function td(t,...e){if(Fr.logLevel<=ie.WARN){const n=e.map($f);Fr.warn(`Firestore (${Wi}): ${t}`,...n)}}function $f(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Wi}) INTERNAL ASSERTION FAILED: `+t;throw kn(e),new Error(e)}function ce(t,e){t||K()}function Q(t,e){return t}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends sn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class mn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class n_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class CN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NN{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new mn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new mn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ce(typeof r.accessToken=="string"),new n_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ce(e===null||typeof e=="string"),new Ke(e)}}class AN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ce(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class RN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new AN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ce(typeof n.token=="string"),this.A=n.token,new DN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ON(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class r_{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ON(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function Oi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class xe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new V(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return xe.fromMillis(Date.now())}static fromDate(e){return xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new xe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new xe(0,0))}static max(){return new X(new xe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class oo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return oo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof oo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends oo{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const PN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends oo{construct(e,n,r){return new Qe(e,n,r)}static isValidIdentifier(e){return PN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Qe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new V(C.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new V(C.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new V(C.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
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
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(ye.fromString(e))}static fromName(e){return new z(ye.fromString(e).popFirst(5))}static empty(){return new z(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new ye(e.slice()))}}function LN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new xe(n+1,0):new xe(n,r));return new nr(i,z.empty(),e)}function bN(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(X.min(),z.empty(),-1)}static max(){return new nr(X.max(),z.empty(),-1)}}function MN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=z.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
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
 */const $N="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class UN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Mo(t){if(t.code!==C.FAILED_PRECONDITION||t.message!==$N)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function $o(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Uf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}/**
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
 */function fg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function i_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */Uf.at=-1;class Pe{constructor(e,n){this.comparator=e,this.root=n||Fe.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Fe.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Fe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ma(this.root,e,this.comparator,!0)}}class ma{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:Fe.RED,this.left=i!=null?i:Fe.EMPTY,this.right=s!=null?s:Fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Fe(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Fe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Fe.EMPTY=null,Fe.RED=!0,Fe.BLACK=!1;Fe.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Fe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oe{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pg(this.data.getIterator())}getIteratorFrom(e){return new pg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Oe(this.comparator);return n.data=e,n}}class pg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(Qe.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new Oe(Qe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Oi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new et(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const FN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(ce(!!t),typeof t=="string"){let e=0;const n=FN.exec(t);if(ce(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ne(t.seconds),nanos:Ne(t.nanos)}}function Ne(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Pi(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */function s_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function o_(t){const e=t.mapValue.fields.__previous_value__;return s_(e)?o_(e):e}function ao(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new xe(e.seconds,e.nanos)}/**
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
 */class VN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class lo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new lo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof lo&&e.projectId===this.projectId&&e.database===this.database}}function gu(t){return t==null}function kl(t){return t===0&&1/t==-1/0}function BN(t){return typeof t=="number"&&Number.isInteger(t)&&!kl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const ga={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?s_(t)?4:zN(t)?9007199254740991:10:K()}function nn(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ao(t).isEqual(ao(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=rr(r.timestampValue),o=rr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Pi(r.bytesValue).isEqual(Pi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ne(r.geoPointValue.latitude)===Ne(i.geoPointValue.latitude)&&Ne(r.geoPointValue.longitude)===Ne(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ne(r.integerValue)===Ne(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ne(r.doubleValue),o=Ne(i.doubleValue);return s===o?kl(s)===kl(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Oi(t.arrayValue.values||[],e.arrayValue.values||[],nn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(fg(s)!==fg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!nn(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function uo(t,e){return(t.values||[]).find(n=>nn(n,e))!==void 0}function Li(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ne(i.integerValue||i.doubleValue),a=Ne(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return mg(t.timestampValue,e.timestampValue);case 4:return mg(ao(t),ao(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Pi(i),a=Pi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=se(o[l],a[l]);if(u!==0)return u}return se(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=se(Ne(i.latitude),Ne(s.latitude));return o!==0?o:se(Ne(i.longitude),Ne(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Li(o[l],a[l]);if(u)return u}return se(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ga.mapValue&&s===ga.mapValue)return 0;if(i===ga.mapValue)return 1;if(s===ga.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=se(a[c],u[c]);if(h!==0)return h;const d=Li(o[a[c]],l[u[c]]);if(d!==0)return d}return se(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function mg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=rr(t),r=rr(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function wi(t){return nd(t)}function nd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=rr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Pi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,z.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=nd(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${nd(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function rd(t){return!!t&&"integerValue"in t}function Ff(t){return!!t&&"arrayValue"in t}function gg(t){return!!t&&"nullValue"in t}function yg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pa(t){return!!t&&"mapValue"in t}function Os(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Os(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Os(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class ct{constructor(e){this.value=e}static empty(){return new ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Os(n)}setAll(e){let n=Qe.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Os(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return nn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new ct(Os(this.value))}}function a_(t){const e=[];return Wr(t.fields,(n,r)=>{const i=new Qe([n]);if(Pa(r)){const s=a_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ot(e)}/**
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
 */class Ve{constructor(e,n,r,i,s,o){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.data=s,this.documentState=o}static newInvalidDocument(e){return new Ve(e,0,X.min(),X.min(),ct.empty(),0)}static newFoundDocument(e,n,r){return new Ve(e,1,n,X.min(),r,0)}static newNoDocument(e,n){return new Ve(e,2,n,X.min(),ct.empty(),0)}static newUnknownDocument(e,n){return new Ve(e,3,n,X.min(),ct.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ht=null}}function vg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jN(t,e,n,r,i,s,o)}function Vf(t){const e=Q(t);if(e.ht===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>{return(i=r).field.canonicalString()+i.op.toString()+wi(i.value);var i}).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>wi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>wi(r)).join(",")),e.ht=n}return e.ht}function HN(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${wi(r.value)}`;var r}).join(", ")}]`),gu(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>wi(n)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>wi(n)).join(",")),`Target(${e})`}function Bf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!JN(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!nn(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_g(t.startAt,e.startAt)&&_g(t.endAt,e.endAt)}function id(t){return z.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class dt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.lt(e,n,r):new qN(e,n,r):n==="array-contains"?new GN(e,r):n==="in"?new QN(e,r):n==="not-in"?new YN(e,r):n==="array-contains-any"?new XN(e,r):new dt(e,n,r)}static lt(e,n,r){return n==="in"?new WN(e,r):new KN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.ft(Li(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.ft(Li(n,this.value))}ft(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}dt(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class qN extends dt{constructor(e,n,r){super(e,n,r),this.key=z.fromName(r.referenceValue)}matches(e){const n=z.comparator(e.key,this.key);return this.ft(n)}}class WN extends dt{constructor(e,n){super(e,"in",n),this.keys=l_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KN extends dt{constructor(e,n){super(e,"not-in",n),this.keys=l_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function l_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>z.fromName(r.referenceValue))}class GN extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ff(n)&&uo(n.arrayValue,this.value)}}class QN extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&uo(this.value.arrayValue,n)}}class YN extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(uo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!uo(this.value.arrayValue,n)}}class XN extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ff(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>uo(this.value.arrayValue,r))}}class Tl{constructor(e,n){this.position=e,this.inclusive=n}}class _i{constructor(e,n="asc"){this.field=e,this.dir=n}}function JN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function wg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(o.referenceValue),n.key):r=Li(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _g(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!nn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Uo{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this._t=null,this.wt=null,this.startAt,this.endAt}}function ZN(t,e,n,r,i,s,o,a){return new Uo(t,e,n,r,i,s,o,a)}function yu(t){return new Uo(t)}function Eg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function u_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function c_(t){for(const e of t.filters)if(e.dt())return e.field;return null}function eA(t){return t.collectionGroup!==null}function co(t){const e=Q(t);if(e._t===null){e._t=[];const n=c_(e),r=u_(e);if(n!==null&&r===null)n.isKeyField()||e._t.push(new _i(n)),e._t.push(new _i(Qe.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e._t.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e._t.push(new _i(Qe.keyField(),s))}}}return e._t}function Tn(t){const e=Q(t);if(!e.wt)if(e.limitType==="F")e.wt=vg(e.path,e.collectionGroup,co(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of co(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new _i(s.field,o))}const r=e.endAt?new Tl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Tl(e.startAt.position,e.startAt.inclusive):null;e.wt=vg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function sd(t,e,n){return new Uo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vu(t,e){return Bf(Tn(t),Tn(e))&&t.limitType===e.limitType}function h_(t){return`${Vf(Tn(t))}|lt:${t.limitType}`}function od(t){return`Query(target=${HN(Tn(t))}; limitType=${t.limitType})`}function zf(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=wg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,co(n),r)||n.endAt&&!function(i,s,o){const a=wg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,co(n),r))}(t,e)}function tA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function d_(t){return(e,n)=>{let r=!1;for(const i of co(t)){const s=nA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nA(t,e,n){const r=t.field.isKeyField()?z.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Li(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */function f_(t,e){if(t.gt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:kl(e)?"-0":e}}function p_(t){return{integerValue:""+t}}function rA(t,e){return BN(e)?p_(e):f_(t,e)}/**
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
 */class wu{constructor(){this._=void 0}}function iA(t,e,n){return t instanceof ho?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof fo?g_(t,e):t instanceof po?y_(t,e):function(r,i){const s=m_(r,i),o=Sg(s)+Sg(r.yt);return rd(s)&&rd(r.yt)?p_(o):f_(r.It,o)}(t,e)}function sA(t,e,n){return t instanceof fo?g_(t,e):t instanceof po?y_(t,e):n}function m_(t,e){return t instanceof Il?rd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ho extends wu{}class fo extends wu{constructor(e){super(),this.elements=e}}function g_(t,e){const n=v_(e);for(const r of t.elements)n.some(i=>nn(i,r))||n.push(r);return{arrayValue:{values:n}}}class po extends wu{constructor(e){super(),this.elements=e}}function y_(t,e){let n=v_(e);for(const r of t.elements)n=n.filter(i=>!nn(i,r));return{arrayValue:{values:n}}}class Il extends wu{constructor(e,n){super(),this.It=e,this.yt=n}}function Sg(t){return Ne(t.integerValue||t.doubleValue)}function v_(t){return Ff(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class oA{constructor(e,n){this.field=e,this.transform=n}}function aA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof fo&&r instanceof fo||n instanceof po&&r instanceof po?Oi(n.elements,r.elements,nn):n instanceof Il&&r instanceof Il?nn(n.yt,r.yt):n instanceof ho&&r instanceof ho}(t.transform,e.transform)}class lA{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function La(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _u{}function w_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jf(t.key,jt.none()):new Fo(t.key,t.data,jt.none());{const n=t.data,r=ct.empty();let i=new Oe(Qe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new hr(t.key,r,new Ot(i.toArray()),jt.none())}}function uA(t,e,n){t instanceof Fo?function(r,i,s){const o=r.value.clone(),a=Tg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof hr?function(r,i,s){if(!La(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Tg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(__(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ps(t,e,n,r){return t instanceof Fo?function(i,s,o,a){if(!La(i.precondition,s))return o;const l=i.value.clone(),u=Ig(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof hr?function(i,s,o,a){if(!La(i.precondition,s))return o;const l=Ig(i.fieldTransforms,a,s),u=s.data;return u.setAll(__(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return La(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function cA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=m_(r.transform,i||null);s!=null&&(n===null&&(n=ct.empty()),n.set(r.field,s))}return n||null}function kg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Oi(n,r,(i,s)=>aA(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends _u{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class hr extends _u{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function __(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Tg(t,e,n){const r=new Map;ce(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sA(o,a,n[i]))}return r}function Ig(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iA(s,o,e))}return r}class jf extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hA extends _u{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class dA{constructor(e){this.count=e}}/**
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
 */var Ce,ee;function fA(t){switch(t){default:return K();case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0}}function E_(t){if(t===void 0)return kn("GRPC error has no .code"),C.UNKNOWN;switch(t){case Ce.OK:return C.OK;case Ce.CANCELLED:return C.CANCELLED;case Ce.UNKNOWN:return C.UNKNOWN;case Ce.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Ce.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Ce.INTERNAL:return C.INTERNAL;case Ce.UNAVAILABLE:return C.UNAVAILABLE;case Ce.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Ce.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Ce.NOT_FOUND:return C.NOT_FOUND;case Ce.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Ce.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Ce.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Ce.ABORTED:return C.ABORTED;case Ce.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Ce.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Ce.DATA_LOSS:return C.DATA_LOSS;default:return K()}}(ee=Ce||(Ce={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Ki{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return i_(this.inner)}size(){return this.innerSize}}/**
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
 */const pA=new Pe(z.comparator);function In(){return pA}const S_=new Pe(z.comparator);function ws(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function k_(t){let e=S_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function kr(){return Ls()}function T_(){return Ls()}function Ls(){return new Ki(t=>t.toString(),(t,e)=>t.isEqual(e))}const mA=new Pe(z.comparator),gA=new Oe(z.comparator);function J(...t){let e=gA;for(const n of t)e=e.add(n);return e}const yA=new Oe(se);function I_(){return yA}/**
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
 */class Eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Vo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eu(X.min(),i,I_(),In(),J())}}class Vo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Vo(r,n,J(),J(),J())}}/**
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
 */class ba{constructor(e,n,r,i){this.Tt=e,this.removedTargetIds=n,this.key=r,this.Et=i}}class C_{constructor(e,n){this.targetId=e,this.At=n}}class N_{constructor(e,n,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cg{constructor(){this.Rt=0,this.bt=Ag(),this.Pt=et.EMPTY_BYTE_STRING,this.vt=!1,this.Vt=!0}get current(){return this.vt}get resumeToken(){return this.Pt}get St(){return this.Rt!==0}get Dt(){return this.Vt}Ct(e){e.approximateByteSize()>0&&(this.Vt=!0,this.Pt=e)}xt(){let e=J(),n=J(),r=J();return this.bt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Vo(this.Pt,this.vt,e,n,r)}Nt(){this.Vt=!1,this.bt=Ag()}kt(e,n){this.Vt=!0,this.bt=this.bt.insert(e,n)}Ot(e){this.Vt=!0,this.bt=this.bt.remove(e)}Mt(){this.Rt+=1}Ft(){this.Rt-=1}$t(){this.Vt=!0,this.vt=!0}}class vA{constructor(e){this.Bt=e,this.Lt=new Map,this.Ut=In(),this.qt=Ng(),this.Kt=new Oe(se)}Gt(e){for(const n of e.Tt)e.Et&&e.Et.isFoundDocument()?this.Qt(n,e.Et):this.jt(n,e.key,e.Et);for(const n of e.removedTargetIds)this.jt(n,e.key,e.Et)}Wt(e){this.forEachTarget(e,n=>{const r=this.zt(n);switch(e.state){case 0:this.Ht(n)&&r.Ct(e.resumeToken);break;case 1:r.Ft(),r.St||r.Nt(),r.Ct(e.resumeToken);break;case 2:r.Ft(),r.St||this.removeTarget(n);break;case 3:this.Ht(n)&&(r.$t(),r.Ct(e.resumeToken));break;case 4:this.Ht(n)&&(this.Jt(n),r.Ct(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Lt.forEach((r,i)=>{this.Ht(i)&&n(i)})}Yt(e){const n=e.targetId,r=e.At.count,i=this.Xt(n);if(i){const s=i.target;if(id(s))if(r===0){const o=new z(s.path);this.jt(n,o,Ve.newNoDocument(o,X.min()))}else ce(r===1);else this.Zt(n)!==r&&(this.Jt(n),this.Kt=this.Kt.add(n))}}te(e){const n=new Map;this.Lt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&id(a.target)){const l=new z(a.target.path);this.Ut.get(l)!==null||this.ee(o,l)||this.jt(o,l,Ve.newNoDocument(l,e))}s.Dt&&(n.set(o,s.xt()),s.Nt())}});let r=J();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Eu(e,n,this.Kt,this.Ut,r);return this.Ut=In(),this.qt=Ng(),this.Kt=new Oe(se),i}Qt(e,n){if(!this.Ht(e))return;const r=this.ee(e,n.key)?2:0;this.zt(e).kt(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ne(n.key).add(e))}jt(e,n,r){if(!this.Ht(e))return;const i=this.zt(e);this.ee(e,n)?i.kt(n,1):i.Ot(n),this.qt=this.qt.insert(n,this.ne(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.Lt.delete(e)}Zt(e){const n=this.zt(e).xt();return this.Bt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Mt(e){this.zt(e).Mt()}zt(e){let n=this.Lt.get(e);return n||(n=new Cg,this.Lt.set(e,n)),n}ne(e){let n=this.qt.get(e);return n||(n=new Oe(se),this.qt=this.qt.insert(e,n)),n}Ht(e){const n=this.Xt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.Lt.get(e);return n&&n.St?null:this.Bt.se(e)}Jt(e){this.Lt.set(e,new Cg),this.Bt.getRemoteKeysForTarget(e).forEach(n=>{this.jt(e,n,null)})}ee(e,n){return this.Bt.getRemoteKeysForTarget(e).has(n)}}function Ng(){return new Pe(z.comparator)}function Ag(){return new Pe(z.comparator)}/**
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
 */const wA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),_A=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class EA{constructor(e,n){this.databaseId=e,this.gt=n}}function Cl(t,e){return t.gt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A_(t,e){return t.gt?e.toBase64():e.toUint8Array()}function SA(t,e){return Cl(t,e.toTimestamp())}function gn(t){return ce(!!t),X.fromTimestamp(function(e){const n=rr(e);return new xe(n.seconds,n.nanos)}(t))}function Hf(t,e){return function(n){return new ye(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function R_(t){const e=ye.fromString(t);return ce(O_(e)),e}function ad(t,e){return Hf(t.databaseId,e.path)}function Ac(t,e){const n=R_(e);if(n.get(1)!==t.databaseId.projectId)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new V(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new z(D_(n))}function ld(t,e){return Hf(t.databaseId,e)}function kA(t){const e=R_(t);return e.length===4?ye.emptyPath():D_(e)}function ud(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function D_(t){return ce(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rg(t,e,n){return{name:ad(t,e),fields:n.value.mapValue.fields}}function TA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.gt?(ce(u===void 0||typeof u=="string"),et.fromBase64String(u||"")):(ce(u===void 0||u instanceof Uint8Array),et.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?C.UNKNOWN:E_(l.code);return new V(u,l.message||"")}(o);n=new N_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ac(t,r.document.name),s=gn(r.document.updateTime),o=new ct({mapValue:{fields:r.document.fields}}),a=Ve.newFoundDocument(i,s,o),l=r.targetIds||[],u=r.removedTargetIds||[];n=new ba(l,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ac(t,r.document),s=r.readTime?gn(r.readTime):X.min(),o=Ve.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ac(t,r.document),s=r.removedTargetIds||[];n=new ba([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new dA(i),o=r.targetId;n=new C_(o,s)}}return n}function IA(t,e){let n;if(e instanceof Fo)n={update:Rg(t,e.key,e.value)};else if(e instanceof jf)n={delete:ad(t,e.key)};else if(e instanceof hr)n={update:Rg(t,e.key,e.data),updateMask:bA(e.fieldMask)};else{if(!(e instanceof hA))return K();n={verify:ad(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ho)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fo)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof po)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Il)return{fieldPath:s.field.canonicalString(),increment:o.yt};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:SA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function CA(t,e){return t&&t.length>0?(ce(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?gn(r.updateTime):gn(i);return s.isEqual(X.min())&&(s=gn(i)),new lA(s,r.transformResults||[])}(n,e))):[]}function NA(t,e){return{documents:[ld(t,e.path)]}}function AA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ld(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ld(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length===0)return;const u=l.map(c=>function(h){if(h.op==="=="){if(yg(h.value))return{unaryFilter:{field:Yr(h.field),op:"IS_NAN"}};if(gg(h.value))return{unaryFilter:{field:Yr(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(yg(h.value))return{unaryFilter:{field:Yr(h.field),op:"IS_NOT_NAN"}};if(gg(h.value))return{unaryFilter:{field:Yr(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(h.field),op:OA(h.op),value:h.value}}}(c));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Yr(c.field),direction:xA(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.gt||gu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function RA(t){let e=kA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ce(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=x_(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new _i(di(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,gu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Tl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Tl(d,h)}(n.endAt)),ZN(e,i,o,s,a,"F",l,u)}function DA(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return K()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function x_(t){return t?t.unaryFilter!==void 0?[LA(t)]:t.fieldFilter!==void 0?[PA(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>x_(e)).reduce((e,n)=>e.concat(n)):K():[]}function xA(t){return wA[t]}function OA(t){return _A[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function di(t){return Qe.fromServerFormat(t.fieldPath)}function PA(t){return dt.create(di(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}function LA(t){switch(t.unaryFilter.op){case"IS_NAN":const e=di(t.unaryFilter.field);return dt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=di(t.unaryFilter.field);return dt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=di(t.unaryFilter.field);return dt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=di(t.unaryFilter.field);return dt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return K()}}function bA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function O_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class MA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&uA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ps(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ps(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=T_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=w_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&Oi(this.mutations,e.mutations,(n,r)=>kg(n,r))&&Oi(this.baseMutations,e.baseMutations,(n,r)=>kg(n,r))}}class qf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ce(e.mutations.length===r.length);let i=mA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qf(e,n,r,i)}}/**
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
 */class $A{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Ar{constructor(e,n,r,i,s=X.min(),o=X.min(),a=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class UA{constructor(e){this.re=e}}function FA(t){const e=RA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sd(e,e.limit,"L"):e}/**
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
 */class VA{constructor(){this.Ye=new BA}addToCollectionParentIndex(e,n){return this.Ye.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Ye.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(nr.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class BA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Oe(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Oe(ye.comparator)).toArray()}}/**
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
 */class bi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new bi(0)}static vn(){return new bi(-1)}}/**
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
 */class zA{constructor(){this.changes=new Ki(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class HA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.getBaseDocument(e,n,r))).next(i=>(r!==null&&Ps(r.mutation,i,Ot.empty(),xe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ws();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=In();const o=Ls(),a=Ls();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof hr)?s=s.insert(u.key,u):c!==void 0&&(o.set(u.key,c.mutation.getFieldMask()),Ps(c.mutation,u,c.mutation.getFieldMask(),xe.now()))}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new jA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ls();let i=new Pe((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Ot.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=T_();c.forEach(d=>{if(!s.has(d)){const m=w_(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return z.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):eA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(kr());let a=-1,l=s;return o.next(u=>A.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?A.resolve():this.getBaseDocument(e,c,h).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,J())).next(c=>({batchId:a,changes:k_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new z(n)).next(r=>{let i=ws();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ws();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(u,c){return new Uo(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,Ve.newInvalidDocument(u)))});let o=ws();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Ps(u.mutation,l,Ot.empty(),xe.now()),zf(n,l)&&(o=o.insert(a,l))}),o})}getBaseDocument(e,n,r){return r===null||r.mutation.type===1?this.remoteDocumentCache.getEntry(e,n):A.resolve(Ve.newInvalidDocument(n))}}/**
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
 */class qA{constructor(e){this.It=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:gn(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:FA(r.bundledQuery),readTime:gn(r.readTime)}}(n)),A.resolve()}}/**
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
 */class WA{constructor(){this.overlays=new Pe(z.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ue(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=kr(),s=n.length+1,o=new z(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Pe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=kr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=kr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return A.resolve(a)}ue(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $A(n,r));let s=this.es.get(n);s===void 0&&(s=J(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
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
 */class Wf{constructor(){this.ns=new Oe(Le.ss),this.rs=new Oe(Le.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Le(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Le(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new z(new ye([])),r=new Le(n,e),i=new Le(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new z(new ye([])),r=new Le(n,e),i=new Le(n,e+1);let s=J();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Le(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Le{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return z.comparator(e.key,n.key)||se(e._s,n._s)}static os(e,n){return se(e._s,n._s)||z.comparator(e.key,n.key)}}/**
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
 */class KA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Oe(Le.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Le(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Oe(se);return n.forEach(i=>{const s=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),A.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const o=new Le(new z(s),0);let a=new Oe(se);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ce(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return A.forEach(n.mutations,i=>{const s=new Le(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Le(n,0),i=this.gs.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class GA{constructor(e){this.Es=e,this.docs=new Pe(z.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(n))}getEntries(e,n){let r=In();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),A.resolve(r)}getAllFromCollection(e,n,r){let i=In();const s=new z(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||MN(bN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,i){K()}As(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QA(this)}getSize(e){return A.resolve(this.size)}}class QA extends zA{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
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
 */class YA{constructor(e){this.persistence=e,this.Rs=new Ki(n=>Vf(n),Bf),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Wf,this.targetCount=0,this.vs=bi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new bi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
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
 */class XA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Uf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new YA(this),this.indexManager=new VA,this.remoteDocumentCache=function(r){return new GA(r)}(r=>this.referenceDelegate.xs(r)),this.It=new UA(n),this.Ns=new qA(this.It)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new KA(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new JA(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return A.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class JA extends UN{constructor(e){super(),this.currentSequenceNumber=e}}class Kf{constructor(e){this.persistence=e,this.Fs=new Wf,this.$s=null}static Bs(e){return new Kf(e)}get Ls(){if(this.$s)return this.$s;throw K()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,r=>{const i=z.fromPath(r);return this.Us(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.Us(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}Us(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
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
 */class Gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gf(e,n.fromCache,r,i)}}/**
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
 */class ZA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Eg(n))return A.resolve(null);let r=Tn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sd(n,null,"F"),r=Tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,sd(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Eg(n)||i.isEqual(X.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(dg()<=ie.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),od(n)),this.Bi(e,o,n,LN(i,-1)))})}Fi(e,n){let r=new Oe(d_(e));return n.forEach((i,s)=>{zf(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return dg()<=ie.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",od(n)),this.Ni.getDocumentsMatchingQuery(e,n,nr.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class eR{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.It=i,this.Ui=new Pe(se),this.qi=new Ki(s=>Vf(s),Bf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ui))}}function tR(t,e,n,r){return new eR(t,e,n,r)}async function P_(t,e){const n=Q(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function nR(t,e){const n=Q(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=A.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(y=>{const _=l.docVersions.get(m);ce(_!==null),y.version.compareTo(_)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=J();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function L_(t){const e=Q(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function rR(t,e){const n=Q(t),r=e.snapshotVersion;let i=n.Ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.Ui;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(et.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(y,_,I){return y.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=In(),u=J();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(iR(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(X.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ui=i,s))}function iR(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=In();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function sR(t,e){const n=Q(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oR(t,e){const n=Q(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new Ar(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ui.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ui=n.Ui.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function cd(t,e,n){const r=Q(t),i=r.Ui.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$o(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ui=r.Ui.remove(e),r.qi.delete(i.target)}function Dg(t,e,n){const r=Q(t);let i=X.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Q(a),h=c.qi.get(u);return h!==void 0?A.resolve(c.Ui.get(h)):c.Cs.getTargetData(l,u)}(r,o,Tn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:J())).next(a=>(aR(r,tA(e),a),{documents:a,Hi:s})))}function aR(t,e,n){let r=t.Ki.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class xg{constructor(){this.activeTargetIds=I_()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lR{constructor(){this.Lr=new xg,this.Ur={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.Ur[e]||"not-current"}updateQueryState(e,n,r){this.Ur[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.Ur[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new xg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uR{qr(e){}shutdown(){}}/**
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
 */class Og{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}qr(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const cR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class hR{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
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
 */class dR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);F("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(F("RestConnection","Received: ",l),l),l=>{throw td("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Wi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=cR[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new TN;a.setWithCredentials(!0),a.listenOnce(EN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Nc.NO_ERROR:const u=a.getResponseJson();F("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Nc.TIMEOUT:F("Connection",'RPC "'+e+'" timed out'),o(new V(C.DEADLINE_EXCEEDED,"Request time out"));break;case Nc.HTTP_ERROR:const c=a.getStatus();if(F("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const y=m.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(y)>=0?y:C.UNKNOWN}(h.status);o(new V(d,h.message))}else o(new V(C.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new V(C.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{F("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=wN(),o=_N(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new kN({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");F("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new hR({Hr:y=>{h?F("Connection","Not sending because WebChannel is closed:",y):(c||(F("Connection","Opening WebChannel transport."),u.open(),c=!0),F("Connection","WebChannel sending:",y),u.send(y))},Jr:()=>u.close()}),m=(y,_,I)=>{y.listen(_,g=>{try{I(g)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,pa.EventType.OPEN,()=>{h||F("Connection","WebChannel transport opened.")}),m(u,pa.EventType.CLOSE,()=>{h||(h=!0,F("Connection","WebChannel transport closed"),d.io())}),m(u,pa.EventType.ERROR,y=>{h||(h=!0,td("Connection","WebChannel transport errored:",y),d.io(new V(C.UNAVAILABLE,"The operation could not be completed")))}),m(u,pa.EventType.MESSAGE,y=>{var _;if(!h){const I=y.data[0];ce(!!I);const g=I,f=g.error||((_=g[0])===null||_===void 0?void 0:_.error);if(f){F("Connection","WebChannel received error:",f);const p=f.status;let v=function(S){const k=Ce[S];if(k!==void 0)return E_(k)}(p),E=f.message;v===void 0&&(v=C.INTERNAL,E="Unknown error status: "+p+" with message "+f.message),h=!0,d.io(new V(v,E)),u.close()}else F("Connection","WebChannel received:",I),d.ro(I)}}),m(o,SN.STAT_EVENT,y=>{y.stat===cg.PROXY?F("Connection","Detected buffering proxy"):y.stat===cg.NOPROXY&&F("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Rc(){return typeof document<"u"?document:null}/**
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
 */function Su(t){return new EA(t,!0)}class b_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class M_{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.So=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new b_(e,n)}ko(){return this.state===1||this.state===5||this.Oo()}Oo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Mo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Oo()&&this.Co===null&&(this.Co=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.Bo()))}Lo(e){this.Uo(),this.stream.send(e)}async Bo(){if(this.Oo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(e,n){this.Uo(),this.qo(),this.No.cancel(),this.Do++,e!==4?this.No.reset():n&&n.code===C.RESOURCE_EXHAUSTED?(kn(n.toString()),kn("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):n&&n.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Ko(){}auth(){this.state=1;const e=this.Go(this.Do),n=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Do===n&&this.Qo(r,i)},r=>{e(()=>{const i=new V(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.jo(i)})})}Qo(e,n){const r=this.Go(this.Do);this.stream=this.Wo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.xo=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.Oo()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.jo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Mo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Go(e){return n=>{this.Hs.enqueueAndForget(()=>this.Do===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fR extends M_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.It=s}Wo(e,n){return this.So.wo("Listen",e,n)}onMessage(e){this.No.reset();const n=TA(this.It,e),r=function(i){if(!("targetChange"in i))return X.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?X.min():s.readTime?gn(s.readTime):X.min()}(e);return this.listener.zo(n,r)}Ho(e){const n={};n.database=ud(this.It),n.addTarget=function(i,s){let o;const a=s.target;return o=id(a)?{documents:NA(i,a)}:{query:AA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=A_(i,s.resumeToken):s.snapshotVersion.compareTo(X.min())>0&&(o.readTime=Cl(i,s.snapshotVersion.toTimestamp())),o}(this.It,e);const r=DA(this.It,e);r&&(n.labels=r),this.Lo(n)}Jo(e){const n={};n.database=ud(this.It),n.removeTarget=e,this.Lo(n)}}class pR extends M_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.It=s,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(e,n){return this.So.wo("Write",e,n)}onMessage(e){if(ce(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Yo){this.No.reset();const n=CA(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.tu(r,n)}return ce(!e.writeResults||e.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const e={};e.database=ud(this.It),this.Lo(e)}Zo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>IA(this.It,r))};this.Lo(n)}}/**
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
 */class mR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.So=r,this.It=i,this.su=!1}iu(){if(this.su)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.So.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(C.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.So._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new V(C.UNKNOWN,s.toString())})}terminate(){this.su=!0}}class gR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}cu(){this.ru===0&&(this.au("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.au("Offline"),Promise.resolve())))}lu(e){this.state==="Online"?this.au("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.au("Offline")))}set(e){this.fu(),this.ru=0,e==="Online"&&(this.uu=!1),this.au(e)}au(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}hu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(kn(n),this.uu=!1):F("OnlineStateTracker",n)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class yR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=s,this.gu.qr(o=>{r.enqueueAndForget(async()=>{Kr(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Q(a);l.wu.add(4),await Bo(l),l.yu.set("Unknown"),l.wu.delete(4),await ku(l)}(this))})}),this.yu=new gR(r,i)}}async function ku(t){if(Kr(t))for(const e of t.mu)await e(!0)}async function Bo(t){for(const e of t.mu)await e(!1)}function $_(t,e){const n=Q(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),Xf(n)?Yf(n):Gi(n).Oo()&&Qf(n,e))}function U_(t,e){const n=Q(t),r=Gi(n);n._u.delete(e),r.Oo()&&F_(n,e),n._u.size===0&&(r.Oo()?r.$o():Kr(n)&&n.yu.set("Unknown"))}function Qf(t,e){t.pu.Mt(e.targetId),Gi(t).Ho(e)}function F_(t,e){t.pu.Mt(e),Gi(t).Jo(e)}function Yf(t){t.pu=new vA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),se:e=>t._u.get(e)||null}),Gi(t).start(),t.yu.cu()}function Xf(t){return Kr(t)&&!Gi(t).ko()&&t._u.size>0}function Kr(t){return Q(t).wu.size===0}function V_(t){t.pu=void 0}async function vR(t){t._u.forEach((e,n)=>{Qf(t,e)})}async function wR(t,e){V_(t),Xf(t)?(t.yu.lu(e),Yf(t)):t.yu.set("Unknown")}async function _R(t,e,n){if(t.yu.set("Online"),e instanceof N_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r._u.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r._u.delete(o),r.pu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nl(t,r)}else if(e instanceof ba?t.pu.Gt(e):e instanceof C_?t.pu.Yt(e):t.pu.Wt(e),!n.isEqual(X.min()))try{const r=await L_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.pu.te(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i._u.get(l);u&&i._u.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i._u.get(a);if(!l)return;i._u.set(a,l.withResumeToken(et.EMPTY_BYTE_STRING,l.snapshotVersion)),F_(i,a);const u=new Ar(l.target,a,1,l.sequenceNumber);Qf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Nl(t,r)}}async function Nl(t,e,n){if(!$o(e))throw e;t.wu.add(1),await Bo(t),t.yu.set("Offline"),n||(n=()=>L_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await ku(t)})}function B_(t,e){return e().catch(n=>Nl(t,n,e))}async function Tu(t){const e=Q(t),n=ir(e);let r=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;ER(e);)try{const i=await sR(e.localStore,r);if(i===null){e.du.length===0&&n.$o();break}r=i.batchId,SR(e,i)}catch(i){await Nl(e,i)}z_(e)&&j_(e)}function ER(t){return Kr(t)&&t.du.length<10}function SR(t,e){t.du.push(e);const n=ir(t);n.Oo()&&n.Xo&&n.Zo(e.mutations)}function z_(t){return Kr(t)&&!ir(t).ko()&&t.du.length>0}function j_(t){ir(t).start()}async function kR(t){ir(t).nu()}async function TR(t){const e=ir(t);for(const n of t.du)e.Zo(n.mutations)}async function IR(t,e,n){const r=t.du.shift(),i=qf.from(r,e,n);await B_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Tu(t)}async function CR(t,e){e&&ir(t).Xo&&await async function(n,r){if(i=r.code,fA(i)&&i!==C.ABORTED){const s=n.du.shift();ir(n).Fo(),await B_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Tu(n)}var i}(t,e),z_(t)&&j_(t)}async function Pg(t,e){const n=Q(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Kr(n);n.wu.add(3),await Bo(n),r&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await ku(n)}async function NR(t,e){const n=Q(t);e?(n.wu.delete(2),await ku(n)):e||(n.wu.add(2),await Bo(n),n.yu.set("Unknown"))}function Gi(t){return t.Iu||(t.Iu=function(e,n,r){const i=Q(e);return i.iu(),new fR(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:vR.bind(null,t),Zr:wR.bind(null,t),zo:_R.bind(null,t)}),t.mu.push(async e=>{e?(t.Iu.Fo(),Xf(t)?Yf(t):t.yu.set("Unknown")):(await t.Iu.stop(),V_(t))})),t.Iu}function ir(t){return t.Tu||(t.Tu=function(e,n,r){const i=Q(e);return i.iu(),new pR(n,i.So,i.authCredentials,i.appCheckCredentials,i.It,r)}(t.datastore,t.asyncQueue,{Yr:kR.bind(null,t),Zr:CR.bind(null,t),eu:TR.bind(null,t),tu:IR.bind(null,t)}),t.mu.push(async e=>{e?(t.Tu.Fo(),await Tu(t)):(await t.Tu.stop(),t.du.length>0&&(F("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))})),t.Tu}/**
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
 */class Jf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(C.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(t,e){if(kn("AsyncQueue",`${e}: ${t}`),$o(t))return new V(C.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||z.comparator(n.key,r.key):(n,r)=>z.comparator(n.key,r.key),this.keyedMap=ws(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new Ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Lg{constructor(){this.Eu=new Pe(z.comparator)}track(e){const n=e.doc.key,r=this.Eu.get(n);r?e.type!==0&&r.type===3?this.Eu=this.Eu.insert(n,e):e.type===3&&r.type!==1?this.Eu=this.Eu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Eu=this.Eu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Eu=this.Eu.remove(n):e.type===1&&r.type===2?this.Eu=this.Eu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Eu=this.Eu.insert(n,{type:2,doc:e.doc}):K():this.Eu=this.Eu.insert(n,e)}Au(){const e=[];return this.Eu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Mi{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Mi(e,n,Ei.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class AR{constructor(){this.Ru=void 0,this.listeners=[]}}class RR{constructor(){this.queries=new Ki(e=>h_(e),vu),this.onlineState="Unknown",this.bu=new Set}}async function ep(t,e){const n=Q(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new AR),i)try{s.Ru=await n.onListen(r)}catch(o){const a=Zf(o,`Initialization of query '${od(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.Ru&&e.vu(s.Ru)&&np(n)}async function tp(t,e){const n=Q(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function DR(t,e){const n=Q(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Ru=i}}r&&np(n)}function xR(t,e,n){const r=Q(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function np(t){t.bu.forEach(e=>{e.next()})}class rp{constructor(e,n,r){this.query=e,this.Vu=n,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Su?this.Cu(e)&&(this.Vu.next(e),n=!0):this.xu(e,this.onlineState)&&(this.Nu(e),n=!0),this.Du=e,n}onError(e){this.Vu.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Du&&!this.Su&&this.xu(this.Du,e)&&(this.Nu(this.Du),n=!0),n}xu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Cu(e){if(e.docChanges.length>0)return!0;const n=this.Du&&this.Du.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Nu(e){e=Mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Su=!0,this.Vu.next(e)}}/**
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
 */class H_{constructor(e){this.key=e}}class q_{constructor(e){this.key=e}}class OR{constructor(e,n){this.query=e,this.Uu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=J(),this.mutatedKeys=J(),this.Gu=d_(e),this.Qu=new Ei(this.Gu)}get ju(){return this.Uu}Wu(e,n){const r=n?n.zu:new Lg,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=zf(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let I=!1;d&&m?d.data.isEqual(m.data)?y!==_&&(r.track({type:3,doc:m}),I=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),I=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),I=!0):d&&!m&&(r.track({type:1,doc:d}),I=!0,(l||u)&&(a=!0)),I&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Au();s.sort((u,c)=>function(h,d){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return m(h)-m(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Mi(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Lg,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.Uu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.Uu=this.Uu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Uu=this.Uu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=J(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new q_(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new H_(r))}),n}tc(e){this.Uu=e.Hi,this.Ku=J();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Mi.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class PR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LR{constructor(e){this.key=e,this.nc=!1}}class bR{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ki(a=>h_(a),vu),this.rc=new Map,this.oc=new Set,this.uc=new Pe(z.comparator),this.cc=new Map,this.ac=new Wf,this.hc={},this.lc=new Map,this.fc=bi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function MR(t,e){const n=WR(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await oR(n.localStore,Tn(e));n.isPrimaryClient&&$_(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await $R(n,e,r,a==="current",o.resumeToken)}return i}async function $R(t,e,n,r,i){t._c=(h,d,m)=>async function(y,_,I,g){let f=_.view.Wu(I);f.$i&&(f=await Dg(y.localStore,_.query,!1).then(({documents:E})=>_.view.Wu(E,f)));const p=g&&g.targetChanges.get(_.targetId),v=_.view.applyChanges(f,y.isPrimaryClient,p);return Mg(y,_.targetId,v.Xu),v.snapshot}(t,h,d,m);const s=await Dg(t.localStore,e,!0),o=new OR(e,s.Hi),a=o.Wu(s.documents),l=Vo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Mg(t,n,u.Xu);const c=new PR(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function UR(t,e){const n=Q(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!vu(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await cd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),U_(n.remoteStore,r.targetId),hd(n,r.targetId)}).catch(Mo)):(hd(n,r.targetId),await cd(n.localStore,r.targetId,!0))}async function FR(t,e,n){const r=KR(t);try{const i=await function(s,o){const a=Q(s),l=xe.now(),u=o.reduce((d,m)=>d.add(m.key),J());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=In(),y=J();return a.Gi.getEntries(d,u).next(_=>{m=_,m.forEach((I,g)=>{g.isValidDocument()||(y=y.add(I))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(_=>{c=_;const I=[];for(const g of o){const f=cA(g,c.get(g.key).overlayedDocument);f!=null&&I.push(new hr(g.key,f,a_(f.value.mapValue),jt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,I,o)}).next(_=>{h=_;const I=_.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(d,_.batchId,I)})}).then(()=>({batchId:h.batchId,changes:k_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Pe(se)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await zo(r,i.changes),await Tu(r.remoteStore)}catch(i){const s=Zf(i,"Failed to persist write");n.reject(s)}}async function W_(t,e){const n=Q(t);try{const r=await rR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?ce(o.nc):i.removedDocuments.size>0&&(ce(o.nc),o.nc=!1))}),await zo(n,r,e)}catch(r){await Mo(r)}}function bg(t,e,n){const r=Q(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Q(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&np(a)}(r.eventManager,e),i.length&&r.sc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function VR(t,e,n){const r=Q(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Pe(z.comparator);o=o.insert(s,Ve.newNoDocument(s,X.min()));const a=J().add(s),l=new Eu(X.min(),new Map,new Oe(se),o,a);await W_(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),ip(r)}else await cd(r.localStore,e,!1).then(()=>hd(r,e,n)).catch(Mo)}async function BR(t,e){const n=Q(t),r=e.batch.batchId;try{const i=await nR(n.localStore,e);G_(n,r,null),K_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await zo(n,i)}catch(i){await Mo(i)}}async function zR(t,e,n){const r=Q(t);try{const i=await function(s,o){const a=Q(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ce(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);G_(r,e,n),K_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await zo(r,i)}catch(i){await Mo(i)}}function K_(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function G_(t,e,n){const r=Q(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function hd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||Q_(t,r)})}function Q_(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(U_(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),ip(t))}function Mg(t,e,n){for(const r of n)r instanceof H_?(t.ac.addReference(r.key,e),jR(t,r)):r instanceof q_?(F("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||Q_(t,r.key)):K()}function jR(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.oc.add(r),ip(t))}function ip(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new z(ye.fromString(e)),r=t.fc.next();t.cc.set(r,new LR(n)),t.uc=t.uc.insert(n,r),$_(t.remoteStore,new Ar(Tn(yu(n.path)),r,2,Uf.at))}}async function zo(t,e,n){const r=Q(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Gf.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.zo(i),await async function(a,l){const u=Q(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>A.forEach(l,h=>A.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>A.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!$o(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ui.get(h),m=d.snapshotVersion,y=d.withLastLimboFreeSnapshotVersion(m);u.Ui=u.Ui.insert(h,y)}}}(r.localStore,s))}async function HR(t,e){const n=Q(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await P_(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new V(C.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await zo(n,r.ji)}}function qR(t,e){const n=Q(t),r=n.cc.get(e);if(r&&r.nc)return J().add(r.key);{let i=J();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function WR(t){const e=Q(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=W_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=VR.bind(null,e),e.sc.zo=DR.bind(null,e.eventManager),e.sc.wc=xR.bind(null,e.eventManager),e}function KR(t){const e=Q(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zR.bind(null,e),e}class GR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.It=Su(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return tR(this.persistence,new ZA,e.initialUser,this.It)}yc(e){return new XA(Kf.Bs,this.It)}gc(e){return new lR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>bg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HR.bind(null,this.syncEngine),await NR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new RR}createDatastore(e){const n=Su(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new dR(i));var i;return function(s,o,a,l){return new mR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>bg(this.syncEngine,a,0),o=Og.C()?new Og:new uR,new yR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new bR(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Q(e);F("RemoteStore","RemoteStore shutting down."),n.wu.add(5),await Bo(n),n.gu.shutdown(),n.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Y_(t,e,n){if(!n)throw new V(C.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function YR(t,e,n,r){if(e===!0&&r===!0)throw new V(C.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $g(t){if(!z.isDocumentKey(t))throw new V(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ug(t){if(z.isDocumentKey(t))throw new V(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Pt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new V(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sp(t);throw new V(C.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Fg=new Map;class Vg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new V(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new V(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,YR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class Iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Vg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new V(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new V(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Vg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IN;switch(n.type){case"gapi":const r=n.client;return new RN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Fg.get(e);n&&(F("ComponentProvider","Removing Datastore"),Fg.delete(e),n.terminate())}(this),Promise.resolve()}}function XR(t,e,n,r={}){var i;const s=(t=Pt(t,Iu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&td("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Ke.MOCK_USER;else{o=G0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new V(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Ke(l)}t._authCredentials=new CN(new n_(o,a))}}/**
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
 */class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Jn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Qi{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Qi(this.firestore,e,this._query)}}class Jn extends Qi{constructor(e,n,r){super(e,n,yu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new z(e))}withConverter(e){return new Jn(this.firestore,e,this._path)}}function ya(t,e,...n){if(t=Se(t),Y_("collection","path",e),t instanceof Iu){const r=ye.fromString(e,...n);return Ug(r),new Jn(t,null,r)}{if(!(t instanceof gt||t instanceof Jn))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return Ug(r),new Jn(t.firestore,null,r)}}function _s(t,e,...n){if(t=Se(t),arguments.length===1&&(e=r_.R()),Y_("doc","path",e),t instanceof Iu){const r=ye.fromString(e,...n);return $g(r),new gt(t,null,new z(r))}{if(!(t instanceof gt||t instanceof Jn))throw new V(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return $g(r),new gt(t.firestore,t instanceof Jn?t.converter:null,new z(r))}}/**
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
 */class op{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):kn("Uncaught Error in snapshot listener:",e)}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class JR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=r_.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new V(C.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ZR(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await P_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function eD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tD(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Pg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Pg(e.remoteStore,s)),t.onlineComponents=e}async function tD(t){return t.offlineComponents||(F("FirestoreClient","Using default OfflineComponentProvider"),await ZR(t,new GR)),t.offlineComponents}async function X_(t){return t.onlineComponents||(F("FirestoreClient","Using default OnlineComponentProvider"),await eD(t,new QR)),t.onlineComponents}function nD(t){return X_(t).then(e=>e.syncEngine)}async function Al(t){const e=await X_(t),n=e.eventManager;return n.onListen=MR.bind(null,e.syncEngine),n.onUnlisten=UR.bind(null,e.syncEngine),n}function rD(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new op({next:h=>{s.enqueueAndForget(()=>tp(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new V(C.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new V(C.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new rp(yu(o.path),u,{includeMetadataChanges:!0,ku:!0});return ep(i,c)}(await Al(t),t.asyncQueue,e,n,r)),r.promise}function iD(t,e,n={}){const r=new mn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new op({next:h=>{s.enqueueAndForget(()=>tp(i,c)),h.fromCache&&a.source==="server"?l.reject(new V(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new rp(o,u,{includeMetadataChanges:!0,ku:!0});return ep(i,c)}(await Al(t),t.asyncQueue,e,n,r)),r.promise}class sD{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.Uc=!1,this.qc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.No=new b_(this,"async_queue_retry"),this.Wc=()=>{const n=Rc();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.No.Po()};const e=Rc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.Uc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.Uc){this.Uc=!0,this.Qc=e||!1;const n=Rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.Uc)return new Promise(()=>{});const n=new mn;return this.Hc(()=>this.Uc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.No.reset()}catch(e){if(!$o(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.No.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw kn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=Jf.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.qc.push(i),i}zc(){this.Kc&&K()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.qc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.qc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.qc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.qc.indexOf(e);this.qc.splice(n,1)}}function Bg(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class sr extends Iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new sD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||J_(this),this._firestoreClient.terminate()}}function fr(t,e){const n=typeof t=="object"?t:mf(),r=typeof t=="string"?t:e||"(default)",i=eu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=W0("firestore");s&&XR(i,...s)}return i}function Cu(t){return t._firestoreClient||J_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function J_(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new VN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new JR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class $i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new $i(et.fromBase64String(e))}catch(n){throw new V(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new $i(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Nu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new V(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Au{constructor(e){this._methodName=e}}/**
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
 */class ap{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new V(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new V(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
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
 */const oD=/^__.*__$/;class aD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new hr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}class Z_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new hr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function e1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class lp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.It=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new lp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.It,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return Rl(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(e1(this.sa)&&oD.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class lD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.It=r||Su(e)}da(e,n,r,i=!1){return new lp({sa:e,methodName:n,fa:r,path:Qe.emptyPath(),oa:!1,la:i},this.databaseId,this.It,this.ignoreUndefinedProperties)}}function t1(t){const e=t._freezeSettings(),n=Su(t._databaseId);return new lD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uD(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);cp("Data must be an object, but it was:",o,r);const a=n1(r,o);let l,u;if(s.merge)l=new Ot(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=dd(e,h,n);if(!o.contains(d))throw new V(C.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);i1(c,d)||c.push(d)}l=new Ot(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new aD(new ct(a),l,u)}class Ru extends Au{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ru}}class up extends Au{_toFieldTransform(e){return new oA(e.path,new ho)}isEqual(e){return e instanceof up}}function cD(t,e,n,r){const i=t.da(1,e,n);cp("Data must be an object, but it was:",i,r);const s=[],o=ct.empty();Wr(r,(l,u)=>{const c=hp(e,l,n);u=Se(u);const h=i.ca(c);if(u instanceof Ru)s.push(c);else{const d=Du(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Ot(s);return new Z_(o,a,i.fieldTransforms)}function hD(t,e,n,r,i,s){const o=t.da(1,e,n),a=[dd(e,r,n)],l=[i];if(s.length%2!=0)throw new V(C.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(dd(e,s[d])),l.push(s[d+1]);const u=[],c=ct.empty();for(let d=a.length-1;d>=0;--d)if(!i1(u,a[d])){const m=a[d];let y=l[d];y=Se(y);const _=o.ca(m);if(y instanceof Ru)u.push(m);else{const I=Du(y,_);I!=null&&(u.push(m),c.set(m,I))}}const h=new Ot(u);return new Z_(c,h,o.fieldTransforms)}function Du(t,e){if(r1(t=Se(t)))return cp("Unsupported field value:",e,t),n1(t,e);if(t instanceof Au)return function(n,r){if(!e1(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Du(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Se(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rA(r.It,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=xe.fromDate(n);return{timestampValue:Cl(r.It,i)}}if(n instanceof xe){const i=new xe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Cl(r.It,i)}}if(n instanceof ap)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $i)return{bytesValue:A_(r.It,n._byteString)};if(n instanceof gt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${sp(n)}`)}(t,e)}function n1(t,e){const n={};return i_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,(r,i)=>{const s=Du(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function r1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof xe||t instanceof ap||t instanceof $i||t instanceof gt||t instanceof Au)}function cp(t,e,n){if(!r1(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=sp(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function dd(t,e,n){if((e=Se(e))instanceof Nu)return e._internalPath;if(typeof e=="string")return hp(t,e);throw Rl("Field path arguments must be of type string or ",t,!1,void 0,n)}const dD=new RegExp("[~\\*/\\[\\]]");function hp(t,e,n){if(e.search(dD)>=0)throw Rl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Nu(...e.split("."))._internalPath}catch{throw Rl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new V(C.INVALID_ARGUMENT,a+t+l)}function i1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class s1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fD extends s1{data(){return super.data()}}function dp(t,e){return typeof e=="string"?hp(t,e):e instanceof Nu?e._internalPath:e._delegate._internalPath}/**
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
 */function o1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new V(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pD{}function mD(t,...e){for(const n of e)t=n._apply(t);return t}class gD extends pD{constructor(e,n){super(),this.ma=e,this.pa=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new V(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new _i(i,s);return function(a,l){if(u_(a)===null){const u=c_(a);u!==null&&vD(a,u,l.field)}}(r,o),o}(e._query,this.ma,this.pa);return new Qi(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new Uo(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function yD(t,e="asc"){const n=e,r=dp("orderBy",t);return new gD(r,n)}function vD(t,e,n){if(!n.isEqual(e))throw new V(C.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
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
 */class wD{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ne(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Pi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){const r={};return Wr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new ap(Ne(e.latitude),Ne(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=o_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ao(e));default:return null}}convertTimestamp(e){const n=rr(e);return new xe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ce(O_(r));const i=new lo(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(n)||kn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function _D(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Es{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class a1 extends s1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ma(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ma extends a1{data(e={}){return super.data(e)}}class l1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Es(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ma(this._firestore,this._userDataWriter,r.key,r,new Es(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new V(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Ma(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ma(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Es(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:ED(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ED(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function SD(t){t=Pt(t,gt);const e=Pt(t.firestore,sr);return rD(Cu(e),t._key).then(n=>u1(e,t,n))}class fp extends wD{constructor(e){super(),this.firestore=e}convertBytes(e){return new $i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function kD(t){t=Pt(t,Qi);const e=Pt(t.firestore,sr),n=Cu(e),r=new fp(e);return o1(t._query),iD(n,t._query).then(i=>new l1(e,r,t,i))}function Xr(t,e,n,...r){t=Pt(t,gt);const i=Pt(t.firestore,sr),s=t1(i);let o;return o=typeof(e=Se(e))=="string"||e instanceof Nu?hD(s,"updateDoc",t._key,e,n,r):cD(s,"updateDoc",t._key,e),pp(i,[o.toMutation(t._key,jt.exists(!0))])}function TD(t){return pp(Pt(t.firestore,sr),[new jf(t._key,jt.none())])}function zg(t,e){const n=Pt(t.firestore,sr),r=_s(t),i=_D(t.converter,e);return pp(n,[uD(t1(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,jt.exists(!1))]).then(()=>r)}function ID(t,...e){var n,r,i;t=Se(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Bg(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(Bg(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,u,c;if(t instanceof gt)u=Pt(t.firestore,sr),c=yu(t._key.path),l={next:h=>{e[o]&&e[o](u1(u,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Pt(t,Qi);u=Pt(h.firestore,sr),c=h._query;const d=new fp(u);l={next:m=>{e[o]&&e[o](new l1(u,d,h,m))},error:e[o+1],complete:e[o+2]},o1(t._query)}return function(h,d,m,y){const _=new op(y),I=new rp(d,_,m);return h.asyncQueue.enqueueAndForget(async()=>ep(await Al(h),I)),()=>{_.bc(),h.asyncQueue.enqueueAndForget(async()=>tp(await Al(h),I))}}(Cu(u),c,a,l)}function pp(t,e){return function(n,r){const i=new mn;return n.asyncQueue.enqueueAndForget(async()=>FR(await nD(n),r,i)),i.promise}(Cu(t),e)}function u1(t,e,n){const r=n.docs.get(e._key),i=new fp(t);return new a1(t,i,e._key,r,new Es(n.hasPendingWrites,n.fromCache),e.converter)}function CD(){return new up("serverTimestamp")}(function(t,e=!0){(function(n){Wi=n})(ji),Ur(new tr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new sr(new NN(n.getProvider("auth-internal")),new xN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new V(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new lo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Zt(hg,"3.7.1",t),Zt(hg,"3.7.1","esm2017")})();let Dc=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");function ND({add_habit:t}){const[e,n]=O.exports.useState([]),[r,i]=O.exports.useState([{name:null,id:Dc(),range:{from:"free",to:"free"},dates:[],index:0}]),[s,o]=O.exports.useState(null),[a,l]=O.exports.useState(null),[u,c]=O.exports.useState(0),[h,d]=O.exports.useState(""),[m,y]=O.exports.useState(""),_=O.exports.useRef(null);function I($){const Y=$.target.files[0];if(B0(Y)){const D=new FileReader;D.readAsDataURL(Y),D.addEventListener("load",B=>o(B.target.result)),l(Y),o(URL.createObjectURL(Y))}}function g($){const Y=$.target.id;let D;Y==="hard"?D=2:Y==="medium"?D=1:D=0,c(D)}function f($){d($.target.value)}function p($){y($.target.value)}function v($){n(Y=>[...Y,$])}function E($){n(Y=>Y.filter(D=>D!==$))}function S(){const $={name:`TODO ${r.length}`,range:{from:"free",to:"free"},id:Dc(),dates:[],index:r.length};i(Y=>[...Y,$]),setTimeout(()=>_.current.scrollIntoView(),33)}function k($){i(Y=>Y.filter(D=>D.id!==$).map((D,B)=>({...D,index:B})))}function T($,Y){const D=r.findIndex(G=>G.id===$),B=r[D];i(G=>G.slice(0,D).concat({...B,name:Y}).concat(r.slice(D+1)))}function b($,Y,D){const B=r.findIndex(U=>U.id===$),G=r[B],R={...G.range};if(D==="to"&&(Y=!Y),Y)R[D]="free";else{const U=new Date,j=U.valueOf(),ae=24*1e3*3600,he=D==="from"?"to":"from",Nt=new Date(new Date(R[he]).valueOf()+ae).valueOf(),tt=D==="from"?(re,le)=>re>=le:(re,le)=>re<=le;let H;tt(j,Nt)?H=R[he]:H=`${U.getFullYear()}-${U.getMonth()+1}-${U.getDate()}`,R[D]=H}i(U=>U.slice(0,B).concat({...G,range:R}).concat(U.slice(B+1)))}function x($,Y,D){const B=r.findIndex(j=>j.id===$),G=r[B],R={...G.range},U=Y==="from"?"to":"from";if(R[U]!=="free"){const j=Y==="from"?(Nt,tt)=>Nt<=tt:(Nt,tt)=>Nt>=tt,ae=new Date(D),he=new Date(R[U]).valueOf();j(he,ae)&&(D=R[U])}R[Y]=D,i(j=>j.slice(0,B).concat({...G,range:R}).concat(j.slice(B+1)))}function te($){$.preventDefault(),t({name:h,description:m,id:Dc(),difficulty:u,tags:e,timestamp:CD()},a,r)}async function pe(){const $=await YT(500,500);l($),o(()=>{const Y=new FileReader;Y.readAsDataURL($),Y.addEventListener("load",D=>o(D.target.result))})}return O.exports.useEffect(()=>{pe()},[]),L("form",{onSubmit:te,className:"creation-content",children:[L("div",{className:"head",children:[w($0,{src:s,alt:"image",left:L("label",{htmlFor:"image-input",className:"image-label-input",children:[w("input",{type:"file",accept:".jpg, .jpeg, .png, .gif",id:"image-input",onChange:I}),w("span",{className:"icon"})]}),right:w("button",{className:"delete-image",type:"button",onClick:pe})}),L("div",{className:"details",children:[L("label",{htmlFor:"name-input",children:[w("span",{children:"Name: "}),w("input",{id:"name-input",required:!0,type:"text",value:h,onChange:f})]}),L("label",{htmlFor:"description-input",children:[w("span",{children:"Description: "}),w("textarea",{required:!0,name:"description-input",id:"description-input",value:m,onChange:p})]})]})]}),L("div",{className:"difficulty-wrapper",children:[w("p",{className:"difficulty-label",children:"Difficulty:"}),w(U0,{difficulty:u,update:g})]}),L("div",{className:"tags-wrapper",children:[w("p",{className:"tags-label",children:"Tags:"}),w(F0,{tags:e,add_tag:v,remove_tag:E})]}),L("div",{className:"todos-wrapper",children:[w("p",{className:"title",children:"TODO"}),w("button",{className:"add-todo",type:"button",onClick:S}),w("div",{className:"todos",children:r.map($=>$.name&&w(V0,{todo:$,delete_todo:k,change_name:T,toggle_range:b,change_date:x},$.id))})]}),w("button",{ref:_,type:"submit",className:"button-of-creation",children:"Create"})]})}function AD(t,e){for(let n=0;n<e.length;n++)if(e[n]==t[0]){for(let r=0;r<t.length&&t[r]==e[n+r];r++)if(r==t.length-1)return!0}return!1}function RD({habits:t,update:e,add_habit:n}){const r="_storage_or_key",[i,s]=O.exports.useState(()=>{let D;return D=sessionStorage.getItem(r),D?D=JSON.parse(D):D=!1,sessionStorage.setItem(r,JSON.stringify(D)),D}),o="_current_tags_",a="_inactive_tags_",[l,u]=O.exports.useState(()=>{const D=sessionStorage.getItem(o);if(!D)return[];const B=JSON.parse(D).filter(G=>t.some(R=>R.tags.includes(G)));return sessionStorage.setItem(o,JSON.stringify(B)),B}),[c,h]=O.exports.useState(()=>{const D=sessionStorage.getItem(a);let B;B=[],D&&(B=JSON.parse(D).filter(G=>t.some(R=>R.tags.includes(G))));for(let G of t)for(let R of G.tags)!B.includes(R)&&!l.includes(R)&&B.push(R);return sessionStorage.setItem(a,JSON.stringify(B)),B}),[d,m]=O.exports.useState([...c]),[y,_]=O.exports.useState(!1),I=t.map(D=>l[i?"some":"every"](G=>D.tags.includes(G))||!l.length?w(GT,{habit:D,update:e},D.id):null).filter(D=>D!==null),[g,f]=O.exports.useState(!1),[p,v]=O.exports.useState(""),E=O.exports.useRef(null);function S(D){s(D),sessionStorage.setItem(r,JSON.stringify(D))}function k(D){u(B=>{const G=[...B,D];return sessionStorage.setItem(o,JSON.stringify(G)),G}),h(B=>{const G=B.filter(R=>R!==D);return sessionStorage.setItem(a,JSON.stringify(G)),G}),m(B=>B.filter(G=>G!==D))}function T(D){u(B=>{const G=B.filter(R=>R!==D);return sessionStorage.setItem(o,JSON.stringify(G)),G}),h(B=>{const G=[...B,D];return sessionStorage.setItem(h,JSON.stringify(G)),G}),m(()=>(E.current.value="",[...b().filter(B=>!l.includes(B)),D]))}function b(){const D=[];for(let B of t)for(let G of B.tags)D.includes(G)||D.push(G);return D}function x(D){let B;D?B=[...b(),...D]:B=b(),sessionStorage.setItem(o,""),sessionStorage.setItem(a,JSON.stringify(B)),u([]),h(B),m([...B])}function te(D,B,G){x(D.tags),$(),n(D,B,G)}function pe(){v(w(ND,{add_habit:te})),f(!0)}function $(){f(!1),setTimeout(()=>v(""),330)}function Y(D){D.target.value.trim()?m(c.filter(B=>AD(D.target.value,B))):m([...c])}return L("div",{className:"homepage",children:[w(Uh,{shown:g,content:p,close:$}),w(QT,{}),I.length?I:L("div",{className:"mep",children:[w("p",{className:"icon",children:"\\\uFF08\uFF1Ew\uFF1C\uFF09/"}),w("p",{className:"message",children:"Nothing found, create a new habit, or reset your filters"})]}),w("button",{className:"add-habit",onClick:pe}),L("aside",{className:"aside",style:{right:y?"0":"calc(-1 * var(--width))"},children:[w("input",{type:"checkbox",className:"open-aside",value:y,onChange:D=>_(D.target.checked)}),L("div",{className:"filters",children:[L("label",{htmlFor:"filter-search-bar",children:[w("span",{}),w("input",{id:"filter-search-bar",placeholder:"search tag...",type:"text",ref:E,onChange:Y})]}),w("div",{className:"current-filters",children:l.map(D=>L("div",{className:"tag",onClick:()=>T(D),children:[w("button",{className:"remove-tag"}),w("p",{children:D})]},`current-thing-${D}`))}),w("div",{className:"controls",children:w("button",{className:"clear-filters",onClick:()=>x(null),children:"Clear all tags"})}),w($h,{checked:i,change:S,left:"AND",right:"OR",changeOnLabelClick:!0}),w("div",{className:"divider"}),w("div",{className:"tags",children:d.length?d.map(D=>L("div",{className:"tag",onClick:()=>k(D),children:[w("button",{className:"add-tag"}),w("p",{children:D})]},`tag-${D}`)):w("p",{className:"no-pan",children:"No tags found!"})})]})]})]})}function jg({path:t,icon:e,alt:n}){return L("span",{className:"underlink",children:[w(L0,{to:t,children:w("img",{src:e,alt:n})}),w("span",{})]})}const DD="/Habit-Tracker/assets/home-circle.76c9ce06.svg",xD="/Habit-Tracker/assets/information.ef867515.svg",OD={apiKey:"AIzaSyDDhGCX2_jnpycekYzMDz6R7GJD8Cm4Vps",authDomain:"habit-tracker-b36e7.firebaseapp.com",projectId:"habit-tracker-b36e7",storageBucket:"habit-tracker-b36e7.appspot.com",messagingSenderId:"96592229665",appId:"1:96592229665:web:2557ae25281c8f4f3c3a60",measurementId:"G-PB7ZRWD8SC"};var PD="firebase",LD="9.12.1";/**
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
 */Zt(PD,LD,"app");function mp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function c1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bD=c1,h1=new Io("auth","Firebase",c1());/**
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
 */const Hg=new ff("@firebase/auth");function $a(t,...e){Hg.logLevel<=ie.ERROR&&Hg.error(`Auth (${ji}): ${t}`,...e)}/**
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
 */function rn(t,...e){throw gp(t,...e)}function en(t,...e){return gp(t,...e)}function d1(t,e,n){const r=Object.assign(Object.assign({},bD()),{[e]:n});return new Io("auth","Firebase",r).create(e,{appName:t.name})}function MD(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(t,"argument-error"),d1(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h1.create(t,...e)}function q(t,e,...n){if(!t)throw gp(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $a(e),new Error(e)}function Cn(t,e){t||dn(e)}/**
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
 */const qg=new Map;function fn(t){Cn(t instanceof Function,"Expected a class definition");let e=qg.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qg.set(t,e),e)}/**
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
 */function $D(t,e){const n=eu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(fl(s,e!=null?e:{}))return i;rn(i,"already-initialized")}return n.initialize({options:e})}function UD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FD(){return Wg()==="http:"||Wg()==="https:"}function Wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function VD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FD()||eI()||"connection"in navigator)?navigator.onLine:!0}function BD(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=ZT()||tI()}get(){return VD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yp(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class f1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const jD=new jo(3e4,6e4);function HD(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xu(t,e,n,r,i={}){return p1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Co(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),f1.fetch()(m1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function p1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zD),e);try{const i=new WD(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw va(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw d1(t,c,u);rn(t,c)}}catch(i){if(i instanceof sn)throw i;rn(t,"network-request-failed")}}async function qD(t,e,n,r,i={}){const s=await xu(t,e,n,r,i);return"mfaPendingCredential"in s&&rn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function m1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?yp(t.config,i):`${t.config.apiScheme}://${i}`}class WD{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),jD.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function KD(t,e){return xu(t,"POST","/v1/accounts:delete",e)}async function GD(t,e){return xu(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function bs(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QD(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=vp(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:bs(xc(i.auth_time)),issuedAtTime:bs(xc(i.iat)),expirationTime:bs(xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function vp(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return $a("JWT malformed, contained fewer than 3 sections"),null;try{const s=H0(r);return s?JSON.parse(s):($a("Failed to decode base64 JWT payload"),null)}catch(s){return $a("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function YD(t){const e=vp(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function mo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof sn&&XD(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function XD({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class JD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class g1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=bs(this.lastLoginAt),this.creationTime=bs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Dl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mo(t,GD(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?tx(s.providerUserInfo):[],a=ex(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new g1(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ZD(t){const e=Se(t);await Dl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ex(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function tx(t){return t.map(e=>{var{providerId:n}=e,r=mp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nx(t,e){const n=await p1(t,{},async()=>{const r=Co({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=m1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",f1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class go{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):YD(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await nx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new go;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new go,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
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
 */function Rn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Rr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=mp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new JD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new g1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mo(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return QD(this,e)}reload(){return ZD(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Rr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Dl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await mo(this,KD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,I=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:p,emailVerified:v,isAnonymous:E,providerData:S,stsTokenManager:k}=n;q(p&&k,e,"internal-error");const T=go.fromJSON(this.name,k);q(typeof p=="string",e,"internal-error"),Rn(h,e.name),Rn(d,e.name),q(typeof v=="boolean",e,"internal-error"),q(typeof E=="boolean",e,"internal-error"),Rn(m,e.name),Rn(y,e.name),Rn(_,e.name),Rn(I,e.name),Rn(g,e.name),Rn(f,e.name);const b=new Rr({uid:p,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:E,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:T,createdAt:g,lastLoginAt:f});return S&&Array.isArray(S)&&(b.providerData=S.map(x=>Object.assign({},x))),I&&(b._redirectEventId=I),b}static async _fromIdTokenResponse(e,n,r=!1){const i=new go;i.updateFromServerResponse(n);const s=new Rr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Dl(s),s}}/**
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
 */class y1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}y1.type="NONE";const Kg=y1;/**
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
 */function Ua(t,e,n){return`firebase:${t}:${e}:${n}`}class Si{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ua(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ua("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Rr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Si(fn(Kg),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||fn(Kg);const o=Ua(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Rr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Si(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Si(s,e,r))}}/**
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
 */function Gg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(v1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(S1(e))return"Blackberry";if(k1(e))return"Webos";if(wp(e))return"Safari";if((e.includes("chrome/")||w1(e))&&!e.includes("edge/"))return"Chrome";if(E1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function v1(t=Ze()){return/firefox\//i.test(t)}function wp(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function w1(t=Ze()){return/crios\//i.test(t)}function _1(t=Ze()){return/iemobile/i.test(t)}function E1(t=Ze()){return/android/i.test(t)}function S1(t=Ze()){return/blackberry/i.test(t)}function k1(t=Ze()){return/webos/i.test(t)}function Ou(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function rx(t=Ze()){var e;return Ou(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ix(){return nI()&&document.documentMode===10}function T1(t=Ze()){return Ou(t)||E1(t)||k1(t)||S1(t)||/windows phone/i.test(t)||_1(t)}function sx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function I1(t,e=[]){let n;switch(t){case"Browser":n=Gg(Ze());break;case"Worker":n=`${Gg(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
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
 */class ox{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class ax{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qg(this),this.idTokenSubscription=new Qg(this),this.beforeStateQueue=new ox(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await Dl(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=BD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Si.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=I1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Pu(t){return Se(t)}class Qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=mI(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function lx(t,e,n){const r=Pu(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=C1(e),{host:o,port:a}=ux(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||cx()}function C1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ux(t){const e=C1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yg(o)}}}function Yg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function cx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class N1{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
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
 */async function ki(t,e){return qD(t,"POST","/v1/accounts:signInWithIdp",HD(t,e))}/**
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
 */const hx="http://localhost";class Br extends N1{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=mp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ki(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ki(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ki(e,n)}buildRequest(){const e={requestUri:hx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Co(n)}return e}}/**
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
 */class _p{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ho extends _p{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ln extends Ho{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
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
 */class ln extends Ho{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class bn extends Ho{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class Mn extends Ho{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */class Ui{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Rr._fromIdTokenResponse(e,r,i),o=Xg(r);return new Ui({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xg(r);return new Ui({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class xl extends sn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,xl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new xl(e,n,r,i)}}function A1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?xl._fromErrorAndOperation(t,s,e,r):s})}async function dx(t,e,n=!1){const r=await mo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ui._forOperation(t,"link",r)}/**
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
 */async function fx(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await mo(t,A1(i,s,e,t),n);q(o.idToken,i,"internal-error");const a=vp(o.idToken);q(a,i,"internal-error");const{sub:l}=a;return q(t.uid===l,i,"user-mismatch"),Ui._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&rn(i,"user-mismatch"),o}}/**
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
 */async function px(t,e,n=!1){const r="signIn",i=await A1(t,r,e),s=await Ui._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function mx(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function gx(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function yx(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function vx(t){return Se(t).signOut()}const Ol="__sak";/**
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
 */class R1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ol,"1"),this.storage.removeItem(Ol),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function wx(){const t=Ze();return wp(t)||Ou(t)}const _x=1e3,Ex=10;class D1 extends R1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wx()&&sx(),this.fallbackToPolling=T1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);ix()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Ex):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_x)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}D1.type="LOCAL";const Sx=D1;/**
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
 */class x1 extends R1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}x1.type="SESSION";const O1=x1;/**
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
 */function kx(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Lu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Lu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await kx(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lu.receivers=[];/**
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
 */function Ep(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Tx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Ep("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function tn(){return window}function Ix(t){tn().location.href=t}/**
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
 */function P1(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function Cx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nx(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Ax(){return P1()?self:null}/**
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
 */const L1="firebaseLocalStorageDb",Rx=1,Pl="firebaseLocalStorage",b1="fbase_key";class qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bu(t,e){return t.transaction([Pl],e?"readwrite":"readonly").objectStore(Pl)}function Dx(){const t=indexedDB.deleteDatabase(L1);return new qo(t).toPromise()}function pd(){const t=indexedDB.open(L1,Rx);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Pl,{keyPath:b1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Pl)?e(r):(r.close(),await Dx(),e(await pd()))})})}async function Jg(t,e,n){const r=bu(t,!0).put({[b1]:e,value:n});return new qo(r).toPromise()}async function xx(t,e){const n=bu(t,!1).get(e),r=await new qo(n).toPromise();return r===void 0?null:r.value}function Zg(t,e){const n=bu(t,!0).delete(e);return new qo(n).toPromise()}const Ox=800,Px=3;class M1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Px)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return P1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lu._getInstance(Ax()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Cx(),!this.activeServiceWorker)return;this.sender=new Tx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nx()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pd();return await Jg(e,Ol,"1"),await Zg(e,Ol),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>xx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=bu(i,!1).getAll();return new qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ox)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}M1.type="LOCAL";const Lx=M1;/**
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
 */function bx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Mx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",bx().appendChild(r)})}function $x(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new jo(3e4,6e4);/**
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
 */function $1(t,e){return e?fn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sp extends N1{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ki(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ki(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ki(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ux(t){return px(t.auth,new Sp(t),t.bypassAuthState)}function Fx(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),fx(n,new Sp(t),t.bypassAuthState)}async function Vx(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),dx(n,new Sp(t),t.bypassAuthState)}/**
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
 */class U1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ux;case"linkViaPopup":case"linkViaRedirect":return Vx;case"reauthViaPopup":case"reauthViaRedirect":return Fx;default:rn(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bx=new jo(2e3,1e4);async function zx(t,e,n){const r=Pu(t);MD(t,e,_p);const i=$1(r,n);return new Tr(r,"signInViaPopup",e,i).executeNotNull()}class Tr extends U1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Tr.currentPopupAction&&Tr.currentPopupAction.cancel(),Tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Ep();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Bx.get())};e()}}Tr.currentPopupAction=null;/**
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
 */const jx="pendingRedirect",Fa=new Map;class Hx extends U1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fa.get(this.auth._key());if(!e){try{const r=await qx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fa.set(this.auth._key(),e)}return this.bypassAuthState||Fa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qx(t,e){const n=Gx(e),r=Kx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Wx(t,e){Fa.set(t._key(),e)}function Kx(t){return fn(t._redirectPersistence)}function Gx(t){return Ua(jx,t.config.apiKey,t.name)}async function Qx(t,e,n=!1){const r=Pu(t),i=$1(r,e),o=await new Hx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Yx=10*60*1e3;class Xx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!F1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yx&&this.cachedEventUids.clear(),this.cachedEventUids.has(ey(e))}saveEventToCache(e){this.cachedEventUids.add(ey(e)),this.lastProcessedEventTime=Date.now()}}function ey(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function F1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F1(t);default:return!1}}/**
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
 */async function Zx(t,e={}){return xu(t,"GET","/v1/projects",e)}/**
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
 */const e2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,t2=/^https?/;async function n2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Zx(t);for(const n of e)try{if(r2(n))return}catch{}rn(t,"unauthorized-domain")}function r2(t){const e=fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!t2.test(n))return!1;if(e2.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const i2=new jo(3e4,6e4);function ty(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function s2(t){return new Promise((e,n)=>{var r,i,s;function o(){ty(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ty(),n(en(t,"network-request-failed"))},timeout:i2.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const a=$x("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},Mx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Va=null,e})}let Va=null;function o2(t){return Va=Va||s2(t),Va}/**
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
 */const a2=new jo(5e3,15e3),l2="__/auth/iframe",u2="emulator/auth/iframe",c2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},h2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function d2(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?yp(e,u2):`https://${t.config.authDomain}/${l2}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=h2.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Co(r).slice(1)}`}async function f2(t){const e=await o2(t),n=tn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:d2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:c2,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{s(o)},a2.get());function l(){tn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const p2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},m2=500,g2=600,y2="_blank",v2="http://localhost";class ny{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function w2(t,e,n,r=m2,i=g2){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},p2),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ze().toLowerCase();n&&(a=w1(u)?y2:n),v1(u)&&(e=e||v2,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(rx(u)&&a!=="_self")return _2(e||"",a),new ny(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new ny(h)}function _2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const E2="__/auth/handler",S2="emulator/auth/handler";function ry(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof _p){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",pI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ho){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${k2(t)}?${Co(a).slice(1)}`}function k2({config:t}){return t.emulator?yp(t,S2):`https://${t.authDomain}/${E2}`}/**
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
 */const Oc="webStorageSupport";class T2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=O1,this._completeRedirectFn=Qx,this._overrideRedirectResult=Wx}async _openPopup(e,n,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=ry(e,n,r,fd(),i);return w2(e,o,Ep())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Ix(ry(e,n,r,fd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await f2(e),r=new Xx(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Oc,{type:Oc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Oc];o!==void 0&&n(!!o),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=n2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return T1()||wp()||Ou()}}const I2=T2;var iy="@firebase/auth",sy="0.20.10";/**
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
 */class C2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function N2(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function A2(t){Ur(new tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:I1(t)},c=new ax(a,l,u);return UD(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new tr("auth-internal",e=>{const n=Pu(e.getProvider("auth").getImmediate());return(r=>new C2(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zt(iy,sy,N2(t)),Zt(iy,sy,"esm2017")}/**
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
 */const R2=5*60,D2=K0("authIdTokenMaxAge")||R2;let oy=null;const x2=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>D2)return;const i=n==null?void 0:n.token;oy!==i&&(oy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function $t(t=mf()){const e=eu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=$D(t,{popupRedirectResolver:I2,persistence:[Lx,Sx,O1]}),r=K0("authTokenSyncURL");if(r){const s=x2(r);gx(n,s,()=>s(n.currentUser)),mx(n,o=>s(o))}const i=q0("auth");return i&&lx(n,`http://${i}`),n}A2("Browser");/**
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
 */const V1="firebasestorage.googleapis.com",B1="storageBucket",O2=2*60*1e3,P2=10*60*1e3,L2=1e3;/**
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
 */class Te extends sn{constructor(e,n,r=0){super(Pc(e),`Firebase Storage: ${n} (${Pc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Pc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Pc(t){return"storage/"+t}function kp(){const t="An unknown error occurred, please check the error payload for server response.";return new Te("unknown",t)}function b2(t){return new Te("object-not-found","Object '"+t+"' does not exist.")}function M2(t){return new Te("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te("unauthenticated",t)}function U2(){return new Te("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function F2(t){return new Te("unauthorized","User does not have permission to access '"+t+"'.")}function z1(){return new Te("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function j1(){return new Te("canceled","User canceled the upload/download.")}function V2(t){return new Te("invalid-url","Invalid URL '"+t+"'.")}function B2(t){return new Te("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function z2(){return new Te("no-default-bucket","No default bucket found. Did you set the '"+B1+"' property when initializing the app?")}function H1(){return new Te("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function j2(){return new Te("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function H2(){return new Te("no-download-url","The given file does not have any download URLs.")}function md(t){return new Te("invalid-argument",t)}function q1(){return new Te("app-deleted","The Firebase app was deleted.")}function q2(t){return new Te("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ms(t,e){return new Te("invalid-format","String does not match format '"+t+"': "+e)}function hs(t){throw new Te("internal-error","Internal error: "+t)}/**
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
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw B2(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(v){v.path_=decodeURIComponent(v.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),y={bucket:1,path:3},_=n===V1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,I="([^?#]*)",g=new RegExp(`^https?://${_}/${i}/${I}`,"i"),p=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:u},{regex:g,indices:{bucket:1,path:2},postModify:u}];for(let v=0;v<p.length;v++){const E=p[v],S=E.regex.exec(e);if(S){const k=S[E.indices.bucket];let T=S[E.indices.path];T||(T=""),r=new Et(k,T),E.postModify(r);break}}if(r==null)throw V2(e);return r}}class W2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function K2(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...I){u||(u=!0,e.apply(null,I))}function h(I){i=setTimeout(()=>{i=null,t(m,l())},I)}function d(){s&&clearTimeout(s)}function m(I,...g){if(u){d();return}if(I){d(),c.call(null,I,...g);return}if(l()||o){d(),c.call(null,I,...g);return}r<64&&(r*=2);let p;a===1?(a=2,p=0):p=(r+Math.random())*1e3,h(p)}let y=!1;function _(I){y||(y=!0,d(),!u&&(i!==null?(I||(a=2),clearTimeout(i),h(0)):I||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function G2(t){t(!1)}/**
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
 */function Q2(t){return t!==void 0}function Y2(t){return typeof t=="function"}function X2(t){return typeof t=="object"&&!Array.isArray(t)}function Mu(t){return typeof t=="string"||t instanceof String}function ay(t){return Tp()&&t instanceof Blob}function Tp(){return typeof Blob<"u"}function ly(t,e,n,r){if(r<e)throw md(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw md(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Yi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function W1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Dr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Dr||(Dr={}));/**
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
 */function K1(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class J2{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new wa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Dr.NO_ERROR,l=s.getStatus();if((!a||K1(l,this.additionalRetryCodes_))&&this.retry){const c=s.getErrorCode()===Dr.ABORT;r(!1,new wa(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new wa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Q2(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=kp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?q1():j1();o(l)}else{const l=z1();o(l)}};this.canceled_?n(!1,new wa(!1,null,!0)):this.backoffId_=K2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&G2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Z2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function tO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rO(t,e,n,r,i,s,o=!0){const a=W1(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return tO(u,e),Z2(u,n),eO(u,s),nO(u,r),new J2(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function iO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sO(...t){const e=iO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Tp())return new Blob(t);throw new Te("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function oO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aO(t){return atob(t)}/**
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
 */const Yt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Lc{constructor(e,n){this.data=e,this.contentType=n||null}}function lO(t,e){switch(t){case Yt.RAW:return new Lc(G1(e));case Yt.BASE64:case Yt.BASE64URL:return new Lc(Q1(t,e));case Yt.DATA_URL:return new Lc(cO(e),hO(e))}throw kp()}function G1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function uO(t){let e;try{e=decodeURIComponent(t)}catch{throw Ms(Yt.DATA_URL,"Malformed data URL.")}return G1(e)}function Q1(t,e){switch(t){case Yt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ms(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Yt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ms(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aO(e)}catch{throw Ms(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Y1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ms(Yt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=dO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cO(t){const e=new Y1(t);return e.base64?Q1(Yt.BASE64,e.rest):uO(e.rest)}function hO(t){return new Y1(t).contentType}function dO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class $n{constructor(e,n){let r=0,i="";ay(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(ay(this.data_)){const r=this.data_,i=oO(r,e,n);return i===null?null:new $n(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new $n(r,!0)}}static getBlob(...e){if(Tp()){const n=e.map(r=>r instanceof $n?r.data_:r);return new $n(sO.apply(null,n))}else{const n=e.map(o=>Mu(o)?lO(Yt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new $n(i,!0)}}uploadData(){return this.data_}}/**
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
 */function X1(t){let e;try{e=JSON.parse(t)}catch{return null}return X2(e)?e:null}/**
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
 */function fO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function J1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function mO(t,e){return e}class nt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||mO}}let _a=null;function gO(t){return!Mu(t)||t.length<2?t:J1(t)}function Z1(){if(_a)return _a;const t=[];t.push(new nt("bucket")),t.push(new nt("generation")),t.push(new nt("metageneration")),t.push(new nt("name","fullPath",!0));function e(s,o){return gO(o)}const n=new nt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new nt("size");return i.xform=r,t.push(i),t.push(new nt("timeCreated")),t.push(new nt("updated")),t.push(new nt("md5Hash",null,!0)),t.push(new nt("cacheControl",null,!0)),t.push(new nt("contentDisposition",null,!0)),t.push(new nt("contentEncoding",null,!0)),t.push(new nt("contentLanguage",null,!0)),t.push(new nt("contentType",null,!0)),t.push(new nt("metadata","customMetadata",!0)),_a=t,_a}function yO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Et(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function vO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return yO(r,t),r}function eE(t,e,n){const r=X1(e);return r===null?null:vO(t,r,n)}function wO(t,e,n,r){const i=X1(e);if(i===null||!Mu(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=Yi(d,n,r),y=W1({alt:"media",token:u});return m+y})[0]}function tE(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Gr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function yn(t){if(!t)throw kp()}function Ip(t,e){function n(r,i){const s=eE(t,i,e);return yn(s!==null),s}return n}function _O(t,e){function n(r,i){const s=eE(t,i,e);return yn(s!==null),wO(s,i,t.host,t._protocol)}return n}function Wo(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=U2():i=$2():n.getStatus()===402?i=M2(t.bucket):n.getStatus()===403?i=F2(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Cp(t){const e=Wo(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=b2(t.path)),s.serverResponse=i.serverResponse,s}return n}function EO(t,e,n){const r=e.fullServerUrl(),i=Yi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Gr(i,s,Ip(t,n),o);return a.errorHandler=Cp(e),a}function SO(t,e,n){const r=e.fullServerUrl(),i=Yi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Gr(i,s,_O(t,n),o);return a.errorHandler=Cp(e),a}function kO(t,e){const n=e.fullServerUrl(),r=Yi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new Gr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Cp(e),a}function TO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function nE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=TO(null,e)),r}function IO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let p="";for(let v=0;v<2;v++)p=p+Math.random().toString().slice(2);return p}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=nE(e,r,i),c=tE(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=$n.getBlob(h,r,d);if(m===null)throw H1();const y={name:u.fullPath},_=Yi(s,t.host,t._protocol),I="POST",g=t.maxUploadRetryTime,f=new Gr(_,I,Ip(t,n),g);return f.urlParams=y,f.headers=o,f.body=m.uploadData(),f.errorHandler=Wo(e),f}class Ll{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Np(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{yn(!1)}return yn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function CO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=nE(e,r,i),a={name:o.fullPath},l=Yi(s,t.host,t._protocol),u="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=tE(o,n),d=t.maxUploadRetryTime;function m(_){Np(_);let I;try{I=_.getResponseHeader("X-Goog-Upload-URL")}catch{yn(!1)}return yn(Mu(I)),I}const y=new Gr(l,u,m,d);return y.urlParams=a,y.headers=c,y.body=h,y.errorHandler=Wo(e),y}function NO(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const c=Np(u,["active","final"]);let h=null;try{h=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{yn(!1)}h||yn(!1);const d=Number(h);return yn(!isNaN(d)),new Ll(d,r.size(),c==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Gr(n,o,s,a);return l.headers=i,l.errorHandler=Wo(e),l}const uy=256*1024;function AO(t,e,n,r,i,s,o,a){const l=new Ll(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw j2();const u=l.total-l.current;let c=u;i>0&&(c=Math.min(c,i));const h=l.current,d=h+c;let m="";c===0?m="finalize":u===c?m="upload, finalize":m="upload";const y={"X-Goog-Upload-Command":m,"X-Goog-Upload-Offset":`${l.current}`},_=r.slice(h,d);if(_===null)throw H1();function I(v,E){const S=Np(v,["active","final"]),k=l.current+c,T=r.size();let b;return S==="final"?b=Ip(e,s)(v,E):b=null,new Ll(k,T,S==="final",b)}const g="POST",f=e.maxUploadRetryTime,p=new Gr(n,g,I,f);return p.headers=y,p.body=_.uploadData(),p.progressCallback=a||null,p.errorHandler=Wo(t),p}const lt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function bc(t){switch(t){case"running":case"pausing":case"canceling":return lt.RUNNING;case"paused":return lt.PAUSED;case"success":return lt.SUCCESS;case"canceled":return lt.CANCELED;case"error":return lt.ERROR;default:return lt.ERROR}}/**
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
 */class RO{constructor(e,n,r){if(Y2(e)||n!=null||r!=null)this.next=e,this.error=n!=null?n:void 0,this.complete=r!=null?r:void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Jr(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class DO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw hs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xO extends DO{initXhr(){this.xhr_.responseType="text"}}function yr(){return new xO}/**
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
 */class OO{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Z1(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals("canceled"))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(K1(i.status,[]))if(s)i=z1();else{this.sleepTime=Math.max(this.sleepTime*2,L2),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals("canceled")?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=CO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=NO(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,yr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=uy*this._chunkMultiplier,n=new Ll(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=AO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,yr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){uy*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=EO(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,yr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=IO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,yr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=j1(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=bc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new RO(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(bc(this._state)){case lt.SUCCESS:Jr(this._resolve.bind(null,this.snapshot))();break;case lt.CANCELED:case lt.ERROR:const n=this._reject;Jr(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(bc(this._state)){case lt.RUNNING:case lt.PAUSED:e.next&&Jr(e.next.bind(e,this.snapshot))();break;case lt.SUCCESS:e.complete&&Jr(e.complete.bind(e))();break;case lt.CANCELED:case lt.ERROR:e.error&&Jr(e.error.bind(e,this._error))();break;default:e.error&&Jr(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class zr{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new zr(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return J1(this._location.path)}get storage(){return this._service}get parent(){const e=fO(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new zr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw q2(e)}}function PO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new OO(t,new $n(e),n)}function LO(t){t._throwIfRoot("getDownloadURL");const e=SO(t.storage,t._location,Z1());return t.storage.makeRequestWithTokens(e,yr).then(n=>{if(n===null)throw H2();return n})}function bO(t){t._throwIfRoot("deleteObject");const e=kO(t.storage,t._location);return t.storage.makeRequestWithTokens(e,yr)}function MO(t,e){const n=pO(t._location.path,e),r=new Et(t._location.bucket,n);return new zr(t.storage,r)}/**
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
 */function $O(t){return/^[A-Za-z]+:\/\//.test(t)}function UO(t,e){return new zr(t,e)}function rE(t,e){if(t instanceof Ap){const n=t;if(n._bucket==null)throw z2();const r=new zr(n,n._bucket);return e!=null?rE(r,e):r}else return e!==void 0?MO(t,e):t}function FO(t,e){if(e&&$O(e)){if(t instanceof Ap)return UO(t,e);throw md("To use ref(service, url), the first argument must be a Storage instance.")}else return rE(t,e)}function cy(t,e){const n=e==null?void 0:e[B1];return n==null?null:Et.makeFromBucketSpec(n,t)}function VO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:G0(i,t.app.options.projectId))}class Ap{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=V1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=O2,this._maxUploadRetryTime=P2,this._requests=new Set,i!=null?this._bucket=Et.makeFromBucketSpec(i,this._host):this._bucket=cy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=cy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ly("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ly("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new zr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new W2(q1());{const o=rO(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const hy="@firebase/storage",dy="0.9.12";/**
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
 */const iE="storage";function fy(t,e,n){return t=Se(t),PO(t,e,n)}function py(t){return t=Se(t),LO(t)}function BO(t){return t=Se(t),bO(t)}function Mc(t,e){return t=Se(t),FO(t,e)}function $c(t=mf(),e){t=Se(t);const r=eu(t,iE).getImmediate({identifier:e}),i=W0("storage");return i&&zO(r,...i),r}function zO(t,e,n,r={}){VO(t,e,n,r)}function jO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Ap(n,r,i,e,ji)}function HO(){Ur(new tr(iE,jO,"PUBLIC").setMultipleInstances(!0)),Zt(hy,dy,""),Zt(hy,dy,"esm2017")}HO();function qO(){const[t,e]=O.exports.useState(!1),[n,r]=O.exports.useState([]);async function i(){const f=new ln;await zx($t(),f)}function s(){vx($t())}async function o(f,p,v){try{let E="https://www.google.com/images/spin-32.gif";f.image=E;const S=$t().currentUser.uid,k=await zg(ya(fr(),`users/${S}/habits`),f),T=ya(k,"todos"),b=`users/${S}/${p.name}`,x=Mc($c(),b),te=await fy(x,p),pe=await py(x),$=te.metadata.fullPath;for(let Y=0;Y<v.length;Y++){const D=await zg(T,v[Y]);await Xr(D,{refId:D.id})}await Xr(k,{image:pe,storageURI:$,refId:k.id})}catch(E){console.log(`ERROR : ${E}`)}}async function a(f,p){try{const v=$t().currentUser.uid,E=Mc($c(),f.storageURI),S=_s(fr(),`users/${v}/habits`,f.refId),k=`users/${v}/${f.refId}/${p.name}`,T=Mc($c(),k);let b,x,te;Xr(S,{image:"https://www.google.com/images/spin-32.gif"}),b=await fy(T,p),x=await py(T),te=b.metadata.fullPath,await Xr(S,{image:x,storageURI:te}),await BO(E)}catch(v){console.log(`ERROR WHILE ATTEMPMTING TO REPLACE IMAGE: ${v}`)}}async function l(f,p){try{const v=$t().currentUser.uid,E=_s(fr(),`users/${v}/habits/${f}`);await Xr(E,{[p.label]:p.value})}catch(v){console.log(`ERROR UPDATING DETAIL: ${v}`)}}function u(f,p,v,E){const S=n.findIndex($=>$.refId===p),k=n[S],T=k.todos.findIndex($=>$.refId===v),b=k.todos[T];let x,te,pe;return x=[...b.dates],x.includes(E)?x=x.filter($=>$!==E):x.push(E),te={...b,dates:x},pe=k.todos.slice(0,T).concat(te).concat(k.todos.slice(T+1)),f.slice(0,S).concat({...k,todos:pe}).concat(f.slice(S+1))}async function c(f,p,v){try{const E=$t().currentUser.uid,S=_s(fr(),`users/${E}/habits/${f}/todos/${p}`),k=await SD(S);let T;r(b=>u(b,f,p,v)),T=k.data().dates,T.includes(v)?T=T.filter(b=>b!==v):T.push(v),await Xr(S,{dates:T})}catch(E){console.log(E)}}async function h(f){try{const p=$t().currentUser.uid,v=_s(fr(),`users/${p}/habits/${f}`);await TD(v),window.location.href="/"}catch(p){console.log(`ERROR, COULDN'T DELETE HABIT : ${p}`)}}function d(f,p,v,E){Ak(f,p,v);const S=n.findIndex($=>$.id===f),k=n[S],T=k.todos.findIndex($=>$.id===p),b=k.todos[T],x=b.dates.filter($=>Mr(new Date($),v)),te=k.todos.slice(0,T).concat({...b,range:v,dates:x}).concat(k.todos.slice(T+1));let pe;if(pe=n.slice(0,S).concat({...k,todos:te}).concat(n.slice(S+1)),E){const $=m(pe,k.id);pe=$.data,Rk(E,$.todo)}r(pe)}function m(f,p){const v=f.findIndex(T=>T.id===p),E=f[v],S={name:E.name,id:Math.random().toString(16).slice(-10),range:{from:"free",to:"free"},dates:[...E.todos[0].dates]},k=[...E.todos.slice(1),S];return k.unshift({...E.todos[0],dates:[]}),{data:f.slice(0,v).concat({...E,todos:k}).concat(f.slice(v+1)),todo:S}}function y(f,p){const v=n.findIndex(x=>x.id===f),E=n[v],S=new Date,k=`${S.getFullYear()}-${String(S.getMonth()+1).padStart(2,"0")}-${String(S.getDate()).padStart(2,"0")}`,T=E.todos[0].dates.filter(x=>x!=k),b=[{...E.todos[0],dates:T},...E.todos.slice(1),p];r(x=>x.slice(0,v).concat({...E,todos:b}).concat(x.slice(v+1))),Dk(f,p)}function _(f,p){xk(f,p);const v=n.findIndex(k=>k.id===f),E=n[v],S=E.todos.filter(k=>k.id!==p);r(k=>k.slice(0,v).concat({...E,todos:S}).concat(k.slice(v+1)))}function I(f,p,v){Ok(f,p,v);const E=n.findIndex(x=>x.id===f),S=n[E],k=S.todos.findIndex(x=>x.id===p),T=S.todos[k],b=S.todos.slice(0,k).concat({...T,name:v}).concat(S.todos.slice(k+1));r(x=>x.slice(0,E).concat({...S,todos:b}).concat(x.slice(E+1)))}async function g(){const f=$t().currentUser.uid,p=mD(ya(fr(),`users/${f}/habits`),yD("timestamp","asc"));ID(p,v=>v.docChanges().forEach(async E=>{if(E.type==="removed")r(S=>S.filter(k=>k.id!==E.doc.id));else{const S=E.doc.data(),k=ya(fr(),`users/${f}/habits/${S.refId}/todos`),T=await kD(k),b=[];T.forEach(x=>b.push(x.data())),console.log(b),b.sort((x,te)=>x.index-te.index),r(x=>{const te=x.findIndex(pe=>pe.id===S.id);return~te?x.slice(0,te).concat({...S,todos:b}).concat(x.slice(te+1)):[...x,S]})}}))}return O.exports.useEffect(()=>{X0(OD)},[]),O.exports.useEffect(()=>{yx($t(),()=>{e(()=>!!$t().currentUser),$t().currentUser&&g()})},[]),w("div",{className:"App",children:L(UT,{children:[L("nav",{className:"navbar",children:[w("div",{className:"logo",children:"Kerosene"}),L("ul",{className:"links",children:[w("li",{children:w(jg,{path:"/Habit-Tracker",icon:DD})}),w("li",{children:w(jg,{path:"/Habit-Tracker/info",icon:xD})}),t?w("li",{children:w("button",{className:"log-out-button",onClick:s})}):null]})]}),t?L(PT,{children:[w(gs,{element:w(RD,{habits:n,update:c,add_habit:o}),path:"/Habit-Tracker"}),w(gs,{element:w(VT,{}),path:"/Habit-Tracker/info"}),n.map(f=>w(gs,{path:`/Habit-Tracker/habits/${f.id}`,element:w(WT,{habit:f,update_cell:c,update_detail:l,change_image:a,delete_habit:h,toggle_habit_range:d,add_todo_to_habit:y,delete_todo:_,rename_todo:I})},f.id)),w(gs,{path:"*",element:w("p",{children:"Not found"})})]}):w("div",{className:"sign-in-content",children:w("button",{onClick:i,children:"Log In"})}),L("footer",{className:"footer",children:["A project by"," ",w("a",{href:"https://ol.reddit.com/u/_by_me",target:"_blank",children:"u/_by_me"}),", \xA9 2022"]})]})})}Fc.createRoot(document.getElementById("root")).render(w(Sy.StrictMode,{children:w(qO,{})}));

!function o(a,s,u){function l(t,e){if(!s[t]){if(!a[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(c)return c(t,!0);var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}var i=s[t]={exports:{}};a[t][0].call(i.exports,function(e){return l(a[t][1][e]||e)},i,i.exports,o,a,s,u)}return s[t].exports}for(var c="function"==typeof require&&require,e=0;e<u.length;e++)l(u[e]);return l}({1:[function(e,t,n){var r={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};t.exports=function(e,t){return"number"!=typeof t||r[e]?t:t+"px"}},{}],2:[function(e,t,n){"use strict";var r=/[A-Z]/g,i=/^ms-/,o={};function a(e){return"-"+e.toLowerCase()}t.exports=function(e){if(o.hasOwnProperty(e))return o[e];var t=e.replace(r,a);return o[e]=i.test(t)?"-"+t:t}},{}],3:[function(e,t,n){"use strict";var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},v=this&&this.__awaiter||function(e,a,s,u){return new(s=s||Promise)(function(n,t){function r(e){try{o(u.next(e))}catch(e){t(e)}}function i(e){try{o(u.throw(e))}catch(e){t(e)}}function o(e){var t;e.done?n(e.value):((t=e.value)instanceof s?t:new s(function(e){e(t)})).then(r,i)}o((u=u.apply(e,a||[])).next())})},g=this&&this.__generator||function(n,r){var i,o,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},r=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a},s=this&&this.__spread||function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e};function i(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0});function u(){return new Promise(function(e){requestAnimationFrame(function(){e()})})}var l,c=o(e("add-px-to-style")),f=o(e("hyphenate-style-name"));if(n.isBrowser="undefined"!=typeof window,n.isBrowser){var h=document.createElement("style");h.setAttribute("id","keyframesjs-stylesheet"),document.head.appendChild(h),l=h.sheet}function p(){}function y(e){if(!Object.keys(e).length)return"";var t="";for(var n in e)t+=f.default(n)+":"+c.default(n,e[n])+";";return t}var d={onStart:p,onBeforeStart:p,onIteration:p,onEnd:p,onQueueComplete:p,onCancel:p},m=(b.isSupported=function(){return void 0!==document.body.style.animationName},b.prototype.freeze=function(){var t=this,e=b.ruleCache[this.mountedElement.style.animationName];if(e){var n=a({},getComputedStyle(this.mountedElement));e.forEach(function(e){t.mountedElement.style[e]=n[e]}),this.frozenStyles=s(new Set(this.frozenStyles.concat(e)))}},b.prototype.unfreeze=function(){var t=this;this.frozenStyles.length&&(this.frozenStyles.forEach(function(e){t.mountedElement.style[e]=""}),this.frozenStyles=[])},b.prototype.reset=function(){return v(this,void 0,void 0,function(){return g(this,function(e){switch(e.label){case 0:return this.log("reset"),this.playing=!1,this.removeEvents(),this.mountedElement.style.animationPlayState="running",this.mountedElement.style.animation="none",[4,u()];case 1:return e.sent(),[2,this]}})})},b.prototype.pause=function(){return this.mountedElement.style.animationPlayState="paused",this},b.prototype.resume=function(){return this.mountedElement.style.animationPlayState="running",this},b.prototype.play=function(t,n){var r=this;this.log("play",t);var e=n||{},i=e.onBeforeStart,o=void 0===i?null:i,a=e.onStart,s=void 0===a?null:a,u=e.onIteration,l=void 0===u?null:u,c=e.onEnd,f=void 0===c?null:c,h=e.onCancel,p=void 0===h?null:h;if(!0===this.playing&&(this.log("cancelled"),this.previousCancel&&(this.queueStore=[],this.previousCancel())),p&&(this.previousCancel=p),this.mountedElement.style.animationName===this.getAnimationName(t))return this.freeze(),requestAnimationFrame(function(){return v(r,void 0,void 0,function(){return g(this,function(e){switch(e.label){case 0:return[4,this.reset()];case 1:return e.sent(),this.play(t,n),this.unfreeze(),[2]}})})}),this;function y(e,t){var n=e+"Listener";r.mountedElement.removeEventListener(e,r[n]),r[n]=t,r.mountedElement.addEventListener(e,r[n])}this.playing=!0;var d=Array.isArray(t)?t.length:1,m=b.playCSS(t);return this.log("onBeforeStart"),o&&o(),this.mountedElement.style.animationPlayState="running",this.mountedElement.style.animation=m,y("animationiteration",function(e){r.log("animationiteration",e),l&&l(e)}),y("animationend",function(e){--d||(r.log("ended",e),r.playing=!1,f&&!d&&f(e))}),y("animationstart",function(e){r.log("onStart",e),s&&s(e)}),this},b.prototype.playNext=function(){var t=this,e=this.queueStore[this.queueStore.length-1];e?this.log("playNext",e):this.log("Queue Complete"),e?this.play(e,{onEnd:function(e){t.queueStore.pop(),t.callbacks.onEnd&&t.callbacks.onEnd(e),t.playNext()},onCancel:this.callbacks.onCancel,onIteration:this.callbacks.onIteration}):this.callbacks.onQueueComplete&&this.callbacks.onQueueComplete()},b.prototype.removeEvents=function(){return this.log("events cleared"),this.mountedElement.removeEventListener("animationiteration",this.animationiterationListener),this.mountedElement.removeEventListener("animationend",this.animationendListener),this.mountedElement.removeEventListener("animationstart",this.animationstartListener),this},b.prototype.updateCallbacks=function(e){e&&(this.callbacks=a(a({},this.callbacks),e))},b.prototype.queue=function(e,t){var n=this,r=this.queueStore.length;this.updateCallbacks(a(a({},d),t));var i,o=(i=e,Array.isArray(i)?s(i):"object"==typeof i?a({},i):i.toString());return Array.isArray(o)?this.queueStore=o.reverse().concat(this.queueStore):this.queueStore.unshift(o),this.log("queued",e,r),r?this.playing||this.playNext():requestAnimationFrame(function(){return v(n,void 0,void 0,function(){return g(this,function(e){switch(e.label){case 0:return[4,this.reset()];case 1:return e.sent(),this.playNext(),[2]}})})}),this},b.prototype.chain=function(e,t){return this.queue(e,t),this},b.prototype.resetQueue=function(){return v(this,void 0,void 0,function(){return g(this,function(e){switch(e.label){case 0:return this.log("resetQueue"),[4,u()];case 1:return e.sent(),this.removeEvents(),this.queueStore=[],[4,this.reset()];case 2:return e.sent(),[2,this]}})})},b.prototype.loop=function(r,i){return void 0===i&&(i={}),v(this,void 0,void 0,function(){var t,n=this;return g(this,function(e){switch(e.label){case 0:return this.log("loop",r),[4,this.resetQueue()];case 1:return e.sent(),(t=function(){n.queue(r,a(a({},i),{onQueueComplete:function(){return t()}}))})(),[2,this]}})})},b.prototype.getAnimationName=function(e){var t=this;return Array.isArray(e)?e.map(function(e){return t.getAnimationName(e)}).join(", "):"string"==typeof e?e.split(" ")[0]:e.name},b.playCSS=function(e){function t(e){var t=a({duration:"0s",timingFunction:"ease",delay:"0s",iterationCount:1,direction:"normal",fillMode:"forwards"},e);return[t.name,t.duration,t.timingFunction,t.delay,t.iterationCount,t.direction,t.fillMode].join(" ")}if(Array.isArray(e)){for(var n=[],r=0;r<e.length;r+=1){var i=e[r];n.push("string"==typeof i?i:t(i))}return n.join(", ")}return"string"==typeof e?e:t(e)},b.generateCSS=function(e){var t="@keyframes "+e.name+" {";for(var n in e)"name"!==n&&"media"!==n&&"complete"!==n&&(t+=n+" {"+y(e[n])+"}");return t+="}",e.media&&(t="@media "+e.media+"{"+t+"}"),t},b.generate=function(e){this.addToRuleCache(e);var t=this.generateCSS(e),n=b.rules.indexOf(e.name);-1<n&&(b.sheet.deleteRule(n),b.rules.splice(n,1));var r=(b.sheet.cssRules||b.sheet.rules).length;b.sheet.insertRule(t,r),b.rules[r]=e.name},b.define=function(e){if(Array.isArray(e))for(var t=0;t<e.length;t+=1)this.generate(e[t]);else this.generate(e)},b.defineCSS=function(e){if(Array.isArray(e)){for(var t="",n=0;n<e.length;n+=1)t+=this.generateCSS(e[n]);return t}return this.generateCSS(e)},b.addToRuleCache=function(e){if(!this.ruleCache[e.name]){var t=Object.values(e).filter(function(e){return"object"==typeof e}).map(function(e){return Object.keys(e)}).flat();this.ruleCache[e.name]=s(new Set(t))}},b.prototype.log=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];this.debug},b.sheet=l,b.rules=[],b.ruleCache={},b.clearRules=function(){for(b.rules=[];b.sheet.cssRules.length;)b.sheet.deleteRule(0)},b);function b(e,t){void 0===t&&(t=!1),this.playing=!1,this.previousCancel=p,this.debug=!1,this.queueStore=[],this.callbacks=d,this.animationstartListener=p,this.animationendListener=p,this.animationiterationListener=p,this.animationcancelListener=p,this.mountedElement=e,this.frozenStyles=[],this.debug=t}n.isBrowser&&(window.Keyframes=m),i(e("./pathfinder")),i(e("./spritesheet")),n.default=m},{"./pathfinder":4,"./spritesheet":5,"add-px-to-style":1,"hyphenate-style-name":2}],4:[function(e,t,n){"use strict";var S=this&&this.__assign||function(){return(S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};Object.defineProperty(n,"__esModule",{value:!0});var r=e("./keyframes");function w(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),{x:e,y:t}}function x(e){return e*e*e}function C(e){return 3*e*e*(1-e)}function O(e){return 3*e*(1-e)*(1-e)}function E(e){return(1-e)*(1-e)*(1-e)}if(n.bezierPath=function(e,t,n,r,i){var o=S({bezierSteps:100,transform:""},e);null==i&&(i=t);for(var a,s,u,l,c,f,h=w(t[0],t[1]),p=w(n[0],n[1]),y=w(r[0],r[1]),d=w(i[0],i[1]),m={},v=1/o.bezierSteps,g=0;g<=1.01;g+=v){var b=(a=g,s=h,u=d,l=y,c=p,f=void 0,(f=w()).x=s.x*x(a)+u.x*C(a)+l.x*O(a)+c.x*E(a),f.y=s.y*x(a)+u.y*C(a)+l.y*O(a)+c.y*E(a),f);m[100-Math.round(100*g)+"%"]={transform:"translate("+b.x+"px,"+b.y+"px) "+o.transform}}return Object.assign({},e,m)},n.circlePath=function(e,t,n){for(var r,i,o,a=S({circleSteps:100,transform:""},e),s={},u=w(t[0],t[1]),l=1.5*Math.PI,c=Math.PI/180,f=100/a.circleSteps,h=360/a.circleSteps,p=0;p<=a.circleSteps;p+=1){var y=(r=l+h*p*c,i=n,{x:(o=u).x+i*Math.cos(r),y:o.y+i*Math.sin(r)});s[Math.round(f*p)+"%"]={transform:"translate("+y.x+"px,"+y.y+"px) "+a.transform}}for(var d in e){var m=e[d];for(var v in s){var g=s[v];if(d===v&&g.transform&&m.transform){s[v].transform=g.transform+" "+m.transform;break}}}return Object.assign({},e,s)},r.isBrowser){var i=window;i.Keyframes&&(i.Keyframes.bezierPath=n.bezierPath,i.Keyframes.circlePath=n.circlePath)}},{"./keyframes":3}],5:[function(e,t,n){"use strict";var m=this&&this.__assign||function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},v=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};Object.defineProperty(n,"__esModule",{value:!0});var r=e("./keyframes");if(n.spriteSheet=function(e){for(var t=e.rows,n=void 0===t?1:t,r=e.cols,i=void 0===r?1:r,o=e.width,a=void 0===o?0:o,s=e.height,u=void 0===s?0:s,l=v(e,["rows","cols","width","height"]),c=m(m(m({},{offsetX:0,offsetY:0,count:n*i,spriteWidth:a/i,spriteHeight:u/n,loop:!0}),{rows:n,cols:i,width:a,height:u}),l),f=100/c.count,h={},p=c.offsetX,y=c.offsetY,d=0;d<c.count;d+=1)h[Math.round(f*d)+"%"]={backgroundPosition:"-"+p+"px -"+y+"px"},p>=c.width-c.spriteWidth?y+=c.spriteHeight:p+=c.spriteWidth;return Object.assign({},{name:c.name},h)},n.playSpriteSheet=function(e,t,n){return void 0===n&&(n="infinite"),n&&n<0&&(n="infinite"),e+" "+t+" steps(1) "+n},r.isBrowser){var i=window;i.Keyframes&&(i.Keyframes.spriteSheet=n.spriteSheet,i.Keyframes.playSpriteSheet=n.playSpriteSheet)}},{"./keyframes":3}]},{},[3]);

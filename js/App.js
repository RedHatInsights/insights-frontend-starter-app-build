!function(e){function n(n){for(var r,o,i=n[0],a=n[1],c=n[2],s=0,u=[];s<i.length;s++)o=i[s],k[o]&&u.push(k[o][0]),k[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(T&&T(n);u.length;)u.shift()();return A.push.apply(A,c||[]),t()}function t(){for(var e,n=0;n<A.length;n++){for(var t=A[n],r=!0,o=1;o<t.length;o++){var i=t[o];0!==k[i]&&(r=!1)}r&&(A.splice(n--,1),e=I(I.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!O[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===g&&P()}(e,n),r&&r(e,n)};var o,i=!0,a="f2d60390cd842f7bda63",c=1e4,s={},u=[],l=[];var d=[],p="idle";function f(e){p=e;for(var n=0;n<d.length;n++)d[n].call(null,e)}var h,v,m,y=0,g=0,b={},w={},O={};function E(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return i=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=I.p+""+a+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;w={},b={},O=e.c,m=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in v={},k)j(t);return"prepare"===p&&0===g&&0===y&&P(),n})}function j(e){O[e]?(w[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=I.p+""+e+"."+a+".hot-update.js",n.appendChild(t)}(e)):b[e]=!0}function P(){f("ready");var e=h;if(h=null,e)if(i)Promise.resolve().then(function(){return D(i)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(E(t));e.resolve(n)}}function D(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,o,i,c;function l(e){for(var n=[e],t={},r=n.map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),a=o.id,c=o.chain;if((i=x[a])&&!i.hot._selfAccepted){if(i.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:a};if(i.hot._main)return{type:"unaccepted",chain:c,moduleId:a};for(var s=0;s<i.parents.length;s++){var u=i.parents[s],l=x[u];if(l){if(l.hot._declinedDependencies[a])return{type:"declined",chain:c.concat([u]),moduleId:a,parentId:u};-1===n.indexOf(u)&&(l.hot._acceptedDependencies[a]?(t[u]||(t[u]=[]),d(t[u],[a])):(delete t[u],n.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function d(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],g={},b=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var _;c=E(w);var j=!1,P=!1,D=!1,A="";switch((_=v[w]?l(c):{type:"disposed",moduleId:w}).chain&&(A="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+A));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+A));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(j=new Error("Aborted because "+c+" is not accepted"+A));break;case"accepted":n.onAccepted&&n.onAccepted(_),P=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),D=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return f("abort"),Promise.reject(j);if(P)for(c in g[c]=v[c],d(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(h[c]||(h[c]=[]),d(h[c],_.outdatedDependencies[c]));D&&(d(y,[_.moduleId]),g[c]=b)}var H,M=[];for(r=0;r<y.length;r++)c=y[r],x[c]&&x[c].hot._selfAccepted&&g[c]!==b&&M.push({module:c,errorHandler:x[c].hot._selfAccepted});f("dispose"),Object.keys(O).forEach(function(e){!1===O[e]&&function(e){delete k[e]}(e)});for(var S,T,C=y.slice();C.length>0;)if(c=C.pop(),i=x[c]){var N={},U=i.hot._disposeHandlers;for(o=0;o<U.length;o++)(t=U[o])(N);for(s[c]=N,i.hot.active=!1,delete x[c],delete h[c],o=0;o<i.children.length;o++){var q=x[i.children[o]];q&&((H=q.parents.indexOf(c))>=0&&q.parents.splice(H,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=x[c]))for(T=h[c],o=0;o<T.length;o++)S=T[o],(H=i.children.indexOf(S))>=0&&i.children.splice(H,1);for(c in f("apply"),a=m,g)Object.prototype.hasOwnProperty.call(g,c)&&(e[c]=g[c]);var R=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(i=x[c])){T=h[c];var B=[];for(r=0;r<T.length;r++)if(S=T[r],t=i.hot._acceptedDependencies[S]){if(-1!==B.indexOf(t))continue;B.push(t)}for(r=0;r<B.length;r++){t=B[r];try{t(T)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:T[r],error:e}),n.ignoreErrored||R||(R=e)}}}for(r=0;r<M.length;r++){var L=M[r];c=L.module,u=[c];try{I(c)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||R||(R=t),R||(R=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||R||(R=e)}}return R?(f("fail"),Promise.reject(R)):(f("idle"),new Promise(function(e){e(y)}))}var x={},k={0:0},A=[];function I(n){if(x[n])return x[n].exports;var t=x[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:D,status:function(e){if(!e)return p;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:s[e]};return o=void 0,n}(n),parents:(l=u,u=[],l),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=x[e];if(!n)return I;var t=function(t){return n.hot.active?(x[t]?-1===x[t].parents.indexOf(e)&&x[t].parents.push(e):(u=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),u=[]),I(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return I[e]},set:function(n){I[e]=n}}};for(var i in I)Object.prototype.hasOwnProperty.call(I,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(t,i,r(i));return t.e=function(e){return"ready"===p&&f("prepare"),g++,I.e(e).then(n,function(e){throw n(),e});function n(){g--,"prepare"===p&&(b[e]||j(e),0===g&&0===y&&P())}},t.t=function(e,n){return 1&n&&(e=t(e)),I.t(e,-2&n)},t}(n)),t.l=!0,t.exports}I.e=function(e){var n=[],t=k[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=k[e]=[n,r]});n.push(t[2]=r);var o,i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.charset="utf-8",a.timeout=120,I.nc&&a.setAttribute("nonce",I.nc),a.src=function(e){return I.p+"js/"+({1:"SamplePage",2:"Rules"}[e]||e)+".js"}(e),o=function(n){a.onerror=a.onload=null,clearTimeout(c);var t=k[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,t[1](i)}k[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:a})},12e4);a.onerror=a.onload=o,i.appendChild(a)}return Promise.all(n)},I.m=e,I.c=x,I.d=function(e,n,t){I.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},I.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},I.t=function(e,n){if(1&n&&(e=I(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(I.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)I.d(t,r,function(n){return e[n]}.bind(null,r));return t},I.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return I.d(n,"a",n),n},I.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},I.p="/beta/apps/starter/",I.oe=function(e){throw console.error(e),e},I.h=function(){return a};var H=window.webpackJsonp=window.webpackJsonp||[],M=H.push.bind(H);H.push=n,H=H.slice();for(var S=0;S<H.length;S++)n(H[S]);var T=M;A.push([284,4]),t()}({160:function(e,n,t){(n=e.exports=t(5)(!1)).i(t(283),""),n.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n",""])},161:function(e,n,t){"use strict";t.d(n,"a",function(){return w});var r=t(178),o=t.n(r),i=t(189),a=t.n(i),c=t(53),s=t.n(c),u=t(54),l=t.n(u),d=t(55),p=t.n(d),f=t(56),h=t.n(f),v=t(57),m=t.n(v),y=t(2),g=t.n(y),b=t(162);function w(e){return function(n){function t(e){var n;return s()(this,t),(n=p()(this,h()(t).call(this,e))).state={component:null},n}return m()(t,n),l()(t,[{key:"componentDidMount",value:function(){var n=a()(o.a.mark(function n(){var t,r;return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?g.a.createElement(e,this.props):g.a.createElement(b.Skeleton,null)}}]),t}(y.Component)}},282:function(e,n,t){var r=t(160);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=t(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(160,function(){var n=t(160);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(n)}),e.hot.dispose(function(){i()})},284:function(e,n,t){"use strict";t.r(n);var r,o=t(2),i=t.n(o),a=t(24),c=t.n(a),s=t(170),u=t(95),l=t(185),d=t.n(l),p=t(197);var f=t(186),h=t.n(f),v=t(53),m=t.n(v),y=t(54),g=t.n(y),b=t(55),w=t.n(b),O=t(56),E=t.n(O),_=t(57),j=t.n(_),P=t(1),D=t.n(P),x=t(173),k=t(187),A=t.n(k),I=t(188),H=t.n(I),M=t(159),S=t(174),T=t(175),C=t(161),N=t(195),U=t.n(N),q=Object(C.a)(function(){return t.e(1).then(t.bind(null,291))}),R=Object(C.a)(function(){return t.e(2).then(t.bind(null,292))}),B={samplepage:"/samplepage",rules:"/rules"},L=function(e){var n=e.component,t=e.rootClass,r=H()(e,["component","rootClass"]),o=document.getElementById("root");return o.removeAttribute("class"),o.classList.add("page__".concat(t),"pf-c-page__main"),o.setAttribute("role","main"),i.a.createElement(M.a,A()({},r,{component:n}))};L.propTypes={component:D.a.func,rootClass:D.a.string};var J=function(e){var n=e.childProps.location.pathname;return i.a.createElement(S.a,null,i.a.createElement(L,{path:B.samplepage,component:q,rootClass:"samplepage"}),i.a.createElement(L,{path:B.rules,component:R,rootClass:"rules"}),i.a.createElement(M.a,{render:function(){return U()(B,function(e){return e===n})?null:i.a.createElement(T.a,{to:B.samplepage})}}))},G=(t(282),function(e){function n(){return m()(this,n),w()(this,E()(n).apply(this,arguments))}return j()(n,e),g()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("insights"),insights.chrome.navigation(z()),this.appNav=insights.chrome.on("APP_NAVIGATION",function(n){return e.props.history.push("/".concat(n.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation(z())})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return i.a.createElement(J,{childProps:this.props})}}]),n}(o.Component));G.propTypes={history:D.a.object};var X=Object(x.a)(Object(u.connect)()(G));function z(){var e=window.location.pathname.split("/").slice(-1)[0];return[{title:"Actions",id:"actions"},{title:"Rules",id:"rules"}].map(function(n){return h()({},n,{active:n.id===e})})}var V=function(e){var n="/",t=e.split("/");return t.shift(),"beta"===t[0]&&(t.shift(),n="/beta/"),"".concat(n).concat(t[0],"/").concat(t[1]||"")};c.a.render(i.a.createElement(u.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return r=new d.a({},[Object(p.a)()].concat(n))}().getStore()},i.a.createElement(s.a,{basename:V(window.location.pathname)},i.a.createElement(X,null))),document.getElementById("root"))}});
//# sourceMappingURL=App.js.map
!function(e){function t(t){for(var r,l,a=t[0],c=t[1],s=t[2],d=0,f=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&f.push(o[l][0]),o[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(u&&u(t);f.length;)f.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={0:0},i=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var i,a=document.createElement("script");a.charset="utf-8",a.timeout=120,l.nc&&a.setAttribute("nonce",l.nc),a.src=function(e){return l.p+""+({1:"modal"}[e]||e)+"."+{1:"0a6cbb2f9852362c3a11"}[e]+".js"}(e);var c=new Error;i=function(t){a.onerror=a.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",c.name="ChunkLoadError",c.type=r,c.request=i,n[1](c)}o[e]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:a})}),12e4);a.onerror=a.onload=i,document.head.appendChild(a)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=c;i.push([16,2]),n()}({16:function(e,t,n){"use strict";n.r(t);n(5),n(6);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.menuIcon=document.querySelector(".header__menu-icon"),this.menuContent=document.querySelector(".header__nav"),this.header=document.querySelector(".header"),this.events()}var t,n,o;return t=e,(n=[{key:"events",value:function(){var e=this;this.menuIcon.addEventListener("click",(function(){return e.toggleMenu()}))}},{key:"toggleMenu",value:function(){this.menuContent.classList.toggle("header__nav--visible"),this.header.classList.toggle("header--expanded"),this.menuIcon.classList.toggle("header__menu-icon--close")}}])&&r(t.prototype,n),o&&r(t,o),e}(),i=n(1),l=n.n(i),a=n(0),c=n.n(a);function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.itemsToReveal=t,this.tresholdPercentage=n,this.browserHeight=window.innerHeight,this.hideInitially(),this.scrollThrottle=l()(this.calcCaller,200).bind(this),this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",this.scrollThrottle),window.addEventListener("resize",c()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"calcCaller",value:function(){var e=this;this.itemsToReveal.forEach((function(t){t.isRevealed||e.calculateIfScrolledTo(t)}))}},{key:"calculateIfScrolledTo",value:function(e){window.scrollY+this.browserHeight>e.offsetTop&&e.getBoundingClientRect().y/this.browserHeight*100<this.tresholdPercentage&&(e.classList.add("reveal-item--is-visible"),e.isRevealed=!0,e.isLastItem&&window.removeEventListener("scroll",this.scrollThrottle))}},{key:"hideInitially",value:function(){this.itemsToReveal.forEach((function(e){e.classList.add("reveal-item"),e.isRevealed=!1})),this.itemsToReveal[this.itemsToReveal.length-1].isLastItem=!0}}])&&s(t.prototype,n),r&&s(t,r),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f,h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.header=document.querySelector(".header"),this.pageSections=document.querySelectorAll(".page-section"),this.browserHeight=window.innerHeight,this.previousScrollY=window.scrollY,this.events()}var t,n,r;return t=e,(n=[{key:"events",value:function(){var e=this;window.addEventListener("scroll",l()((function(){return e.runOnScroll()}),200)),window.addEventListener("resize",c()((function(){e.browserHeight=window.innerHeight}),333))}},{key:"runOnScroll",value:function(){var e=this;this.determineScrollDirection(),window.scrollY>60?this.header.classList.add("header--dark"):this.header.classList.remove("header--dark"),this.pageSections.forEach((function(t){return e.calcSection(t)}))}},{key:"determineScrollDirection",value:function(){window.scrollY>this.previousScrollY?this.scrollDirection="down":this.scrollDirection="up",this.previousScrollY=window.scrollY}},{key:"calcSection",value:function(e){if(window.scrollY+this.browserHeight>e.offsetTop&&window.scrollY<e.offsetTop+e.offsetHeight){var t=e.getBoundingClientRect().y/this.browserHeight*100;if(t<18&&t>-.1&&"down"===this.scrollDirection||t<33&&"up"===this.scrollDirection){var n=e.getAttribute("data-matching-link");document.querySelectorAll(".header__nav-link:not(".concat(n,")")).forEach((function(e){return e.classList.remove("is-current-link")})),document.querySelector(n).classList.add("is-current-link")}}}}])&&d(t.prototype,n),r&&d(t,r),e}(),v=document.querySelectorAll(".feature"),p=document.querySelectorAll(".testimonial");new h,new o,new u(v,75),new u(p,60),document.querySelectorAll(".open-modal").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),void 0===f?n.e(1).then(n.bind(null,17)).then((function(e){f=new e.default,setTimeout((function(){return f.openModal()}),20)})).catch((function(e){return console.log(e)})):f.openModal()}))})),document.querySelector(".section-testimonials").addEventListener("lazybeforeunveil",(function(e){var t=e.target.getAttribute("data-bg");t&&(e.target.style.backgroundImage="url(".concat(t,")"))}))},5:function(e,t,n){}});
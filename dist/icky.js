var Icky=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n(1),r=(i(o),n(5)),s=i(r),c={className:"icky-is-sticky",offset:100},a={},f=[],u=function(){var t=document.querySelectorAll("[data-icky]"),e=Array.prototype.map.call(t,function(t){return{node:t,offset:parseInt(t.getAttribute("data-icky-offset")),isSticky:!1}});return e},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a=Object.assign({},c,t),f=u(),window.addEventListener("scroll",function(){return(0,s.default)(f,a)})};t.exports={init:d}},function(t,e){},,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){t.node.classList.add(e),t.isSticky=!0},i=function(t,e){t.node.classList.remove(e),t.isSticky=!1},o=function(t,e){var o=window.pageYOffset;t.forEach(function(t){var r=t.node.offsetTop-t.offset,s=o>=r;s?t.isSticky||n(t,e.className):t.isSticky&&i(t,e.className)})};e.default=o}]);
//# sourceMappingURL=icky.js.map
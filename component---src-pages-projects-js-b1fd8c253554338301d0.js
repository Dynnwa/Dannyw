(self.webpackChunkDanny_Starter=self.webpackChunkDanny_Starter||[]).push([[853],{9634:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var l,o=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:o.prototype.scroll||i,scrollIntoView:o.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(l=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(l)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?u.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):u.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},o.prototype.scroll=o.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;u.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},o.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},o.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var l=h(this),o=l.getBoundingClientRect(),r=this.getBoundingClientRect();l!==t.body?(u.call(this,l,l.scrollLeft+r.left-o.left,l.scrollTop+r.top-o.top),"fixed"!==e.getComputedStyle(l).position&&e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function d(t,l){var o=e.getComputedStyle(t,null)["overflow"+l];return"auto"===o||"scroll"===o}function f(e){var t=s(e,"Y")&&d(e,"Y"),l=s(e,"X")&&d(e,"X");return t||l}function h(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function m(t){var l,o,n,a,i=(r()-t.startTime)/468;a=i=i>1?1:i,l=.5*(1-Math.cos(Math.PI*a)),o=t.startX+(t.x-t.startX)*l,n=t.startY+(t.y-t.startY)*l,t.method.call(t.scrollable,o,n),o===t.x&&n===t.y||e.requestAnimationFrame(m.bind(e,t))}function u(l,o,a){var c,s,d,f,h=r();l===t.body?(c=e,s=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,f=n.scroll):(c=l,s=l.scrollLeft,d=l.scrollTop,f=i),m({scrollable:c,method:f,startTime:h,startX:s,startY:d,x:o,y:a})}}}}()},7286:function(e,t,l){"use strict";l.d(t,{Z:function(){return c}});var o=l(1721),n=l(9634),r=l.n(n),a=l(7294),i=function(e){return e.children},c=function(e){function t(){var t;return(t=e.call(this)||this).handleClick=t.handleClick.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(t)),t}(0,o.Z)(t,e);var l=t.prototype;return l.componentDidMount=function(){r().polyfill()},l.handleClick=function(e){e.preventDefault();var t=0,l=!0,o=this.props,n=o.type,r=o.element,a=o.offset,i=o.timeout;if(n&&r)switch(n){case"class":l=!!(t=document.getElementsByClassName(r)[0]);break;case"id":l=!!(t=document.getElementById(r))}l?this.scrollTo(t,a,i):console.log("Element not found: "+r)},l.scrollTo=function(e,t,l){void 0===t&&(t=-150),void 0===l&&(l=null);var o=e?e.getBoundingClientRect().top+window.pageYOffset:0;l?setTimeout((function(){window.scroll({top:o+t,left:0,behavior:"smooth"})}),l):window.scroll({top:o+t,left:0,behavior:"smooth"})},l.render=function(){return a.createElement(i,null,"object"==typeof this.props.children?a.cloneElement(this.props.children,{onClick:this.handleClick}):a.createElement("span",{onClick:this.handleClick},this.props.children))},t}(a.Component)},5451:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return h}});var o=l(7294),n=l(2899),r=l(6947),a=l(5841),i=l(1597),c=l.p+"static/Canucks-b15914f2365ce9084862407e29e9f600.png",s=l.p+"static/NBA-2af815cb08c77f3515ed1c97e7d7239a.png",d=l.p+"static/Tranlink-0d1b1e7406968ca6854d81d95d415ae0.png",f=l.p+"static/site-685692d9a28e31a98521b188d16e816d.png",h=(l(7286),function(){return o.createElement(n.Z,null,o.createElement(a.Z,null),o.createElement("section",{id:"banner"},o.createElement("header",null,o.createElement("h2",null,"Highlighted Projects"))),o.createElement("article",{id:"experience",className:"container box style3"},o.createElement("a",{href:"/#",className:"image fit"},o.createElement("img",{src:f,alt:""})),o.createElement("div",{className:"inner"},o.createElement("header",null,o.createElement("h2",null,o.createElement(i.Link,{to:"https://github.com/Dynnwa/Website",target:"_blank"}," Personal Website "),o.createElement("br",null),"React.js Javascript Gatsby")),o.createElement("p",null,"This was my first taste of react, what better way to introduce myself than to make a personal website! Everything you see was created in react (with the help of gatsby ofc). Feel free to click around, many of the additional features like the navbar and text boxes were additions I decided to add."))),o.createElement("article",{className:"container box style3"},o.createElement("a",{href:"/#",className:"image fit"},o.createElement("img",{src:d,alt:""})),o.createElement("div",{className:"inner"},o.createElement("header",null,o.createElement("h2",null,o.createElement(i.Link,{to:"https://github.com/Dynnwa/PHP-Oracle_Translink_Model",target:"_blank"}," Translink database model "),o.createElement("br",null),"PHP Oacle SQL")),o.createElement("p",null,"With the help of two other students, we created a PHP backend that would talk to an Oracle RDMS storing inforamtion about various transit entities such as skytrains, stops, stations, buses etc. We created the DDL and HTML frontend to display our project."))),o.createElement("article",{className:"container box style3"},o.createElement("a",{href:"/#",className:"image fit"},o.createElement("img",{src:s,alt:""})),o.createElement("div",{className:"inner"},o.createElement("header",null,o.createElement("h2",null,o.createElement(i.Link,{to:"https://github.com/Dynnwa/NBA-PlayerStats",target:"_blank"}," NBA player Scoring dashboard "),o.createElement("br",null),"Tableau MYSQL")),o.createElement("p",null,"This was self directed introduction to SQL. At the time I was curious to do something that would combine my intere in NBA and my curiousity to learn SQL. I decided to create a dashboard that would allow me to see which players scored the most of each type of shot, aswell as top scoring teams."))),o.createElement("article",{className:"container box style3"},o.createElement("a",{href:"/#",className:"image fit"},o.createElement("img",{src:c,alt:""})),o.createElement("div",{className:"inner"},o.createElement("header",null,o.createElement("h2",null,o.createElement(i.Link,{to:"https://github.com/Dynnwa/Canucks_2011_finals",target:"_blank"}," Linear Programming Hockey Lineups "),o.createElement("br",null),"Linear Programming Python Pulp")),o.createElement("p",null,"This was an optional project for my linear programming class I decided to do a mini case study on the 2011 Stanley cup finals to calculate what the optimal amount of playing time each player should have played based on regular season stats."))),o.createElement("article",{className:"container box style3"},o.createElement("header",null,o.createElement("h2",null,"Check out more of my projects",o.createElement(i.Link,{to:"https://github.com/Dynnwa",target:"_blank"}," here ")))),o.createElement(r.Z,null))})}}]);
//# sourceMappingURL=component---src-pages-projects-js-b1fd8c253554338301d0.js.map
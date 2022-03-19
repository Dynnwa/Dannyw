exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 1349:
/***/ ((module) => {

module.exports={siteTitle:'Danny Wei',// <title>
manifestName:'Overflow',manifestShortName:'Landing',// max 12 characters
manifestStartUrl:'/',manifestBackgroundColor:'#FFFFFF',manifestThemeColor:'#FFFFFF',manifestDisplay:'standalone',manifestIcon:'src/assets/img/website-icon.png',pathPrefix:`/gatsby-starter-overflow/`,// This path is subpath of your hosting https://domain/portfolio
authorName:'Danny Wei',heading:'Having Fun',// social
socialLinks:[{icon:'fa-github',name:'Github',url:'https://github.com/Dynnwa'},{icon:'fa-envelope-o',name:'Email',url:'ddaniel.wei@gmail.com'},{icon:'fa-linkedin',name:'Linked-in',url:'https://linkedin.com/in/dlwei'}]};

/***/ }),

/***/ 6947:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1349);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);
function Footer(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section",{id:"footer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:"icons"},_config__WEBPACK_IMPORTED_MODULE_1___default().socialLinks.map(social=>{const{icon,name,url}=social;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{key:url},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:url,className:`icon ${icon}`,target:"_blank"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{className:"label"},name)));})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"copyright"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:"menu"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",null,"Love Gastby.js")))));}

/***/ }),

/***/ 2899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5482);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7533);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5841);
class Layout extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.state={isPreloaded:true};}componentDidMount(){this.timeoutId=setTimeout(()=>{this.setState({isPreloaded:false});},100);}componentWillUnmount(){if(this.timeoutId){clearTimeout(this.timeoutId);}}render(){const{children}=this.props;const{isPreloaded}=this.state;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.StaticQuery,{query:"3649515864",render:data=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"],{title:data.site.siteMetadata.title,meta:[{name:'description',content:'Overflow'},{name:'keywords',content:'site, web'}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html",{lang:"en"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:isPreloaded?'main-body is-preload':'main-body'},children))});}}Layout.propTypes={children:(prop_types__WEBPACK_IMPORTED_MODULE_4___default().node.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 5841:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "/Users/janice/Desktop/Website/node_modules/react/index.js"
var index_js_ = __webpack_require__(1575);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./src/components/resume.pdf
/* harmony default export */ const resume = (__webpack_require__.p + "static/resume-b39d6f959a300c579a6882aec551c85a.pdf");
;// CONCATENATED MODULE: ./src/components/Navbar.js
function Navbar(){return/*#__PURE__*/index_js_default().createElement("section",null,/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("nav",null,/*#__PURE__*/index_js_default().createElement("ul",{class:"nav__links"}," ",/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/#"},"Home")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/Experience"},"Experience")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/Projects"},"Projects")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"/Activities"},"Activities")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:resume,target:"_blank",rel:"noreferrer"},"Resume"))))));}/* harmony default export */ const components_Navbar = (Navbar);

/***/ }),

/***/ 618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(523);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1575);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
const Element=props=>{return props.children;};class Scroll extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component){constructor(){super();this.handleClick=this.handleClick.bind(this);}componentDidMount(){smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill();}handleClick(e){e.preventDefault();let elem=0;let scroll=true;const{type,element,offset,timeout}=this.props;if(type&&element){switch(type){case'class':elem=document.getElementsByClassName(element)[0];scroll=elem?true:false;break;case'id':elem=document.getElementById(element);scroll=elem?true:false;break;default:}}scroll?this.scrollTo(elem,offset,timeout):console.log(`Element not found: ${element}`);// eslint-disable-line
}scrollTo(element,offSet=-150,timeout=null){const elemPos=element?element.getBoundingClientRect().top+window.pageYOffset:0;if(timeout){setTimeout(()=>{window.scroll({top:elemPos+offSet,left:0,behavior:'smooth'});},timeout);}else{window.scroll({top:elemPos+offSet,left:0,behavior:'smooth'});}}render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Element,null,typeof this.props.children==='object'?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(this.props.children,{onClick:this.handleClick}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",{onClick:this.handleClick},this.props.children));}}Scroll.propTypes={type:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),element:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),offset:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),timeout:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),children:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroll);

/***/ }),

/***/ 6117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/janice/Desktop/Website/node_modules/react/index.js"
var index_js_ = __webpack_require__(1575);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(2899);
// EXTERNAL MODULE: ./src/components/Scroll.js
var Scroll = __webpack_require__(618);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1349);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// CONCATENATED MODULE: ./src/components/Header.js
function Header({title,heading,avatar}){return/*#__PURE__*/index_js_default().createElement("section",{id:"header"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h1",null,(config_default()).authorName),/*#__PURE__*/index_js_default().createElement("p",null,(config_default()).heading)),/*#__PURE__*/index_js_default().createElement("footer",null,/*#__PURE__*/index_js_default().createElement(Scroll/* default */.Z,{type:"id",element:"banner"},/*#__PURE__*/index_js_default().createElement("a",{href:"#banner",className:"button style2 "},"Welcome!"))));}
// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__(6947);
// EXTERNAL MODULE: ./src/components/Navbar.js + 1 modules
var Navbar = __webpack_require__(5841);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/pages/index.js
const IndexPage=()=>/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(Navbar/* default */.Z,null),/*#__PURE__*/index_js_default().createElement(Header,null),/*#__PURE__*/index_js_default().createElement("section",{id:"banner"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",null,"Hello!")),/*#__PURE__*/index_js_default().createElement("p",null,"I'm a Third year Computer Science and Statistics student ",/*#__PURE__*/index_js_default().createElement("br",null),"with a curious mind. There's always some kind of thought ",/*#__PURE__*/index_js_default().createElement("br",null),"running through my mind as I think through how things work.",/*#__PURE__*/index_js_default().createElement("br",null),"Feel free to tak all the time you would like on my website :)",/*#__PURE__*/index_js_default().createElement("br",null))),/*#__PURE__*/index_js_default().createElement(Footer/* default */.Z,null));/* harmony default export */ const pages = (IndexPage);

/***/ }),

/***/ 523:
/***/ ((module) => {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {}

}());


/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map
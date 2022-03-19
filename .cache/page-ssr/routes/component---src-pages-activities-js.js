exports.id = "component---src-pages-activities-js";
exports.ids = ["component---src-pages-activities-js"];
exports.modules = {

/***/ "./src/components/resume.pdf":
/*!***********************************!*\
  !*** ./src/components/resume.pdf ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/resume-b39d6f959a300c579a6882aec551c85a.pdf");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module) => {

module.exports = {
  siteTitle: 'Danny Wei',
  // <title>
  manifestName: 'Overflow',
  manifestShortName: 'Landing',
  // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#FFFFFF',
  manifestThemeColor: '#FFFFFF',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/gatsby-starter-overflow/`,
  // This path is subpath of your hosting https://domain/portfolio
  authorName: 'Danny Wei',
  heading: 'Having Fun',
  // social
  socialLinks: [{
    icon: 'fa-github',
    name: 'Github',
    url: 'https://github.com/Dynnwa'
  }, {
    icon: 'fa-envelope-o',
    name: 'Email',
    url: 'ddaniel.wei@gmail.com'
  }, {
    icon: 'fa-linkedin',
    name: 'Linked-in',
    url: 'https://linkedin.com/in/dlwei'
  }]
};

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_1__);


function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    id: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "icons"
  }, _config__WEBPACK_IMPORTED_MODULE_1___default().socialLinks.map(social => {
    const {
      icon,
      name,
      url
    } = social;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: url,
      className: `icon ${icon}`,
      target: "_blank"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "label"
    }, name)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "copyright"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Love Gastby.js")))));
}

/***/ }),

/***/ "./src/components/Layout.js":
/*!**********************************!*\
  !*** ./src/components/Layout.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3649515864.json */ "./public/page-data/sq/d/3649515864.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "./node_modules/react-helmet/lib/Helmet.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/sass/main.scss */ "./src/assets/sass/main.scss");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_5__);








class Layout extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({
        isPreloaded: false
      });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const {
      children
    } = this.props;
    const {
      isPreloaded
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.StaticQuery, {
      query: "3649515864",
      render: data => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: data.site.siteMetadata.title,
        meta: [{
          name: 'description',
          content: 'Overflow'
        }, {
          name: 'keywords',
          content: 'site, web'
        }]
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("html", {
        lang: "en"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
        className: isPreloaded ? 'main-body is-preload' : 'main-body'
      }, children)),
      data: _public_page_data_sq_d_3649515864_json__WEBPACK_IMPORTED_MODULE_0__
    });
  }

}

Layout.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/sass/main.scss */ "./src/assets/sass/main.scss");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _resume_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resume.pdf */ "./src/components/resume.pdf");




function Navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    class: "nav__links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/#"
  }, "        Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/Experience"
  }, "Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/Projects"
  }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "/Activities"
  }, "Activities")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: _resume_pdf__WEBPACK_IMPORTED_MODULE_2__["default"],
    target: "_blank",
    rel: "noreferrer"
  }, "Resume"))))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/Scroll.js":
/*!**********************************!*\
  !*** ./src/components/Scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smoothscroll-polyfill */ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js");
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




const Element = props => {
  return props.children;
};

class Scroll extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill();
  }

  handleClick(e) {
    e.preventDefault();
    let elem = 0;
    let scroll = true;
    const {
      type,
      element,
      offset,
      timeout
    } = this.props;

    if (type && element) {
      switch (type) {
        case 'class':
          elem = document.getElementsByClassName(element)[0];
          scroll = elem ? true : false;
          break;

        case 'id':
          elem = document.getElementById(element);
          scroll = elem ? true : false;
          break;

        default:
      }
    }

    scroll ? this.scrollTo(elem, offset, timeout) : console.log(`Element not found: ${element}`); // eslint-disable-line
  }

  scrollTo(element, offSet = -150, timeout = null) {
    const elemPos = element ? element.getBoundingClientRect().top + window.pageYOffset : 0;

    if (timeout) {
      setTimeout(() => {
        window.scroll({
          top: elemPos + offSet,
          left: 0,
          behavior: 'smooth'
        });
      }, timeout);
    } else {
      window.scroll({
        top: elemPos + offSet,
        left: 0,
        behavior: 'smooth'
      });
    }
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Element, null, typeof this.props.children === 'object' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(this.props.children, {
      onClick: this.handleClick
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      onClick: this.handleClick
    }, this.props.children));
  }

}

Scroll.propTypes = {
  type: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  offset: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  timeout: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroll);

/***/ }),

/***/ "./src/pages/Activities.js":
/*!*********************************!*\
  !*** ./src/pages/Activities.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./src/components/Layout.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navbar */ "./src/components/Navbar.js");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _assets_images_pic01_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/pic01.jpg */ "./src/assets/images/pic01.jpg");
/* harmony import */ var _assets_images_pic02_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/pic02.jpg */ "./src/assets/images/pic02.jpg");
/* harmony import */ var _assets_images_BB_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/BB.png */ "./src/assets/images/BB.png");
/* harmony import */ var _assets_images_cam_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/cam.png */ "./src/assets/images/cam.png");
/* harmony import */ var _assets_images_math_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/math.png */ "./src/assets/images/math.png");
/* harmony import */ var _assets_images_League_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/League.png */ "./src/assets/images/League.png");
/* harmony import */ var _assets_images_SUS_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/SUS.png */ "./src/assets/images/SUS.png");
/* harmony import */ var _components_Scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Scroll */ "./src/components/Scroll.js");














const IndexPage = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
  id: "banner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Activities"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
  id: "experience",
  className: "container box style3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/#",
  className: "image fit"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_images_SUS_png__WEBPACK_IMPORTED_MODULE_11__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Science Undergraduate Society")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I have a long history of working in mentorship related roles. All thruoughout highschool I was heavily involved in cadets and tutoring. I thought it would only be natural for me to continue to the mentorship initiative. Being apart of the mentorship program has opened up many doors and allowed to me to meet some amazing people in the process."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
  id: "experience",
  className: "container box style3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/#",
  className: "image fit"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_images_BB_png__WEBPACK_IMPORTED_MODULE_7__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Powerlifting")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I started working out september 2019 and ever since then its become a a huge passion of mine. A day without working out is really a day wasted at this point! Currently I'm preparing for my first competition, hoping to set a provincial bench press record in the years to come!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
  className: "container box style3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/#",
  className: "image fit"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_images_cam_png__WEBPACK_IMPORTED_MODULE_8__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Photography")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Photography was something that I used to be very into in Highschool but it got away from me as school started to pick up. Recently I've gotten back into the hobby and I'm having a blast taking pictures of my friends and editing my photos ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
  className: "container box style3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/#",
  className: "image fit"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_images_math_png__WEBPACK_IMPORTED_MODULE_9__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Math")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Hard to really meet someone that genuinly enjoys math and the process of not understanding the concepts. I've always been very mathematically inclined, entering math competitions in highschool. After entering upper year and taking more interesting classes, my passion has only grown larger"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article", {
  className: "container box style3"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: "/#",
  className: "image fit"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
  src: _assets_images_League_png__WEBPACK_IMPORTED_MODULE_10__["default"],
  alt: ""
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: "inner"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "League of legends")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "I'm sure you expected to see some sort of game here and you're suspicion is correct! I play league all the time and sometimes I can get pretty into it. It's always been a great way for me to spend time with my friends and just have a good time"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexPage);

/***/ }),

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/smoothscroll-polyfill/dist/smoothscroll.js":
/*!*****************************************************************!*\
  !*** ./node_modules/smoothscroll-polyfill/dist/smoothscroll.js ***!
  \*****************************************************************/
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


/***/ }),

/***/ "./src/assets/images/BB.png":
/*!**********************************!*\
  !*** ./src/assets/images/BB.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/BB-135e106a4cc76da79dc43d5b18eedde3.png");

/***/ }),

/***/ "./src/assets/images/League.png":
/*!**************************************!*\
  !*** ./src/assets/images/League.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/League-e7494289ee7ae6975e0eb8445503416a.png");

/***/ }),

/***/ "./src/assets/images/SUS.png":
/*!***********************************!*\
  !*** ./src/assets/images/SUS.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/SUS-6e5e03f223b54f1e7ed9bdba938460a8.png");

/***/ }),

/***/ "./src/assets/images/cam.png":
/*!***********************************!*\
  !*** ./src/assets/images/cam.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/cam-c8c256fa83e15adebdae39d2dab384e5.png");

/***/ }),

/***/ "./src/assets/images/math.png":
/*!************************************!*\
  !*** ./src/assets/images/math.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/math-7a0cd53b2875107a5312936cd04da727.png");

/***/ }),

/***/ "./src/assets/images/pic01.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic01.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/pic01-d9c9f6463e6571136540bb51d44ffe48.jpg");

/***/ }),

/***/ "./src/assets/images/pic02.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/pic02.jpg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/jpeg;base64,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");

/***/ }),

/***/ "./public/page-data/sq/d/3649515864.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3649515864.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Danny Wei"}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-activities-js.js.map
exports.id = 622;
exports.ids = [622];
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

/***/ 5448:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Experience)
});

// EXTERNAL MODULE: external "/Users/janice/Desktop/Website/node_modules/react/index.js"
var index_js_ = __webpack_require__(1575);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(2899);
// EXTERNAL MODULE: ./src/components/Footer.js
var Footer = __webpack_require__(6947);
// EXTERNAL MODULE: ./src/components/Navbar.js + 1 modules
var Navbar = __webpack_require__(5841);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
// EXTERNAL MODULE: ./src/assets/images/pic01.jpg
var pic01 = __webpack_require__(1012);
;// CONCATENATED MODULE: ./src/assets/images/pic02.jpg
/* harmony default export */ const pic02 = ("data:image/jpeg;base64,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");
;// CONCATENATED MODULE: ./src/pages/Experience.js
const IndexPage=()=>/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(Navbar/* default */.Z,null),/*#__PURE__*/index_js_default().createElement("section",{id:"banner"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h1",null,"Experience"))),/*#__PURE__*/index_js_default().createElement("article",{className:"container box style3"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.copperleaf.com/",className:"image fit",target:"_blank"},/*#__PURE__*/index_js_default().createElement("img",{src:pic01/* default */.Z})),/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",null,"Data Analytics CO-OP",/*#__PURE__*/index_js_default().createElement("br",null),"Jan 2022 - Present")),/*#__PURE__*/index_js_default().createElement("p",null,"- Developed a set a Scenario Comparison dashboards to be productized to clients"),/*#__PURE__*/index_js_default().createElement("p",null,"SKILLS ",/*#__PURE__*/index_js_default().createElement("br",null),"- Power BI ",/*#__PURE__*/index_js_default().createElement("br",null),"- C# ",/*#__PURE__*/index_js_default().createElement("br",null),"- Python (Scikit Learn, Numpy, Pandas) ",/*#__PURE__*/index_js_default().createElement("br",null),"- AWS"))),/*#__PURE__*/index_js_default().createElement("article",{className:"container box style3"},/*#__PURE__*/index_js_default().createElement("a",{className:"image fit"},/*#__PURE__*/index_js_default().createElement("img",{src:pic02,alt:""})),/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",null,"Math Tutor",/*#__PURE__*/index_js_default().createElement("br",null),"Jan 2017 - Present")),/*#__PURE__*/index_js_default().createElement("p",null,"In grade 11 I was hesitant to take on a role with someone elses learing at stake but soon after taking on my first student I fell in love with tutoring. Knowing that I'm able to directly impact a students confidence in themselves to learn has been the most impactful thing with this job."),/*#__PURE__*/index_js_default().createElement("p",null,"Since the first student I have since tutored more than 15 students helping them increase their test grades by atleast a letter grade."))),/*#__PURE__*/index_js_default().createElement(Footer/* default */.Z,null));/* harmony default export */ const Experience = (IndexPage);

/***/ }),

/***/ 1012:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/pic01-d9c9f6463e6571136540bb51d44ffe48.jpg");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-experience-js.js.map
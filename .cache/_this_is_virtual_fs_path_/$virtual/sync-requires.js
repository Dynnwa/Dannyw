
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/janice/Desktop/Website/.cache/dev-404-page.js")),
  "component---src-pages-activities-js": preferDefault(require("/Users/janice/Desktop/Website/src/pages/Activities.js")),
  "component---src-pages-experience-js": preferDefault(require("/Users/janice/Desktop/Website/src/pages/Experience.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/janice/Desktop/Website/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/janice/Desktop/Website/src/pages/Projects.js"))
}


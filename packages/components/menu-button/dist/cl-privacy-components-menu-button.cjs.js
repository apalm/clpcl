'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cl-privacy-components-menu-button.cjs.prod.js");
} else {
  module.exports = require("./cl-privacy-components-menu-button.cjs.dev.js");
}

'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cl-privacy-components-input.cjs.prod.js");
} else {
  module.exports = require("./cl-privacy-components-input.cjs.dev.js");
}

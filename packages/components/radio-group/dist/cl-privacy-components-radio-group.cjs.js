'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cl-privacy-components-radio-group.cjs.prod.js");
} else {
  module.exports = require("./cl-privacy-components-radio-group.cjs.dev.js");
}

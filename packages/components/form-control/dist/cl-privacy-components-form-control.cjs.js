'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cl-privacy-components-form-control.cjs.prod.js");
} else {
  module.exports = require("./cl-privacy-components-form-control.cjs.dev.js");
}

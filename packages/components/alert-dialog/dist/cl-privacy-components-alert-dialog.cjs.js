'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cl-privacy-components-alert-dialog.cjs.prod.js");
} else {
  module.exports = require("./cl-privacy-components-alert-dialog.cjs.dev.js");
}

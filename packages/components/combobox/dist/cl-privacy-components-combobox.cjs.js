'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cl-privacy-components-combobox.cjs.prod.js");
} else {
  module.exports = require("./cl-privacy-components-combobox.cjs.dev.js");
}

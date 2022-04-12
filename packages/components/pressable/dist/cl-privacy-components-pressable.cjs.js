'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cl-privacy-components-pressable.cjs.prod.js");
} else {
  module.exports = require("./cl-privacy-components-pressable.cjs.dev.js");
}

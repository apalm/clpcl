'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./cl-privacy-components-avatar.cjs.prod.js");
} else {
  module.exports = require("./cl-privacy-components-avatar.cjs.dev.js");
}

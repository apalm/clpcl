'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tooltip = require('@reach/tooltip');



Object.keys(tooltip).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return tooltip[k]; }
	});
});

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dialog = require('@reach/dialog');



Object.keys(dialog).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return dialog[k]; }
	});
});

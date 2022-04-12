'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var menuButton = require('@reach/menu-button');



Object.keys(menuButton).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return menuButton[k]; }
	});
});

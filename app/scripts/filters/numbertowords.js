'use strict';

/**
 * @ngdoc filter
 * @name project-tomato.filter:numberToWords
 * @function
 * @description
 * # numberToWords
 * Filter in the project-tomato.
 */
angular.module('project-tomato')
	.filter('numberToWords', function () {
		var dg = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

		return function (value) {
			if (Number.isInteger(value)) {
				return dg[value] || '';
			}
			return '';
		};
	});

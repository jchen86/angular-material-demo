'use strict';

/**
 * @ngdoc filter
 * @name project-tomato.filter:stageFilter
 * @function
 * @description
 * # stageFilter
 * Filter in the project-tomato.
 */
angular.module('project-tomato')
  .filter('stage', function () {
    var stageMap = {
      '1': 'Idea & Concept Development',
      '2': 'Product Development',
      '3': 'Launch',
      '4': 'Growth'
    };
    return function (input) {
      return stageMap[input] || '';
    };
  });

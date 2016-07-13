'use strict';

/**
 * @ngdoc directive
 * @name project-tomato.directive:talentsGrid
 * @description
 * # talentsGrid
 */
angular.module('project-tomato')
  .directive('jcTalentsGrid', function (mockDataTalents) {
    return {
      templateUrl: 'views/directives/talentsgrid.html',
      restrict: 'E',
      scope: true,
      link: function postLink(scope, element, attrs) {
        scope.limit = attrs.itemLimit && parseInt(attrs.itemLimit);
        scope.showDetails = !attrs.hideDetails;
        scope.talents = mockDataTalents;
      }
    };
  });

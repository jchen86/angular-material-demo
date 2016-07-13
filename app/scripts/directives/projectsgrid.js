'use strict';

/**
 * @ngdoc directive
 * @name project-tomato.directive:projectsGrid
 * @description
 * # projectsGrid
 */
angular.module('project-tomato')
  .directive('jcProjectsGrid', function (mockDataProjects) {
    return {
      templateUrl: 'views/directives/projectsgrid.html',
      restrict: 'E',
      scope: true,
      link: function postLink(scope, element, attrs) {
        scope.limit = attrs.itemLimit && parseInt(attrs.itemLimit);
        scope.showDetails = !attrs.hideDetails;
        scope.projects = mockDataProjects;
      }
    };
  });

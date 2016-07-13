'use strict';

/**
 * @ngdoc service
 * @name project-tomato.titleService
 * @description
 * # titleService
 * Service in the project-tomato.
 */
angular.module('project-tomato')
  .service('titleService', function () {
    this.setTitle = function(newTitle) {
      this.title = newTitle;
    };
  });

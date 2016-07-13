'use strict';

/**
 * @ngdoc service
 * @name project-tomato.projectsService
 * @description
 * # projectsService
 * Service in the project-tomato.
 */
angular.module('project-tomato')
  .service('projectsService', function (mockDataProjects) {
    this.getById = function(id) {
      var matchingProject = null;
      mockDataProjects.some(function(project) {
        if(project.id === id) {
          matchingProject = project;
          return true;
        }
        return false;
      });
      return matchingProject;
    };
  });

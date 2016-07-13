'use strict';

/**
 * @ngdoc service
 * @name project-tomato.talentsService
 * @description
 * # talentsService
 * Service in the project-tomato.
 */
angular.module('project-tomato')
  .service('talentsService', function (mockDataTalents) {
    this.getById = function(id) {
      var matchingTalent = null;
      mockDataTalents.some(function(talent) {
        if(talent.id === id) {
          matchingTalent = talent;
          return true;
        }
        return false;
      });
      return matchingTalent;
    };
  });

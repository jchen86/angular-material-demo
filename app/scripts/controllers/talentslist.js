'use strict';

/**
 * @ngdoc function
 * @name project-tomato.controller:TalentslistCtrl
 * @description
 * # TalentslistCtrl
 * Controller of the project-tomato
 */
angular.module('project-tomato')
  .controller('TalentsListCtrl', function (titleService, mockDataTalents) {
    titleService.setTitle('Find a Talent');

    this.talents = mockDataTalents;
  });

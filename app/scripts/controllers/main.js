'use strict';

/**
 * @ngdoc function
 * @name project-tomato.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the project-tomato
 */
angular.module('project-tomato')
  .controller('MainCtrl', function (titleService) {
    titleService.setTitle('Project Tomato Home');

    this.userRoles = [
      'Entrepreneur',
      'Talent'
    ];

    this.currentRole = this.userRoles[0];
  });

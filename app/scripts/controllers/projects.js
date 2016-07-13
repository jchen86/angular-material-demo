'use strict';

/**
 * @ngdoc function
 * @name project-tomato.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the project-tomato
 */
angular.module('project-tomato')
	.controller('ProjectsCtrl', function (titleService) {
		titleService.setTitle('Find a Proposal');
	});

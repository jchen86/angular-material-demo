'use strict';

/**
 * @ngdoc overview
 * @name project-tomato
 * @description
 * # project-tomato
 *
 * Main module of the application.
 */
angular
	.module('project-tomato', [
		'ngAnimate',
		'ngCookies',
		'ngResource',
		'ngRoute',
		'ngSanitize',
		'ngAria',
		'ngMaterial'
	])
	.config(function ($routeProvider, $mdThemingProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'main'
			})
			.when('/submitIdea', {
				templateUrl: 'views/submitIdeaForm.html',
				controller: 'SubmitIdeaFormCtrl',
				controllerAs: 'submitIdeaForm'
			})
			.when('/projects', {
				templateUrl: 'views/projects.html',
				controller: 'ProjectsCtrl',
				controllerAs: 'projects'
			})
			.when('/projectDetails/:projectId', {
				templateUrl: 'views/projectDetails.html',
				controller: 'ProjectDetailsCtrl',
				controllerAs: 'projectDetails'
			})
			.when('/talents', {
				templateUrl: 'views/talentslist.html',
				controller: 'TalentsListCtrl',
				controllerAs: 'talentsList'
			})
			.when('/talentDetails/:talentId', {
				templateUrl: 'views/talentdetails.html',
				controller: 'TalentDetailsCtrl',
				controllerAs: 'talentDetails'
			})
			.otherwise({
				redirectTo: '/'
			});

		$mdThemingProvider.theme('default')
			.primaryPalette('indigo');
	});

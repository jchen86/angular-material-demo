'use strict';

/**
 * @ngdoc function
 * @name project-tomato.controller:ProjectdetailsCtrl
 * @description
 * # ProjectdetailsCtrl
 * Controller of the project-tomato
 */
angular.module('project-tomato')
	.controller('ProjectDetailsCtrl', function (titleService, projectsService, $routeParams, $mdDialog) {

		this.project = projectsService.getById($routeParams.projectId);

		titleService.setTitle('Business - ' + this.project.projectName);

		this.tabs = [
			{
				title: 'The Idea',
				template: 'views/partials/projectDetailsOverview.html'
			}, {
				title: 'The Team',
				template: 'views/partials/projectDetailsTeam.html'
			}, {
				title: 'The Gap',
				template: 'views/partials/projectDetailsGap.html'
			}
		];

		this.showInterested = function(event) {
			$mdDialog.show(
				$mdDialog.alert()
					.parent(angular.element(document.querySelector('#popupContainer')))
					.clickOutsideToClose(true)
					.title('Interested')
					.textContent('Marked ' + this.project.projectName + ' as interested!')
					.ok('OK')
					.targetEvent(event)
			);
		};

		this.showTopPick = function(event) {
			$mdDialog.show(
				$mdDialog.alert()
					.parent(angular.element(document.querySelector('#popupContainer')))
					.clickOutsideToClose(true)
					.title('Top-Pick')
					.textContent('Marked ' + this.project.projectName + ' as your top-pick!')
					.ok('OK')
					.targetEvent(event)
			);
		};
	});

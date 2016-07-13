'use strict';

/**
 * @ngdoc function
 * @name project-tomato.controller:IdeasubmissionformCtrl
 * @description
 * # IdeasubmissionformCtrl
 * Controller of the project-tomato
 */
angular.module('project-tomato')
	.controller('SubmitIdeaFormCtrl', function ($mdDialog, $location, titleService) {
		titleService.setTitle('Submit your Idea');

		this.tabs = [
			{
				title: 'Overview',
				template: 'views/partials/submitIdeaOverview.html'
			}, {
				title: 'Ideas',
				template: 'views/partials/submitIdeaDetails.html'
			}, {
				title: 'Team',
				template: 'views/partials/submitIdeaTeam.html'
			}, {
				title: 'Gap',
				template: 'views/partials/submitIdeaGap.html'
			}
		];

		this.data = {};

		this.backToMain = function(event) {
			var confirm = $mdDialog.confirm()
				.title('Cancel Submission')
				.textContent('Are you sure you want to cancel? All data entered will be lost.')
				.targetEvent(event)
				.ok('Yes')
				.cancel('No');
			$mdDialog.show(confirm).then(function() {
				$location.path('/#');
			});
		};

		this.submitForm = function(event) {
			$mdDialog.show(
				$mdDialog.alert()
					.parent(angular.element(document.querySelector('#popupContainer')))
					.clickOutsideToClose(true)
					.title('Thank you')
					.textContent('Your project has been submitted.')
					.ok('OK')
					.targetEvent(event)
			).then(function() {
				$location.path('/#');
			});
		};
	});

'use strict';

/**
 * @ngdoc function
 * @name project-tomato.controller:TalentsdetailsCtrl
 * @description
 * # TalentsdetailsCtrl
 * Controller of the project-tomato
 */
angular.module('project-tomato')
  .controller('TalentDetailsCtrl', function ($mdDialog, $routeParams, talentsService, titleService) {
    this.talent = talentsService.getById($routeParams.talentId);

    titleService.setTitle('Talent - ' + this.talent.name);

    this.showInterested = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Interested')
          .textContent('Marked ' + this.talent.name + ' as interested!')
          .ok('OK')
          .targetEvent(event)
      );
    };

    this.showTopPick = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('Top-Pick')
          .textContent('Marked ' + this.talent.name + ' as your top-pick!')
          .ok('OK')
          .targetEvent(event)
      );
    };
  });

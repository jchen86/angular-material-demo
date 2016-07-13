'use strict';

/**
 * @ngdoc function
 * @name project-tomato.controller:RootCtrl
 * @description
 * # RootCtrl
 * Controller of the project-tomato
 */
angular.module('project-tomato')
  .controller('RootCtrl', function ($mdSidenav, $timeout, $scope, titleService) {

    this.titleService = titleService;

    this.navOptions = {
      HOME: {
        label: 'Home',
        href: '#/'
      },
      SUBMIT_IDEA: {
        label: 'Submit your idea',
        href: '#/submitIdea'
      },
      FIND_PROPOSALS: {
        label: 'Find Proposals',
        href: '#/projects'
      },
      FIND_TALENTS: {
        label: 'Find Talents',
        href: '#/talents'
      }
    };

    this.toggleLeft = buildDelayedToggler('left');

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        $mdSidenav(navID)
          .toggle();
      }, 200);
    }

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait) {
      var timer;
      return function debounced() {
        var context = $scope,
          args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
  });

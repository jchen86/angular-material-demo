'use strict';

describe('Controller: TalentsdetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('project-tomato'));

  var TalentsdetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TalentsdetailsCtrl = $controller('TalentsdetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

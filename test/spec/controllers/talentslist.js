'use strict';

describe('Controller: TalentslistCtrl', function () {

  // load the controller's module
  beforeEach(module('project-tomato'));

  var TalentslistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TalentslistCtrl = $controller('TalentsListCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

'use strict';

describe('Controller: ProjectDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('project-tomato'));

  var ProjectDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectDetailsCtrl = $controller('ProjectDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('project-tomato'));

  var ProjectsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProjectsCtrl = $controller('ProjectsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});

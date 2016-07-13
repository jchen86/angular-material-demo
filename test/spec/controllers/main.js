'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('project-tomato'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have list of user roles defined', function() {
    expect(MainCtrl.userRoles.length).toBe(2);
  });
});

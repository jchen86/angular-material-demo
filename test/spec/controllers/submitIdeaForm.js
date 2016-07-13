'use strict';

describe('Controller: SubmitIdeaFormCtrl', function () {

  // load the controller's module
  beforeEach(module('project-tomato'));

  var SubmitIdeaFormCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubmitIdeaFormCtrl = $controller('SubmitIdeaFormCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of tabs to the scope', function () {
    expect(SubmitIdeaFormCtrl.tabs.length).toBe(4);
  });
});

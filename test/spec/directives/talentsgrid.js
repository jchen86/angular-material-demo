'use strict';

describe('Directive: talentsGrid', function () {

  // load the directive's module
  beforeEach(module('project-tomato'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jc-talents-grid></jc-talents-grid>');
    element = $compile(element)(scope);
  }));
});

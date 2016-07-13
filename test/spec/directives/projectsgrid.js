'use strict';

describe('Directive: projectsGrid', function () {

  // load the directive's module
  beforeEach(module('project-tomato'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jc-projects-grid></jc-projects-grid>');
    element = $compile(element)(scope);
  }));
});

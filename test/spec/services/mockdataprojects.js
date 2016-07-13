'use strict';

describe('Service: mockDataProjects', function () {

  // load the service's module
  beforeEach(module('project-tomato'));

  // instantiate service
  var mockDataProjects;
  beforeEach(inject(function (_mockDataProjects_) {
    mockDataProjects = _mockDataProjects_;
  }));

  it('should do something', function () {
    expect(!!mockDataProjects).toBe(true);
  });

});

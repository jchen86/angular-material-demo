'use strict';

describe('Service: mockDataTalents', function () {

  // load the service's module
  beforeEach(module('project-tomato'));

  // instantiate service
  var mockDataTalents;
  beforeEach(inject(function (_mockDataTalents_) {
    mockDataTalents = _mockDataTalents_;
  }));

  it('should do something', function () {
    expect(!!mockDataTalents).toBe(true);
  });

});

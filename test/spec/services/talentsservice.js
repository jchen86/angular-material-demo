'use strict';

describe('Service: talentsService', function () {

  // load the service's module
  beforeEach(module('project-tomato'));

  // instantiate service
  var talentsService;
  beforeEach(inject(function (_talentsService_) {
    talentsService = _talentsService_;
  }));

  it('should do something', function () {
    expect(!!talentsService).toBe(true);
  });

});

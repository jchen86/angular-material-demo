'use strict';

describe('Filter: stageFilter', function () {

  // load the filter's module
  beforeEach(module('project-tomato'));

  // initialize a new instance of the filter before each test
  var stageFilter;
  beforeEach(inject(function ($filter) {
    stageFilter = $filter('stage');
  }));

});

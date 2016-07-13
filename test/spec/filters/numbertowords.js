'use strict';

describe('Filter: numberToWords', function () {

  // load the filter's module
  beforeEach(module('project-tomato'));

  // initialize a new instance of the filter before each test
  var numberToWords;
  beforeEach(inject(function ($filter) {
    numberToWords = $filter('numberToWords');
  }));

});

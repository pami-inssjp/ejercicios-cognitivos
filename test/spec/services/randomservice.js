'use strict';

describe('Service: Randomservice', function () {

  // load the service's module
  beforeEach(module('hton1App'));

  // instantiate service
  var Randomservice;
  beforeEach(inject(function (_Randomservice_) {
    Randomservice = _Randomservice_;
  }));

  it('should do something', function () {
    expect(!!Randomservice).toBe(true);
  });

});

'use strict';

describe('Controller: JugarCtrl', function () {

  // load the controller's module
  beforeEach(module('hton1App'));

  var JugarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JugarCtrl = $controller('JugarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Component: KoalaComponent', function() {
  // load the controller's module
  beforeEach(module('koala'));

  var KoalaComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    KoalaComponent = $componentController('koala', {});
  }));

  it('should ...', function() {
    expect(1).to.equal(1);
  });
});

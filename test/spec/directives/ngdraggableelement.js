'use strict';

describe('Directive: ngDraggableElement', function () {

  // load the directive's module
  beforeEach(module('testTinymceApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-draggable-element></ng-draggable-element>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngDraggableElement directive');
  }));
});

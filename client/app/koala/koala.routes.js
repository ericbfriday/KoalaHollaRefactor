'use strict';

export default function($routeProvider) {
  'ngInject';
  $routeProvider
    .when('/koala', {
      template: '<koala></koala>'
    });
}

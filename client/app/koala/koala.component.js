'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './koala.routes';

export class KoalaComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('koala', [ngRoute])
  .config(routes)
  .component('koala', {
    template: require('./koala.html'),
    controller: KoalaComponent,
    controllerAs: 'koalaCtrl'
  })
  .name;

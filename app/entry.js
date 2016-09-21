'use strict';

require('!!file?name=[name].[ext]!./html/index.html');
require('./style/scss/main.scss');

const angular = require('angular');

let gebApp = angular.module('gebApp', [require('angular-route')]);

require('./components')(gebApp);

gebApp.config(['$logProvider', function($logProvider){
  $logProvider.debugEnabled(__DEBUG__); // eslint-disable-line
}]);

gebApp.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./html/home.html'),
    })
    .when('/portfolio', {
      template: require('./html/portfolio.html'),
    })
    .when('/contact', {
      template: require('./html/contact.html'),
    })
    .otherwise({
      redirectTo: '/error',
      template: require('./html/404.html'),
    });
}]);

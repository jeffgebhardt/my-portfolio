'use strict';

module.exports = function(app) {
  app.component('jgNavComponent', {
    controller: 'NavController',
    template: require('./nav-component-template.html'),
  });
};

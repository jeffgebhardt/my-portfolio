'use strict';

module.exports = (app) => {
  app.controller('NavController', ['$log', NavController]);
};

function NavController($log) {
  $log.log('Entering NavController...');
  
}

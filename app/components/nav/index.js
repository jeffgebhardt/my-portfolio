'use strict';

module.exports = (app) => {
  require('./nav-component.js')(app);
  require('./nav-controller.js')(app);
};

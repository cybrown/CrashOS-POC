'use strict';

var loadApp = function (name, cb) {
    cb = cb || function () {};
    LazyLoad.js('/apps/' + name + '/client/main.js', function () {
        appsToRun.forEach(function (app) {
            app(function (component) {
                React.renderComponent(component, document.getElementById('app'));
            });
        });
        cb();
    });
};

var appsToRun = [];

var runApp = function (cb) {
    appsToRun.push(cb);
};

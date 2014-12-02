requirejs.config({
    paths: {
        angular: "../lib/angular/angular",
        "angular-animate": "../lib/angular-animate/angular-animate",
        "angular-bootstrap": "../lib/angular-bootstrap/ui-bootstrap-tpls",
        "angular-moment": "../lib/angular-moment/angular-moment",
        "angular-resource": "../lib/angular-resource/angular-resource",
        "angular-ui-router": "../lib/angular-ui-router/release/angular-ui-router",
        requirejs: "../lib/requirejs/require",
        bootstrap: "../lib/bootstrap/dist/js/bootstrap",
        moment: "../lib/moment/moment"
    },
    shim: {
        angular: {
            exports: "angular"
        },
        "angular-animate": {
            deps: [
                "angular"
            ]
        },
        "angular-bootstrap": {
            deps: [
                "angular"
            ]
        },
        "angular-moment": {
            deps: [
                "moment",
                "angular"
            ]
        },
        "angular-resource": {
            deps: [
                "angular"
            ]
        },
        "angular-ui-router": {
            deps: [
                "angular"
            ]
        }
    },
    packages: [
        "app",
        "app/states"
    ],
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 10
});

require(["angular", "app", "app/states"], function(angular) {
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });
});
define([
    "angular",
    "angular-bootstrap",
    "angular-ui-router"
], function(angular) {
    angular.module("app.controllers", []);
    angular.module("app.states", [
        "app.controllers",
        "ui.router",
        "ui.bootstrap"
    ]);
    angular.module("app", ["app.states"]);
});
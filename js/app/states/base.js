define(["angular", "app"],
    function(angular){
        angular.module("app.states").config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider){
            $stateProvider.state('home', {
                url: "/home",
                templateUrl: 'partials/home.html',
                controller: ["$scope", "$stateParams", "$state", function($scope, $stateParams, $state){
                }]
            })
            .state('home.create', {
                url: "/create",
                views: {
                    '': { template: 'whatever' },
                    'create': {
                        controller: function($scope){
                            console.log('create');
                        },
                        template: 'create character'
                    }
                }
            });
        }]);
    }
);
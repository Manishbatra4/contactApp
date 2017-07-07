var myApp = angular.module('contactApp', ["ngRoute","ngResource","ngMessages"]);
    myApp.config(function($routeProvider,$locationProvider) {
        $routeProvider
        .when('/', {
          	controller: 'HomeController',
            templateUrl: 'view/home.html'
        })
        .when('/contacts', {
          	controller: 'ListController',
            templateUrl: 'view/list.html'
        })
        .when('/contacts/new', {
          	controller: 'NewController',
            templateUrl: 'view/new.html'
        })
        .when('/contact/:id', {
          	controller: 'SingleController',
            templateUrl: 'view/single.html'
        });
        //.otherwise({ redirectTo: '/' });
    $locationProvider.html5Mode(true);
});

angular.module('myApp', ['ngRoute'])
.config(function($routeProvider, $locationProvider){


    $routeProvider
    .when("/main", {
        templateUrl : "html/main.html"
    })
    .when("/menu", {
        templateUrl : "html/menu.html"
    })
    .when("/about", {
        templateUrl : "html/about.html"
    })

    $locationProvider.html5Mode(true);
});
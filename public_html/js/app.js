var app = angular.module('skeleton', ['ngRoute']);
app.conf=function ($routeProvider) { 
    $routeProvider 
        .when('/', { 
            //controller: 'HomeController', 
            templateUrl: 'views/home.html' 
        }) 
        .when('/page', { 
            //controller: 'pageController', 
            templateUrl: 'views/page.html' 
        }) 
        .otherwise({ 
            redirectTo: '/' 
        }); 
}

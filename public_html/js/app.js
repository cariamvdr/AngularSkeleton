var app = angular.module('ngtiny', ['ngRoute']);
app.conf=function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      //controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    }) 
    .when('/pagina', { 
      //controller: 'pageController', 
      templateUrl: 'views/page.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
}
app.config(app.conf);
app.constant("swInfo", {
    "version": "1.0.1"
});
app.constant("URL", {
    "REST": "server"
});

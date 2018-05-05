 var jxPortfolioApp = angular.module('jxPortfolioApp', ['ngRoute']);

// configure our routes
jxPortfolioApp.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
      templateUrl : 'pages/home.html',
    })

    // route for the about page
    .when('/about', {
      templateUrl : 'pages/about.html',
    })

    // route for the contact page
    .when('/skills', {
      templateUrl : 'pages/skills.html',
    })
});

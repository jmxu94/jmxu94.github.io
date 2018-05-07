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

    // route for the experience page
    .when('/experience', {
      templateUrl : 'pages/experience.html',
    })

    // route for the skills page
    .when('/skills', {
      templateUrl : 'pages/skills.html',
    })

    // route for the projects page
    .when('/projects', {
      templateUrl : 'pages/projects.html',
    })
});

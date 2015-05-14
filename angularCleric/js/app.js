'use strict';

var clericApp = angular.module('clericApp', [
	'ngRoute',
	'characterControllers',
	'services',
	'directives'
]);

clericApp.config(['$routeProvider', function(routeProvider) {
	routeProvider
		.when('/', {
			templateUrl: 'pages/cleric.html',
			controller: 'TurnAttemptController',    //controllers are always capitalized
			css: ['css/turnAttempt.css']
		})

		.when('/laura', {
			templateUrl: 'pages/laura.html',
			controller: 'LauraController'
		})

		.when('/stats', {
			templateUrl: 'pages/stats.html',
			controller: 'StatsController',
			css: ['css/stats.css']
		})

		.when('/spells', {
		 	templateUrl: 'pages/spells.html',
		 	controller: 'SpellsController',
			css: ['css/spells.css']
		})

		.when('/admin', {
		 	templateUrl: 'pages/admin.html',
		 	controller: 'AdminController'
		})
}]);

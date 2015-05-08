'use strict';

var clericApp = angular.module('clericApp', [
	'ngRoute',
	'characterControllers',
	'services'
]);

clericApp.config(['$routeProvider', function(routeProvider) {
	routeProvider
		.when('/', {
			templateUrl: 'cleric.html',
			controller: 'TurnAttemptController'    //controllers are always capitalized
		})

		.when('/laura', {
			templateUrl: 'laura.html',
			controller: 'LauraController'   
		})

		.when('/stats', {
			templateUrl: 'stats.html',
			controller: 'StatsController'
		})

		.when('/spells', {
		 	templateUrl: 'spells.html',
		 	controller: 'SpellsController'
		})

		.when('/admin', {
		 	templateUrl: 'admin.html',
		 	controller: 'AdminController'
		})
}]);


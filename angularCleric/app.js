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
			controller: 'ClericController'    //controllers are always capitalized
		});
}]);
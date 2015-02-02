'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('ClericService', ['$resource', function($resource) {
	return $resource('data/:phoneId.json');
}]);

services.factory('FighterService', ['$resource', function($resource) {
	return $resource('fighter.json');
}]);
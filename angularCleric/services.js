'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('ClericService', ['$resource', function($resource) {
	return $resource('cleric.json');
}]);

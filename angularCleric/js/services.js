'use strict';

var services = angular.module('services', ['ngResource']);

services.factory('ClericService', ['$resource', '$timeout', function($resource, $timeout) {
	return $resource('cleric.json');
}]);

services.factory('SpellService', ['$resource', function($resource) {
	return $resource('http://127.0.0.1:8080/spell/:spellId');
}]);
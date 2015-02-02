'use strict';

var characterControllers = angular.module('characterControllers', []);

characterControllers.controller('ClericController', ['$scope', 'ClericService', function($scope, ClericService) {

	ClericService.get().$promise.then(function(data) {
			$scope.cleric = data;
			$scope.chaMod = Math.floor((data.charisma - 10)/2);
		}
	);

	ClericService.get({phoneId: 1});

	$scope.getMaxHD = function(roll, chaMod, clericLevel) {
		var check = roll + chaMod;
		switch(true) {
			case (check < 1):
				return (clericLevel - 4);
			case (check > 0 && check < 4):
				return (clericLevel - 3);
			case (check > 3 && check < 7):
				return (clericLevel - 2);
			case (check > 6 && check < 10):
				return (clericLevel - 1);
			case (check > 9 && check < 13):
				return (clericLevel);
			case (check > 12 && check < 16):
				return (clericLevel + 1);
			case (check > 15 && check < 19):
				return (clericLevel + 2);
			case (check > 18 && check < 22):
				return (clericLevel + 3);	
			case (check > 21):
				return (clericLevel + 4);
		}
	};

	$scope.getDmgRoll = function(chaMod, clericLevel) {
		var dmgRoll = Math.floor((Math.random()*11) + 2);
		$scope.dmgRoll = (chaMod + clericLevel + dmgRoll);
		$scope.dmgLeft = $scope.dmgRoll;
		$scope.result = true;
	};

	$scope.updateDmgLeft = function(creatureHD) {
		$scope.dmgLeft = $scope.dmgLeft - creatureHD;
	};

	$scope.dmgLeft = 0;

	$scope.result = false;

	$scope.dmgRoll = 0;

}]);
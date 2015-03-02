'use strict';

var characterControllers = angular.module('characterControllers', []);

characterControllers.controller('ClericController', ['$scope', 'ClericService', function($scope, ClericService) {

	ClericService.get().$promise.then(function(data) {
			$scope.cleric = data;
			$scope.chaMod = Math.floor((data.charisma - 10)/2);
		}
	);

	function getMaxHd() {
		var check = $scope.roll + $scope.chaMod;
		if ($scope.religion) {
			check += 2;
		}
		switch(true) {
			case (check < 1):
				$scope.maxHd = ($scope.cleric.level - 4);
				return;
			case (check > 0 && check < 4):
				$scope.maxHd = ($scope.cleric.level - 3);
				return;
			case (check > 3 && check < 7):
				$scope.maxHd = ($scope.cleric.level - 2);
				return;
			case (check > 6 && check < 10):
				$scope.maxHd = ($scope.cleric.level - 1);
				return;
			case (check > 9 && check < 13):
				$scope.maxHd = ($scope.cleric.level);
				return;
			case (check > 12 && check < 16):
				$scope.maxHd = ($scope.cleric.level + 1);
				return;
			case (check > 15 && check < 19):
				$scope.maxHd = ($scope.cleric.level + 2);
				return;
			case (check > 18 && check < 22):
				$scope.maxHd = ($scope.cleric.level + 3);
				return;
			case (check > 21):
				$scope.maxHd = ($scope.cleric.level + 4);
				return;
		}

	};

	function getDmgRoll() {
		var dmgRoll = Math.floor((Math.random()*11) + 2);
		$scope.dmgRoll = ($scope.chaMod + $scope.cleric.level + dmgRoll);
		$scope.dmgLeft = $scope.dmgRoll;
	};

	$scope.calculate = function() {
		getMaxHd();
		getDmgRoll();
		$scope.result = true;
		$scope.img = 'clericturning.jpg';
	};

	$scope.updateDmgLeft = function(creatureHD) {
		$scope.dmgLeft = $scope.dmgLeft - creatureHD;
	};

	$scope.change = function() {
		//$scope.img = 'cleric.jpg';
		switch ($scope.counter) {
			case 0:
				$scope.img = 'cleric.jpg';
				$scope.counter++;
				break;
			case 1:
				$scope.img = 'clericturning.jpg';
				$scope.counter++;
				break;
			case 2:
				$scope.img = 'cleric3.jpg';
				$scope.counter = 0;
				break;
		}
	}

	$scope.dmgLeft = 0;

	$scope.result = false;

	$scope.dmgRoll = 0;

	$scope.img = 'cleric.jpg';

	$scope.counter = 1;

}]);
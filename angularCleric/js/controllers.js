'use strict';

var characterControllers = angular.module('characterControllers', []);

characterControllers.controller('TurnAttemptController', ['$scope', '$rootScope', 'ClericService', function($scope, $rootScope, ClericService) {

	ClericService.get().$promise.then(function(data) {
			$scope.cleric = data;
			$scope.chaMod = Math.floor((data.charisma - 10)/2);
		}
	);

	$rootScope.selected = 'turnAttempt'

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
		if ($scope.greaterTurn) {
			$scope.counter = 2;
			$scope.img = images[$scope.counter];
			$scope.skellyImgLeft = skellyLeft[$scope.counter];
			$scope.skellyImgRight = skellyRight[$scope.counter];
		} else {
			$scope.counter = 1;
			$scope.img = images[$scope.counter];
			$scope.skellyImgLeft = skellyLeft[$scope.counter];
			$scope.skellyImgRight = skellyRight[$scope.counter];
		}
	};

	$scope.updateDmgLeft = function(creatureHD) {
		$scope.dmgLeft = $scope.dmgLeft - creatureHD;
	};

	$scope.getNextImage = function() {
		if ($scope.counter < 2) {
			$scope.counter++;
		}
		else {
			$scope.counter = 0;
		}
		$scope.img = images[$scope.counter];
		$scope.skellyImgLeft = skellyLeft[$scope.counter];
		$scope.skellyImgRight = skellyRight[$scope.counter];
	}

	var images = ['pics/cleric.png', 'pics/clericturning.png', 'pics/cleric3.png'];

	var skellyLeft = ['pics/skellyLeft.png', 'pics/skellyRight.png', 'pics/dust.png'];

	var skellyRight = ['pics/skellyRight.png', 'pics/skellyLeft.png', 'pics/dust.png'];

	$scope.dmgLeft = 0;

	$scope.result = false;

	$scope.dmgRoll = 0;

	$scope.counter = 0;

	$scope.img = images[$scope.counter];

	$scope.skellyImgLeft = skellyLeft[$scope.counter];

	$scope.skellyImgRight = skellyRight[$scope.counter];

	$rootScope.selected = 'turnAttempt';
}]);


characterControllers.controller('StatsController', ['$scope', '$rootScope', 'ClericService', function($scope, $rootScope, ClericService) {

	ClericService.get().$promise.then(function(data) {
			$scope.cleric = data;
	});

	var images = ['pics/cleric.png', 'pics/clericturning.png', 'pics/cleric3.png'];

	$scope.getNextImage = function() {
		if ($scope.counter < 2) {
			$scope.counter++;
		}
		else {
			$scope.counter = 0;
		}
		$scope.img = images[$scope.counter];
	}

	$scope.counter = 0;

	$scope.img = images[$scope.counter];

	$rootScope.selected = 'stats';
}]);


characterControllers.controller('LauraController', ['$scope', '$rootScope', 'SpellService', function($scope, $rootScope, SpellService) {


	$rootScope.selected = 'laura';

	$scope.save = function() {
		SpellService.save($scope.spell);
	};
}]);


characterControllers.controller('SpellsController', ['$scope', '$rootScope', 'SpellService', function($scope, $rootScope, SpellService) {

	$rootScope.selected = 'spells';

	//$scope.spells = SpellService.get({spellId: 'order'});
}]);


characterControllers.controller('AdminController', ['$scope', '$rootScope', 'SpellService', function($scope, $rootScope, SpellService) {


	$rootScope.selected = 'admin';

	$scope.spells = SpellService.query();

	$scope.delete = function(spellId) {
		SpellService.delete({spellId: spellId}).$promise.then(function() {
			$scope.spells = SpellService.query();
		});
	};

	$scope.edit = function(spellId) {
		$scope.spell = SpellService.get({spellId: spellId});
	}

	$scope.save = function() {
		SpellService.save($scope.spell).$promise.then(function() {
			$scope.spells = SpellService.query();
			$scope.spell = {}
		});
	};
}]);

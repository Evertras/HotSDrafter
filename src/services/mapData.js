(function() {
	var app = angular.module('mapDataService', []);

	var Map = function(name) {
		this.name = name;
	};

	app.factory('mapDataService', function() {
		var blackheartsBay = new Map("Blackheart's Bay");
		var cursedHollow = new Map("Cursed Hollow");
		var dragonShire = new Map("Dragon Shire");
		var gardenOfTerror = new Map("Garden of Terror");
		var hauntedMines = new Map("Haunted Mines");
		var skyTemple = new Map("Sky Temple");
		var tombOfTheSpiderQueen = new Map("Tomb of the Spider Queen");

		var mapData = [
			blackheartsBay,
			cursedHollow,
			dragonShire,
			gardenOfTerror,
			hauntedMines,
			skyTemple,
			tombOfTheSpiderQueen
		];

		return {
			getAllMaps: function() {
				return mapData;
			}
		};
	});
})();

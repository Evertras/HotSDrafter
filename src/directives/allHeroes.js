(function() {
	var app = angular.module("allHeroes", ["heroDataService"]);

	app.directive("allHeroes", function() {
		return {
			templateUrl: "templates/all-heroes.html",
			controller: ['heroDataService', '$scope', function(heroDataService, $scope) {
				$scope.heroes = heroDataService.getAllHeroData();

				$scope.highlightHero = function(hero) {
					heroDataService.setHighlightedHero(hero);
				};
			}]
		};
	});
})();

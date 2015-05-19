(function() {
	var app = angular.module("allHeroes", ["heroDataService"]);

	app.directive("allHeroes", function(heroDataService) {
		return {
			templateUrl: "templates/all-heroes.html",
			controller: ['heroDataService', '$scope', function(heroDataService, $scope) {
				$scope.heroes = heroDataService.getAllHeroData();
			}]
		};
	});
})();

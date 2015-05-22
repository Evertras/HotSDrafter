(function() {
	var app = angular.module('heroDetails', []);

	app.directive('heroDetails', function() {
		return {
			templateUrl: 'templates/hero-details.html',
			controller: ['heroDataService', '$scope', function(heroDataService, $scope) {
				$scope.dataService = heroDataService;

				$scope.$watch("dataService.getHighlightedHero()", function(newVal, oldVal) {
					$scope.hero = newVal;
				});
			}]
		};
	});
})();

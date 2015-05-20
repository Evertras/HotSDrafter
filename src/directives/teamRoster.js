(function() {
	var app = angular.module('teamRoster', ['teamDataService']);

	app.directive('teamRoster', function() {
		return {
			templateUrl: "templates/team-roster.html",
			scope: {
				'color': '@'
			},
			controller: ['teamDataService', '$scope', function(teamDataService, $scope) {
				if ($scope.color === 'Red') {
					$scope.roster = teamDataService.getRedTeamRoster();
				} else {
					$scope.roster = teamDataService.getBlueTeamRoster();
				}
			}]
		};
	});
})();

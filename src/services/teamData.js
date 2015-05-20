(function() {
	var app = angular.module('teamDataService', ['heroDataService']);

	app.factory('teamDataService', ['heroDataService', function(heroDataService) {
		var blueTeamRoster = [];
		var redTeamRoster = [];

		return {
			getBlueTeamRoster: function() {
				return blueTeamRoster;
			},

			getRedTeamRoster: function() {
				return redTeamRoster;
			}
		};
	}]);
})();

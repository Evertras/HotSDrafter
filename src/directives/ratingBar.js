(function() {
	var app = angular.module('ratingBar', []);

	app.directive('ratingBar', function() {
		return {
			templateUrl: 'templates/rating-bar.html',
			scope: {
				percent: '='
			}
		};
	});
})();

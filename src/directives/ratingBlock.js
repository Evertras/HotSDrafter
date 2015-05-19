(function() {
	var app = angular.module('ratingBlock', ['ratingBar']);

	app.directive('ratingBlock', function() {
		return {
			templateUrl: 'templates/rating-block.html',
			scope: {
				blockData: '='
			}
		};
	});
})();

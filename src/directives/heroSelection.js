(function() {
	var app = angular.module('heroSelection', []);

	app.directive('heroSelection', function() {
		return {
			templateUrl: 'templates/hero-selection.html',
			scope: {
				'hero': '='
			},
			controller: ['$scope', function($scope) {
			}]
		};
	});
})();

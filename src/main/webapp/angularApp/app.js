angular.module('RoutingApp', ['ngRoute'])
	.config( ['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/login', {
				templateUrl: 'views/login.html'
			})
			.when('/dashboard', {
				templateUrl: 'views/dashboard.html'
			})
			.when('/logout', {
				templateUrl: 'views/logout.html'
			})
			.when('/', {
				templateUrl: 'views/welcome.html'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
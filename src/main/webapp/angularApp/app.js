var app = angular.module('ticketManagerApp', ['ngRoute']);
app.config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.when('/', {
				templateUrl : 'views/welcome.html'
			}).when('/login', {
				templateUrl : 'views/login.html',
				controller : 'authCtrl'
			}).when('/dashboard', {
				templateUrl : 'views/dashboard.html'
			}).when('/viewTicket', {
				templateUrl : 'views/viewTicket.html'
			}).when('/viewTicketList', {
				templateUrl : 'views/viewTicketList.html'
			}).when('/logout', {
				templateUrl : 'views/logout.html'
			}).otherwise({
				redirectTo : '/'
			});
		} ]);

app.controller('authCtrl', function($scope, $http, $location) {

	$scope.submit = function() {
		alert("Inside submit");
		var userName = $scope.userName;
		var password = $scope.password;
		var wsUrl = "/ticket-manager/rest/auth/login/" + userName + "/" + password
		alert(wsUrl);
		$http.get(wsUrl).success(function(data) {
			alert(JSON.stringify(data));
			alert(JSON.stringify(data.authenticated));
			if (data.authenticated == true) {
				alert('Valid user')
				$location.path('/dashboard');
			} else {
				alert('Wrong credential');
			}

		}).error(function(data) {
			alert('in error')
		});

	}

});
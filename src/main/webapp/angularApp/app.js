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
				templateUrl : 'views/viewTicket.html',
					controller : 'viewTicketCtrl'
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
		var userName = $scope.userName;
		var password = $scope.password;
		var wsUrl = "/ticket-manager/rest/auth/login/" + userName + "/" + password
		$http.get(wsUrl).success(function(data) {
			if (data.authenticated == true) {
				$location.path('/dashboard');
			} else {
				alert('Wrong credential');
			}

		}).error(function(data) {
			alert('in error')
		});

	}

});

app.controller('viewTicketCtrl', function($scope, $http, $location) {
	alert('inside view ticket controller');
		var userName = $scope.userName;
		var password = $scope.password;
		var wsUrl = "/ticket-manager/rest/ticket/getTicket/1";
		$http.get(wsUrl).success(function(data) {
           alert('success' + JSON.stringify(data));
           $scope.ticket = data;
           
           alert('ticket::'+$scope.ticket);
		}).error(function(data) {
			alert('Error')
		});


});
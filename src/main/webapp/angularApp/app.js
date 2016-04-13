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
			}).when('/addTicket', {
				templateUrl : 'views/addTicket.html',
				controller : 'addTicketCtrl'
			}).when('/viewTicket/:ticketid', {
					templateUrl : 'views/viewTicket.html',
					controller : 'viewTicketCtrl'
			}).when('/viewTicketList', {
				templateUrl : 'views/viewTicketList.html',
				controller : 'viewTicketListCtrl'
			}).when('/updateTicket/:ticketid/:summary/:description', {
				templateUrl : 'views/updateTicket.html',
				controller : 'updateTicketCtrl'
			}).when('/logout', {
				templateUrl : 'views/logout.html'
			}).otherwise({
				redirectTo : '/'
			});
		} ]);

 app.factory('myService', ['$http',function($http) {

        return {
            foo: function(refreshToken) {
            	//alert(scope+'   '+http)
            	var wsUrl = obj.wsUrl+'oauth/token?grant_type=refresh_token&client_id=restapp&client_secret=restapp&refresh_token='+refreshToken;
		               // var Weather = $resource(wsUrl);
		              // alert(wsUrl)
		              return $http.get(wsUrl).success(function(data) {
									

					});
            }
        };
    }]);

// app.controller('authCtrl', function($scope, $http, $location) {

	
// 	$scope.submit = function() {
// 		var userName = $scope.userName;
// 		var password = $scope.password;
// 		var wsUrl = 'ticket-manager/oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username='+userName+'&password='+password;
// 		$http.get(wsUrl).success(function(data) {
// 			if (data.authenticated == true) {
// 				$location.path('/dashboard');
// 			} else {
// 				alert('Wrong credential');
// 			}

// 		}).error(function(data) {
// 			alert('Error in network call')
// 		});

// 	}

// });

// app.controller('viewTicketCtrl', function($scope, $http, $location) {
// 		var userName = $scope.userName;
// 		var password = $scope.password;
// 		var wsUrl = "/ticket-manager/rest/ticket/getTicket/1";
// 		$http.get(wsUrl).success(function(data) {
//            $scope.ticket = data;
           
// 		}).error(function(data) {
// 			alert('Error in network call')
// 		});


// });
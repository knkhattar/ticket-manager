app.controller('logoutCtrl', function($scope, $http, $location, myService) {
	alert('inside logout');
	var wsUrl = obj.wsUrl + "auth/logout/" + localStorage.getItem('token');
	console.log(wsUrl);
	$http.get(wsUrl).success(
			function(data) {
				console.log(data);
			}).error(function(data, status) {

				console.log('err::'+status);
		alert('Error in network call');

	});
});
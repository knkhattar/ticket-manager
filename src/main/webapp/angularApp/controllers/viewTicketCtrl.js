app.controller('viewTicketCtrl', function($scope,$http,$routeParams,$location,myService,$route){
		var token = localStorage.getItem('token');
		var userName = $scope.userName;
		var password = $scope.password;
		
		//var wsUrl = "/ticket-manager/rest/ticket/getTicket/1?access_token="+token;
		var wsUrl = obj.wsUrl+"ticket/getTicket/"+$routeParams.ticketid+"?access_token="+token;
		console.log(wsUrl);
		$http.get(wsUrl).success(function(data) {

			
           $scope.ticket = data;
           
		}).error(function(data) {
			//alert('Error in network call')
			myService.foo(localStorage.getItem('refreshtoken')).success(function(response) {
                    //alert(JSON.stringify(response));
                    localStorage.setItem('token', response.access_token);
                    $route.reload();

                }).error(function(){

                	alert('refresh token expired')
                	$location.path('/login');
                });
		});

		$scope.deleteTicket = function(ticketid)
		{
			alert("deleteTicket");
			var wsUrl = obj.wsUrl+"ticket/deleteTicket/"+$routeParams.ticketid+"?access_token="+token;
			$http.get(wsUrl).success(function(data) {
				//alert(data);
			if(data == 'true'){
				$location.path('/viewTicketList');
			}
           	}).error(function(data) {
				//alert('Error in network call')

				myService.foo(localStorage.getItem('refreshtoken')).success(function(response) {
                    //alert(JSON.stringify(response));
                    localStorage.setItem('token', response.access_token);
                    $route.reload();

                }).error(function(){

                	alert('refresh token expired')
                	$location.path('/login');
                });
			});
		}
});
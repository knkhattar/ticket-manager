app.controller('viewTicketListCtrl', function($scope,$http,myService,$location,$route){
		var token = localStorage.getItem('token');
		var wsUrl = obj.wsUrl+"ticket/getTickets/111?access_token="+token;
		//console.log(wsUrl);
		$http.get(wsUrl).success(function(data) {

			//alert(data)
           $scope.tickets = data;
           
		}).error(function(data,status) {
			//alert(status)
			//alert('Error in network call')

			// if(refreshExpired == 1)
			// {
			// 	alert('refresh token expired')
			// 	$location.path('/login');
			// }

			 myService.foo(localStorage.getItem('refreshtoken')).success(function(response) {
                    //alert(JSON.stringify(response));
                    localStorage.setItem('token', response.access_token);
                    $route.reload();

                }).error(function(){

                	alert('refresh token expired')
                	$location.path('/login');
                });


			
		});
});
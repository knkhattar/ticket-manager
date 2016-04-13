app.controller('updateTicketCtrl', function($scope,$http,$routeParams,myService,$location,$route){
	var token = localStorage.getItem('token');
	var ticketId = $routeParams.ticketid;
	$scope.ticketSummary = $routeParams.summary;
	$scope.ticketDescription = $routeParams.description;

	$scope.updateTicket = function()
	{
		//alert($scope.ticketSummary+'  '+$scope.ticketDescription)

		var wsUrl = obj.wsUrl+"secure/ticket/updateTicket/"+ticketId+"/"+$scope.ticketSummary+"/"+$scope.ticketDescription+"?access_token="+token;
		
		$http.get(wsUrl).success(function(data) {

			//alert(data)
           if(data == 'true'){
           	$location.path('/viewTicket/'+ticketId);
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
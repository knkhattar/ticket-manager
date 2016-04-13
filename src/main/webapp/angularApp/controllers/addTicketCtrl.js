app.controller('addTicketCtrl', function($scope,$http,$location,myService,$route){

	if(localStorage.getItem('defectid') == null || localStorage.getItem('defectid') == '') {
	  $scope.defectid = 1111;
	}
	else {
	  $scope.defectid = localStorage.getItem('defectid');
	}

	
	var token = localStorage.getItem('token');
	
	

	$scope.addTicket = function()
	{
		var testSum = $scope.summ;
		var testDesc = $scope.desc;

		var wsUrl = obj.wsUrl+"secure/ticket/addTicket/"+localStorage.getItem('defectid')+"/"+testSum+"/"+testDesc+"?access_token="+token;
		alert('kk1'+wsUrl);
		$http.get(wsUrl).success(function(data) {

			if(data == 'true')
			{
				alert('Ticket added');

				$scope.defectid = parseInt($scope.defectid) + 1;
				localStorage.setItem('defectid', $scope.defectid);
				$location.path('/dashboard');

			}
           
		}).error(function(data) {
			// console.log(data)
			// alert('Error in network call')

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
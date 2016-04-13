app.controller('authCtrl', function($scope, $http, $location, myService) {
    //alert('authCtrl')
    $scope.userName = 'test';
    $scope.password = 'test';
    $scope.submit = function() {
            var userName = $scope.userName;
            var password = $scope.password;
           // alert(userName + ' and ' + password)
                //var wsUrl = 'ticket-manager/oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username='+userName+'&password='+password;
            var wsUrl = obj.wsUrl + 'oauth/token?grant_type=password&client_id=restapp&client_secret=restapp&username=' + userName + '&password=' + password;
            //console.log(wsUrl);
            $http.get(wsUrl).success(function(data) {
                if (data.access_token != '') {
                    localStorage.setItem('token', data.access_token);
                    localStorage.setItem('refreshtoken', data.refresh_token);

                    console.log("refresh token---->"+localStorage.getItem('refreshtoken'));
                    $location.path('/dashboard');
                } else {
                    alert(data.error_description);
                }
            }).error(function(data, status) {

                alert('Error in network call');
                
            });
        }
        // $scope.callFoo = function() {
        // }
});
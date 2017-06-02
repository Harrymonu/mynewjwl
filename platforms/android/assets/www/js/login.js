angular.module('starter.login', [])

.controller('loginCtrl', function($scope,$state) {




  $scope.Forgotpassword=function(){
    console.log("call forget password")

     $state.go("forgotpassword");
  }
  $scope.Login=function()
  {
  	console.log("in login")
  	$state.go("app.deshbord")
  }

})
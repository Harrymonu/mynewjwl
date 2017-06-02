angular.module('starter.vote', [])


.controller('voteCtrl', function($scope,$cordovaToast,$cordovaSms,$ionicPlatform ,$ionicPlatform,$state,sharedCartService,$ionicHistory,$ionicPlatform,$ionicPopup) {
	console.log("in ct")
	$scope.question1;
	var questionarray={}
 $scope.dict = {
  
  // etc.
};
$scope.questions = [
		{    id:1,
			question: "Which is the largest country in the world by population?",
			options: ["India", "USA","india","india"],
			answer: 2
		},
		{
			 id:2,
			question: "When did the second world war end?",
			options: ["1945", "1939", "1944", "1942"],
			answer: 0
		},
		{
			 id:3,
			question: "Which was the first country to issue paper currency?",
			options: ["USA", "France"],
			answer: 3
		},
		{
			 id:4,
			question: "Which city hosted the 1996 Summer Olympics?",
			options: ["Atlanta", "Sydney", "Athens", "Beijing"],
			answer: 0
		}
	
	];




	$ionicPlatform.registerBackButtonAction(function(e) {
 e.preventDefault();
 function showConfirm() {
  var confirmPopup = $ionicPopup.show({
   title : 'Exit AppName?',
   template : 'Are you sure you want to exit AppName?',
   buttons : [{
    text : 'Cancel',
    type : 'button-royal button-outline',
   }, {
    text : 'Ok',
    type : 'button-royal',
    onTap : function() {
     ionic.Platform.exitApp();
    }
   }]
  });
 };

 // Is there a page to go back to?
 if ($ionicHistory.backView()) {
  // Go back in history
  $ionicHistory.backView().go();
 } else {
  // This is the last page: Show confirmation popup
  showConfirm();
 }

 return false;
}, 101);


//this code for imei no

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
  window.plugins.sim.getSimInfo(successCallback, errorCallback);
}

function successCallback(result) {
	console.log(JSON.stringify(result))
	alert(JSON.stringify(result))
  var device=result.deviceId[0]
  var device1=result.deviceId[1]
 alert(device)
 alert(device1)
}

function errorCallback(error) {
  console.log(error);
}

// Android only: check permission
function hasReadPermission() {
  window.plugins.sim.hasReadPermission(successCallback, errorCallback);
}

// Android only: request permission
function requestReadPermission() {
  window.plugins.sim.requestReadPermission(successCallback, errorCallback);
}


$scope.select_ans=function(answer,position,que,x)
{

 
// console.log(answer)
$scope.dict[que] = answer;//



 




for (var i in $scope.dict) {

console.log("his ==",$scope.dict[i])
}


}

	
// for (var i = 0; i<$scope.questions.length; i++) {
// $scope.x= $scope.questions[i].question
// $scope.array_lenght=0;
// 	   for(var j=0;j<$scope.questions[i].options.length;j++)
// 	   {
// 	   	var questionlenght =$scope.questions[i].options.length;
	   
// 	 // document.getElementById("div1").innerHTML = '<div class="col-col-6" ng-repeat="item in questions "><div class="panel panel-success"><div class="panel-heading"><h3 class="panel-title"><b>'+$scope.x+'</b></h3></div><div class="panel-body">             <ul class="list-group"><li style="margin-left: 10%" ><input type="radio" name="select_ans" /> &nbsp;harry</li><ll style="float: right;margin-top: -1.5em;margin-right: 20%"><input type="radio" name="select_ans" />sms</ll><li style="margin-left: 10%;margin-top: 5%" ><input type="radio" name="select_ans" /> &nbsp;payKrafts</li><ll style="float: right;margin-top: -1.5em;margin-right: 20%;"><input type="radio" name="select_ans" />mobile</ll></ul><input type="submit" style="margin-top: 3em ;align-content: center;margin-left:37%" class="btn btn-primary btn" role="button" value="VOTE" /></p></div></div></div> ';
	
//       }
//  $scope.array_lenght =    questionlenght
//       	console.log(questionlenght)
  
// }




// for (var i =0;i<=questions.question.length; i++) {
	
// console.log($scope.question1.questions[i])
// console.log("in onload")
// document.getElementById("div1").innerHTML = '<div class="col-col-6" ng-repeat="item in questions "><div class="panel panel-success">'+$scope.question1[i]+'<div class="panel-heading"><h3 class="panel-title"><b>{{item.question}}</b></h3></div><div class="panel-body">             <ul class="list-group"><li style="margin-left: 10%" ><input type="radio" name="select_ans" /> &nbsp;harry</li><ll style="float: right;margin-top: -1.5em;margin-right: 20%"><input type="radio" name="select_ans" />sms</ll><li style="margin-left: 10%;margin-top: 5%" ><input type="radio" name="select_ans" /> &nbsp;payKrafts</li><ll style="float: right;margin-top: -1.5em;margin-right: 20%;"><input type="radio" name="select_ans" />mobile</ll></ul><input type="submit" style="margin-top: 3em ;align-content: center;margin-left:37%" class="btn btn-primary btn" role="button" value="VOTE" /></p></div></div></div> ';

// }


	})

angular.module('starter.forgotpass', [])




.controller('forgotpasswordCtrl', function($scope,$cordovaToast,$cordovaSms,$ionicPlatform ,$state) {

 // $scope.sms = {
 //    number: '09001708010',
 //    message: 'This is some dummy text'
  
 //  };
           document.addEventListener("deviceready", function () {
    


                            var options = {
                                  replaceLineBreaks: false, // true to replace \n by a new line, false by default
                                    android: {
                                                intent: ''  
                                              }
                                   };
              $scope.Sendotp = function() {
                                window.otparray={};
                                var mobile='';
                               mobile = document.getElementById('Mobileno').value
                               document.getElementById('Mobileno').value=null;
                                 $scope.text = "";
                                var possible = "0123456789";
 
                             for (var i=0; i<=5; i++) {
                                  $scope.text += possible.charAt(Math.floor(Math.random() * possible.length));
                                 }
                                window.otparray[0]=$scope.text;
                                 var newtext="code is "+$scope.text
 
                                 $cordovaSms.send(mobile, newtext, options)
                                                          .then(function() {
                                                              $cordovaToast.show('  OTP SEND  ','long','bottom').then(function(success) {
                                                                    console.log("The toast was shown");
                                                                 }, function (error) {
                                                                     console.log("The toast was not shown due to " + error);
                                                                       });

                                                                 }, function(error) {
                                                                        alert(error);
          // An error occurred
                                                                            });

                                                                    $state.go("otpverification");
if(cordova != undefined){ 
var smsInboxPlugin = cordova.require('cordova/plugin/smsinboxplugin');
smsInboxPlugin.isSupported (function(supported) {
  if(supported){
    smsInboxPlugin.startReception (function(msg) {
      alert(msg)
      $scope.input.code = msg;
      $scope.safeApply();
      $scope.verify();
      // We got sms, now stop receptor
      smsInboxPlugin.stopReception(function(){
        
      });
    });
  }else{
  helper.popup("Notice","Please enter OTP you received");
  } 
});
}


                                                                       }//sendotp
                                   });//device ready

$scope.Verify=function()
{
	console.log("fun")
var textotp="";
var arrotp="";
arrotp=window.otparray[0];
var textotp=document.getElementById('otp').value
console.log(arrotp)
console.log(textotp)

if( textotp==arrotp)
{
	alert("Verified")
  $state.go("setnewpasword");
}
else{
	alert("invalid OTP")
}


}


   
})//forgot

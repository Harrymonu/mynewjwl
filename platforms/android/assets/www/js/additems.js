angular.module('starter.additems', [])

.run(function($ionicPlatform,$ionicPlatform,$cordovaSQLite,$ionicPopup) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

if (window.cordova) {
     // db = $cordovaSQLite.openDB({ name: "my.db" }); //device
     db= window.sqlitePlugin.openDatabase({ name: "image1.db", location: 2, createFromLocation: 1 });
     console.log("Android");
     $ionicPopup.alert({
        title:"database created successfull"
     });
    }else{
      db = window.openDatabase("image1.db","1","demo",20000); // browser
      console.log("browser");
       }
      
  
  



  });








})
.controller('additemsCtrl', function($scope, $cordovaCamera ,$cordovaSQLite,$ionicPlatform,$state,$ionicHistory,$ionicPlatform,$ionicPopup) {
	console.log("in additemsCtrl")

	$scope.data = {};

	/*$scope.data.titleValue = "ranveer";*/

$scope.adddata = function(){

console.log($scope.data.titleValue)
console.log($scope.data.subtitleValue)
console.log($scope.data.priceValue)
console.log($scope.data.discountValue)
	if($scope.data.titleValue==undefined || $scope.data.subtitleValue==undefined || $scope.data.priceValue==undefined || $scope.data.discountValue==undefined) 
	{
		alert("please fill the data")
	}else{

	var itemtype=document.getElementById("itemtype")
	     var itemtypename=  itemtype.options[itemtype.selectedIndex].value
	     console.log(itemtypename)
 var query="CREATE TABLE "+itemtypename+"item(id integer primary key,title text,subtitle text,price float,discount integer, img BLOB)"
 console.log(query)

 $cordovaSQLite.execute(db,query);
alert($scope.urlImg1)

 var query="INSERT INTO "+itemtypename+"item(title,subtitle,price,discount,img) VALUES(?,?,?,?,?)"
 alert(query)
     $cordovaSQLite.execute(db,query,[$scope.data.titleValue,$scope.data.subtitleValue,$scope.data.priceValue,$scope.data.discountValue,$scope.urlImg1]).then(function(result)
     { $ionicPopup.alert({
      title:"value inserted"
     });
      console.log("INSERT ID -> " + result.insertId);

     },function(error){
      window.alert(error);
      alert(JSON.stringify(error))
   })

	}
}



 $scope.choosePhoto=function(){
       
      

        alert("in choosePhoto")
        var options = {                    
               quality: 75,
               destinationType: Camera.DestinationType.DATA_URL,
                sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
               allowEdit: false,
              
               correctOrientation: true,
               targetWidth: 300,
               targetHeight: 300,
               saveToPhotoAlbum: false               
           };                      
           $cordovaCamera.getPicture(options).then(function(imageData) {  
         $scope.urlImg1 = "data:image/jpeg;base64," + imageData;
            

        console.log($scope.urlImg1)
       }, function(err) {
        alert(err)
               console.log(err);
           });
           
         

     


     

     }//choose


     $scope.myGoBack = function() {

   
    $ionicHistory.goBack();
   
console.log("inback")

  };
})//ct


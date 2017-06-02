
var app1 =angular.module('starter', ['ionic','ionic-sidemenu','ngCordova','starter.DahsboardController','starter.services', 'starter.controllers','starter.search-item','starter.login','starter.vote','starter.forgotpass','starter.cart','starter.additems'])

.run(function($ionicPlatform,$ionicPlatform,$cordovaSQLite,$ionicPopup) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }

// if (window.cordova) {
//      // db = $cordovaSQLite.openDB({ name: "my.db" }); //device
//      db= window.sqlitePlugin.openDatabase({ name: "image1.db", location: 2, createFromLocation: 1 });
//      console.log("Android");
//      $ionicPopup.alert({
//         title:"database created successfull"
//      });
//     }else{
//       db = window.openDatabase("image1.db","1","demo",20000); // browser
//       console.log("browser");
//        }
//        $cordovaSQLite.execute(db,"CREATE TABLE product_details(id integer primary key,title text,subtitle text,price float,discount integer, img BLOB)");
  
  



  });








})




.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html'
  })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
       controller: 'loginCtrl'
    })

    .state('forgotpassword',{
      url:'/forgotpassword',
      templateUrl:'templates/forgotpassword.html',
      controller: 'forgotpasswordCtrl'
    })
   
    .state('otpverification',{
      url:'/otpverification',
      templateUrl:"templates/otpverification.html",
      controller:"forgotpasswordCtrl"
    })
    .state('newpassword',{
      url:'/newpassword',
      templateUrl:'templates/newpassword.html',
       controller:"forgotpasswordCtrl"

    })
    .state('cart',{
      url:'/cart',
      templateUrl:'templates/cart.html',
          controller:"cartCtrl"

    })
.state('additem',{
      url:'/additem',
      templateUrl:'templates/additem.html',
          controller:"additemsCtrl"

    })

    .state('setnewpasword',{
      url:'/setnewpasword',
      templateUrl:"templates/setnewpasword.html"
    })

     .state('vote',{
      url:'/vote',
      templateUrl:"templates/vote.html",
      controller:"voteCtrl"
    })
    .state('search',{
      url:'/search',
      templateUrl:"templates/search.html"

    })
    .state('revieworder',{
      url:'/revieworder',
      templateUrl:'templates/revieworder.html'
    })
    .state('purchaselist',{
      url:'/purchaselist',
      templateUrl:"templates/purchaselist.html",
       controller:"cartCtrl"
    })

.state('filter',{
      url:'/filter',
      templateUrl:"templates/filter.html",
       controller:"cartCtrl"
    })

.state('slideTab',{
      url:'/slideTab',
      templateUrl:"templates/slideTab.html",
       controller:"cartCtrl"
    })


     .state('app.tabs', {
      url: '/tabs',
      views: {
        'menuContent': {
          templateUrl: 'templates/tabs.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
     .state('app.deshbord', {
      url: '/deshbord',
      views: {
        'menuContent': {
          templateUrl: 'templates/deshbord.html',
          controller: 'DahsboardController'
        }
      }
    })
    
  $urlRouterProvider.otherwise('app/deshbord');
});



angular.module('starter.DahsboardController', [])
.controller('DahsboardController', function($scope, $ionicScrollDelegate, $timeout,$state,$cordovaSQLite) {
        $scope.allimage={};
          console.log("call to DahsboardController................");
        $scope.alldataplaylist={}
          

// document.addEventListener('click', function(e) {
//     alert(e.target.id);
//     console.log("==============="+e.target.id)
// });

 $scope.treename = [
                    { id:8,name:'Home'},
                   {id: 1,name: 'Offers'}, 
                    {id: 2,name: "Living"},
                    { id:3,name:'Bed room'},
                    { id:4,name:'Dining'},
                    { id:5,name:'Office'} ,
                    { id:6,name:'Outdoor'}, 
                     { id:7,name:'Kids'},    
                   ];

      $scope.dict = {};
      $scope.onclick=function(image_url)
      {
         $scope.itemcategory = image_url
         $scope.dict.img = image_url;
         sessionStorage.setItem('image_url', image_url);
         $state.go('app.playlists')
      }

      $scope.initailCall = function(){
          angular.element(document).ready(function () {
               $scope.image_url= sessionStorage.getItem('image_url');
               console.info("$$$$$$$$$$$$$initial Call@@@@@@@@@@@@@@@@@@@@@@",$scope.image_url);
               $scope.itemcategory = $scope.image_url;

               if($scope.itemcategory != undefined){
                     
                    var query ="select * from "+$scope.itemcategory+"item";

                    $cordovaSQLite.execute(db,query).then(function(result)
                    {
                       if(result.rows.length>0){
                          for(var i=0;i<result.rows.length;i++)
                          {
                             $scope.alldataplaylist[i]=result.rows.item(i)
                          }
                          $scope.AllImageArray = $scope.alldataplaylist;
                        
                        }
                    },function(error){
                      alert(JSON.stringify(error))
                    })

                    
                }

           });
        

      }

      


      //delete
        $scope.delete_item=function(id11,name)
        { 
        	alert(id11);
        	alert(name)
        	console.log("array data=>",name);
        	
        	name.splice(name.indexOf(id11),1);

        }


        //dashboard
                $scope.imagedataD={}

                  var query ="select * from Beditem " 
                //alert(query)
                $cordovaSQLite.execute(db,query).then(function(result)
                {
                   if(result.rows.length>0){
                    for(var i=0;i<result.rows.length;i++)
                    {
                  // $scope.alldata=result.rows.item(0).name;
                       $scope.allimage[i]=result.rows.item(i)
                      

                    }
                }else {
                  {
                    alert("data not found")
                  }
                }
                },function(error){
                 // alert(JSON.stringify(error))
                })


                $scope.sofasdata={};
                  var query ="select * from sofasitem " 

                //alert(query)
                $cordovaSQLite.execute(db,query).then(function(result)
                {
                   if(result.rows.length>0){
                    for(var i=0;i<result.rows.length;i++)
                    {
                  // $scope.alldata=result.rows.item(0).name;
                      $scope.sofasdata[i]=result.rows.item(i)
                       // console.error("All Data=>",$scope.allimage[i]);
                       // $scope.imagedataD.imgName = $scope.allimage[i].img;

                    }
                }else {
                  {
                    alert("data not found")
                  }
                }
                },function(error){
                 // alert(JSON.stringify(error))
                })


                //timeout function

                $timeout(function(){
                    //return false; // <--- comment this to "fix" the problem
                
                          var sv = $ionicScrollDelegate.$getByHandle('horizontal1').getScrollView();

                          var container = sv.__container;

                          var originaltouchStart = sv.touchStart;
                          var originalmouseDown = sv.mouseDown;
                          var originaltouchMove = sv.touchMove;
                          var originalmouseMove = sv.mouseMove;

                          container.removeEventListener('touchstart', sv.touchStart);
                          container.removeEventListener('mousedown', sv.mouseDown);
                          document.removeEventListener('touchmove', sv.touchMove);
                          document.removeEventListener('mousemove', sv.mousemove);
                          

                          sv.touchStart = function(e) {
                            e.preventDefault = function(){}
                            originaltouchStart.apply(sv, [e]);
                          }

                          sv.touchMove = function(e) {
                            e.preventDefault = function(){}
                            originaltouchMove.apply(sv, [e]);
                          }
                          
                          sv.mouseDown = function(e) {
                            e.preventDefault = function(){}
                            originalmouseDown.apply(sv, [e]);
                          }

                          sv.mouseMove = function(e) {
                            e.preventDefault = function(){}
                            originalmouseMove.apply(sv, [e]);
                          }

                          container.addEventListener("touchstart", sv.touchStart, false);
                          container.addEventListener("mousedown", sv.mouseDown, false);
                          document.addEventListener("touchmove", sv.touchMove, false);
                          document.addEventListener("mousemove", sv.mouseMove, false);
                       
                  });
                  $timeout(function(){
                    //return false; // <--- comment this to "fix" the problem
                   
                          var sv = $ionicScrollDelegate.$getByHandle('horizontal2').getScrollView();

                          var container = sv.__container;

                          var originaltouchStart = sv.touchStart;
                          var originalmouseDown = sv.mouseDown;
                          var originaltouchMove = sv.touchMove;
                          var originalmouseMove = sv.mouseMove;

                          container.removeEventListener('touchstart', sv.touchStart);
                          container.removeEventListener('mousedown', sv.mouseDown);
                          document.removeEventListener('touchmove', sv.touchMove);
                          document.removeEventListener('mousemove', sv.mousemove);
                          

                          sv.touchStart = function(e) {
                            e.preventDefault = function(){}
                            originaltouchStart.apply(sv, [e]);
                          }

                          sv.touchMove = function(e) {
                            e.preventDefault = function(){}
                            originaltouchMove.apply(sv, [e]);
                          }
                          
                          sv.mouseDown = function(e) {
                            e.preventDefault = function(){}
                            originalmouseDown.apply(sv, [e]);
                          }

                          sv.mouseMove = function(e) {
                            e.preventDefault = function(){}
                            originalmouseMove.apply(sv, [e]);
                          }

                          container.addEventListener("touchstart", sv.touchStart, false);
                          container.addEventListener("mousedown", sv.mouseDown, false);
                          document.addEventListener("touchmove", sv.touchMove, false);
                          document.addEventListener("mousemove", sv.mouseMove, false);
                      
                  });

                $timeout(function(){
                  
                    //return false; // <--- comment this to "fix" the problem
                    if(window.cordova){
                              var sv = $ionicScrollDelegate.$getByHandle('horizontal3').getScrollView();
                              var container = sv.__container;
                              var originaltouchStart = sv.touchStart;
                              var originalmouseDown = sv.mouseDown;
                              var originaltouchMove = sv.touchMove;
                              var originalmouseMove = sv.mouseMove;

                              container.removeEventListener('touchstart', sv.touchStart);
                              container.removeEventListener('mousedown', sv.mouseDown);
                              document.removeEventListener('touchmove', sv.touchMove);
                              document.removeEventListener('mousemove', sv.mousemove);
                              

                              sv.touchStart = function(e) {
                                e.preventDefault = function(){}
                                originaltouchStart.apply(sv, [e]);
                              }

                              sv.touchMove = function(e) {
                                e.preventDefault = function(){}
                                originaltouchMove.apply(sv, [e]);
                              }
                              
                              sv.mouseDown = function(e) {
                                e.preventDefault = function(){}
                                originalmouseDown.apply(sv, [e]);
                              }

                              sv.mouseMove = function(e) {
                                e.preventDefault = function(){}
                                originalmouseMove.apply(sv, [e]);
                              }

                              container.addEventListener("touchstart", sv.touchStart, false);
                              container.addEventListener("mousedown", sv.mouseDown, false);
                              document.addEventListener("touchmove", sv.touchMove, false);
                              document.addEventListener("mousemove", sv.mouseMove, false);
                      }
                  });
                $timeout(function(){
                    //return false; // <--- comment this to "fix" the problem
                  if(window.cordova){
                        var sv = $ionicScrollDelegate.$getByHandle('horizontal4').getScrollView();

                        var container = sv.__container;

                        var originaltouchStart = sv.touchStart;
                        var originalmouseDown = sv.mouseDown;
                        var originaltouchMove = sv.touchMove;
                        var originalmouseMove = sv.mouseMove;

                        container.removeEventListener('touchstart', sv.touchStart);
                        container.removeEventListener('mousedown', sv.mouseDown);
                        document.removeEventListener('touchmove', sv.touchMove);
                        document.removeEventListener('mousemove', sv.mousemove);
                        

                        sv.touchStart = function(e) {
                          e.preventDefault = function(){}
                          originaltouchStart.apply(sv, [e]);
                        }

                        sv.touchMove = function(e) {
                          e.preventDefault = function(){}
                          originaltouchMove.apply(sv, [e]);
                        }
                        
                        sv.mouseDown = function(e) {
                          e.preventDefault = function(){}
                          originalmouseDown.apply(sv, [e]);
                        }

                        sv.mouseMove = function(e) {
                          e.preventDefault = function(){}
                          originalmouseMove.apply(sv, [e]);
                        }

                        container.addEventListener("touchstart", sv.touchStart, false);
                        container.addEventListener("mousedown", sv.mouseDown, false);
                        document.addEventListener("touchmove", sv.touchMove, false);
                        document.addEventListener("mousemove", sv.mouseMove, false);
                      }
                  });
                $timeout(function(){
                    //return false; // <--- comment this to "fix" the problem
                    if(window.cordova){
                          var sv = $ionicScrollDelegate.$getByHandle('horizontal5').getScrollView();

                          var container = sv.__container;

                          var originaltouchStart = sv.touchStart;
                          var originalmouseDown = sv.mouseDown;
                          var originaltouchMove = sv.touchMove;
                          var originalmouseMove = sv.mouseMove;

                          container.removeEventListener('touchstart', sv.touchStart);
                          container.removeEventListener('mousedown', sv.mouseDown);
                          document.removeEventListener('touchmove', sv.touchMove);
                          document.removeEventListener('mousemove', sv.mousemove);
                          

                          sv.touchStart = function(e) {
                            e.preventDefault = function(){}
                            originaltouchStart.apply(sv, [e]);
                          }

                          sv.touchMove = function(e) {
                            e.preventDefault = function(){}
                            originaltouchMove.apply(sv, [e]);
                          }
                          
                          sv.mouseDown = function(e) {
                            e.preventDefault = function(){}
                            originalmouseDown.apply(sv, [e]);
                          }

                          sv.mouseMove = function(e) {
                            e.preventDefault = function(){}
                            originalmouseMove.apply(sv, [e]);
                          }

                          container.addEventListener("touchstart", sv.touchStart, false);
                          container.addEventListener("mousedown", sv.mouseDown, false);
                          document.addEventListener("touchmove", sv.touchMove, false);
                          document.addEventListener("mousemove", sv.mouseMove, false);
                      }
                  });



                  $scope.data = {
                    grid: false
                  };

                  $scope.scroll = function () {
                    console.log();

                    $timeout(function () {

                      $scope.scrolling = true;

                    });
                  };

                  $scope.onComplete = function () {
                    //console.log('Scroll complete');

                    $timeout(function () {
                  console.log('Scroll complete');
                      $scope.scrolling = false;

                    });
                  };


                  $scope.showclass=function()
                  {console.log("inshow");
                    document.getElementById("div1").classList.remove("close");
                   var div2= document.getElementById("div1").classList.add("slider");
                   console.log(div2);
                  }


                  $scope.showProductInfo=function (id,img1,title,price,discount) {  

                       sessionStorage.setItem('product_info_id', id);
                       sessionStorage.setItem('product_info_img', img1);
                       sessionStorage.setItem('product_info_title', title);
                       sessionStorage.setItem('product_info_price', price);
                       sessionStorage.setItem('product_discount_price',discount)
                      //  console.log(discount)
                      //   console.log(id)
                      // console.log(img1)
                      // console.log(price)
                      // console.log(title)
                       window.location.href = "#/purchaselist";
                     };

                    angular.element(document).ready(function () {
                      $scope.id= sessionStorage.getItem('product_info_id');
                      
                      $scope.img1=  sessionStorage.getItem('product_info_img')
                      $scope.title= sessionStorage.getItem('product_info_title');
                      $scope.price= sessionStorage.getItem('product_info_price');
                      $scope.discount_price=sessionStorage.getItem('product_discount_price')
                      // console.log($scope.id)
                      // console.log($scope.img1)
                      // console.log($scope.title)
                      // console.log($scope.price)
                       console.log($scope.discount_price)



                    });



   
})






.controller('SideMenuCtrl', function($scope,$state) {
  $scope.theme = 'ionic-sidemenu-green';
  $scope.tree = [
                   {id: 1,level: 0,name: 'Offers & New Arrivals',
    
                     items: [
                              { id:10,level:1,name:'offer Zone'},
                              { id:11,level:1,name:'New Arrivals'}
                             ]
                    }, 
                    
                    {id: 2,name: "Living",level: 0,
                      
                      items: [
                              { id:20,level:1,name: 'Sofas'},
                              { id:21,level:1,name: 'Recliners'},
                              { id:22,level:1,name:'Tv Units'},
                              { id:23,level:1,name:'Coffee Table'},
                              { id:24,level:1,name:'Bar Furniture'},
                              { id:25,level:1,name:'Shop Racks'}
                              
                             ]//living items close
                    },
                    
                    { id:3,level:0,name:'Bed room',
                      
                      items:[
                        {id:30,level:1,name:'Beds'},
                        {id:31,level:1,name:'Dressing Table'},
                        {id:32,level:1,name:'Side Table'},
                        {id:33,level:1,name:'wardrobes'},
                        {id:34,level:1,name:'Mattresses'}
                       
                      ]//bed items close
                    },

                    { id:4,level:0,name:'Dining',


                      items:[
                              {id:40,level:1,name:'Dining Sets'},
                              {id:41,level:1,name:'Crockery Units'},
                              {id:42,level:1,name:'Dining Chairs'}
                              ]

                    },

                    { id:5,level:0,name:'Office',


                       items:[
                              {id:50,level:1,name:'Office Table'},
                              {id:51,level:1,name:'Office Chairs'},
                              {id:52,level:1,name:'Computer Table'},
                              {id:53,level:1,name:'Bookshelves'}
                             ]

                    },

                    { id:6,level:0,name:'Outdoor',


                       items:[
                              {id:60,level:1,name:'Outdoor Furniture'}
                              
                             ]

                     }, 
                     

                      { id:7,level:0,name:'Kids',


                       items:[
                              {id:70,level:1,name:'Kids Furniture'}
                              
                             ]

                     },   



                     { id:8,level:0,name:'Home',


                       items:[
                              {id:80,level:1,name:'Accessories'}
                              
                             ]

                     },             
                           
                    
                ];





  $scope.Cart=function()
  {
console.log("cart")
    $state.go("cart")

  }


  $scope.Additems=function()
  {


 $state.go("additem")
  }













});// contoller close


// Scroll fix directive
(function() {
  var HorizontalScrollFix = (function() {
    function HorizontalScrollFix($timeout, $ionicScrollDelegate) {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          var mainScrollID = attrs.horizontalScrollFix,
              scrollID = attrs.delegateHandle;
          
          var getEventTouches = function(e) {
            return e.touches && (e.touches.length ? e.touches : [
              {
                pageX: e.pageX,
                pageY: e.pageY
              }
            ]);
          };
          
          var fixHorizontalAndVerticalScroll = function() {
            var mainScroll, scroll;
            mainScroll = $ionicScrollDelegate.$getByHandle(mainScrollID).getScrollView();
            scroll = $ionicScrollDelegate.$getByHandle(scrollID).getScrollView();
            
            // patch touchstart
            scroll.__container.removeEventListener('touchstart', scroll.touchStart);
            scroll.touchStart = function(e) {
              var startY;
              scroll.startCoordinates = ionic.tap.pointerCoord(e);
              if (ionic.tap.ignoreScrollStart(e)) {
                return;
              }
              scroll.__isDown = true;
              if (ionic.tap.containsOrIsTextInput(e.target) || e.target.tagName === 'SELECT') {
                scroll.__hasStarted = false;
                return;
              }
              scroll.__isSelectable = true;
              scroll.__enableScrollY = true;
              scroll.__hasStarted = true;
              scroll.doTouchStart(getEventTouches(e), e.timeStamp);
              startY = mainScroll.__scrollTop;
              
              // below is our changes to this method
              // e.preventDefault();
             
              // lock main scroll if scrolling horizontal
              $timeout((function() {
                var animate, yMovement;
                yMovement = startY - mainScroll.__scrollTop;
                if (scroll.__isDragging && yMovement < 2.0 && yMovement > -2.0) {
                  mainScroll.__isTracking = false;
                  mainScroll.doTouchEnd();
                  animate = false;
                  return mainScroll.scrollTo(0, startY, animate);
                } else {
                  return scroll.doTouchEnd();
                }
              }), 100);
            };
            scroll.__container.addEventListener('touchstart', scroll.touchStart);
          };
          $timeout(function() { fixHorizontalAndVerticalScroll(); });          
        }
      };
    }

    return HorizontalScrollFix;

  })();

  angular.module('starter.DahsboardController').directive('horizontalScrollFix', ['$timeout', '$ionicScrollDelegate', HorizontalScrollFix]);

}).call(this);



 

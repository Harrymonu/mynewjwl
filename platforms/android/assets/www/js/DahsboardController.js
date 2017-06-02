angular.module('starter.DahsboardController', [])




.controller('DahsboardController', function($scope, $ionicScrollDelegate, $timeout,$state) {

  console.log("call to DahsboardController................");

  $scope.Cart=function()
  {

  	console.log("incart")

  }

  $scope.dmofunction = function(){
  	console.log("call to demo function");
  }


 $scope.dining = [
                     {id:1,image: 'https://ii1.pepperfry.com/media/catalog/product/i/l/800x400/illinois-queen-bed-with-storage-in-natural-mango-wood-finish-by-woodsworth-illinois-queen-bed-with-s-906vf7.jpg' }, 
                      {id:2,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYZBT496-main-1_royal-oak-sapphire-dining-set-with-six-chairs-1470751848.jpg' }, 
                      {id:3,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYSWH798-main-1_royal-oak-pearl-dining-set-six-seater-1479378908.jpg' }, 
                      {id:4,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYPGSX66-main-1_geneva-glass-oval-dining-4s-1-1398318938.jpg' },
                      {id:5,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYIGL389-main-1_royal-oak-hunter-dining-set-with-four-chairs-1444743549.jpg' }, 
                      {id:6,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYRPQ464-main-1_royal-oak-empire-dining-set-with-eight-chairs-honey-brown-finish-1469602291.jpg' }, 
                      {id:7,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYKDW466-main-1_royal-oak-milan-dining-set-with-four-chairs-black-finish-1444915178.jpg' }, 
                      {id:8,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYLNA467-main-1_royal-oak-lotus-dining-set-with-six-chairs-honey-brown-finish-1444915348.jpg' }
                     
                    ];
                     $scope.dining = [
                     {id:1,image: 'https://ii1.pepperfry.com/media/catalog/product/s/a/494x544/san-nicholas-six-seater-dining-set-in-provincial-teak-finish-by-woodsworth-san-nicholas-six-seater-d-ms2hvr.jpg' }, 
                      {id:2,image: 'https://ii1.pepperfry.com/media/catalog/product/v/a/494x544/valencia-six-seater-dining-set-in-provincial-teak-finish-by-woodsworth-valencia-six-seater-dining-se-hmknbi.jpg' }, 
                      {id:3,image: 'https://ii1.pepperfry.com/media/catalog/product/l/e/800x880/leander-six-seater-dining-set-in-provincial-teak-finish-by-woodsworth-leander-six-seater-dining-set--dieryf.jpg' }, 
                      {id:4,image: 'https://ii1.pepperfry.com/media/catalog/product/a/l/494x544/alder-six-seater-dining-set-with-cushion-in-honey-oak--finish-by-woodsworth-alder-six-seater-dining--fw9qfj.jpg' },
                      {id:5,image: 'https://ii1.pepperfry.com/media/catalog/product/b/a/494x544/barcelona-solid-wood-six-seater-dining-set-in-honey-oak-finish-by-woodsworth-barcelona-solid-wood-si-thvsfm.jpg' }, 
                      {id:6,image: 'https://ii1.pepperfry.com/media/catalog/product/a/l/494x544/alonzo-solid-wood-six-seater-dining-set-in-premium-acacia-finish-by-woodsworth-alonzo-solid-wood-six-eyggcm.jpg' }, 
                      {id:7,image: 'https://ii1.pepperfry.com/media/catalog/product/s/a/494x544/sao-paulo-six-seater-dining-table-set-in-provincial-teak-finish-by-woodsworth-sao-paulo-six-seater-d-ohtmno.jpg' }, 
                      {id:8,image: 'https://ii1.pepperfry.com/media/catalog/product/j/u/494x544/juvencio-six-seater-dining-set-in-cappuccino-finish-by-casacraft-juvencio-six-seater-dining-set-in-c-u09byj.jpg' }
                     
                    ];


$scope.tv = [
                     {id:1,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYCCC513-main-1_royal-oak-sapphire-tv-stand-with-honey-brown-finish-1448272640.jpg' }, 
                      {id:2,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYKMNJ88-main-1_berlin-tv-stand-2-1398452549.jpg' }, 
                      {id:3,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYJCT787-main-1_royal-oak-magna-tv-stand-1479376759.jpg' }, 
                      {id:4,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYRJU427-main-1_royal-oak-lotus-entertainment-unit-with-honey-brown-finish-1463146266.jpg' },
                      {id:5,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYWNY362-main-1_royal-oak-olive-tv-stand-with-natural-finish-1444385645.jpg' }, 
                      {id:6,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYWBM761-main-1_royaloak-antique-tv-stand-rose-1475055559.jpg' }, 
                      {id:7,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYLPN882-main-1_royaloak-tv-unit-black-and-white-1487338763.jpg' }, 
                      {id:8,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYZYVS81-main-1_daisy-tv-stand-1-1444386952.jpg' }
                     
                    ];
$scope.tv1 = [
                     {id:1,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYCCC513-main-1_royal-oak-sapphire-tv-stand-with-honey-brown-finish-1448272640.jpg' }, 
                      {id:2,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYKMNJ88-main-1_berlin-tv-stand-2-1398452549.jpg' }, 
                      {id:3,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYJCT787-main-1_royal-oak-magna-tv-stand-1479376759.jpg' }, 
                      {id:4,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYRJU427-main-1_royal-oak-lotus-entertainment-unit-with-honey-brown-finish-1463146266.jpg' },
                      {id:5,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYWNY362-main-1_royal-oak-olive-tv-stand-with-natural-finish-1444385645.jpg' }, 
                      {id:6,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYWBM761-main-1_royaloak-antique-tv-stand-rose-1475055559.jpg' }, 
                      {id:7,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYLPN882-main-1_royaloak-tv-unit-black-and-white-1487338763.jpg' }, 
                      {id:8,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYZYVS81-main-1_daisy-tv-stand-1-1444386952.jpg' }
                     
                    ];




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
$scope.bed = [
                     {id:1,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYOXN623-main-1_royal-oak-austin-queen-bed-with-honey-brown-finish-1458137468.jpg' }, 
                      {id:2,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYGLQ627-main-1_royal-oak-austin-single-bed-with-honey-brown-finish-1458138175.jpg' }, 
                      {id:3,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYDKW535-main-1_royal-oak-sydney-queen-bed-with-honey-brown-finish-1454416043.jpg' }, 
                      {id:4,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYNNIV19-main-1_royal-oak-geneva-king-bed-with-hydraulic-storage-dark-finish-1463490945.jpg' },
                      {id:5,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYCRX139-main-2_royaloak-berlin-queen-bed-with-chocolate-finish-1489389402.jpg' }, 
                      {id:6,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYCRX139-main-2_royaloak-berlin-queen-bed-with-chocolate-finish-1489389402.jpg' }, 
                      {id:7,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYYCZ127-main-1_royal-oak-daffodil-hydraulic-storage-queen-bed-with-natural-finish-1438344976.jpg' }, 
                      {id:8,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYOFL904-main-2_royal-oak-king-bed-wooden-color-1488377001.jpg' },
                      {id:9,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYVEB129-main-1_royal-oak-olive-hydraulic-storage-queen-bed-with-natural-finish-1438344758.jpg' },
                      {id:10,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYINC598-main-1_bd802-6-wr802-4-st802-dr802-1456901017.jpg' }
                    ];



$timeout(function(){
    //return false; // <--- comment this to "fix" the problem
    var sv = $ionicScrollDelegate.$getByHandle('horizontal').getScrollView();

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
  });
$timeout(function(){
    //return false; // <--- comment this to "fix" the problem
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
  });
$timeout(function(){
    //return false; // <--- comment this to "fix" the problem
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
  });




$scope.onclick=function(image_url)
{
	
$state.go('app.playlists')

}



$scope.delete_item=function(id11,name)
{ 
	alert(id11);
	alert(name)
	console.log("array data=>",name);
	
	name.splice(name.indexOf(id11),1);

	
	//console.log($scope.dining.splice($scope.dining.indexOf(id11),1))
	//$state.go('.',null,{reload:true})
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



 

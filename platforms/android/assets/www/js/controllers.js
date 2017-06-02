angular.module('starter.controllers', [])
.controller('PlaylistsCtrl', function($scope,$timeout ,$rootScope,$ionicScrollDelegate ,$state,$ionicScrollDelegate) {
 

  $scope.playlists = [
                     {title: 'RoyalOak Grand Two-Seater Motorised Recliner with Brown Upholstery' ,id: 1,img1:'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYBXP825-main-2_royal-oak-saphire-round-dining-set-with-four-chairs-in-teak-finish-1482742735.jpg',price:20000}, 
                      {title: 'RoyalOak Grand Two-Seater Motorised Recliner with Brown Upholstery'   ,id: 2,img1:'https://ii1.pepperfry.com/media/catalog/product/v/a/494x544/valencia-six-seater-dining-set-in-provincial-teak-finish-by-woodsworth-valencia-six-seater-dining-se-hmknbi.jpg',price:30000}, 
                      {title: 'RoyalOak Grand Two-Seater Motorised Recliner with Brown Upholstery' ,id: 3,img1:'https://ii1.pepperfry.com/media/catalog/product/l/e/800x880/leander-six-seater-dining-set-in-provincial-teak-finish-by-woodsworth-leander-six-seater-dining-set--dieryf.jpg',price:4000}, 
                      {title: 'RoyalOak Grand Two-Seater Motorised Recliner with Brown Upholstery'    ,id: 4,img1:'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYSWH798-main-1_royal-oak-pearl-dining-set-six-seater-1479378908.jpg',price:5600},
                      {title: 'RoyalOak Grand Two-Seater Motorised Recliner with Brown Upholstery' ,id: 5,img1:'https://ii1.pepperfry.com/media/catalog/product/a/l/494x544/alder-six-seater-dining-set-with-cushion-in-honey-oak--finish-by-woodsworth-alder-six-seater-dining--fw9qfj.jpg',price:4000}, 
                      {title: 'RoyalOak Grand Two-Seater Motorised Recliner with Brown Upholstery'   ,id: 6,img1:'https://ii1.pepperfry.com/media/catalog/product/a/l/494x544/alonzo-solid-wood-six-seater-dining-set-in-premium-acacia-finish-by-woodsworth-alonzo-solid-wood-six-eyggcm.jpg',price:30000}, 
                      {title: 'RoyalOak Grand Two-Seater Motorised Recliner with Brown Upholstery' ,id: 7,img1:'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYKDW466-main-1_royal-oak-milan-dining-set-with-four-chairs-black-finish-1444915178.jpg',price:4000}, 
                      {title: 'RoyalOak Grand Two-Seater Motorised Recliner with Brown Upholstery'    ,id: 8,img1:'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYLNA467-main-1_royal-oak-lotus-dining-set-with-six-chairs-honey-brown-finish-1444915348.jpg',price:5600}
                     
                    ];


//teb
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
                     {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYCCC513-main-1_royal-oak-sapphire-tv-stand-with-honey-brown-finish-1448272640.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYKMNJ88-main-1_berlin-tv-stand-2-1398452549.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYJCT787-main-1_royal-oak-magna-tv-stand-1479376759.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYRJU427-main-1_royal-oak-lotus-entertainment-unit-with-honey-brown-finish-1463146266.jpg' },
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYWNY362-main-1_royal-oak-olive-tv-stand-with-natural-finish-1444385645.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYWBM761-main-1_royaloak-antique-tv-stand-rose-1475055559.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYLPN882-main-1_royaloak-tv-unit-black-and-white-1487338763.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYZYVS81-main-1_daisy-tv-stand-1-1444386952.jpg' }
                     
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
                     {id: 1,image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYOXN623-main-1_royal-oak-austin-queen-bed-with-honey-brown-finish-1458137468.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYGLQ627-main-1_royal-oak-austin-single-bed-with-honey-brown-finish-1458138175.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYDKW535-main-1_royal-oak-sydney-queen-bed-with-honey-brown-finish-1454416043.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYNNIV19-main-1_royal-oak-geneva-king-bed-with-hydraulic-storage-dark-finish-1463490945.jpg' },
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYCRX139-main-2_royaloak-berlin-queen-bed-with-chocolate-finish-1489389402.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYCRX139-main-2_royaloak-berlin-queen-bed-with-chocolate-finish-1489389402.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYYCZ127-main-1_royal-oak-daffodil-hydraulic-storage-queen-bed-with-natural-finish-1438344976.jpg' }, 
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYJYQ780-main-2_royaloak-milan-king-bed-walnut-1475068691.jpg' },
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYVEB129-main-1_royal-oak-olive-hydraulic-storage-queen-bed-with-natural-finish-1438344758.jpg' },
                      {image: 'https://c1d17324fd03d3c1554c-f8d9b202a9cbdc7dfbad7882f67faaf4.ssl.cf1.rackcdn.com/ROYINC598-main-1_bd802-6-wr802-4-st802-dr802-1456901017.jpg' }
                    ];






///for list to grid

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
  console.log('Scroll complete');

  $timeout(function () {

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
     console.log(discount)
      console.log(id)
    console.log(img1)
    console.log(price)
    console.log(title)
     window.location.href = "#/purchaselist";
   };

  angular.element(document).ready(function () {
    $scope.id= sessionStorage.getItem('product_info_id');
    
    $scope.img1=  sessionStorage.getItem('product_info_img')
    $scope.title= sessionStorage.getItem('product_info_title');
    $scope.price= sessionStorage.getItem('product_info_price');
    $scope.discount_price=sessionStorage.getItem('product_discount_price')
    console.log($scope.id)
    console.log($scope.img1)
    console.log($scope.title)
    console.log($scope.price)


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

 


 });
// document.addEventListener('click', function(e) {
//     alert(e.target.id);
//     console.log("==============="+e.target.id)
// });






  

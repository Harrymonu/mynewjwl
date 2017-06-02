angular.module('starter.cart', [])

 


.controller('cartCtrl', function($scope,$cordovaToast,$cordovaSms,$ionicPlatform ,$state,sharedCartService,$ionicHistory,$ionicPlatform) {
	

/// for invoke the ready function
	document.addEventListener('click', function(e) {

   //  alert("incart",e.target.id);
   // window.itemids=e.target.id


 $ionicPlatform.ready(function() {
		$scope.id= sessionStorage.getItem('product_info_id');
		
		$scope.img1=  sessionStorage.getItem('product_info_img')
		$scope.title= sessionStorage.getItem('product_info_title');
		$scope.price= sessionStorage.getItem('product_info_price');
		$scope.discount_price= sessionStorage.getItem('product_discount_price');
		// console.log($scope.id)
		// console.log($scope.img1)
		// console.log($scope.title)
		
	var discountper=($scope.discount_price*100)/$scope.price
$scope.discount_per=parseInt(discountper,10)


	});

});


	 var cart = sharedCartService.cart;
      

 $scope.addToCart=function(id,image,name,price){ 
	 console.log("incart")   
		cart.add(id,image,name,price,1); //call service function add
		// console.log(id)
		// console.log(image)
		// console.log(price)
		// console.log(name)
		
		window.location.href = "#/cart";	
	 };	 



  
    	$scope.increment=function(){






    	}//increment




	

// 	// decrement()
// 	$scope.increment=function(){
// 		console.log("inincrement")

// 	document.addEventListener('click', function(e) {
//     // alert(e.target.id);
//    window.itemids=e.target.id
// });
// 	var id=itemids

// var item=document.getElementById('id').value
// var price = document.getElementById("price").innerHTML
// window.deliveryprice=parseInt(document.getElementById("deliveryprice").innerHTML)
// if(item<10)
// {
// item++;
// if(item==1){
// 	window.price1
// price1=price;
// console.log(price1)
// }

// var realprice =price1.replace( /,/g, "" );//for remove commas
// console.log(deliveryprice+10)


// var incprice=(item* parseInt(realprice))
// console.log(incprice)
// var cartpricedeliverycharge=(incprice+deliveryprice).toLocaleString()
//  var realprice1=incprice.toLocaleString() //add commas
//  console.log((realprice1));
// document.getElementById('price').innerHTML=realprice1
// document.getElementById('cardprice').innerHTML=realprice1
// document.getElementById('totalcardprice').innerHTML=cartpricedeliverycharge

// document.getElementById('item').value=item
// document.getElementById('carditem').innerHTML=item

//   }   



// 	} //decrement close



// 	$scope.decrement=function(){

// 		var item=document.getElementById('item').value
// 		var price = document.getElementById("price").innerHTML
// 		window.deliveryprice=parseInt(document.getElementById("deliveryprice").innerHTML)
// item--;
// console.log("item="+item)
// console.log("price="+price)
// if(item>=1)
// {

// var totalprice =parseInt(price.replace( /,/g, "" ));//for remove commas
// var realprice =price1.replace( /,/g, "" );//for remove commas
// console.log("realprice="+realprice)


// totalprice=totalprice-parseInt(realprice)
// console.log(totalprice)
// var cartpricedeliverycharge=(totalprice+deliveryprice).toLocaleString() 
//  var realprice1=totalprice.toLocaleString() //add commas
//  console.log((realprice1));
// document.getElementById('price').innerHTML=realprice1

// document.getElementById('cardprice').innerHTML=realprice1
// document.getElementById('totalcardprice').innerHTML=cartpricedeliverycharge


// document.getElementById('item').value=item
// document.getElementById('carditem').value=item
// }
// 	}//increment close

// $scope.deleteitem=function(){
// 	console.log("call deleteitem")

// 	var list = document.getElementById('list'),

//         items = Array.prototype.slice.call(list.childNodes),
//         item;
//         console.log(item)
//     while (item = items.pop()) {
//         if (item.firstChild && item.firstChild.checked) {
//             list.removeChild(item);
//         }
//     }
// }





// $scope.addtocart=function(){
// 	console.log("incart")
// 	window.price = document.getElementById("price").innerHTML
// 	 window.img = document.getElementById("imgid").src
// 	console.log("incart"+price)
// 	console.log("incart"+img)
// 	callfun();

	
// $state.go("cart1");



// }//add tocart
$scope.myGoBack = function() {

   
    $ionicHistory.goBack();
   
console.log("inback")

  };

  	$scope.$on('$stateChangeSuccess', function () {
  		    $scope.total_item= sharedCartService.total_item
			$scope.cart=sharedCartService.cart;
			$scope.total_qty=sharedCartService.total_qty;
			$scope.total_amount=sharedCartService.total_amount;		
		});
		
		//remove function
		$scope.removeFromCart=function(c_id,c_l_id){
			console.log("remove"+c_id)
			console.log("remove"+c_l_id)
			$scope.cart.drop(c_id,c_l_id);	

           $scope.total_item= sharedCartService.total_item
           console.log("total item==="+$scope.total_item)
			$scope.total_qty=sharedCartService.total_qty;
			console.log("total qty==="+$scope.total_qty)
			$scope.total_amount=sharedCartService.total_amount;
			
		};
		
		$scope.inc=function(c_id){
			console.log("in inc"+c_id)
			$scope.cart.increment(c_id);

			$scope.total_qty=sharedCartService.total_qty;
			console.log("in inc"+$scope.total_qty)
			$scope.total_amount=sharedCartService.total_amount;
		};
		
		$scope.dec=function(c_id,c_item){
			if(c_item >1)
			{
			$scope.cart.decrement(c_id);
			console.log('dec_card  item'+c_item)
			$scope.total_qty=sharedCartService.total_qty;
			console.log("in dec"+$scope.total_qty)
			$scope.total_amount=sharedCartService.total_amount;
		}
		};
		
		$scope.checkout=function(){
			if($scope.total_amount>0){
				$state.go('checkOut');
			}
			else{
				var alertPopup = $ionicPopup.alert({
					title: 'No item in your Cart',
					template: 'Please add Some Items!'
				});
			}
		};


		 $scope.Login=function()
  {
  	console.log("in login")
  	$state.go("app.playlists")
  }

})//controller



// function myHandler(){
//     alert(myHandler.caller.arguments[0].target.id)
// }



	




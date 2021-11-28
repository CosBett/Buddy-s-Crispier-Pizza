function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);
}

var price, crustPrice, toppingPrice ;
let total = 0;

function orderPizza( size, crust, topping, total ){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
   $('#proceed').click(function(event){
     let pizzaSize = $('#psize-input option:selected').val();
     let pizzaCrust = $('#pcrust-input option:selected').val();
     let pizzaToppings = []; 
     $.each($("input[name='ptoppings']:checked"), function(){            
         pizzaToppings.push($(this).val());
   });
   console.log(pizzaToppings.join(", "));
   switch(pizzaSize){

   }
})
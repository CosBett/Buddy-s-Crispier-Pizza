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
  if (myIndex > x.length) {
    myIndex = 1
  }    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000);
}

var price, crustPrice, toppingPrice ;
let total = 0;

function orderPizza( size, crust, toppings, total ){
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.total = total;
}
$(document).ready(function(){
   $("#proceed").click(function(event){
     let pizzaSize = $("#psize-input option:selected").val();
     let pizzaCrust = $("#pcrust-input option:selected").val();
     let pizzaToppings = []; 
     $.each($("input[name='ptoppings']:checked"), function(){            
         pizzaToppings.push($(this).val());
   });
   console.log(pizzaToppings.join(" , "));
   switch(pizzaSize){
      case "0":
      price =0;
      break;
      case "small":
      price = 600;
      console.log(price);
      break;
      case "medium":
      price = 850;
      console.log("The price is: "+price);
      break;
      case "small":
      price = 1000;
      console.log(price);
      default:
      console.log("Select Pizza size"); 
   }
   switch(pizzaCrust){
      case "0":
      crustPrice =0;
      break;
      case "cripsy":
      crustPrice = 100;
      break;
      case "stuffed":
      price = 110;
      break;
      case "gluten-free":
      crustPrice = 130;
      default:
        console.log("Select Pizza Crust"); 
    }
    let toppings_value = pizzaToppings.length*150;
        console.log("Pizza Toppings value :" + toppings_value);
        total = price + crustPrice + toppings_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal); 

    var newOrder = new orderPizza(pizzaSize, pizzaCrust,pizzaToppings,total);
  
        $("#ordersplaced").append('<tr><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatoppings">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
        console.log(newOrder); 
   });  
   $("button#checkout").click(function(){
      $("button#checkout").hide();
      $("button#addPizza").hide();
      $("button#deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Total bills is Ksh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is Ksh. "+checkoutTotal);
   }); 
  
   $("button#deliver").click(function(){
      $(".checkout-table").hide();
      $(".summary h4").hide();
      $("#delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button#deliver").hide();
      $("#pizzatotal").hide();

      let deliveryamount= checkoutTotal+200;
      console.log("The total amount will pay Ksh. "+ deliveryamount +" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliveryamount);
    });

    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $("#delivery").hide();
      $("button#final-order").hide();
      let deliveryamount= checkoutTotal+150;
      console.log("Final Bill is: "+ deliveryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
      $("#finalmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ " for Ksh. "+deliveryamount);
      $("#totalbill").hide();
      $("#finalmessage").slideDown(1200);
      }
      else {
      alert("Please fill in the details for delivery!");
      $(".delivery").show();
      $("button#final-order").show();
      }
  });
  
})
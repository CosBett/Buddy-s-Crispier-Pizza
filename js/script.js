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

// var price, crustPrice, toppingPrice ;
// let total = 0;

// function orderPizza( size, crust, toppings, total ){
//   this.size = size;
//   this.crust = crust;
//   this.toppings = toppings;
//   this.total = total;
// }
// $(document).ready(function(){
//    $("#proceed").click(function(event){
//      let pizzaSize = $("#psize-input option:selected").val();
//      let pizzaCrust = $("#pcrust-input option:selected").val();
//      let pizzaToppings = []; 
//      $.each($("input[name='ptoppings']:checked"), function(){            
//          pizzaToppings.push($(this).val());
//    });
//    console.log(pizzaToppings.join(", "));
//    switch(pizzaSize){
//       case "0":
//       price =0;
//       break;
//       case "small":
//       price = 600;
//       console.log(price);
//       break;
//       case "medium":
//       price = 850;
//       console.log("The price is: "+price);
//       break;
//       case "small":
//       price = 1000;
//       console.log(price);
//       default:
//       console.log("Select Pizza size"); 
//    }
//    switch(pizzaCrust){
//       case "0":
//       crustPrice =0;
//       break;
//       case "cripsy":
//       crustPrice = 100;
//       break;
//       case "stuffed":
//       price = 110;
//       break;
//       case "gluten-free":
//       crustPrice = 130;
//       default:
//         console.log("Select Pizza Crust"); 
//     }
//     let toppings_value = pizzaToppings.length*150;
//         console.log("Pizza Toppings value :" + toppings_value);
//         total = price + crustPrice + toppings_value;
//         console.log(total);

//         checkoutTotal = checkoutTotal + total;
//         console.log(checkoutTotal);     
  
// })
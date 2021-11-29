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
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000);
}

var price, crustPrice, toppingPrice;
let total = 0;

function orderPizza(size, crust, toppings, total) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.total = total;
}
$(document).ready(function() {
    $("#proceed").click(function(event) {
        let pizzaSize = $("#psize-input option:selected").val();

        console.log('pizzaSize =' + pizzaSize);
        let pizzaCrust = $("#pcrust-input option:selected").val();
        console.log('pizzaCrust=' + pizzaCrust);
        let pizzaToppings = [];
        $.each($("input[name='ptoppings']:checked"), function() {
            pizzaToppings.push($(this).val());
        });
        console.log(pizzaToppings.join(", "));
        switch (pizzaSize) {
            case "Small - kshs. 600":
                price = 600;
                console.log(price);
                break;
            case "Medium - Kshs. 850":
                price = 850;
                console.log("The price is: " + price);
                break;
            case "Large - Kshs. 1000":
                price = 1000;
                console.log(price);
            default:
                console.log("Select Pizza size");
        }
        switch (pizzaCrust) {
            case "Cripsy- kshs. 100":
                crustPrice = 100;
                break;
            case "Stuffed - Kshs.110":
                crustPrice = 110;
                break;
            case "Gluten-Free - Kshs. 130":
                crustPrice = 130;
            default:
                console.log("Select Pizza Crust");
        }
        let toppings_value = pizzaToppings.length * 150;
        console.log("Pizza Toppings value :" + toppings_value);

        if ((pizzaSize == "0") && (pizzaCrust == "0")) {
            console.log("nothing selected");
            $(".proceed").show();
            $(".summary").hide();
            alert("Please select pizza size, crust and toppings");
        } else {
            $("#proceed").hide();
            $(".summary").slideDown(1000);
        }

        total = price + crustPrice + toppings_value;
        console.log(total);
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzasize").html($("#psize-input option:selected").val());
        $("#pizzacrust").html($("#pcrust-input option:selected").val());
        $("#pizzatoppings").html(pizzaToppings.join(", "));
        $("#totals").html(total);

        $("addPizza").click(function() {
            let pizzaSize = $("#psize-input option:selected").val();
            let pizzaCrust = $("#pcrust-input option:selected").val();
            let pizzaToppings = [];

            $.each($("input[name='ptoppings']:checked"), function() {
                pizzaToppings.push($(this).val());
            });
            console.log(pizzaToppings.join(", "));

            switch (pizzaSize) {
                case "Small - kshs. 600":
                    price = 600;
                    console.log(price);
                    break;
                case "Medium - Kshs. 850":
                    price = 850;
                    console.log("The price is: " + price);
                    break;
                case "Large - Kshs. 1000":
                    price = 1000;
                    console.log(price);
                default:
                    console.log("Select Pizza size");
            }
            switch (pizzaCrust) {
                case "Cripsy- kshs. 100":
                    crustPrice = 100;
                    break;
                case "Stuffed - Kshs.110":
                    crustPrice = 110;
                    break;
                case "Gluten-Free - Kshs. 130":
                    crustPrice = 130;
                default:
                    console.log("Select Pizza Crust");
            }

            var newOrder = new orderPizza(pizzaSize, pizzaCrust, pizzaToppings, total);

            $("#ordersplaced").append('<tr><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">' + newOrder.crust + '</td><td id="pizzatoppings">' + newOrder.topping + '</td><td id="totals">' + newOrder.total + '</td></tr>');
            console.log(newOrder);

        });

        $("#checkout").click(function() {
            $("#checkout").hide();
            $("#addPizza").hide();
            $("#deliver").slideDown(1000);
            $("#addedprice").slideDown(1000);
            console.log("Total bills is Ksh. " + checkoutTotal);
            $("#pizzatotal").append("Your bill is Ksh. " + checkoutTotal);
        });

        $("#deliver").click(function() {
            $(".checkout-table").hide();
            $(".summary h4").hide();
            $(".delivery").slideDown(1000);
            $("#addedprice").hide();
            $("#deliver").hide();
            $("#pizzatotal").hide();

            let deliveryamount = checkoutTotal + 200;
            console.log("The total amount will pay Ksh. " + deliveryamount + " on delivery");
            $("#totalbill").append("Your bill plus delivery fee is: Ksh. " + deliveryamount);
        });

        $("#final-order").click(function(event) {
            event.preventDefault();

            $("#pizzatotal").hide();
            $("#delivery").hide();
            $("#final-order").hide();

            let deliveryamount = checkoutTotal + 200;
            console.log("Final Bill is: " + deliveryamount);

            let person = $("#name").val();
            let phone = $("#phone").val();
            let location = $("#location").val();

            if ($("#name").val() && $("#phone").val() && $("#location").val() != "") {
                $(".delivery").hide();
                $("#finalmessage").append(person + ", We have recieved your order and it will be delivered to you at " + location + " for Ksh. " + deliveryamount + ". You will pay on delivery.");
                $("#totalbill").hide();
                $("#finalmessage").slideDown(1200);

            } else {
                alert("Please fill in the details for delivery!");
                $(".delivery").show();
                $("#final-order").show();
            }
        });
    });
})
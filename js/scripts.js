//BUSINESS LOGIC


function Pizza(toppings, size, delivery) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
  this.deliveryMethod = delivery;
  this.price = 10
}

//Pizza Prices
Pizza.prototype.setPrice = function() {

  let toppingCost = 3
  this.price += this.pizzaToppings.length * toppingCost;

if (this.pizzaSize === "Medium") {
  this.price += 0;
} else if (this.pizzaSize === "Large") {
  this.price += 4
} else if (this.pizzaSize === "WUMBO") {
  this.price += 250
}

if (this.deliveryMethod === "byFoot") {
  this.price -= 3;
} else if (this.deliveryMethod === "Boat") {
  this.price +=5;
} else if (this.deliveryMethod === "A Rock") {
  this.price +=200;
}}

Pizza.prototype.getMessage = function() {
  return "Your " + this.pizzaSize + " Krusty Krab pizza with " + this.pizzaToppings.join(", ") + " will arrive soon via " + this.deliveryMethod + "! Thanks for your order, and more importantly: Thanks for your money! Arr-ar-ar-ar-ar-ar! Your total is $ " + this.price;
}

$(document).ready(function() {
  $(".submitForm").click(function(event) {
    // get values

    let toppings = []
    if ($("#coral").is(":checked")) {
      toppings.push("coral")
    }
    if ($("#anchovies").is(":checked")) {
      toppings.push("anchovies")
    }
    if ($("#formula").is(":checked")) {
      toppings.push("the Krabby Patty secret formula")
    }

    let size = $("input[name=size]:checked").val()

    let delivery = $("input[name=delivery]:checked").val()



    // topping array, size, delivery
        // create our pizza


    let myPissa = new Pizza(toppings, size, delivery)
    // set price
    myPissa.setPrice()
    // get message
    let msg = myPissa.getMessage()
    // update UI
    $("#order").append(msg)



    });
});
// USER-INTERFACE LOGIC
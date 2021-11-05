//BUSINESS LOGIC

$(document).ready(function() {
  $("#submitForm").click(function(event) {
    function pizza([toppings], size, delivery) {
      this.pizzaToppings = toppings;
      this.pizzaSize = size;
      this.deliveryMethod = delivery;
      this.price = price;
    }
  });

//Pizza Prices
pizza.prototype.price = function() {
  if (this.pizzaToppings === "Anchovies") {
    this.price += 2;
  } else if (this.pizzaToppings === "Krabby Patty secret formula (discontinued)"){
    this.price += 3;
  } else (this.pizzaToppings === "Coral")
    this.price += 1;
  }

  if (this.pizzaSize === "Medium") {
    this.price += 0;
  } else if (this.pizzaSize === "Large") {
    this.price += 4
  } else (this.pizzaSize === "WUMBO")
    this.price += 250

  if (this.deliveryMethod === "byFoot") {
    this.price -= 3;
  } else if (this.deliveryMethod === "Boat") {
    this.price +=5;
  } else (this.deliveryMethod === "A Rock")
    this.price +=200;
      return "Your " + this.pizzaSize + " Krusty Krab pizza with " + this.pizzaToppings + "will arrive soon via " + this.deliveryMethod + "! Thanks for your order, and more importantly: Thanks for your money! Arr-ar-ar-ar-ar-ar! Your total is " + this.price;
  });

// USER-INTERFACE LOGIC
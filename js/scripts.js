//BUSINESS LOGIC

$(document).ready(function() {
  $("#submitForm").click(function(event) {
    function Pizza([toppings], size, delivery) {
      this.pizzaToppings = toppings;
      this.pizzaSize = size;
      this.deliveryMethod = delivery;
    }


//USER-INTERFACE LOGIC

Pizza.prototype.yourOrder = function() {
  return "Your " + this.pizzaSize + " Krusty Krab pizza with " + this.pizzaToppings + " & our secret sauce is on it's way! Thanks for your order, and more importantly; thanks for your money! Arr-ar-ar-ar-ar-ar!";
};

//Pizza Prices
Pizza.prototype.modifyCost = function() {
  if (this.pizzaToppings == "Anchovies" || this.pizzaToppings == "Krabby Patty secret formula (discontinued)" || this.pizzaToppings == "Coral") {
    this.price += 2;
  } else {
    this.price;
  }
  

  if (this.delivery == "byFoot") {
    this.price -= 3;
  } else {
    this.price;
  }

  if (this.size == "Child" || this.size === "Senior") {
    this.price -= 2;
  } else {
    this.price;
  }
  return this.price;
};


$
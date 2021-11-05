//BUSINESS LOGIC

$(document).ready(function() {
  $("#submitForm").click(function(event) {
    function Pizza([toppings], size, delivery) {
      this.pizzaToppings = toppings;
      this.pizzaSize = size;
      this.deliveryMethod = delivery;
      this.price = price;
    }


//USER-INTERFACE LOGIC

  
//Pizza Prices
Pizza.prototype.price = function() {
  if (this.pizzaToppings === "Anchovies") {
    this.price += 2;
  } else if (this.pizzaToppings === "Krabby Patty secret formula (discontinued)"){
    this.price += 3;
  } else (this.pizzaToppings === "Coral") {
    this.price += 1;

  if (this.pizzaSize === "Medium") {
    this.price += 0;
  } else if (this.pizzaSize === "Large") {
    this.price += 4
  } else (this.pizzaSize === "WUMBO") {
    this.price += 250
  }

  if (this.delivery === "byFoot") {
    this.price -= 3;
  } else if (this.delivery === "Boat") {
    this.price +=5;
  } else (this.delivery === "A Rock") {
    this.price +=200;
  }
}
$(document).ready(function() {
  $("#submitForm").click(function(event) {
    function Pizza([toppings], size, delivery) {
      this.pizzaToppings = toppings;
      this.pizzaSize = size;
      this.deliveryMethod = delivery;
    }

Pizza.prototype.yourOrder = function() {
  return "Your " + this.pizzaSize + " Krusty Krab pizza with " + this.pizzaToppings + " & our secret sauce is on it's way! Thanks for your order, and more importantly; your money! Arr-ar-ar-ar-ar-ar!";
};


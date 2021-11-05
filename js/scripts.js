$(document).ready(function() {
  $("#submitForm").click(function(event) {
    function myPizza([toppings], size) {
      this.toppings = toppings;
      this.size = size;
    }
    
    myPizza.prototype.pizzaOrder = function() {
      return "You've ordered a " + this.size + " pizza with " + this.toppings;
    };

    myPizza.prototype.cost = function(){}
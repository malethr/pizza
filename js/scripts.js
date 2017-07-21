// Business Logic
var sumOfToppings = 0;

var addToppings = function() {
  sumOfToppings += parseInt($(this).val());
  return sumOfToppings;
}

var checkSize = function (size) {
  if (size === 13) {
    sumOfToppings = 1.5 * sumOfToppings
  } else if (size === 11) {
    sumOfToppings = 1.25 * sumOfToppings
  } else {
    sumOfToppings = sumOfToppings
  }
  return sumOfToppings
}

function Order (crust, size, toppings) {
  this.pizzaCrust = crust;
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}

Order.prototype.getPrice = function () {
  return this.pizzaCrust + this.pizzaSize + this.pizzaToppings;
}

// UI Logic
$(document).ready(function(){
  $(".pizza-form").submit(function(event){
    event.preventDefault();
    var inputCrust = parseInt($("select#pizza-crust").val());
    var inputSize = parseInt($("select#pizza-size").val());
    $("input:checkbox[name=pizza-toppings]:checked").each(addToppings);
    var inputToppings = checkSize(inputSize);
    console.log(inputSize);
    console.log(inputCrust);
    console.log(inputToppings);

    var newOrder = new Order(inputCrust, inputSize, inputToppings);

    var price = (newOrder.getPrice()).toFixed(2);
    console.log(price);
  });
});

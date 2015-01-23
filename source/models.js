function Item(name, price) {
  this.name = name;
  this.price = price;
};

function List() {
  this.items = [];
  this.totalPrice;
};

List.prototype = {
  addItem: function() {
    //add item to List.items collection
  },
  calculateTotal = function () {
    //iterates through array and adds up each items price
  }
};
